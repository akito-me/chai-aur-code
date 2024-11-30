let myname = "tadvab      "
let mypr = "me      "

console.log(myname.trim().length)


let myheros = ["thor","spiderman"]
let heropower = {
    thor:"electric",
    spiderman:"web",

getspiderPower : function(){
    console.log(`i am everywhere ${this.spiderman}`);
}
}
Object.prototype.tadvab = function(){
    console.log(`tadvab is present in all objects`);
}

Array.prototype.heytadvab = function(){
    console.log(`tadvab says hello`);
}
// heropower.tadvab()
myheros.tadvab()
myheros.heytadvab()


// inheritance

const user = {
    name: "you",
    email: "tadvab@google.com"
}

const teacher = {
    makeVidio:true
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}
teacher.__proto__ = user


//modern

Object.setPrototypeOf(TeachingSupport,teacher)

let anotherUsername = "ChaiAurCode     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}
anotherUsername.trueLength()
    "tadvab".trueLength()
    "tea".trueLength()
