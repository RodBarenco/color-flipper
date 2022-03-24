const colors = ["green", "red", "rgba(133,122,200)", "#f15025", "#8B008B"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click",function (){
	
	const radomNumber = Math.floor(Math.random() * colors.length);
	console.log(document.body);
	
	document.body.style.backgroundColor = colors[radomNumber];
	color.textContent = colors [radomNumber];
    }
);
