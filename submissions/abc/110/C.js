'use strict'

const count = arr => {
    let Obj = {}
    arr.forEach((v, i) => {
        if(Obj[v] === undefined){
            Obj[v] = []
        }
        Obj[v].push(i)
    })
    return Obj
}

const del = obj => {
    let arr = []
    for(let k in obj){
        if(obj[k].length === 1){
            delete obj[k]
        }else{
            arr.push(obj[k])
        }
    }
    return arr
}

const main = (input) => {
    const s = input.split('\n')[0].split('')
    const t = input.split('\n')[1].split('')

    const sObj = del(count(s))
    const tObj = del(count(t))

    if(JSON.stringify(sObj) === JSON.stringify(tObj)){
        console.log('Yes')
    }else{
        console.log('No')
    }

    // if(sObj.length !== tObj.length){
    //     console.log('No')
    //     return
    // }

    // for(let i = 0; i < sObj.length; i++){
    //     for(let j = 0; j < sObj[i].length; j++){
    //         if(sObj[i][j] !== tObj[i][j]){
    //             console.log('No')
    //             break
    //         }
    //     }
    // }

}

main(require('fs').readFileSync('/dev/stdin', 'utf-8'))