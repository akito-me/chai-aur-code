const promiseone = new Promise(function (resolve,reject)
 
{

    //Do an async task
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async task is compelete');
        resolve()
    }, 1000)
    
})
promiseone.then(function(){
    console.log("Promise consumed");
})

new Promise(function(resolve,reject)
{
    setTimeout(function(){
        console.log("async takk ..");
        resolve()
    },1000)
}).then(function(){
    console.log("2 resolved")
})

const PromiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
resolve({username:"chai",email:"tadvab@pradhan"})
    },1000)
})

PromiseThree.then(function(user){
    console.log(user)

})
const Promisef = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username:"tadvab",pass:"2893"})

        }
        else{
            reject('error:worng')
        }
    },1000)
})
const username = Promisef.then((user) =>{
console.log(user );
return user.username
}).then((username)=>{
    console.log(username);

}).catch(function(error){
    console.log(error);
}).finally(()=> console.log("rejucted or resolved"))
const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "javascript", pass: "123"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
})async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

// consumePromiseFive()

// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

//getAllUsers()
fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))

// promise.all
// yes this is also available, kuch reading aap b kro