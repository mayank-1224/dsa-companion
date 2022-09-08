#pragma GCC optimize("Ofast")
#pragma GCC target("sse,sse2,sse3,ssse3,sse4,popcnt,abm,mmx,avx,avx2,fma")
#pragma GCC optimize("unroll-loops")
#include <bits/stdc++.h>
 
#define fast_cin() ios_base::sync_with_stdio(false); cin.tie(NULL); cout.tie(NULL)
#define forn(i,e) for(ll i = 0; i < e; i++)
#define inarr(arr) ll n; cin>>n;ll arr[n];for(ll i=0;i<n;i++) cin>>arr[i];
typedef long long ll;
#define prntarr(arr,n) for(ll i=0;i<n;i++) cout<<arr[i]<<endl;
#define ln "\n"
 
using namespace std;
 
int main()
{
    fast_cin();
    ll n;
    cin >> n;
    ll arr[n];
    forn(i,n)
    {
        cin >> arr[i];
    }
    ll ans = 0;
    forn(i,n)
    {
        ll j = i;
        while(j < n && arr[j] == arr[i])
        {
            j++;
        }
        ans = max(ans,j-i);
        i = j-1;
    }
    cout << ans << ln;
    return 0;
}