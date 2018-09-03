class User{
    constructor(firstname, lastname , credit){
        this.firstname = firstname;
        this.lastname = lastname;
        this.credit = credit;
    }

    getFullName() {
        let fullname = `${this.firstname} ${this.lastname} is my full name`;
        return fullname;
    }
}

const john  = new User('John','Anderson',34)
const sammy = new User();

console.log(john.getFullName())