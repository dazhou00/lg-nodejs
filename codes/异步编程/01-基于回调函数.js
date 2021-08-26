const fs = require("fs");

fs.readFile("./index.html", "utf-8", function (error, data) {
  if (error) console.log(error);
  console.log(data);
});
