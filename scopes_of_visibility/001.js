'use strict'

let a
let b

function myFn() {
    let b
    let a
    a = true
    b = 10
    console.log(a)
}

myFn()

console.log(a)
console.log(b)