
let weight = + prompt("Введите ваш вес");
let height = + prompt("Введите ваш рост");
let age = +prompt("Введите ваш возраст")

let bodyMassIndex = weight / (height * height);  
let groupNumber;
if (age >= 18 && age <= 25){
	groupNumber = 1;
} else if (age >= 25 && age <= 46){
	groupNumber = 2;
} else {
	groupNumber = 3;
} 

if (groupNumber === 1 && bodyMassIndex >= 17.5 && bodyMassIndex < 19.5) {
	alert("У вас слегка снижен вес")
} else if (groupNumber === 1 && bodyMassIndex >= 19.5 && bodyMassIndex < 22.9) {
	alert("Ваш вес в норме")
} else if (groupNumber === 1 && bodyMassIndex >= 22.9 && bodyMassIndex < 27.4) {
	alert("У вас есть лишний вес") 
} else if (groupNumber === 1 && bodyMassIndex >= 27.4 && bodyMassIndex < 29.9) {
	alert("Ожирение 1 степени")
} else if (groupNumber === 1 && bodyMassIndex >= 29.9 && bodyMassIndex < 34.4) {
	alert("Ожирение 2 степени")
} else if (groupNumber === 1 && bodyMassIndex >= 34.9 && bodyMassIndex < 39.9) {
	alert("Ожирение 3 степени")
} else if (groupNumber === 1 && bodyMassIndex >= 39.9) {
	alert("Ожирение 4 степени")
}

if (groupNumber === 2 && bodyMassIndex >= 18.0 && bodyMassIndex < 20.0) {
	alert("У вас слегка снижен вес")
} else if (groupNumber === 2 && bodyMassIndex >= 20 && bodyMassIndex < 25.9) {
	alert("Ваш вес в норме")
} else if (groupNumber === 2 && bodyMassIndex >= 25.9 && bodyMassIndex < 27.9) {
	alert("У вас есть лишний вес") 
} else if (groupNumber === 2   && bodyMassIndex >= 27.9 && bodyMassIndex < 30.9) {
	alert("Ожирение 1 степени")
} else if (groupNumber === 2  && bodyMassIndex >= 30.9 && bodyMassIndex < 18.0) {
	alert("Ожирение 2 степени")
} else if (groupNumber === 2   && bodyMassIndex >= 35.9 && bodyMassIndex < 35.9) {
	alert("Ожирение 3 степени")
} else if (groupNumber === 2   && bodyMassIndex >= 40.9) {
	alert("Ожирение 4 степени")
} else if (groupNumber === 3) 
{
	alert("Для ваших данных нет значения")
}

