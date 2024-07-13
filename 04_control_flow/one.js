// if
// if (true)
// {

// }

const isUserloggedIn = true;
if(2!=3)
{
console.log("executed");
}
 //<,>,<=,>=,==,!=,== ,!=,===,!==

 const temparature=41;
// if(temparature===41)
// {
//     console.log("less than 50");
// }
// else{
//     console.log("temparature is greater than 50");
// }
// const score= 200

// if(score>100)
// {
//     const power="fly";
//     console.log(`user power: ${power}`);
// }

// console.log(`user power: ${power}`);

//const balance =1000;
//if(balance>500) console.log("test"); // implicite scope
// if(balance < 500)
// {
//     console.log("less than 500");
// }else if(balance < 750)
// {
//     console,log("less than 500");
// }
// else if(balance < 750)
// {
//     console,log("less than 750");
// }else{
//     console,log("less than 900");
// }
const userLoggedIn=true
const debitcard = true
const loggedInFromGoogle = true
const loggedFromEmail =true
if(userLoggedIn && debitcard && 2==3)
{
    console.log("Allow to buy the course");
}

if(loggedInFromGoogle || loggedFromEmail)
{
    console.log("User logged in");
}

// Nullish Coalescing Operator (??) :null undefined
// for database use
let val1;
//val1=5 ?? 10
//val1=null ?? 10;
//val1=undefined ?? 15;
val1=null ?? 10 ?? 20;
console.log(val1);

// Ternary Operator
//consition ? true :false

const iceprace = 100;
iceprace >=80 ? console.log("less than 80") : console.log("Greater than 80");

