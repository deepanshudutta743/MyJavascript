
function sayName()
{
    console.log("Deepanshu");
}
sayName();

function addTwoNumbers(number1,number2) // paraemters
{
//   console.log(number1+number2);
const result = number1  +number2;
return result;
}
const result=addTwoNumbers(1,3); // arguments
// console.log(result);

function loginUserMessage(username="Deep")
{
    if(username=== undefined)
    {
        console.log("Please enter a user name");
        return;
    }
    return `${username} just loggedin`;
}
// console.log(loginUserMessage());

// example of cart

// ... is called spread operator and rest operator depend on use case
function calculateCartPrice(val1,val2,...num1)
{
  return num1;
}
// console.log(calculateCartPrice(200,400,500,1000));

const user ={
    username:"Deepanshu",
    price:199
};

function handleObject(anyobject){

    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}
// handleObject(user);
handleObject({
    username:"Deep",
    price:199
});

const myNewArray = [200,400,100,600];

function returnSecondValue(getArray)
{
    return getArray[0];
}
console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,400,500,1000]));
