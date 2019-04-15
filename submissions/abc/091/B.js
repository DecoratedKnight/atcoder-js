'use strict'

const count = (item, array) => {
    let rec = 0
    for(let val of array){
        if(val === item){
            rec++
        }
    }
    return rec
}

const main = (input) => {
    input = input.split('\n')
    const N = parseInt(input[0])
    const Ns = input.slice(1, N + 1)
    const M = parseInt(input[N + 1])
    const Ms = input.slice(N + 2, N + M + 2)

    let earn = 0
    Ns.forEach(v => {
        let Nhas = count(v, Ns)
        let Mhas = count(v, Ms)
        let diff = Nhas - Mhas
        if(diff > earn) {
            earn = diff
        }
    })
    console.log(earn)
}

main(require('fs').readFileSync('/dev/stdin', 'utf-8'))