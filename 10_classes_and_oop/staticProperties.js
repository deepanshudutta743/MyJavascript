class User{

    constructor(username){
        this.username=username;
    }
    logMe()
    {
        console.log(`Username: ${this.username}`);
    }

   createId()// if i dont want class's object will not have access this method it should be static
    {
        return `123`;
    }
}

const hitesh = new User("Deepanhsu");
console.log(hitesh.createId())

class Teacher extends User{
constructor(username,email){
 
    super(username)
    this.email=email
}
}
const iphone=new Teacher("iphone","deep@gmail.com")
iphone.logMe()