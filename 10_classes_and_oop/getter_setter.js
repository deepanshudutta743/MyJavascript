class User{

    constructor(email,password)
    {
        this.email=email;
        this.password=password;
    }
    get email()
    {
   return this.email_.toUpperCase();
    }
    set email(email)
    {
      this.email_=email;
    }
    get password()
    {
        return this._password.toUpperCase()
    }
    set password(value)
    {
    this._password=value;
    }
}

const hitesh=new User("deepanshu@gmail.com","123")
console.log(hitesh.password);
console.log(hitesh.email);