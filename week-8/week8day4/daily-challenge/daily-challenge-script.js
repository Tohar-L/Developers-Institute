// In the HTML file, add a form, containing an input and a button.
// This input is used to fetch gif depending on a specific category.
// In the JS file, create a program to fetch one random gif depending 
//on the search of the user (ie. If the search is “sun”,
// append on the page one gif with a category of “sun”).

// https://api.giphy.com/v1/gifs/search?q=sun&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My
// https://api.giphy.com/v1/gifs/search?q${input}&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My

let xhr = new XMLHttpRequest();

let root = document.getElementById('root');
console.log(root);

xhr.onload = function(){
	if(xhr.status != 200){
		alert(`Error ${xhr.status} - ${xhr.statusText}`)
	}
	else {
	}
};


document.getElementById('myForm').addEventListener('submit', function(event){
	event.preventDefault();
	submitForm();
});

document.getElementById('erase').addEventListener('click', function(){
	root.innerHTML = '';
});


function submitForm() {
	const input = document.getElementById('search').value;
	let data = `https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=${API_KEY}&limit=1&offset=${getRandom()}`;
	xhr.open('GET',data);
	xhr.responseType = 'json';
	xhr.send();
}

function getRandom(num = 50){
	return Math.floor(Math.random()*50)
}


const input = '';
// input.addEventListener('input', (event) => {
// 	const input = input.value;
// 	console.log(searchTxt);
// });

function bbb() {
	xhr.withCredentials = true;


// 	const button = getElementById('btn');
// 	button.addEventListener('onclick', (event) => {
	


	xhr.responseType = 'json';
	xhr.onload = function() {
		if(xhr.status !== 200) {
			console.log(xhr.statusText);
		} else {
		}
			// const input = document.getElementById('search');
			// input.addEventListener('input', (event) => {
			// 	const searchTxt = event.target.value;
			// 	console.log(searchTxt);
			// });
			// console.log(xhr.response);
		// }
	}
}
// });




// const addGifToPage() => 

// gif.innerHTML = 'kjgkuhij';





	// const gifElement = document.createElement('gifElement');
	// div.classList.add('gif');

	// const img = document.createElement('img');
	// img.setAttribute('src', `https://api.giphy.com/v1/gifs/search?q=${searchTxt}&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My&limit=1`)
	// gif.appendChild(div);