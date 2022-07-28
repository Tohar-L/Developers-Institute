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