#include <bits/stdc++.h>
using namespace std;
int main()
{
    int n;
    // vector<vector<int>>vec(2,vector<int>(k+1,0));
    cin>>n;
    priority_queue<pair<int,pair<int,int>>>pq;
    for(int i=0;i<n;i++)
    {
        int a,b,c;
        cin>>a>>b>>c;
      pq.push({a,{b,c}});

    }
    int k;
    cin>>k;

     vector<vector<int>>vec(2,vector<int>(k+1,0));
    int num1,num2,num3;
    auto r=pq.top();
    pq.pop();
    num1=r.first;
    for(int i=r.second.first;i<=k;i++)
    {
        vec[1][i]=r.second.second;
    }
    while(!pq.empty())
    {
        if(pq.top().first!=num1)
        {
            num1=pq.top().first;
            for(int i=0;i<=k;i++)
            {
                vec[0][i]=vec[1][i];
            }
        }
        for(int i=pq.top().second.first;i<=k;i++)
        {
            vec[1][i]=max(vec[1][i],vec[0][i-pq.top().second.first]+pq.top().second.second);
        }
pq.pop();
    }
    for(int i=0;i<=k;i++)
    cout<<vec[1][i]<<" ";
    return 0;
    // sort(vec.begin)
}

