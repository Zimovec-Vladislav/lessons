const myArray = [523, 532, 888, 777]
const myArrayObjects = [
    {firstName: 'Vladislav',
     lastName: 'Zimovec',
     age: 26},
    {city: 'Sevastopol',
     tel: '+7(978) 776-29-43',
     email: 'boss.zimovet@gmail.com'}
]

const getMyArray = (num1) => {
    return myArray[num1]
}

const getMyArrayObjects = (num2) => {
    return myArrayObjects[num2]
}

export { getMyArray, getMyArrayObjects}