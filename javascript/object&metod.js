//let carToyota = ["Camry", 2010, "sedan", "black", true];
//console.log(carToyota[2]);

/*let carToyota = {
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

console.log(carMazda.windowsNumber[2]);*/

//let numbers = [[1,2,3], [1,2,3], [1,2,3]];
//console.log(numbers[1],[2]);

/*let carsellers1 = 	{
		firstName: "Peter",
		lastName: "Goodman",
		regDate: 2017,
		hasDisount: true,
		diccountCalculation: function(year) {
			let discount;
			let numberOfYears = 2020-year;
			if (numberOfYears <= 2) {
				discount = 0;
			} else if ((numberOfYears > 2) && (numberOfYears <= 5)) {
				discount = 20;
			} else if(numberOfYears > 5)  {
				discount = 30
			}
			return discount;
		}
		}
		console.log(carsellers1.diccountCalculation(2015));*/

		let carsellers1 = 	{
		firstName: "Peter",
		lastName: "Goodman",
		regDate: 2017,
		hasDisount: true,
		diccountCalculation: function() {
			let discount;
			let numberOfYears = 2020 - this.regYear;
			if (numberOfYears <= 2) {
				discount = 0;
			} else if ((numberOfYears > 2) && (numberOfYears <= 5)) {
				discount = 20;
			} else if(numberOfYears > 5)  {
				discount = 30
			}
			return discount;
		}
		}
		console.log(carsellers1.diccountCalculation());

		/*let carsellers2 ={
		firstName: "Peter",
		lastName: "Goodman",
		regDate: 2017,
		hasDisount: true,
		discount: 0,
		diccountCalculation: function() {
			let discount;
			let numberOfYears = 2020 - this.regYear;
			if (numberOfYears <= 2) {
				discount = 0;
			} else if ((numberOfYears > 2) && (numberOfYears <= 5)) {
				discount = 20;
			} else if(numberOfYears > 5)  {
				discount = 30
			}
			//return discount;
			// or
			this.discount = discount;
		}
		}
		// or
		//let discount = carsellers1.diccountCalculation();
		//carsellers1.discount = discount;

		// or
		//carsellers1.discount = carsellers1.diccountCalculation();
		carsellers1.diccountCalculation();
		console.log(discount);*/