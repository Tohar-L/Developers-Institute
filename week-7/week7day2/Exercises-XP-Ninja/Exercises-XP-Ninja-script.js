//Exercise 1 : Dog Competition
// Hint: Dog Years -> the dog’s age is the age multiplied by 7.
//Use a loop to find the sum of all the dog’s ages in dog years.
// Using the reduce() method, find the sum of all the dog’s ages in dog years.

const data = [
{
	name: 'Butters',
	age: 3,
	type: 'dog'
},
{
	name: 'Cuty',
	age: 5,
	type: 'rabbit'
},
{
	name: 'Lizzy',
	age: 6,
	type: 'dog'
},
{
	name: 'Red',
	age: 1,
	type: 'cat'
},
{
	name: 'Joey',
	age: 3,
	type: 'dog'
},
{
	name: 'Rex',
	age: 10,
	type: 'dog'
},
];


// const onlyYears = data.map((i, val)=> {
// 	console.log(i, val)
// 	;
// })
// const years;
var sum = 0
for (let i=0; i<6; i++) {
	// console.log(data[i].age)
	// var sumData = sum+=data[i].age;
}
// console.log(sumData);

const onlyYears = data.map((value, index) => {return (data[index].age)})
console.log(onlyYears);
const sumYears = onlyYears.reduce((acc, value) => acc+value);
console.log(sumYears);





//Exercise 2 : Email             ---------to be continued!!!
//Clean up this email to have no whitespaces. Do it in a single line (return a new string).
const userEmail3 = ' cannotfillemailformcorrectly@gmail.com '; 
const newUserMail = userEmail3.split('');
console.log(newUserMail);
for (let i=0;i<7; i++){console.log(newUserMail[i]);
	var mailArr = sum+=newUserMail[i];
};
console.log(mailArr);


// newUserMail.toString();
// newUserMail['0...6' '7...10' '11...15' '16...20' '21...29' '...rest'];

// userEmail3.split(one, two)





// Exercise 3 : Employees #3
// Change the structure of the users array. The user’s full name should be the key and the user’s role should be the value.
let users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
{ firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
{ firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
{ firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
{ firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
{ firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
{ firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}];

for (let i=0; i<7; i++) {
	const fullName = `${users[i].firstName} ${users[i].lastName}: ${users[i].role}`;
	console.log(fullName);
};




//Exercise 4 : Array To Object
// Use a for loop to get this output { x: 1, y: 1, z: 2 };

const letters = ['x', 'y', 'z', 'z'];
for (let i=0; i<3; i++) {
	var newLetters = `${letters[i]}: ${i+1}`
	console.log(newLetters);
	const [index] = letters;
}


//Use the reduce() method to get this output { x: 1, y: 1, z: 2 };
// const newLetters1 = letters.reduce((acc, value, index) => `${acc}: ${index-1} ${value}`);
// console.log(newLetters1);


// var map = letters.reduce((obj, a) => {
// 	obj[a] = ++obj[a] || 1;
// 	return obj;
// }, {});
// console.log(map);