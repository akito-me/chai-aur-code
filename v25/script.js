function one(){
    console.log("me")
    two()
}
function two(){
    console.log("you")
    three()
}
function three(){
    console.log("us")
}

one()
two()
three()