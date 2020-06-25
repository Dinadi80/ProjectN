var h1 = document.getElementById('header');

console.log(h1.innerHTML);

h1.addEventListener("click", function () {
	h1.style.background = "red";
});

var liElements = document.querySelectorAll("li");
console.log(liElements);
for(var i = 0; i <  liElements.length; i++) {
liElements[i].addEventListener("click", function () {
	this.style.color = "green";
});
}