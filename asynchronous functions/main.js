// const getData = (url) =>
//     new Promise((resolve, reject) =>
//         fetch(url)
//             .then(response => response.json())
//             .then(json => resolve(json))
//             .catch(error => reject(error))
//         )

const getData = async (url) => {
    const res = await fetch(url)
    const json = await res.json()
    return json
}

// getData('https://jsonplaceholder.typicode.com/todos/1')
//     .then(data => console.log(data))
//     .catch(error => console.log(error.message))

const url = 'https://jsonplaceholder.typicode.com/todos/1'

// const data = await getData(url)

try {
    const data = await getData(url)
    console.log(data)
} catch (error) {
    console.log(error.message)
}