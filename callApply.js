const n = {
    fname: 'Sudipta',
    lname: 'Paul',
    salary: 12000,
    fullName: function(){
        this.fname + this.lname;
    },
    chargeBill: function(amount){
        this.salary = this.salary- amount;
        return this.salary;
    }
    
}
console.log(n.lname);
n.chargeBill(120);
console.log(n.fullName);
console.log(n.salary);