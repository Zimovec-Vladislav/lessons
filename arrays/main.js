function compareArrays (array1, array2) {
    console.log((array1 === array2) ? true : false)
    return
}

const myArray1 = ['Glory', 'Ukraine']
const myArray2 = new Array('Glory', 'Ukraine')
const myArray3 = myArray1
const myArray4 = ['Fuck', 'Russia']

compareArrays(myArray1, myArray2)