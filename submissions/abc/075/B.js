'use strict'

const main = (input) => {
    input = input.split('\n')
    const H = parseInt(input[0].split(' ')[0])
    const W = parseInt(input[0].split(' ')[1])
    let S = input.slice(1, H + 1).map(v => v.split('').map(i => {
        if(i === '.'){
            return 0
        }else{
            return '#'
        }
    }))

    for(let i = 0; i < H; i++){
        for(let j = 0; j < W; j++){
            if(S[i][j] === '#'){
                if(typeof S[i - 1] !== 'undefined' && typeof S[i - 1][j - 1] !== 'undefined' && S[i - 1][j - 1] !== '#') S[i - 1][j - 1]++
                if(typeof S[i - 1] !== 'undefined' && typeof S[i - 1][j] !== 'undefined'  && S[i - 1][j] !== '#') S[i - 1][j]++
                if(typeof S[i - 1] !== 'undefined' && typeof S[i - 1][j + 1] !== 'undefined'  && S[i - 1][j + 1] !== '#') S[i - 1][j + 1]++
                if(typeof S[i] !== 'undefined' && typeof S[i][j - 1] !== 'undefined'  && S[i][j - 1] !== '#') S[i][j - 1]++
                if(typeof S[i] !== 'undefined' && typeof S[i][j + 1] !== 'undefined'  && S[i][j + 1] !== '#') S[i][j + 1]++
                if(typeof S[i + 1] !== 'undefined' && typeof S[i + 1][j - 1] !== 'undefined'  && S[i + 1][j - 1] !== '#') S[i + 1][j - 1]++
                if(typeof S[i + 1] !== 'undefined' && typeof S[i + 1][j] !== 'undefined'  && S[i + 1][j] !== '#') S[i + 1][j]++
                if(typeof S[i + 1] !== 'undefined' && typeof S[i + 1][j + 1] !== 'undefined'  && S[i + 1][j + 1] !== '#') S[i + 1][j + 1]++
            }
        }
    }
    S.forEach((v, i) => {
        console.log(v.map(v => v.toString()).join(''))
    })
}

main(require('fs').readFileSync('/dev/stdin', 'utf-8'))