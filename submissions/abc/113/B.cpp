#include <bits/stdc++.h>

using namespace std;

int main()
{
    int n;
    double t, a, h;

    cin >> n >> t >> a;
    
    int p = 0;
    double near = 10000000;
    for(int i = 0; i < n; i++){
        cin >> h;
        double diff = abs(a - (t - h * 0.006));
        if(diff < near){
            near = diff;
            p = i + 1;
        }
    }

    cout << p << endl;

    return 0;
}