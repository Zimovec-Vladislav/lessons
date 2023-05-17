const myObject = {
    x: 10,
    y: true,
    z: 'abc'
}
let i = 0
for (const key in myObject) {
    console.log(key, myObject[key])
}