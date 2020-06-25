
function isNumberOdd(x) {
	return x % 2 !==0;

	/* if (x % 2 === 0) {
		return false;
	} else {
		return true;
}*/
}
console.log(isNumberOdd (8));

function factorial (n) {
 		if (n === 1) {
 		 return 1; 
 		} else {
 		return n*factorial(n-1)
}
}
console.log(factorial (7));

function factorial(Number) {
	if (Number < 0) {
		return 0;
	}
	let result = 1;
	for(i = 1; i <= Number; i++) {
		result = result * i;
	}
	return result;
}
 
 console.log(factorial(5)); 


  function changeSpaceToUnderscore (text) {
	let resaltText = text.replace(/ /g, "_");
	return  resaltText;
}

console.log (changeSpaceToUnderscore ("Hello world friends"));
/*function rectangularArea(width, height) {
	console.log(width * height);
}

rectangularArea(4,6);

function rectangularArea(width, height) {
	return width * height;
}
let x = rectangularArea(7,6);
console.log(x);

function isSquareBig(side) {
	let squareArea = square(side);
	if (squareArea > 100) {
		return true;
	} else {
		return false;
	}
}

console.log(isSquareBig(8));*/

