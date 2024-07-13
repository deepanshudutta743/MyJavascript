// Singleton
// Object.create // constructor method

// object literals
const mySym = Symbol("key1");

const JsUser = {
name:"Deepanshu",
age:18,
location:"Kolkata",
email:"deepanshu@gmail.com",
isLoggedIn: false,
[mySym]:"myKey1",
lastLoginDays:["Monday","Saturday"]
}

console.log(JsUser.email);
console.log(JsUser["email"])
console.log(JsUser[mySym])
console.log(typeof JsUser[mySym])

JsUser.email="lpp@gmail.com";
//Object.freeze(JsUser)
JsUser.email="xpp@gmail.com"
console.log(JsUser)
// add function in object
JsUser.greetings= function()
{
    console.log("Hello Akku");
}
JsUser.greetingsTwo= function()
{
    console.log(`Hi Akku how are you?, i am ${this.name}`);
}
console.log(JsUser.greetings) // it will give the reference of that function
console.log(JsUser.greetings()) // it will give the value
console.log(JsUser.greetingsTwo()) 