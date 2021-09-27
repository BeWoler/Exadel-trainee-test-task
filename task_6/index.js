const fs = require("fs");

let fileContent = JSON.parse(fs.readFileSync("input.txt", "utf8"));
let arr = [];

for (let key in fileContent) {
  arr.push(typeof(fileContent[key]));
  fs.writeFileSync("output.txt", arr.join(','));
}
