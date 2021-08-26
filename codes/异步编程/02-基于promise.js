const fs = require("fs");

const promise = new Promise(function (resolve, reject) {
  fs.readFile("./index.html", "utf-8", function (error, data) {
    if (error) {
      // 等待 => 失败
      reject(error);
    } else {
      // 等待 => 成功
      resolve(data);
    }
  });
});

promise
  .then(function (data) {
    console.log(data);
  })
  .catch(function (error) {
    console.log(error);
  });
