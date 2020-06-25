var startTime = new Date().getTime();

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
var makeSquareVisible = function(){ 
	var square = document.getElementById("square");
	var top = Math.random() * 400;
	var left = Math.random() * 700;
	var width = Math.random() * 200 + 50;
	square.style.top = top + "px";
	square.style.left = left + "px";
	square.style.width = width + "px";

/*var makeShapeVisible = function(){
	var shape = document.getElementById("shape");
	var top = Math.random() * 400;
	var left = Math.random() * 700;
	var width = Math.random() * 200 + 50;
	shape.style.top = top + "px";
	shape.style.left = left + "px";
	shape.style.width = width + "px";*/

	if(Math.random() > 0.5) {
		square.style.borderRadius = "50%";
		square.style.backgroundColor = getRandomColor();
		square.style.borderRight = "0";
	} else if(Math.random() >= 0.3 && Math.random() <= 0.7) {
		square.style.borderRadius = "0";
		square.style.backgroundColor = getRandomColor();
		square.style.borderRight = "0";
	} else if (Math.random() >= 0.7) {
		square.style.borderRadius = "0%";
		square.style.left = "0";
		square.style.width = "0";
		square.style.borderBottom = "50px solid #f447ff";
    	square.style.borderLeft = "50px solid transparent";
    	square.style.borderRight = "100px solid" + getRandomColor();
    	square.style.backgroundColor = "transparent";
	}
	square.style.display = "block"
	startTime = new Date().getTime();
	}
	
	/*if(Math.random() < 0.3) {
		shape.style.borderRadius = "50%";
		shape.style.backgroundColor = getRandomColor();
		shape.style.borderBottom = "0";
	} else if(Math.random() >= 0.3 && Math.random() <= 0.7) {
		shape.style.borderRadius = "0";
		shape.style.backgroundColor = getRandomColor();
		shape.style.borderBottom = "0";
	} else if(Math.random() > 0.7) {
		shape.style.borderRadius = "0";
		shape.style.left = "0";
	    shape.style.width = "0";
	    shape.style.borderLeft = "50px solid transparent";
        shape.style.borderRight = "50px solid transparent";
        shape.style.borderBottom = "100px solid " + getRandomColor();
        shape.style.backgroundColor = "transparent";
	}

	shape.style.display = "block";
	startTime = new Date().getTime(); 
}

setTimeout(makeShapeVisible, Math.random() * 1000);

document.getElementById("shape").onclick = function(){
	var shape = document.getElementById("shape");
	shape.style.display = "none";
	var finishTime = new Date().getTime();	
	var reactionTime = (finishTime - startTime) / 1000;
	numberOfClicks++;
	allTime += reactionTime;
	averageTime = allTime / numberOfClicks;
	document.getElementById("reactionTime").innerHTML = reactionTime + " seconds.";
	document.getElementById("averageTime").innerHTML = averageTime + " seconds.";
	setTimeout(makeShapeVisible, Math.random() * 1000);
}*/

setTimeout(makeSquareVisible, Math.random() * 1000);

document.getElementById("square").onclick = function(){
	var square = document.getElementById("square");
	square.style.display = "none";
	var finishTime = new Date().getTime();
	var reactionTime = (finishTime - startTime) / 1000;
	document.getElementById("reactionTime").innerHTML = reactionTime + "seconds";
	setTimeout(makeSquareVisible, Math.random() * 1000);
}



