console.log('nice google transelate (hopefully:)');
const xhr = new XMLHttpRequest();

const div = '';

function aaa() {
	xhr.withCredentials = true;

	xhr.open("POST", "https://google-translate1.p.rapidapi.com/language/translate/v2");
	xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
	xhr.setRequestHeader("X-RapidAPI-Key", "f01ee88927mshf880ff3012d3452p1355d7jsn69b68376bfa3");
	xhr.setRequestHeader("X-RapidAPI-Host", "google-translate1.p.rapidapi.com");

	const text = document.getElementById('translate').value;
	const from = document.getElementById('from').value;
	const to = document.getElementById('to').value;

	let data = `q=${text}&26source=${from}&target=${to}`;
	xhr.send(data);

	xhr.onload = function () {
		console.log(xhr.responseText);
	}
}











//from DOM lessons:
function clickBtnRed(){
	h2.style.backgroundColor = "red";
}
h2.addEventListener("click", clickBtnRed);

//4. Add an event listener which will hide the h3 when it’s clicked on (use the display:none property).
let h3 = document.getElementsByTagName("h3")[0];
function disapear(){
	this.style.display= "none";
}
h3.addEventListener("click",disapear);

//6. BONUS : When you hover on the h1, set the font size to a random pixel size between 0 to 100.(Check out this documentation)
let random = Math.floor(Math.random() * 100);

function randomFontSize() { 
	this.style.fontSize = `${random}px`;
} 

h1.addEventListener("mouseover", randomFontSize);