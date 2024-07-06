#include <stdio.h>
#include <bits/stdc++.h>
using namespace std;
int bfs(int index,vector<int>&nums,vector<int>&visited,int count){
    if(visited[index]==0)
    return count;
    visited[index]=0;
    return bfs(nums[index]-1,nums,visited,count+1);
}
int main()
{
    vector<int>vec={3,1,2,5,4};
    vector<int>visited(vec.size(),1);
    vector<int>ans;
    for(int i=0;i<vec.size();i++)
    {
        
        if(visited[i]!=0)
        {
            // cout<<i<<endl;
            int a=bfs(i,vec,visited,0);
            cout<<a<<endl;
            ans.push_back(a);
        }
    }
    int x=1;
    for(int i=0;i<ans.size();i++)
    {
        x=lcm(x,ans[i]);
    }
    cout<<x<<endl;
    return 0;
}
