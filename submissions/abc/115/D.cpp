#include <bits/stdc++.h>

using namespace std;

static string dparr[50];

string burger(int n)
{
    if(n == 0){
        return "P";
    }
    if(dparr[n] != ""){
        return dparr[n];
    }
    return dparr[n] = "B" + burger(n - 1) + "P" + burger(n - 1) + "B";
}

int main()
{
    int N, X;
    cin >> N >> X;
    cout << burger(N) << endl;
    return 0;
}