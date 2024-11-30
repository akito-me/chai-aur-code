function Setusername(username){
    //complex DB calls
    this.username = username
    console.log("called");
}
function create(username,email,password){
    Setusername.call(this, username)
    this.email =email
    this.password = password
}

const chai = new  create("chai","tadvab@pradhan.com",2334)
console.log(chai);