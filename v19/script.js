let a="tadvab"

function sayMyName(){


console.log("h");
console.log("e");
console.log("l");
console.log("l");
console.log("o");}
// sayMyName()
// function add(num1,num2){
//     console.log(num1+num2);
    
// }
function add(num1,num2){
    // let result =num1+num2
    // return result
    // console.log("me")
    return num1+num2
}
const r = add(677,"9978")
add(677,"a")
add(677,null)
// console.log("result:",r);
function loginMassage(useraname){
    if(useraname=== undefined){//(!username)=true
        console.log("please enter name");
        return 
    }
    return`${useraname} just logged`
}

// console.log(loginMassage("tadvab"));
console.log(loginMassage());
console.log();
