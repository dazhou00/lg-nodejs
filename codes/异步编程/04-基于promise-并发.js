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

Promise.all([readFile("./index.html"), readFile("./index.txt")])
  .then(function (data) {
    console.log(data);
  })
  .catch(function (error) {
    console.log(error);
  });
