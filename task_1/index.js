const fs = require("fs");

let fileContent = fs.readFileSync("input.txt", "utf8");

function checkPrimeNum(num) {
  for (let i = 2; i < num; i++) {
    if (num % i == 0) {
      fs.writeFileSync("output.txt", "false");
      break;
    } else {
      fs.writeFileSync("output.txt", "true");
      break;
    }
  }
}

checkPrimeNum(fileContent);
