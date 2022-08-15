//create XMLHttpRequest:

let xhr = new XMLHttpRequest();

//initialize:
// xhr.open(methode, URL, [async, user, password]);
xhr.open('GET', 'https://jsonplaceholder.typicode.com/users', true);
// 'GET', 'POST', 'DELETE';
// xhr.send(JSON.stringify{name:'sss'});
// xhr.send([body]);
// xhr.send();


xhr.open('GET', 'https://zivuch.github.io/data.json');

// Configure the response type
// xhr.responseType = 'json';




// xhr.open('GET', 'http://www.example.org/some.file', true);
// xhr.send(["name=value&anothername="+encodeURIComponent(myVar)+"&so=on"])

// xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
xhr.onload = function() {
	console.log(`Loaded: ${xhr.status} ${xhr.response}`);
};


xhr.onerror = function() { 
// only triggers if the request couldn't be made at all
alert(`Network Error`);
};


xhr.onprogress = function(event) { // triggers periodically
  // event.loaded - how many bytes downloaded
  // event.lengthComputable = true if the server sent Content-Length header
  // event.total - total number of bytes (if lengthComputable)
  alert(`Received ${event.loaded} of ${event.total}`);
};

xhr.timeout = 10000; // timeout in ms, 10 seconds


// xhr.onreadystatechange = nameOfTheFunction;
xhr.onreadystatechange = function(){
    // Process the server response here.
    console.log('waiting');
};



if (xhr.readyState === XMLHttpRequest.DONE) {
        // Everything is good, the response was received.
    } else {
        // Not ready yet.
    };




    xhr.onreadystatechange = function() {
    	if (xhr.readyState == 3) {
    		console.log('loading');
    	}
    	if (xhr.readyState == 4) {
    		console.log('request finished')
    	}
    };



// xhr.abort(); // terminate the request


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






//must read article:
// const second = () => {
// 	console.log('Hello there!');
// }
// const first = () => {
// 	console.log('Hi there!');
// 	second();
// 	console.log('The End');
// }
// first();




// const second = () => {
// 	console.log('Hello there!');
// }
// const first = () => {
// 	console.log('Hi there!');
// 	second();
// 	console.log('The End');
// }
// first();


// const processImage = (image) => {
//   /**
//   * doing some operations on image
//   **/
//   console.log('Image processed');
// }
// const networkRequest = (url) => {
//   *
//   * requesting network resource
//   *
//   return someData;
// }
// const greeting = () => {
// 	console.log('Hello World');
// }
// processImage(logo.jpg);
// networkRequest('www.somerandomurl.com');
// greeting();





// const networkRequest = () => {
// 	setTimeout(() => {
// 		console.log('Async Code');
// 	}, 2000);
// };
// console.log('Hello World');
// networkRequest();



// const networkRequest = () => {
// 	setTimeout(() => {
// 		console.log('Async Code');
// 	}, 2000);
// };
// console.log('Hello World');
// networkRequest();
// console.log('The End');


// const btn = document.createElement('btn');
// btn.classList.add('btn');
// const btn = document.getElementById('btn');
// btn.innerText = 'click me!'
// // console.log(btn);
// document.querySelector('.btn').addEventListener('click',(event) => {
// 	console.log('Button Clicked');
// });	



// console.log('Script start');
// setTimeout(() => {
// 	console.log('setTimeout');
// }, 0);
// new Promise((resolve, reject) => {
// 	resolve('Promise resolved');
// }).then(res => console.log(res))
// .catch(err => console.log(err));
// console.log('Script End');





// console.log('Script start');
// setTimeout(() => {
// 	console.log('setTimeout 1');
// }, 0);
// setTimeout(() => {
// 	console.log('setTimeout 2');
// }, 0);
// new Promise((resolve, reject) => {
// 	resolve('Promise 1 resolved');
// }).then(res => console.log(res))
// .catch(err => console.log(err));
// new Promise((resolve, reject) => {
// 	resolve('Promise 2 resolved');
// }).then(res => console.log(res))
// .catch(err => console.log(err));
// console.log('Script End');





// console.log('Script start');
// setTimeout(() => {
// 	console.log('setTimeout');
// }, 0);
// new Promise((resolve, reject) => {
// 	resolve('Promise 1 resolved');
// }).then(res => console.log(res));
// new Promise((resolve, reject) => {
// 	resolve('Promise 2 resolved');
// }).then(res => {
// 	console.log(res);
// 	return new Promise((resolve, reject) => {
// 		resolve('Promise 3 resolved');
// 	})
// }).then(res => console.log(res));
// console.log('Script End');



function e () {
	let httpRequest;
	document.getElementById("ajaxButton").addEventListener('click', makeRequest)};

	function makeRequest() {
    // create XMLHttpRequest
    httpRequest = new XMLHttpRequest();
    if (!httpRequest) {
    	alert('Giving up :( Cannot create an XMLHTTP instance');
    	return false;
    }
};

function alertContents() {
    // If the state has the value of `XMLHttpRequest.DONE` : the full server response was received and it's OK for you to continue processing it.
    if (httpRequest.readyState === XMLHttpRequest.DONE) {
        // check the HTTP response status codes of the HTTP response
        if (httpRequest.status === 200) {
        	alert(httpRequest.responseText);
        } else {
        	alert('There was a problem with the request.');
        }
    }
};