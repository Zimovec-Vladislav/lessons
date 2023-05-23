class NumberArray extends Array {
    sum() {
        return this.reduce((el, acc) => acc + el)
    }
}

const myArray = new NumberArray(2324, 645, 999)

console.log(myArray.sum())