import * as fs from 'fs'
import "@babel/polyfill"
// import bigInt from 'big-integer'

const main = (input) => {
  const [A, B, T] = input.split(' ').map(v => Number(v))
  const minute = Math.floor(T / A)
  console.log(B * minute)
}

main(fs.readFileSync('/dev/stdin', 'utf8'))
