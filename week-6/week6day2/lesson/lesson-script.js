function moveCommand (direction) {
	var whatHappens;
	switch (direction) {
		case "forward": 
		whatHappens = "you encounter a monster";
		break;
		case "back": 
		whatHappens = "you arrived home";
		break;
		case "right": 
		whatHappens = "you found a river";
		break;
		case "left": 
		whatHappens = "you run into a troll";
		break;
		default:
		whatHappens = "please enter a valid direction";
	}
	return whatHappens;
};


const basket = ['apples', 'oranges', 'grapes'];


//for of loops: iterating through the items of the string/array
for (item of basket) {
	console.log(item);
}

const detailedBasket = {
	apples: 5, 
	oranges: 10,
	grapes: 1000
}


//for in loops: enumorating properties in objects
for (item in basket) {
	console.log(item);
}

for (item in detailedBasket) {
	console.log(item);
}






//ES5 and ES6:
//destructuring:
const obj = {
	player: 'bobby', 
	experience: 100, 
	wizardLevel: false,
}

//we can grab a variable like this:
// const player = obj.player;
// const experience = obj.experience;

//or, shorter!:
const {player, experience} = obj;
let {wizardLevel} = obj;



//we can have things that are dynamic:
const name = 'Hermione Granger';

const tryObj = {
	[name]: 'hello',
	[1+2]: 'hihi',
}
console.log(tryObj); //-----{3: 'hihi', Hermione Granger: 'hello'}


//another veryyy cool thing:
const a = 	"Simon";
const b = true;
const c = {};

//to use these in an object, we would usually need to write: 
// const obj2 = {
// 	a: a, 
// 	b: b, 
// 	c: c
// }

//but if the keys and the values are the sane, ES6 allows us to write just once:
const obj2 = {a, b, c};





//ES7: includes
const pets = ['cat', 'dog', 'bat'];
pets.includes('dog'); //--true
pets.includes('fish'); //-----false

'Helloooo'.includes('o'); //-----true

const sqaure = (x) => x**2; //that means x in the power of 2!
const cube = (y) => y**3;