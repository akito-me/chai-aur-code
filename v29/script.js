// forof 

// ["","",""]
// [{},{},{}].

const arr=[1,2,3,4,5]
for (const i of arr) {
    console.log(i);
    
}
const greet="hola"
for (const i of greet) {
    console.log(`${i}`);
    
}


//Maps

const map = new Map()
map.set('in',"india")
map.set('uk',"united kingdom")
map.set('fr',"France")
map.set('uk',"united kingdom")

console.log(map);
for (const [key,val] of map) {
    console.log(key,':-',val);
    
}
const myObject={
    game1:'bgmi',
    game2:'ff'
}
// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
    
// }