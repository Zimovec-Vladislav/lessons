const myArray = [1, 2, 3, 11]
console.log(myArray)

const newArray = myArray.map(function (el) {
    if (el > 2) {
        return el*10
    } else return el
})

console.log(newArray)
console.log(myArray)