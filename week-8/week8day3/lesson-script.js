//create XMLHttpRequest:

let xhr = new XMLHttpRequest();

//initialize:
// xhr.open(methode, URL, [async, user, password]);
xhr.open('GET', 'https://jsonplaceholder.typicode.com/users')
// 'GET', 'POST', 'DELETE';
// xhr.send(JSON.stringify{name:'sss'});
// xhr.send([body]);
// xhr.send();

xhr.send(JSON.stringify({name:'sss'}));


// xhr.onload = function() {
// 	if (xhr.status != 200) {
// 		console.log(xhr.status + 'error' + xhr.statusText);
// 	} else {
// 		// console.log(xhr.response);
// 		console.log(JSON.parse(xhr.response)); //------should show a object with objects inside.
// 	}
// }


// xhr.onError = function() {
// 	console.log('request not found 404');
// }


















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