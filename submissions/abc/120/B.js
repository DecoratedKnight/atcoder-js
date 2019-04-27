'use strict'

const inArray = (needle, haystack) => haystack.some(item => item === needle)

const div = (num) => {
    let res = []
    for(let i = 1; i <= num; i++){
        if(num % i === 0){
            res.push(i)
        }
    }
    return res
}

const ans = (div1, div2) => {
    let res = []

    div1.forEach(v => {
        if (inArray(v, div1) && inArray(v, div2)) {
            res.push(v)
        }
    })
    return res
}

const main = (input) => {
    input = input.split(' ').map(v => Number(v))
    const a = input[0]
    const b = input[1]
    const k = input[2]

    const aDiv = div(a)
    const bDiv = div(b)

    const answer = ans(aDiv, bDiv)
    console.log(answer.reverse()[k - 1])
}

main(require('fs').readFileSync('/dev/stdin', 'utf-8'))
