interface Named {
    name: string;
    surname?: string // optional parameter
}

interface Person extends Named {
    age: number;

    greet(phrase: string): void
}

let user: Person
user = {
    name: 'Max',
    age: 45,
    greet(text: string) {
        console.log("Hi there, " + text + ' ' + this.name)
    }
}

user.greet('Hello')

class NewPerson implements Person {
    constructor(public name: string, public age: number) {
        
    }

    greet(text: string) {
        console.log("Greeting is called ", text)
    }
}

const Person1 = new NewPerson('Maxfield', 40)
console.log('Person1 ', Person1)
Person1.greet('Heyyy')