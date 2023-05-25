import getData from './utilus.mjs'

getData('https://jsonplaceholder.typicode.com/todos/34')
    .then(data => console.log(data))
    .catch(error => console.log(error.message))

getData('https://jsonplaceholder.typicode.com/todos/200')
    .then(data => console.log(data))
    .catch(error => console.log(error.message))

getData('https://jsonplaceholder.typicode.com/todos/99')
    .then(data => console.log(data))
    .catch(error => console.log(error.message))

getData('https://jsonplaceholder.typicode.com/todos/54')
    .then(data => console.log(data))
    .catch(error => console.log(error.message))