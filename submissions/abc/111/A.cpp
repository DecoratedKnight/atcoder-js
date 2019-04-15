#include <bits/stdc++.h>

using namespace std;

int main()
{
    string s, ans;
    cin >> s;
    for(int i = 0; i <= 2; i++){
        if(s[i] == '1'){
            ans += '9';
        }else{
            ans += '1';
        }
    }
    cout << ans << endl;
    return 0;
}