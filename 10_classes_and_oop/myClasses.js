 

 class User{
    constructor(username,email,password)
    {
        this.username=username;
        this.email=email;
        this.password=password;
    }

    encryptPassword()
    {
        return `${this.password}abc`
    }
   changeUserName()
   {
    return `${this.username.toUpperCase()}`
   }

 }

//  const chai=new User("chai","deep@gmail.com","123");
//  console.log(chai.encryptPassword());
//  console.log(chai.changeUserName());

 // behind the schene

 function user(username,email,password)
 {
    this.username=username;
    this.email=email;
    this.password=password;
 }

 user.prototype.encryptPassword=function()
 {
    return `${this.password}abc`;
 }
 user.prototype.changeUserName=function()
 {
    return `${this.username.toUpperCase()}`
 }
 const chai=new user("chai","deep@gmail.com","123");
 console.log(chai.encryptPassword());
 console.log(chai.changeUserName());