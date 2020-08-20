//Get elements from the DOM
var screen = document.querySelectorAll('p')[0];
var clear = document.getElementsByClassName('clear')[0];
var elements = document.getElementsByTagName("li");

//Loop through the input and undertake the necessary action when condition is true
for(var i=0; i<elements.length;i++){
		if(elements[i].innerHTML === '='){
			elements[i].addEventListener("click", performOperation(i));
		}else{
			elements[i].addEventListener("click", updateDisplayValue(i));
		}
}

//Dispaly the elements as they are being entered 
//Strict equality for reassignent of x and ÷
function updateDisplayValue(i){
	return function(){
		if (elements[i].innerHTML === "x"){
			screen.innerHTML += "*";
		}else if(elements[i].innerHTML === "÷"){
				screen.innerHTML += "/";
		} else{
			screen.innerHTML  += elements[i].innerHTML;
		}
	};
}

//evaluation of the expression
function performOperation(i){
return function(){
	screen.innerHTML = eval(screen.innerHTML);
	}
}
//clear the screen
clear.onclick = function () {
screen.innerHTML ="";
}; 
