class Department {
    // we can remove belo 2 statements and directtly declare and initialise in constructor
    // private id: string;
    // name: string;
    private employees: string[]  = [];

    constructor(private readonly id: string, public name: string) { //here we have to eplicitly mention whether it is public/private as we are declaring and initialisng in one go.
        // this.name = name;
        // this.id = id
    }

    describe(this: Department) {
        console.log("department: " + this.name, this.id)
    }

    addEmployee(employee: string) {
        this.employees.push(employee)
    }

    printEmployee() {
        console.log(this.employees.length, this.employees)
    }
}

const obj  = new Department('24','Accounting'); // create department object
obj.describe(); 
obj.addEmployee('Sindhu');
obj.printEmployee();
obj.name = 'Name can be chaned ith dot notation like this as it is public and can be accessed outside the class'
console.log(obj);
obj.describe();


// console.log(obj)

// const copyObj  = {describe: obj.describe}
// copyObj.describe(); these 2 lines tho error as describe takes the type of Department class, adding all the properties will work fine as  it is similar to Department class