'use strict'

const main = (input) => {
    let tasks = input.split('\n')[0].split(' ').map(i => parseInt(i))
    const ans = Math.max(...tasks) - Math.min(...tasks)
    console.log(ans)
}

main(require('fs').readFileSync('/dev/stdin', 'utf-8'))