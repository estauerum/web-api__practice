const delay = function (ms) {
    return new Promise (function(resolve) {
        setTimeout(function() {
            resolve()
        }, ms)
    })
}

const url = 'https://jsonplaceholder.typicode.com/todos/1'

// function fetchTodods() {
//     console.log('fetch todo started')
//     return delay(2000)
//     .then(() => { fetch(url)
//     })
//     .then(response => response.json())
// }


// fetchTodods()
//     .then(data => {
//      console.log(data)
// })
//     .catch(e => { console.log(e)})

async function fetchAcyncTodos () {
    console.log('fetch todo started...')
    try {
        await delay(2000)
        const response = await fetch(url)
        const data = await response.json()
         console.log(data)
    } catch(e) {
        console.log(e)
    }
}

fetchAcyncTodos()