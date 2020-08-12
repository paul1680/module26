const n = {
    fname: 'Sudipta',
    lname: 'Paul',
    salary: 12000,
    fullName: function(){
        this.fname + this.lname;
    },
    chargeBill: function(amount, tax, tips){
        console.log(this);
        this.salary = this.salary- amount - tax - tips;
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


// n.chargeBill.call(hero, 800, 100, 10);
// //n.chargeBill.call(hero, 200);
// console.log(hero.salary);
// n.chargeBill.call(person, 1000, 100, 40);
// console.log(person.salary);

n.chargeBill.apply(hero,[ 300, 40, 40])
n.chargeBill.apply(hero,[ 300, 40, 40])
console.log(hero.salary);