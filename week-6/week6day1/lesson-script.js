//The every methode:

// function isPositive (element) {
// 	return element >= 0;
// }

// let arr = [1, 4, 83, 9, 6];
// console.log(arr.every(isPositive));

let arra = [11, 9, 13, 14, 15];
console.log(arra.every(element => element>10));


function isCanine(element, index, array) {
	console.log(`checking if ${array[index]} is a canine`);
	return (element == "dog" || element == "doggo");
}

const array = ["dog", "cat", "doggo"];
console.log(array.every(isCanine));

//The includes methode:
var myarray = [1, 3, 2, 8, 0];
var check = myarray.includes(3,2);
console.log(check);
if (check == true) {
	console.log("found");
}
else {
	console.log("not found");
}

//advanced JavaScript - "var" lets things being accessed before declaration. not an error
function doSomething(){
  console.log(x); //undefined
  var x = 1;
  console.log("x: ", x); //x: 1
}
doSomething();

//"var" vs "const" or "let":
function checkAge(age) {
	if (age < 18) {
		const message = "Sorry, you're too young.";
	} else {
		const message = "Yay! You're old enough!";
	}

	return message;
}
console.log(checkAge(21)); //error! because const has been declared only in the scope.

// better way: "var":
function checkAge(age) {
	if (age < 18) {
		const message = "Sorry, you're too young.";
	} else {
		var message = "Yay! You're old enough!";
	}

	return message;
}

console.log(checkAge(21));

//exercise:
function numbers() {
	for (var i = 0; i < 5; i += 1) {
		console.log(i);
	}
	console.log(i);
}
numbers();

//default numbers:
//here, by writing b=1 wew sre setting a default if b is not declared.
function multiply(a, b = 1) {
	return a * b;
}

console.log(multiply(5, 2));
//expected output: 10

console.log(multiply(5));
//expected output: 5

//arrow functions
function myfunc (x, y){
	return (x+y);
}
console.log(myfunc(2,9));
const myFunc = (x,y) => {return(x+y)};
console.log(myFunc(6,7));

//Exercise 1
function whatYear(isYear) {
	return(isYear ? console.log("You are in the 21st century") : console.log("You live in the Middle Age"));
}

console.log(whatYear(true));

//Exercise 2 ---- do with ADENE
const calculator = (x, y = 1) => {
	if (action == "*") {
		return(x*y)
	} else if(action == "+") {
		return (x+y);
	} else {
		return (x-y);
	}

}
var action = "*";

console.log(calculator(2,9));


//forEach:
let myArr = [10,11,12,15,20];

myArr.forEach((number) => number%2 ? console.log("unEven") : console.log(number));
