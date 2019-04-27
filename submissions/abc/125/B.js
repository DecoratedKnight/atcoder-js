import * as fs from 'fs'
import "@babel/polyfill"
// import bigInt from 'big-integer'

const main = (input) => {
  let [N, V, C] = input.split('\n')
  const nums = Number(N)
  let values = V.split(' ').map(v => Number(v))
  let costs = C.split(' ').map(v => Number(v))

  let ans = 0
  for (let i = 0; i < values.length; i++) {
    const num = values[i] - costs[i]
    if (num > 0) ans += num
  }
  console.log(ans)
}

main(fs.readFileSync('/dev/stdin', 'utf8'))
