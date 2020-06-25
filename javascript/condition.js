let userName = prompt("Введите ваше имя");
let userAge = +prompt("Введите свой возраст");
if (userAge >= 20) {
	console.log(userName + "is adult")
} else if (userAge <= 10) {
	console.log(userName + " is a child")
} else {
	console.log(userName + " is a teenager");
}
console.log("something")