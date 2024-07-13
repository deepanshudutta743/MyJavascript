// rarelt used object based ssyntax

const User={
    _email:'deep@gmail.com',
    _password:"abc",


    get email(){
      return this._email.toUpperCase() ;
    }
,
    set email(value)
    {
    this._email=value;
    }
}


// factory function Object.create()

const tea=Object.create(User)
console.log(tea.email);
