import * as fs from 'fs'
import "@babel/polyfill"
// import bigInt from 'big-integer'

const gcd = (a, b) => {
  if (b === 0) return a
  return gcd(b, a % b) 
}

const main = (input) => {
  let [N, A] = input.split('\n')
  N = Number(N)
  const As = A.split(' ').map(v => Number(v))

  const Lefts = []
  const Rights = []

  Lefts[0] = 0

  for (let i = 0; i < As.length; i++) {
    Lefts[i + 1] = gcd(Lefts[i], As[i])
  }

  Rights[As.length] = 0
  for (let i = As.length - 1; i >= 0; i-- ) {
    Rights[i] = gcd(Rights[i + 1], As[i])
  }

  let ans = 1
  for (let i = 0; i < As.length; i++) {
    ans = Math.max(ans, gcd(Lefts[i], Rights[i + 1]))
  }
  console.log(ans)
}

main(fs.readFileSync('/dev/stdin', 'utf8'))
