// const user={
//     username:"Deepanshu",
//     logincount:8,
//     signedIn: true,
//     getUserDetails: function(){
//         console.log("got user details from database")
//         console.log(`username ${this.username}`)
//         console.log(this)
//     }
// }


// console.log(user.username)
// console.log(user.getUserDetails())
// console.log(this);

// constructor function
// ex:
const promiseOne = new Promise(function(resolve,reject){});
const date=new Date();
// new keyword is mainly used for creating new executional contest
// and it is called constructor function
// it always give new instance
 
function User(username,logincount,isLoggedIn)
{
  this.username=username;
  this.logincount=logincount;
  this.isLoggedIn=isLoggedIn;
  this.greeting=function(){
    console.log(`this is ${this.username}`)
  }
  return this;
}

const userOne = new User("Deepanshu",12,true)
const userTwo = new User("Deep",13,false)
// console.log(userOne)
// console.log(userTwo)
console.log(userOne.constructor)

// when we use new keyword empty object will create
// 1) create new object
//2) constructor function will call with help of new keyword
// 3) this keyword will inject
// 4) all things we will get

//Read instanceof
