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

readFile("./index.html")
  .then(function (v) {
    console.log(v);
    return readFile("index.txt");
  })
  .then(function (v) {
    console.log(v);
  })
  .catch(function (error) {
    console.log(error);
  })
  .finally(function () {
    console.log("finally");
  });
