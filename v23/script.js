const user = {
    name:"tadvab",
    price:99,


    welcomeM: function(){
        console.log(`${this.name},welcome yo`);
        console.log(this);
        
}
}
user.welcomeM()
user.name = "alex"
user.welcomeM()
console.log(this)
// function mee(){
//     let name = "tadvab"
//     console.log(this.name);
    
// }
// const mee = function(){
//     let name = "tadvab"
//     console.log(this.name);
    
// }
// const mee = ()=> {
//     let name = "tadvab"
//     console.log(this);
    
// }
// const addtwoo = (num1,num2)=>{
//     return num1 + num2
// }



// const addtwoo = (num1,num2) => (num1 + num2)


const addtwoo = (num1,num2) => ({username:"tadvab"})


console.log(addtwoo(3,4))

// const myArray = {2,5,3,7,8}

// myArray.forEach(() => ())