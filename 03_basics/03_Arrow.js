const user={
    username:"Deepanshu",
    price:999,
    welcomeMessage:function()
    {
        console.log(`${this.username} welcome to webs`);
        console.log(this);
    }
}
// this is use to refer current context
// user.welcomeMessage()
// user.username="Deep";
// user.welcomeMessage()


//console.log(this); // it will give empty object {} because has no object in global
// but if run this on browser it will be window object

// function chai()
// {
//     console.log(this);
// }
//chai();

// const chai=function()
// {
//     let username = "Deepanshu";
//     console.log(this.username);
// }
// arrow function
const chai=()=>
{
    let username = "Deepanshu";
    console.log(this.username);
    console.log(this);
}

//chai();

// const addTwo = (num1 , num2)=>{
//     return num1 + num2;
// }
// implicit return in arrow function
// const addTwo = (num1 , num2)=> (num1 + num2);
// for object
const addTwo = (num1 , num2)=> ({username:"Deepanshu"});
console.log(addTwo(3,4));

