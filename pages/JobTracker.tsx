import { useState, useEffect } from "react";
import TopNavBar from "../components/TopNavBar";
import SideBar from "../components/SideBar";
import Footer from "../components/Footer";
import dayjs, { Dayjs } from "dayjs";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import {
  Box,
  Stack,
  Typography,
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogTitle,
  DialogContent,
  InputLabel,
  Select,
  MenuItem,
  Input,
  SelectChangeEvent,
} from "@mui/material";

import {
  FormBox,
  FormDivs,
  HeaderBox,
  JobContainer,
  JobText,
  MainContainer,
  StatContainer,
  StyledButton,
  StyledJobTextField,
  StyledSelect,
  StyledStack,
  StyledStats,
  StyledStatsCount,
  StyledTextField,
  StyledTitle,
} from "../styles/StyledComponents/JobTrackedCSS";

const JobTracker = () => {
  const [jobList, setJobList] = useState([]);
  const [dateValue, setDateValue] = useState<Dayjs | null>(dayjs());
  const [formData, setFormData] = useState({
    id: "",
    companyName: "",
    position: "",
    package: "",
    missingSkills: "",
    jobStatus: "",
    date: "",
    notes: "",
  });
  const [updateJobList, setUpdateJobList] = useState(false);
  const [jobStatusCount, setJobStatusCount] = useState({
    applied: 0,
    oaGiven: 0,
    interview: 0,
    offer: 0,
    rejected: 0,
  });
  const [editPress, setEditPress] = useState(false);
  require("typeface-poppins");

  const handleAddJobSubmit = () => {
    if (localStorage.getItem("jobData") === null) {
      localStorage.setItem("jobData", JSON.stringify([]));
    }
    let jobData = JSON.parse(localStorage.getItem("jobData") || "[]");
    formData.id = dayjs().format("HHmmss");
    dateValue !== null && (formData.date = dateValue.format("DD/MM/YYYY"));
    console.log(formData);
    jobData.push(formData);
    jobData.sort((a: any, b: any) => {
      return a.date - b.date;
    });

    localStorage.setItem("jobData", JSON.stringify(jobData));
    setFormData({
      id: "",
      companyName: "",
      position: "",
      package: "",
      missingSkills: "",
      jobStatus: "",
      date: "",
      notes: "",
    });
    setUpdateJobList(!updateJobList);
  };

  useEffect(() => {
    if (localStorage.getItem("jobData") !== null) {
      let jobData = JSON.parse(localStorage.getItem("jobData") || "[]");
      setJobList(jobData);
    }
  }, [updateJobList]);

  useEffect(() => {
    let jobData = JSON.parse(localStorage.getItem("jobData") || "[]");
    let applied = 0;
    let oaGiven = 0;
    let interview = 0;
    let offer = 0;
    let rejected = 0;
    jobData.forEach((job: any) => {
      if (job.jobStatus === "Applied") {
        applied++;
      } else if (job.jobStatus === "OA Given") {
        oaGiven++;
      } else if (job.jobStatus === "Interview") {
        interview++;
      } else if (job.jobStatus === "Offer") {
        offer++;
      } else if (job.jobStatus === "Rejected") {
        rejected++;
      }
    });
    setJobStatusCount({
      applied: applied,
      oaGiven: oaGiven,
      interview: interview,
      offer: offer,
      rejected: rejected,
    });
  }, [updateJobList]);

  const handleJobDelete = (id: string) => {
    let jobData = JSON.parse(localStorage.getItem("jobData") || "[]");
    jobData = jobData.filter((job: any) => job.id !== id);
    localStorage.setItem("jobData", JSON.stringify(jobData));
    setUpdateJobList(!updateJobList);
  };

  const handleJobEditDialog = (id: string) => {
    let jobData = JSON.parse(localStorage.getItem("jobData") || "[]");
    jobData = jobData.filter((job: any) => job.id === id);
    setFormData(jobData[0]);
    setEditPress(true);
  };

  const handleJobEdit = (id: string, newStatus: string) => {
    let jobData = JSON.parse(localStorage.getItem("jobData") || "[]");
    let objIndex = jobData.findIndex((obj: any) => obj.id == id);
    jobData[objIndex].jobStatus = newStatus;
    localStorage.setItem("jobData", JSON.stringify(jobData));
    setUpdateJobList(!updateJobList);
  };

  return (
    <>
      <TopNavBar />
      <SideBar />
      <MainContainer>
        <Box
          sx={{
            backgroundColor: "#F5F5F5",
            padding: "1rem",
            marginTop: "1rem",
            borderRadius: "1rem",
            height: "100%",
          }}
        >
          <HeaderBox>
            <StyledTitle variant="h2">Job Tracker</StyledTitle>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
              }}
            >
              <StyledStats
                variant="h2"
                sx={{
                  fontSize: "3rem",
                }}
              >
                Stats:
              </StyledStats>
              <StatContainer>
                <StyledStats>Applied: </StyledStats>
                <StyledStatsCount>{jobList.length}</StyledStatsCount>
              </StatContainer>
              <StatContainer>
                <StyledStats>OAs Given: </StyledStats>
                <StyledStatsCount>{jobStatusCount.oaGiven}</StyledStatsCount>
              </StatContainer>
              <StatContainer>
                <StyledStats>Interviews: </StyledStats>
                <StyledStatsCount>{jobStatusCount.interview}</StyledStatsCount>
              </StatContainer>
              <StatContainer>
                <StyledStats>Offers: </StyledStats>
                <StyledStatsCount>{jobStatusCount.offer}</StyledStatsCount>
              </StatContainer>
              <StatContainer>
                <StyledStats>Rejected: </StyledStats>
                <StyledStatsCount>{jobStatusCount.rejected}</StyledStatsCount>
              </StatContainer>
            </Box>
          </HeaderBox>

          <FormBox>
            <FormDivs>
              <StyledTextField
                value={formData.companyName}
                label="Company Name"
                onChange={(event) => {
                  setFormData({
                    ...formData,
                    companyName: event.target.value,
                  });
                }}
              />
              <StyledTextField
                label="Position"
                value={formData.position}
                onChange={(event) => {
                  setFormData({
                    ...formData,
                    position: event.target.value,
                  });
                }}
              />
              <StyledTextField
                label="Package (LPA)"
                value={formData.package}
                onChange={(event) => {
                  setFormData({
                    ...formData,
                    package: event.target.value,
                  });
                }}
              />
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  label="Date Applied"
                  inputFormat="DD/MM/YYYY"
                  value={dateValue}
                  onChange={(newValue) => {
                    setDateValue(newValue);
                  }}
                  renderInput={(params) => <StyledTextField {...params} />}
                />
              </LocalizationProvider>
            </FormDivs>
            <FormDivs>
              <StyledTextField
                label="Missing Skills"
                value={formData.missingSkills}
                onChange={(event) => {
                  setFormData({
                    ...formData,
                    missingSkills: event.target.value,
                  });
                }}
                sx={{
                  width: "76%",
                }}
              />
              <StyledTextField
                value={formData.jobStatus}
                select
                label="Status"
                onChange={(event: any) => {
                  setFormData({
                    ...formData,
                    jobStatus: event.target.value,
                  });
                }}
                sx={{
                  width: "24%",
                }}
              >
                <MenuItem value="Applied">Applied</MenuItem>
                <MenuItem value="Rejected">Rejected</MenuItem>
                <MenuItem value="OA Given">OA Given</MenuItem>
                <MenuItem value="OA Cleared">OA Cleared</MenuItem>
                <MenuItem value="Interview Given">Interview Given</MenuItem>
                <MenuItem value="Interview Cleared">Interview Cleared</MenuItem>
                <MenuItem value="Job Offered">Offer Extended</MenuItem>
                <MenuItem value="Offer Accepted">Offer Accepted</MenuItem>
                <MenuItem value="Offer Rejected">Offer Rejected</MenuItem>
              </StyledTextField>
            </FormDivs>
            <FormDivs>
              <StyledTextField
                label="Notes"
                value={formData.notes}
                onChange={(event) => {
                  setFormData({
                    ...formData,
                    notes: event.target.value,
                  });
                }}
              />
              <StyledButton
                variant="contained"
                onClick={() => handleAddJobSubmit()}
                sx={{
                  width: "10rem",
                  backgroundColor: "white",
                  color: "#355070",
                  "&:hover": {
                    backgroundColor: "#EAAC8B",
                    color: "white",
                  },
                }}
              >
                <Typography
                  sx={{
                    fontWeight: "900",
                    fontSize: "1.6rem",
                    fontFamily: "Kollektif",
                  }}
                >
                  Add Job
                </Typography>
              </StyledButton>
            </FormDivs>
          </FormBox>
          <StyledStack>
            {jobList.map((job: any) => {
              return (
                <JobContainer>
                  <JobText
                    variant="h5"
                    sx={{
                      // border: "1px solid #000",
                      width: "15%",
                      fontWeight: "500",
                      marginLeft: "0.3rem",
                    }}
                  >
                    {job.companyName}
                  </JobText>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      width: "10%",
                      // border: "1px solid #000",
                    }}
                  >
                    <JobText variant="h6">{job.position}</JobText>
                    <JobText variant="h6">{job.package} LPA</JobText>
                  </Box>
                  <JobText
                    variant="h6"
                    sx={{
                      // border: "1px solid #000",
                      width: "30%",
                    }}
                  >
                    {job.missingSkills}
                  </JobText>
                  <JobText
                    variant="h6"
                    sx={{
                      // border: "1px solid #000",
                      width: "10%",
                    }}
                  >
                    {job.date}
                  </JobText>
                  <JobText
                    variant="h6"
                    sx={{
                      // border: "1px solid #000",
                      width: "13%",
                    }}
                  >
                    {job.notes}
                  </JobText>
                  <StyledJobTextField
                    value={job.jobStatus}
                    select
                    label="Status"
                    onChange={(event: any) => {
                      handleJobEdit(job.id, event.target.value);
                    }}
                    sx={{
                      // border: "1px solid #000",
                      width: "12%",
                    }}
                  >
                    <MenuItem value="Applied">Applied</MenuItem>
                    <MenuItem value="Rejected">Rejected</MenuItem>
                    <MenuItem value="OA Given">OA Given</MenuItem>
                    <MenuItem value="OA Cleared">OA Cleared</MenuItem>
                    <MenuItem value="Interview Given">Interview Given</MenuItem>
                    <MenuItem value="Interview Cleared">
                      Interview Cleared
                    </MenuItem>
                    <MenuItem value="Job Offered">Offer Extended</MenuItem>
                    <MenuItem value="Offer Accepted">Offer Accepted</MenuItem>
                    <MenuItem value="Offer Rejected">Offer Rejected</MenuItem>
                  </StyledJobTextField>
                  <StyledButton
                    variant="contained"
                    onClick={() => {
                      handleJobDelete(job.id);
                    }}
                    sx={{
                      width: "7%",
                      backgroundColor: "#355070",
                      color: "white",
                      "&:hover": {
                        backgroundColor: "#E56B6F",
                        color: "#355070",
                      },
                    }}
                  >
                    <Typography
                      sx={{
                        fontWeight: "600",
                        fontFamily: "Poppins",
                        fontSize: "1.2rem",
                      }}
                    >
                      Delete
                    </Typography>
                  </StyledButton>
                </JobContainer>
              );
            })}
          </StyledStack>
        </Box>
      </MainContainer>
      <Footer />
    </>
  );
};

export default JobTracker;
