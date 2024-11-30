const code = ["js", "ruby", "java", "python", "cpp"]
// code.forEach( function (val){
//     console.log(val);
// } )

// code.forEach( (item) => {
//     console.log(item);
// } )

// function printMe(item){
//     console.log(item);
// }

// code.forEach(printMe)

code.forEach( (item, index, arr)=> {
    console.log(item, index, arr);
} )

const mycode = [
    {
        langName: "javascript",
        langFileName: "js"
    },
    {
        langName: "java",
        langFileName: "java"
    },
    {
        langName: "python",
        langFileName: "py"
    },
]

mycode.forEach((item)=>{
    console.log(item.langName);
    
})