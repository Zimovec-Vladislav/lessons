import { sum, mult as multNumbers } from './moduleOne.mjs'
import { getMyArray as pinCode, getMyArrayObjects as myInfo } from './moduleThree.mjs'

console.log(sum(10, 2))
console.log(multNumbers(10, 2))

console.log(pinCode(1))
console.log(myInfo(1))