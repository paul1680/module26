class person {
    constructor(firstname, lastnqame, salary){
        this.firstname = firstname;
        this.lastnqame = lastnqame;
        this.salary = salary;
    }
}
const hero = new person ('hero', 'balam', 29000);
console.log(hero);

//Used in Old time .. instead of class they used function.

function Person1 (firstname, lastnqame, salary){
    this.firstname = firstname;
    this.lastnqame = lastnqame;
    this.salary = salary;
}
const oldperson = new Person1('grand', 'bla bla', 12000);
console.log(oldperson);