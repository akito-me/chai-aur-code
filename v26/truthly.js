const email="me"

if (email) {
    console.log("yes");
    
} else {
    console.log("no");
    
}

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){}
// if (Email.length === 0) {
//     console.log("Array is empty");
// }


// false==0
// true
// fulse==""
// true


// Nullish Coalescing operator (??): null undefined

let val;
// val = 5 ?? 10
// val = null ?? 10
// val = undefined ?? 15
val = null ?? 10 ?? 20

//turnary operator
//condition?true false
// const iceTeaPrice = 100
// iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")