'use strict'

const main = (input) => {
    const args = input.split('\n');
    const N = parseInt(args[0], 10);
    const nums = args.slice(1, N + 1);
    const isValid = nums.every((n) => {
        var ns = n.split(' ');
        var t = parseInt(ns[0], 10),
            x = parseInt(ns[1], 10),
            y = parseInt(ns[2], 10);
        var sum = x + y;

        return (t >= sum) && ((t % 2) === (sum % 2));
    });

    if (isValid) {
        console.log('Yes');
    } else {
        console.log('No');
    }
}

main(require('fs').readFileSync('/dev/stdin', 'utf-8'))