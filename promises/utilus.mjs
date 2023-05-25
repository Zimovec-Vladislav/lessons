const getData = (url) => 
    new Promise((resolve, reject) =>
        fetch(url)
            .then(Response => Response.json())
            .then(json => resolve(json))
            .catch(error => reject(error)))
        
export default getData