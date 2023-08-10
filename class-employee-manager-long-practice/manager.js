const Employee = require('./employee');

class Manager extends Employee{
    constructor(name, salary, title, manager, employees = []){
        super(name, salary, title, manager);
        this.employees = employees;
    }

    addEmployee(employee){
        this.employees.push(employee);
    }

    _totalSubSalary(){
        let sum = 0;
        for(let employee of this.employees){
            if(employee instanceof Manager){
                sum += employee.salary;
                sum += employee._totalSubSalary();
            }else if(employee instanceof Employee){
                sum += employee.salary;
            }
        } 
        return sum;
    }

    calculateBonus(multiplier){
        return (this.salary + this._totalSubSalary()) * (multiplier);
    }
}

const splinter = new Manager('Splinter', 100000, 'Sensai');
// console.log('Before: ', splinter);

const leo = new Manager('Leonardo', 90000, 'Ninja', splinter);
const mikey = new Employee('Michelangelo', 90000, 'Ninja', leo);
// const donnie = new Employee('Donatello', 90000, 'Ninja', splinter);
// const raph = new Employee('Raphael', 90000, 'Ninja', splinter);

// splinter.addEmployee(leo);
// splinter.addEmployee(mikey);
// splinter.addEmployee(donnie);
// splinter.addEmployee(raph);

console.log('After: ', splinter.calculateBonus(0.05));


try{
    module.exports = Manager;
}catch{
    module.exports = null;
}