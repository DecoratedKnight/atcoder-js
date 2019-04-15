#include <bits/stdc++.h>

using namespace std;

int main()
{
    int N;
    cin >> N;
    int f = N / 100;
    int k = f * 100 + f * 10 + f;

    if(N <= k){
        cout << k << endl; 
    }else{
        cout << k + 111 << endl; 
    }
    return 0;
}