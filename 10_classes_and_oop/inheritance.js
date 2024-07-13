class User{

    constructor(username)
    {
        this.username=username;
    }
    logme(){
        console.log(`Username is ${this.username}`)
    }
}

class Teacher extends User{
    constructor(username,email,password)
    {
        super(username)
        this.email=email
        this.password=password
    }

    addCourse()
    {
        console.log(`A new course was added by ${this.username}`);
    }
}

const chai=new Teacher("chai","deep@gmail.com","123");
chai.addCourse();

const msaalaChai  = new User()
// msaalaChai.addCourse()
msaalaChai.logme()
console.log(chai===msaalaChai)
console.log(chai instanceof msaalaChai)