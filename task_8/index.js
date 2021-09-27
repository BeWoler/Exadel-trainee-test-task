const fs = require("fs");
const func1 = require("./script1");

let fileContent = fs.readFileSync("input.txt", "utf8");

async function checkResult(str) {
  let result = await func1(str);
  fs.writeFileSync("output.txt", result);
}

checkResult(fileContent);
