function SetUserName(username)
{
    this.username=username;
    console.log("its called");
}

function createUser(username,email,password)
{
  SetUserName.call(this,username)
  this.email=email
  this.password=password
}
const chai = new createUser("chai","deep@gmail.com","123")
console.log(chai);
// call will send current execution context to other function