const hex = [1,2,3,4,5,6,7,8,9,"a","b","c","d","e","f"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function() {
	let hexRandomNumber="#";
	for (let i = 0; i<6; i++) {
	hexRandomNumber += hex[hexMath()];
	}
	
	
	document.body.style.backgroundColor = hexRandomNumber;
	color.textContent = hexRandomNumber;
}
);
	
function hexMath() { 
	return Math.floor(Math.random() * hex.length);
	}
	