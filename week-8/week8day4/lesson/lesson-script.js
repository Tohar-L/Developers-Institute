// console.log("hi");

// var request = new XMLHttpRequest();
// request.open('GET', 'https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My', true);

// request.onload = function() {
// 	if (request.status >= 200 && request.status < 400) {
// 		var data = JSON.parse(request.responseText);
// 		console.log(data);
// 	} else {
// 	}
// };

// request.onerror = function() {
// 	console.log("error for some reason");
// }

// request.send();



// the old new way: jQuery:
// $.getJSON('https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My', function(data){
// });

// fetch('https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My').then(response =>
	// console.log(response)
	// );


// fetch('https://jsonplaceholder.typicode.com/users');
fetch('https://jsonplaceholder.typicode.com/users').then(response => console.log(Response));
fetch('https://jsonplaceholder.typicode.com/users').then(response => {response.json(); console.log(response)});
fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json().then(data=> console.log(data)));
// fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json()).then(users => {this.setState ({robots: users})});
//he recommends to add a chrome extention called JSONView