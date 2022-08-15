//Exercise 1:
//Create a program to retrieve the data from the API URL provided above. 
//Use XMLHttpRequest object to make an AJAX request to the Giphy API 
//and console.log the Javascript Object.
let xhr = new XMLHttpRequest();
xhr.open('GET','https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My');
xhr.send();
xhr.onload = function() {
	console.log(JSON.parse(xhr.responseText));
}


//for myself:
// fetch('https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My').then(response => response.json().then(data=> console.log(data)));
// fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json().then(data=> console.log(data)));





//Exercise 2:
//Using this part of the documention, retrieve 10 gifs about the “sun”. 
//The starting position of the results should be 2.
// Console.log the Javascript Object.
let xhr1 = new XMLHttpRequest();
xhr1.open('GET', 'https://api.giphy.com/v1/gifs/search?q=sun&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My&limit=10&offset=2');
xhr1.send();
xhr1.onload = function() {
	console.log(JSON.parse(xhr1.responseText));
}
// fetch('https://api.giphy.com/v1/gifs/search?q=sun&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My&limit=10&offset=2').then(response => response.json().then(data=> console.log(data)));