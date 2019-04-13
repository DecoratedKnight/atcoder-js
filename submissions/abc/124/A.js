import * as fs from 'fs'
import "@babel/polyfill";

const main = (input) => {
  let [a, b] = input.split('\n')[0].split(' ').map(x => Number(x))
  let ans = 0
  for (let i = 0; i < 2; i++) {
    if (a > b) {
      ans += a
      a--
    } else {
      ans += b
      b--
    }
  }
  console.log(ans)
}

main(fs.readFileSync('/dev/stdin', 'utf8'))
