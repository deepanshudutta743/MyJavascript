// array

const myArr = [0 ,1 , 2 , 3 , 4];
const myHeros=["shantimen", "naagraj"];

const myarr2=new Array(1,2,3,4,5);
// console.log(myarr2[1]);

// Array methods
myArr.push(6);
myArr.pop();
myArr.unshift(9); // it will add value in start
myArr.shift(); // it will remove the value from start
// console.log(myArr.includes(9));// it will check 9 is present or not
// console.log(myArr.indexOf(9));
// console.log(myArr);

// join
const newArr = myArr.join();
// console.log(typeof myArr);
// console.log(typeof newArr);

// slice, splice

// console.log("A" , myArr);
const myn1 = myArr.slice(1,3);

// console.log(myn1);
// console.log("B ",myArr);
// console.log("_________________________")
const myn2 = myArr.splice(1,3);
// console.log("c ",myArr);
// console.log(myn2);
// the main difference between slice and splice is that
// slice dont manipulate the actual array but the splice does that

// pert 2

const marvel_heros = ["thor","Ironman","Spiderman"];
const dc_heros= ["superman" , "flash" , "batman"];

//  marvel_heros.push(dc_heros); // it will intert the array as a element
//  console.log(marvel_heros[3][1]);


// let allHeros=marvel_heros.concat(dc_heros);
// console.log(allHeros);
// spead operator
const all_new_heros = [...marvel_heros,...dc_heros];
console.log(all_new_heros);
// flat 
const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]];
const real_another_array = another_array.flat(Infinity);
console.log(real_another_array);

//
console.log(Array.isArray("Deepanshu"))
console.log(Array.from("Deepanshu"));
console.log(Array.from({name:"Deepanshu"})); // interview intesting


let score1= 100
let score2= 200
let score3= 300

console.log(Array.of(score1,score2,score3));








