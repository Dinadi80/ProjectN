// push/pop
// shift/inshift
// index0f
// slice





let rainbowColors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

console.log("The sky is" + rainbowColors[4]);

/*rainbowColors[0] = "orange";
console.log(rainbowColors);

rainbowColors[8] = "red";
console.log(rainbowColors);

rainbowColors[rainbowColors.legth] = "dark blue";
console.log(rainbowColors);*/

//rainbowColors.push("white");
let x = rainbowColors.push("grey")
console.log(rainbowColors);
console.log(x);

let y = rainbowColors.pop();
console.log(rainbowColors);
console.log(y);

z = rainbowColors.unshift("navy");
console.log(rainbowColors);
console.log(z);

w = rainbowColors.shift();
console.log(rainbowColors);
console.log(w);

a = rainbowColors.indexOf("red");
console.log(rainbowColors);
console.log(a);

let toyota = ["Camry", 2010, "sedan", "black", true];
let isSedan = toyota.indexOf("hatchback") === -1 ? 
console.log("Tapy is not sedan") : 
console.log ("Tapy is sedan");

let cars = ["Yjnda", "KIA", "Toyota", "Mercedes", "Opel", "Poego"];
let germanCars = cars.slice(3, 5);
console.log(germanCars);
console.log(cars);




// let emptyArray = []; 
// let emptyArray = new Array[];