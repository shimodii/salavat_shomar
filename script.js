var number = 0;
function reset(){
	number = 0;
	document.getElementById('numberText').innerHTML = number; 
}
function inc(){
	number++;
	document.getElementById('numberText').innerHTML = number;
}