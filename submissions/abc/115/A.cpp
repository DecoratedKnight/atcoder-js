#include <bits/stdc++.h>

using namespace std;

int main()
{
    int d;
    cin >> d;
    string s;
    if(d == 25){
        s = "Christmas";
    }else if(d == 24){
        s = "Christmas Eve";
    }else if(d == 23){
        s = "Christmas Eve Eve";
    }else if(d == 22){
        s = "Christmas Eve Eve Eve";
    }
    cout << s << endl;
    return 0;
}