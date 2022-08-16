// In the HTML file, add a form, containing an input and a button.
// This input is used to fetch gif depending on a specific category.
// In the JS file, create a program to fetch one random gif depending 
//on the search of the user (ie. If the search is “sun”,
// append on the page one gif with a category of “sun”).

let xhr = new XMLHttpRequest();

const input = document.getElementById('search');
input.addEventListener('input', (event) => {
	const searchTxt = event.target.value;
	console.log(searchTxt);
});

// const input = '';
// input.addEventListener('input', (event) => {
// 	const searchTxt = input.value;
// 	console.log(searchTxt);

// 	const button = getElementById('btn');
// 	button.addEventListener('onclick', (event) => {
	xhr.open('GET',`https://api.giphy.com/v1/gifs/search?q=${input}&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My&limit=1`);
	xhr.send();
	xhr.onload = function() {
		console.log(JSON.parse(xhr.responseText));
	}
// 	} )
// });




// const addGifToPage() => 

// gif.innerHTML = 'kjgkuhij';





	// const gifElement = document.createElement('gifElement');
	// div.classList.add('gif');

	// const img = document.createElement('img');
	// img.setAttribute('src', `https://api.giphy.com/v1/gifs/search?q=${searchTxt}&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My&limit=1`)
	// gif.appendChild(div);