
let a=300 // here it is 
//{}// this is scope when it comes with functions or if else
// in object it is object declaration
if(true)
{ // block scope
let a=10
const b=20
var c=30
//console.log("Inner",a);
}


//console.log(a);
// console.log(b);
// console.log(c);

// after inspect in website the global scope is different from which is inside the node 

function one()
{
    const username = "Deepanshu";
    function two()
    {
        const website ="Youtube";
        //console.log(username);
    }
    //console.log(website);
    two();
}
//  a closure gives you access to an outer function's scope from an inner function
one();

if(true)
{
    const username = "Deepanshu";
    if(username==="Deepanshu")
    {
        const website =" youtube"
        //console.log(username + website);
    }
    //console.log(website);
}
//console.log(username);

// +++++++++++++++++++++++++++ Interesting +++++++++++++++++++++++
console.log(addone(5));
function addone(num)
{
    return num +1;
}

console.log(addtwo(5));
const addtwo = function(num){
     return num +2;
}
