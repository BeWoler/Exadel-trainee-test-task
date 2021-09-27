const fs = require("fs");

let fileContent = fs.readFileSync("input.txt", "utf8");

function fibonacchi(num) {
  let a = 1;
  let b = 1;
  for (let i = 3; i <= num; i++) {
    let c = a + b;
    a = b;
    b = c;
  }
  return b;
}

fs.writeFileSync("output.txt", fibonacchi(fileContent).toString());
