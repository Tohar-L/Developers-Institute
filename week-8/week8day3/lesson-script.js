//create XMLHttpRequest:

let xhr = new XMLHttpRequest();

//initialize:
// xhr.open(methode, URL, [async, user, password]);
xhr.open('POST', 'https://jsonplaceholder.typicode.com/users', false);

// 'GET', 'POST', 'DELETE';
// xhr.send(JSON.stringify{name:'sss'});
// xhr.send([body]);
// xhr.send();

xhr.onload = function() {
	// console.log(xhr.response);
	console.log(JSON.parse(xhr.response)); //------should show a object with objects inside.
}



















//the exercise:


//google API's from: RapidAPI:

// request for an api of google
// register and subscribe 

// and then consol log the data from the google api

// const data = "";

// const xhr = XMLHttpRequest();
// xhr.withCredentials = true;

// xhr.onload = function(){
// 	console.log(xhr.response);
// }

// xhr.open("POST",
// 	""
// 	);


// xhr.setRequestHeader(
// 	"content-type",
// 	)


//take ziv's code, but put my own API. 