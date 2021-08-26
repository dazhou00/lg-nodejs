const fs = require("fs");
const promisify = require("util").promisify;

const readFile = promisify(fs.readFile);

async function run() {
  return [
    await readFile("./index.html", "utf-8"),
    await readFile("./index.txt", "utf-8"),
  ];
}

run().then(function (value) {
  console.log(value);
});
