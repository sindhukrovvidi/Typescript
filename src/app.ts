function add(n1: number, n2: number, printResult: boolean, text: string) {
    const result  = n1 + n2;
  if (printResult) console.log(text + result);
  else console.log("No result");
}

const number1 = 5;
const number2 = 3;
const printResult = false;
const text = "This is result.. "

add(number1, number2, printResult, text);

