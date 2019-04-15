"use strict";

const main = (text) => {
    let t = text.split('')
    let ans = t.filter((item) => item === '1')
    console.log(ans.length)
}

main(require('fs').readFileSync('/dev/stdin', 'utf-8'))