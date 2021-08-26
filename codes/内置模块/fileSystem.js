const fs = require("fs");

const files = fs.readdirSync("./");
console.log(files);

fs.readdir("./", function (error, files) {
  console.log(error);
  console.log(files);
});
