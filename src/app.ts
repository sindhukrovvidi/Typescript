function Logger(text: string) {
  console.log("Logger decorator is called");
  return function (cons: Function) {
    console.log("Logging....", text);
    console.log(cons);
  };
}

function withTemplate(text: string, text2: string) {
  console.log("withTemplate decorator factory called");
  return function (con: any) {
    console.log("withTemplate decorator is executed");
    const pers = new con();
    console.log(
      "Printing person name which is called inside a decorator ",
      pers.name,
      text,
      text2
    );
  };
}

@Logger("Person 1")
@withTemplate('Hey there', 'texte2')
class Person {
  name = "max";

  constructor() {
    console.log("Inside cPerson constructor");
  }
}

const newPerson = new Person();
console.log(newPerson);
