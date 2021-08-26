const fs = require("fs");

function readFile(path) {
  return new Promise(function (resolve, reject) {
    fs.readFile(path, "utf-8", function (error, data) {
      if (error) {
        reject(error);
      } else {
        resolve(data);
      }
    });
  });
}

async function run() {
  return [await readFile("./index.html"), await readFile("./index.txt")];
}

run().then(function (value) {
  console.log(value);
});
