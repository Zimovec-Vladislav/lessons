const timerFunction = () =>
    new Promise ((resolve, reject) => 
    setTimeout(() => resolve(), 1000))

const asyncFn = async () => {
    console.log('Timer starts')
    const timeStart = performance.now()
    await timerFunction()
    const timeEnd = performance.now()
    console.log('Timer ended', timeEnd - timeStart)
}

asyncFn()