const fs = require("fs");

fs.readFile("./index.txt", () => {
  setTimeout(() => console.log("1"), 0);

  setImmediate(() => console.log(2));
});
