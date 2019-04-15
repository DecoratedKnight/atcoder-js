'use strict'

const appear = arr => {
    let obj = {}
    arr.forEach(v => {
        if(obj[v] === undefined){
            obj[v] = 0
        }
        obj[v]++
    })
    return [maxObj(obj), obj]
}

const maxObj = (obj) => {
    let m = null
    let max = 0
    for(let key in obj){
        if(obj[key] > max){
            max = obj[key]
            m = key
        }
    }
    return m
}

const main = (input) => {
    const arr = input.split('\n')[1].split(' ').map(v => parseInt(v))
    const arr0 = arr.filter((v, i) => i % 2 === 0)
    const arr1 = arr.filter((v, i) => i % 2 !== 0)
    const m0d = appear(arr0)
    const m0 = m0d[0]
    const m0o = m0d[1]
    const m1d = appear(arr1)
    const m1 = m1d[0]
    const m1o = m1d[1]


    if(m0 === m1){
        // 最頻出の値をコピー
        const m0c = m0o[m0]
        const m1c = m1o[m1]

        // それぞれの最頻出を削除
        delete m0o[m0]
        delete m1o[m1]
        
        // 次に多く出てくるものの個数を取得
        const o0 = Object.keys(m0o).length === 0 ? 0 : m0o[maxObj(m0o)]
        const o1 = Object.keys(m1o).length === 0 ? 0 : m1o[maxObj(m1o)]

        // arr0は最頻出、arr1は次頻出を増やすパターンと
        // arr0は次頻出、arr1は最頻出を増やすパターンがある
        if(m0c + o1 > m1c + o0){
            console.log(arr.length - (m0c + o1))
        }else{
            console.log(arr.length - (m1c + o0))
        }
    }else{
        // 最頻出が同じでないとき
        console.log(arr.length - m0o[m0] - m1o[m1])
    }
}

main(require('fs').readFileSync('/dev/stdin', 'utf-8'))