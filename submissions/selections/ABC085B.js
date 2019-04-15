'use strict'

const main = (input) => {
    input = input.split('\n').map(item => parseInt(item))
    const long = input.shift()
    input = input.slice(0, long) // 配列から改行などを取り除く
    const nums = [...new Set(input)] // setを配列で初期化すると重複したものは無視される ... はスプレッド演算子
    console.log(nums.length)
}

main(require('fs').readFileSync('/dev/stdin', 'utf-8'))