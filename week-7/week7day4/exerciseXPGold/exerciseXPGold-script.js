//Exercise 1 : Print Full Name
// Create a function called printFullName(studentObj) that accepts an object as a parameter.
// For example : printFullName({first: 'Elie', last:'Schoppik'}).
// The function should return a string like the example below
// printFullName({first: 'Elie', last:'Schoppik'}) 
// 'Your full name is Elie Schoppik`.
// The output of the printFullName() function should be the exact same 
//as the displayStudentInfo function. (Exercise XP)


const studentObj = {first: 'Elie', last:'Schoppik'};
var {first, last} = studentObj;

printFullName =(studentObj)=> {
	console.log(`Your full name is ${first} ${last}`)
}


// Exercise 2 : Keys And Values
//Create a function that takes an object and returns the
//keys and values as separate arrays.
keysAndValues = (obj) => {
	console.log(Object.keys(obj));
	console.log(Object.values(obj));
}

keysAndValues({ a: 1, b: 2, c: 3 });
keysAndValues({ a: "Apple", b: "Microsoft", c: "Google" });
keysAndValues({ key1: true, key2: false, key3: undefined });




// Exercise 3 : Counter Class
// Analyze the code below, what will be the output?
class Counter {
	constructor() {
		this.count = 0;
	}

	increment() {
		this.count++;
	}
}

const counterOne = new Counter();
counterOne.increment();
counterOne.increment();

const counterTwo = counterOne;
counterTwo.increment();

console.log(counterOne.count);
//the output will be 3. once we let the counterTwo be counterOne, it is exactly
//like doing the operations on counterOne.