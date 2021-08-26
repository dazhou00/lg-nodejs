const fs = require("fs");

function readFile(filename, callback) {
  if (typeof filename !== "string") {
    return process.nextTick(callback(new TypeError("flename 不是字符串类型")));
  }

  fs.readFile(filename, "utf-8", (error, data) => {
    if (error) return callback(error);
    return callback(data);
  });
}

readFile("./index.txt", (data) => {
  console.log(data);
});
