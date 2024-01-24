class Employee {
    constructor(name, age, gender){
        this.name = name;
        this.age = age;
        this.gender = gender;
    }

    details(){
        return this.name + this.age + this.gender; 
    }
}

class Manager extends Employee {
    constructor(name, age, gender, salary){
        super(name, age, gender);
        this.salary = salary;
    }

    getSalary() {
        return this.salary;
    }
}

const employee1 = new Manager("michael", 25, "Male", 40000);
const employee2 = new Manager("Joy", 23, "Female", 40000);


console.log(employee1);
console.log(employee2);