#include <bits/stdc++.h>

using namespace std;

int main()
{
    int N, M, X, Y;
    cin >> N >> M >> X >> Y;
    vector<int> x(N), y(M);
    for(int i = 0; i < N; i++){
        cin >> x.at(i);
    }
    for(int i = 0; i < M; i++){
        cin >> y.at(i);
    }
    int maxX = *max_element(x.begin(), x.end());
    int minY = *min_element(y.begin(), y.end());

    for(int i = X + 1; i <= Y; i++){
        if(maxX < i && i <= minY){
            cout << "No War" << endl;
            return 0;
        }
    }

    cout << "War" << endl;
    return 0;
}