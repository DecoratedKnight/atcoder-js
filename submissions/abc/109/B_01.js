'use strict'

const main = (input) => {
    input = input.split('\n')
    const words = input.slice(1, parseInt(input[0]) + 1)

    //重複チェック
    for(let i = 0; i <= words.length; i++){
        for(let j = i + 1; j <= words.length; j++){
            if(words[i] === words[j]){
                console.log('No')
                return
            }
        }
    }
    
    for(let i = 0; i < words.length - 1; i++){
        if(words[i].slice(-1) !== words[i+1].slice(0, 1)){
            console.log('No')
            return 
        }
    }
    console.log('Yes')
}

main(require('fs').readFileSync('/dev/stdin', 'utf-8'))