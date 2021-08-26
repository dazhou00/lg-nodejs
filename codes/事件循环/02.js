setTimeout(() => console.log("1"), 0);

setImmediate(() => console.log(2));

function sleep(delay) {
  let start = new Date().getTime();
  while (new Date().getTime() - start < delay) {
    continue;
  }
}

sleep(1000);
