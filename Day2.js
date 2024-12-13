// // 

const { name } = require("ejs");

// const { name } = require("ejs");

// let array = [10, 20, "Hi", true , null];

// console.log(array[3]);
// console.log(array);

// array.push("last"); //add at last
// console.log(array);


// array.unshift("first"); //add at beginning
// console.log(array);

// array[1] = "changingValue"; //changing Value Using array
// console.log(array);

// array.pop(); //remove at last
// array.shift(); //remove at first

// console.log(array);

// array.slice(1,3);
// console.log(array);


// //objects concept

// //Object  ->> collection of properties
// // Object in java script is {keys and values}
// //key should be unique
// /// value can be duplicated


// creation of object in js

let obj={
    name : "Balaji",
    age : 22,
    gender: "male",
    isLearning : true,
    classmates : ["kavya" , "suba" , "kiru"],
    things: {
        Book : "math book",
        vechicle : "cycle",
    },
};  // object literal

//accessing object
console.log(obj.name);  // dot notation ,, acccesing the obj
console.log(obj.things);
console.log(obj.things.vechicle);
console.log("Name is " + obj.name + " and I use " +obj.things.vechicle); //mulrible object accesing in one line -- second method

//braclets notation

console.log(obj["gender"]); //accesong the key gender using key
console.log(obj["things"]["vechicle"])

//modification in two ways , . notation and bracket notation

obj.name = "Balaji K";
console.log(obj);
obj["name"]="Balaji Kanagaraj";
console.log(obj);

//adding new property

obj.hobbies = "singing";
console.log(obj);

obj["designation"] = "cse"
console.log(obj);

