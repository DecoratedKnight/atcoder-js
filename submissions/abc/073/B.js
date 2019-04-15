'use strict'

const main = (input) => {
    input = input.split('\n')
    const N = parseInt(input[0])
    const lr = input.slice(1, N + 1)
    let arr = []
    for(let i = 0; i <= 9999; i++){
        arr[i] = false
    }
    lr.forEach((v, i) => {
        let l = parseInt(v.split(' ')[0] - 1)
        let r = parseInt(v.split(' ')[1] - 1)
        for(let i = l; i <= r; i++){
            arr[i] = true
        }
    })

    console.log(arr.filter(v => v === true).length)
}

main(require('fs').readFileSync('/dev/stdin', 'utf-8'))