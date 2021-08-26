setTimeout(() => console.log(1), 50);

process.nextTick(() => console.log(2));

setImmediate(() => console.log(3));

process.nextTick(() => console.log(4));
