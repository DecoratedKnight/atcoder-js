const main = (input) => {
    input = input.split(' ')
    const a = parseInt(input[0])
    const b = parseInt(input[1])

    if(a * b % 2 === 0){
        console.log('Even')
    }else{
        console.log('Odd')
    }
}


main(require('fs').readFileSync('/dev/stdin', 'utf-8'))