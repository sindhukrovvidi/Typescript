abstract class Department {
    // we can remove belo 2 statements and directtly declare and initialise in constructor
    // private id: string;
    // name: string;
    protected employees: string[]  = [];
    static fiscalYear = 2000;

    constructor(private readonly id: string, public name: string) { //here we have to eplicitly mention whether it is public/private as we are declaring and initialisng in one go.
        // this.name = name;
        // this.id = id
    }

    describe(this: Department) {
        console.log("department: " + this.name, this.id, Department.fiscalYear)
    }

    addEmployee(employee: string) {
        this.employees.push(employee)
    }

    printEmployee() {
        console.log(this.employees.length, this.employees)
    }

    static createEmployee (name: string) {
        return {name: name,fiscalYear: Department.fiscalYear}
    }

    abstract describeFunction(this: Department) : void
}

//inheritance
class ITDepartment extends Department {
    private text: string;
    constructor(id: string, private admins: string[]) {
        super(id, 'IT');
        this.employees.push("Can access employees here as it is defined as protected")
        this.text = 'Set text'
    }

    get currenttext() {
        return this.text;
    }

    set setCurrenttext(value: string) {
        this.text = value
    }

    describeFunction() {
        console.log("This is an abstract function inherited from super class")
    }
}

// we can\t create an instance for abstract class so commnented intance 'obj'

// const obj  = new Department('24','Accounting'); // create department object
// obj.describe(); 
// obj.addEmployee('Sindhu');
// obj.printEmployee();
// obj.name = 'Name can be chaned ith dot notation like this as it is public and can be accessed outside the class'
// console.log(obj);
// Department.createEmployee('Sin')
// obj.describe();


const itdep = new ITDepartment('it12', ['admin1', 'admin2'])
itdep.describe();
console.log("getting value from getter "+itdep.currenttext)
itdep.setCurrenttext = 'Setter'
console.log(itdep);
itdep.describeFunction()

// console.log(obj)

// const copyObj  = {describe: obj.describe}
// copyObj.describe(); these 2 lines tho error as describe takes the type of Department class, adding all the properties will work fine as  it is similar to Department class