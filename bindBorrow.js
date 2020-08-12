const n = {
    fname: 'Sudipta',
    lname: 'Paul',
    salary: 12000,
    fullName: function(){
        this.fname + this.lname;
    },
    chargeBill: function(amount){
        console.log(this);
        this.salary = this.salary- amount;
        return this.salary;
    }
    
}
const hero = {
    fname : 'Hero',
    lname: 'balan',
    salary : 23000,
}

const person = {
    fname :'hero',
    lname : 'Gazi',
    salary : 13000,
}
const heroBill = n.chargeBill.bind(hero);
heroBill(2000);
heroBill(3000);
console.log(hero.salary);
console.log(n.salary);

const personbill = n.chargeBill.bind(person);
personbill(14000);
console.log(person.salary);