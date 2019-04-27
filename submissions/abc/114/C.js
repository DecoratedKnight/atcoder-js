'use strict'

const dfs = (num, N) => {
    if(parseInt(num) > N){
        return 0
    }

    let ret = 1
    if(num.indexOf('7') === -1 || num.indexOf('5') === -1 || num.indexOf('3') === -1){
        ret = 0
    }else{
        for(let n of num.split('')){
            if(n !== '7' && n !== '5' && n !== '3'){
                ret = 0
                break
            }
        }
    }
    const tar = ['7', '5', '3']
    for(let i of tar ){
        if(num === ''){
            ret += dfs(i, N)
        }else{
            ret += dfs(num + i, N)
        }
    }
    return ret

}

const main = (input) => {
    const N = parseInt(input)
    console.log(dfs('', N))
}

main(require('fs').readFileSync('/dev/stdin', 'utf-8'))