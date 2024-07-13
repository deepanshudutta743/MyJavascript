// const tinderUser = new Object();// singleton object
const tinderUser={}// non singleton object

tinderUser.id="123abc";
tinderUser.name="Sammy";
tinderUser.isLoggedIn=false
// console.log(tinderUser);

const regularUser = {
    email:"some@gmail.com",
    fullname:{
        userfullname:{
           firstname:"Deepanshu",
            lastname:"Dutta"
        }
    }
}
//console.log(regularUser.fullname.userfullname);

const obj1= {1:"a", 2:"b"}
const obj2={3:"c",4:"d"};
const obj4={4:"e",5:"f"};
//const obj3={obj1,obj2};
// const obj3 = Object.assign({},obj1,obj2,obj4);
const obj3={...obj1,...obj2,...obj4}
console.log(obj3);


// in database it is actually use
const users=[
   {
    id:1,
    email:"abc@gmail.com"
   },
   {
    id:1,
    email:"abc@gmail.com"
   },
   {
    id:1,
    email:"abc@gmail.com"
   },

]

console.log(users[1].email)

console.log(tinderUser)
console.log(Object.keys(tinderUser))// all keys
console.log(Object.values(tinderUser))// all values
console.log(Object.entries(tinderUser))// all key values in a pair

console.log(tinderUser.hasOwnProperty('isLoggedIn'));// check the property is present or not


// object part 3

// Destructuring

const course={
    coursename:"Js in one video",
    price:"999",
    courseInstructor:"Deepanshu"
}

//course.courseInstructor

const {courseInstructor:instructor} = course;
console.log(instructor);

// Json
// {
//     coursename:"Js in one video",
//     price:"Free",
//     courseInstructor:"Deepanshu"
// }