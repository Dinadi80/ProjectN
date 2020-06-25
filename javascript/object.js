//let carToyota = ["Camry", 2010, "sedan", "black", true];
//console.log(carToyota[2]);

let carToyota = {
	model: "Camry",
	year: 2010,
	carBody: "sedan",
	color: "black",
	hasAirbag: true
};
let x = "color"
console.log(carToyota[x]);
console.log(carToyota.color);

carToyota.color = "red";
console.log(carToyota.color);
console.log(carToyota);

carToyota.year +=2
console.log(carToyota);


let carOpel = new Object();
carOpel.year = 2018;
carOpel.model = "crossover";
carOpel.carBody = "CX7";
carOpel.color = "blue";
carOpel.hasAirbag = false;
carOpel.doorNumber = 4;
console.log(carOpel);


let carMazda = {}
carMazda.year = 2018;
carMazda.model = "crossover";
carMazda.carBody = "CX7";
carMazda.color = "blue";
carMazda.sold = false;
carMazda.doorNumber = 4;
carMazda.windowsNumber = ["right", "left", "back window"]

console.log(carMazda.windowsNumber[2]);

//let numbers = [[1,2,3], [1,2,3], [1,2,3]];
//console.log(numbers[1],[2]);

let sellers = [

	{
		firstName: "Peter",
		lastName: "Goodman",
		regDate: "09/08/2020",
		hasDisount: true,
		age: 48,
		cars: [{
			carProducer: "fiat",
			carModel: "punto",
			sold: true
		}, 
		{
			carProducer: "mersedes", 
			carModel: "vito",
			sold: false

		},
		{
			carProducer: "opel",
			carModel: "vectra",
			sold: true
		}]
		},
	
	{
		firstName: "John",
		lastName: "Fishman",
		regDate: "09/03/2020",
		hasDisount: false,
		age: 41,
		cars: ["honda", "toyota", "opel"]
	}
]
console.log(sellers[0].cars[1].carModel.sold);

let car = [
{
carProducer: "mazda",
year: 2018,
model: "crossover",
isSelled: true
},
{
carProducer: "mersedes",
year: 2007,
model: "crossover",
isSelled: false
},
{
carProducer: "honda",
year: 2010,
model: "crossover",
isSelled: true
},
{
carProducer: "opel",
year: 2012,
model: "crossover",
isSelled: false
}
]
for (let i = 0; i<car.lenght; i++) {
	if(car[i].isSelled === false) {
		console.log(car[i]);
	}
}
console.log(car);
car.forEach(function(cars)) {
	if(cars.isSelled === false) {
		console.log(car);
	}
}