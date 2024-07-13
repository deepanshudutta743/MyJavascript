const myObject={
    js:'Javascript',
    cpp:'c++',
    rb:"ruby",
    swift:"swift by app"
}
// forin loop
for (const key in myObject) {
  //console.log(myObject[key]+" "+key);
}

const programming = ['js','rb','python','java','cpp'];

for (const key in programming) {
   //console.log(programming[key]);
}

// Map
const map=new Map()
map.set('IN',"India")
map.set('USA',"United States of America");
map.set('Fr',"France")
map.set('IN',"India")

for (const key in map) {
    //console.log(key);
}// map cant be iterable like this
