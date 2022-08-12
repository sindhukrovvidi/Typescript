// checks the type/property for unions and accesses the properties accordingly without throwing error

interface Bird {
  type: "bird";
  flyingSpeed: number;
}

interface Horse {
  type: "horse";
  runningSpeed: number;
}

type Animal = Bird | Horse;

function CalSpeed(animal: Animal) {
  let speed;
  switch (animal.type) {
    case "bird":
      speed = animal.flyingSpeed;
      console.log("I'm a bird");
      break;
    case "horse":
      speed = animal.runningSpeed;
      console.log("I am horse");
      break;
  }
  console.log("Speed is ", speed);
}

CalSpeed({ type: "horse", runningSpeed: 40 });
