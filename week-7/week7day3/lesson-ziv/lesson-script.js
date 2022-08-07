let arr = [2,5,3,7,2,3,6,8,6];

const minimumDistance = (arr) =>{
	let temp=[];
	for (let i=0; i<arr.length; i++) {
		for (let j=i+1; j<arr.length; j++){
			if (arr[i] == arr[j]) {
				temp.push(j - i);
			}
		}
	}
	return temp.sort()[0]
}

console.log(minimumDistance(arr));




//this is an object:
const population ={
	tokyo: 37833000,
	delhi: 24953000,
	shenghai: {
		men: 22991000,
		women: 3000000
	}
}

// to loop through the array:
for(x in population){
	console.log(x, population[x])
}

// Object.keys:
let keys = Object.keys(population);
console.log(keys);

keys.forEach((item, i)=> 
	console.log(item)
	)

// Object.values:
let values = Object.values(population);
console.log(values);

values.forEach((item, i)=> 
	console.log(item)
	)

// and now we can use what loop we like! map, filter, findIndex, sort... anything!
console.log(values.sort());

// Object.entries:
const entries = Object.entries(population);
console.log(entries);
entries.forEach(([key, value]) => {
	console.log(key); 
	console.log(key, value)
})

// entries.forEach(([key, value])=>{
// 	// console.log(key, value);
// 	let [key, value] = item;
// 	console.log(item);
// })



// cloning:
let newPopulation = {...population};
newPopulation.shenghai.men = 1;

console.log(population);//-------men:1
console.log(newPopulation);//-----men:1



// what if i don't want it to change in the original array? de-cloning.
let newPopulation1 = JSON.stringify(population);
console.log(newPopulation1);
//very useful for sending data from front end to back end, cause we can only send there text. strings. JSON before XML.
// and to turn back to js:
// let a = JSON.parse(newPopulation1);
// // console.log(a);


// a.shenghai.men = 5;
// console.log(a);
// console.log(population);

// short one line:
// let a = JSON.parse(JSON.stringify(population));
// console.log(a);





// merging!
const population1 = {
	tokyo: 89000000,
	delhi: 250000000,
	telaviv: 100000
}

const population2 = {...population1, ...population};
console.log(population2); //if the kets are the same, it will over write the value.

// let tokyo = population.tokyo;
// let delhi = population.delhi;
// let shenghai = population.shenghai;

const {tokyo, delhi, shenghai} = population;
console.log(tokyo);


//spreading:
const population3 = {...population1, tokyo: 2 , telaviv: 5};
console.log(population3); //it will over write the values.


// nested Object destructoring:     ------will be used in react,t o put it inside the function component.
//can be used everywhere we like of course: node JS etc.
function dist (obj) {
	const {tokyo, delhi, shenghai:{men, women}} = obj;
	console.log(tokyo, delhi,men, women);
}
dist(population);



// exercise:
let users = {
	user1: {
		age: 44, 
		name: 'picard'
	},
	user2:{
		age:12,
		name: 'sisko'
	},
	user3:{
		age: 109, 
		name: 'janeway'
	}
};

// filter for all users older than 30
// and store the data in an Array
// use Array.filter Array.map
// hint - Object.keys
// ...// 
// [
//   {id:'user1',age:44, name:'picard'},
//   {id:'user3',age:109, name:'janeway'},
// ]


const usersKeys = Object.keys(users);
console.log(usersKeys);
const adult = usersKeys.filter(key=> users[key].age>30)
.map(id => ({id, ...users[id]}// like writing: ...users['user1'] and spreading all the data nicely in an object.
	//and then writing: ...users['user2'];
	));
console.log(adult);

// const adult = Object.keys(users).filter(key=> users[key].age>30).map(id => ({id, ...users[id]}));

// let 

// function a ()= {users.filter((item, i) => {
// 	console.log(item)
// 	// const item.age = a;
// 	// console.log(a)
// })


//inheritance in classes