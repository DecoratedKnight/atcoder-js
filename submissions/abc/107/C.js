'use strict'

const main = (input) => {
    input = input.split('\n')
    const N = parseInt(input[0].split(' ')[0])
    const K = parseInt(input[0].split(' ')[1])
    const arr = input[1].split(' ').map(v => parseInt(v))

    let dist = 100000000000
    // 通るべき点を調べ上げる
    for(let i = 0; i <= arr.length - K; i++){
        let left = arr[i]
        let right = arr[i + K - 1]
        // 左端からスタートするときの距離
        const a = Math.abs(left) + Math.abs(left - right)
        // 右端からスタートするときの距離
        const b = Math.abs(right) + Math.abs(right - left)
        const min = Math.min(a, b)
        if(dist > min){
            dist = min
        }
    }
    console.log(dist)
}

main(require('fs').readFileSync('/dev/stdin', 'utf-8'))