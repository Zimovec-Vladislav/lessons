const asyncFn = async () => {
    return 'Selected'
}

asyncFn()
    .then((value) => console.log(value))

const errorAsyncFn = async () => {
    throw new Error('There was an error')
}

errorAsyncFn()
    .catch(error => console.error(error.message))