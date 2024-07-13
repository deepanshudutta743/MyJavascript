const name="Deepanshu"
const repoCount = 50
//console.log(name + repoCount + " value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('deepanshu');

console.log(gameName[0]);
console.log(gameName.length);
console.log(gameName.__proto__);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(0));
console.log(gameName.indexOf('e'));

const newString = gameName.substring(0,4);
console.log(newString)

const anotherString = gameName.slice(-9,4);
console.log(anotherString);


const newStringOne = " Deepanshu  ";
console.log(newStringOne.trim());


const url = "https://deepanshu.com/deep%20dutta";
console.log(url.replace('%20','_'));

console.log(url.includes('deep'));

const myName=new String('deepanshu-dutta-tum');
console.log(myName.split('-'));