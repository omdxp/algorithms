let queue = [];

queue.push(1);
queue.push(2);
queue.push(3);

console.log(queue);

queue.shift();
queue.shift();
queue.shift();

console.log(queue);

queue.unshift("first");
queue.unshift("second");
queue.unshift("third");

console.log(queue);

queue.pop();
queue.pop();
queue.pop();

console.log(queue);
