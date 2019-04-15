#include <bits/stdc++.h>

using namespace std;

int main()
{
    int num = 753;
    string s;
    cin >> s;

    int cur = 1000000;
    for(int i = 0; i < s.length() - 2; i++){
        int subs = stoi(s.substr(i, 3));
        int diff = abs(num - subs);
        if(diff < cur){
            cur = diff;
        }
    }
    cout << cur << endl;
    return 0;
}