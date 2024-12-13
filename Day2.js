// 

let array = [10, 20, "Hi", true , null];

console.log(array[3]);
console.log(array);

array.push("last"); //add at last
console.log(array);


array.unshift("first"); //add at beginning
console.log(array);

array[1] = "changingValue"; //changing Value Using array
console.log(array);

array.pop(); //remove at last
array.shift(); //remove at first

console.log(array);

array.slice(1,3);
console.log(array);







