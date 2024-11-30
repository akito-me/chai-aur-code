let a="tadvab"



// const facebook = new Object()  // singlton
const facebook={}  //not singleton


facebook.id ="1234sd"
facebook.name ="ram"
facebook.isLoggedIn="false"


// console.log(facebook);
const ragularuser = {
    email:"tadvab@pradhan",
    fullname: {
        userfullname:{
            firstname:"tadvab",
            lastname:"pradhan"
        }
    }
}
console.log(ragularuser.fullname?.userfullname.firstname);
const obj1 ={1:"a", 2:"b"}
const obj2 ={3:"c", 4:"d"}
const obj4 ={5:"c", 6:"d"}
// const obj3 ={obj1,obj2}
// const obj3 = Object.assign({},obj1,obj2,obj4)
const obj3={...obj1,...obj2,...obj4}
// console.log(obj3);
const users  = [
    {
        id:1,
        email:"tadavb@pr.com"
    },
    {
        id:1,
        email:"tadavb@pr.com"
    },
    {
        id:1,
        email:"tadavb@pr.com"
    },
    {
        id:1,
        email:"tadavb@pr.com"
    },
]
users[1].id
console.log();
console.log(Object.keys(facebook));
console.log(Object.values(facebook));
console.log(Object.entries(facebook));
console.log(facebook.hasOwnProperty('isLoggedIn'));
console.log();
