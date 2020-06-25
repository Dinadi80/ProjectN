let login = prompt("Введите Ваш логин");
let password = prompt("Введите Ваш пароль");


switch(true) {
	case login === "admin" && password === "12345":

		alert('Вы можете редактировать сайт');
		break;
	case login === "admin" && password != "12345":
		alert("Ваш пароль неправильный");
		break;
	case login != "admin" && password === "12345":
		alert("Ваш логин неправильный");
		break;
		default:
		alert("Отойдите от компа" );
}

/*let age = 20;
let groupNumber;
switch(true) {
	case age >= 18 && age <= 25:
	groupNumber = 1;
	break;
	case age >= 25 && age <= 46:
	groupNumber = 2;
	break;
	default: 
	groupNumber = 3;
}
console.log (groupNumber);*/