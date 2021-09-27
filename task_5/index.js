const fs = require("fs");

let keys = fs.readFileSync("keys.txt", "utf8").split(",");
let values = fs.readFileSync("values.txt", "utf8").split(",");

function objPush(a, b) {
  let obj = {};
  for (let i = 0; i < a.length; i++) {
    obj[a[i]] = b[i];
  }
  fs.writeFileSync("output.txt", JSON.stringify(obj));
}

objPush(keys, values);
