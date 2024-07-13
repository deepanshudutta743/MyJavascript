// let myName="Deepanshu   "

// console.log(myName.trim().length);


let myHeros=["thor","spiderman"]

let heroPower={
thor:"hammer",
spiedrman:"sling",
getSpiderPower:function()
{
    //console.log(`spidy power is ${this.spiedrman}`);
}

}
Object.prototype.deep=function(){
    //console.log(`i am deep i have coding super power`);
}
heroPower.deep(); 
myHeros.deep();
// i acssed top level hiararcky and add properties
// so function,array,string everyone will have the same power

Array.prototype.akku=function(){
    console.log(`Akku how are you?`);
}
// heroPower.akku(); 
// myHeros.akku();

// Inheritance

const user={
    name:"Chai",
    email:"deep@gmail.com"
    
}

const Teacher={

    makevideo:true,
    __proto__:user
}
const TeachingSupport={
    isAvailable:false,
    __proto__:Teacher
}

const TASupport={
    makeAssignment:'JS assignment',
    fullTime:true,
    __proto__:TeachingSupport
}

// Teacher.__proto__=user

// Modern syntax
Object.setPrototypeOf(TeachingSupport,Teacher);

// console.log(TASupport.name)


let anotherUsrname="Chiourcode   "

String.prototype.truelength=function(){
    console.log(`${this}`);
    // console.log(`${this.name}`);
    console.log(`True length is ${this.trim().length}`);
}
anotherUsrname.truelength();
"Deepanshu".truelength()
"icecube".truelength()