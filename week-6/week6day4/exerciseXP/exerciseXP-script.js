// Exercise 1 : Find The Sum
// Create a one line function (ie. an arrow function)
// that receives two numbers as parameters and returns the sum.

let sum = ((x,y=0) => console.log(x+y))

// Exercise 2 : Kg And Grams
// Create a function that receives a weight in kilograms and returns it in grams.
// (Hint: 1 kg is 1000gr)
//First, use function declaration and invoke it.
//Then, use function expression and invoke it.
//Write in a one line comment, the difference between function declaration and function expression.
//Finally, use a one line arrow function and invoke it.

function kgToGrCalculator(a) {
	var b = (a*1000);
	alert (`${a} kilograms is ${b} grams`);
}(8);


// Exercise 3 : Fortune Teller
// Create a self invoking function that takes 4 arguments:
// number of children, partner’s name, geographic location, job title.
// The function should display in the DOM a sentence like
// "You will be a <job title> in <geographic location>,
// and married to <partner's name> with <number of children> kids."

(function fortuneTeller(jobTitle, geographicLocation, partnersName, numberOfChildren) {
	console.log(`You will be a ${jobTitle} in ${geographicLocation} and married to ${partnersName} with ${numberOfChildren} kids.`);
})("Doctor", "Israel", "Ami", "4");


//Exercise 4 : Welcome
// John has just signed in to your website and you want to welcome him.

//Create a Bootstrap Navbar in your HTML file.
//In your js file, create a self invoking function that
//takes 1 argument: the name of the user that just signed in.
//The function should add a div in the nabvar,
//displaying the name of the user and his profile picture.

// function welcome(userName) {
// 	div userName
// 	img
// }

