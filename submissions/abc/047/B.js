'use strict'

const main = (input) => {
    input = input.split('\n').map(v => v.split(' ').map(v => parseInt(v)))
    const w = input[0][0]
    const h = input[0][1]
    const n = input[0][2]
    const arr = input.slice(1, n + 1)

    let first = {
        x: 0,
        y: 0,
    }

    let last = {
        x: w,
        y: h,
    }

    arr.forEach(v => {
        if(v[2] === 1){
            if(first.x < v[0]){
                first.x = v[0]
            }
        }
        if(v[2] === 2){
            if(last.x > v[0]){
                last.x = v[0]
            }
        }
        if(v[2] === 3){
            if(first.y < v[1]){
                first.y = v[1]
            }
        }
        if(v[2] === 4){
            if(last.y > v[1]){
                last.y = v[1]
            }
        }
    })
    if(first.x < last.x && first.y < last.y){
        console.log((last.x - first.x) * (last.y - first.y))
    }else{
        console.log(0)
    }
}

main(require('fs').readFileSync('/dev/stdin', 'utf-8'))