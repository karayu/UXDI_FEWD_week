var dog = 10;

document.getElementById("zero").onclick = feedDog;
document.getElementById("add5").onclick = plusFive;
document.getElementById("add10").onclick = plusTen;

function feedDog() {
	dog = 0;
	document.getElementById("result").innerHTML = dog;
}

function plusFive() {
	dog = dog + 5;
	document.getElementById("result").innerHTML = dog;
}

function plusTen() {
	dog = dog + 10;
	document.getElementById("result").innerHTML = dog;
}