let a="tadvab"

//singleton not here 



// let
// let
// let
// let
// let
// let
//obgect literals
const mySym = Symbol("key1")
const JsUser = {
    name:"tadvab",
    "full name":"tadvab pradhan",
    [mySym]:"mykey1",
    age:19,
    location:"koraput",
    email:"tadvab@gamil.com",
    isloggedIn:false,
    lastLoginDays:["Monday", "saturday"]
}
console.log(JsUser.email)
console.log(JsUser[mySym])
console.log(JsUser["email"])
// const
// const
JsUser.email="tadvab@pradhan.com"

// Object.freeze(JsUser)
JsUser.email="tadvab@pradhan.com"

console.log(JsUser["full name"]);
console.log(JsUser);
JsUser.greeting = function(){
    console.log("hello world");
}
JsUser.greeting2 = function(){
    console.log(`hello world,${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greeting2());
console.log();
console.log();
console.log();
console.log();
console.log();
