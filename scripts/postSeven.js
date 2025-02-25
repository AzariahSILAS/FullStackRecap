function getUser() {
    return new Promise(function(resolve, reject){
        resolve('Azariah')
    })
}

const promise = getUser();

console.log(promise)

function promisFunc() {
    const new Promise(() => {})
}