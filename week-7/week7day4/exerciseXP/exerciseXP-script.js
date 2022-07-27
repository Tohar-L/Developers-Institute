//  Exercise 1 : Location
// Analyze the code below. What will be the output?
const person = {
  name: 'John Doe',
  age: 25,
  location: {
    country: 'Canada',
    city: 'Vancouver',
    coordinates: [49.2827, -123.1207]
  }
}

const {name, location: {country, city, coordinates: [lat, lng]}} = person;

console.log(`I am ${name} from ${city}, ${country}. Latitude(${lat}), Longitude(${lng})`);

//expected: I am John Doe from Vancouver, Canada. Latitude(49.2827), Longitude(-123.1207)


//Exercise 2:
// Display Student InfoUsing the code above, destructure the parameter inside the function
//and return a string as the example seen below:
//output : 'Your full name is Elie Schoppik'

function displayStudentInfo(objUser){
  const {first, last} = objUser;
  let something = `Your full name is ${first} ${last}`;
  return something;
}

displayStudentInfo({first: 'Elie', last:'Schoppik'});



//Exercise 3: User & Id
//Using methods taught in class, turn the users object into an array:
const users = { user1: 18273, user2: 92833, user3: 90315 }

const usersArray = Object.entries(users);
console.log(usersArray);


//Modify the outcome of part 1, by multipling the user’s ID by 2.
for (var [key, value] of usersArray){
  console.log(`'${key}' ${value*2}`)
}


//Exercise 4 : Person Class
//Analyze the code below. What will be the output?

class Person {
  constructor(name) {
    this.name = name;
  }
}

const member = new Person('John');
console.log(typeof member); //-------exepected: object


//Exercise 5 : Dog Class
class Dog {
  constructor(name) {
    this.name = name;
  }
};
// Analyze the options below. Which constructor will successfully extend the Dog class?

class Labrador extends Dog {
  constructor(size) {
    super(name);
    this.size = size;
  }
};



// Exercise 6 : Challenges
// Evaluate these (ie True or False)
[2] === [2] //---false
// {} === {} //---false

// What is, for each object below, the value of the property number and why?
const object1 = { number: 5 }; //----5
const object2 = object1;  //----5
const object3 = object2; //----5
const object4 = { number: 5}; //----5

object1.number = 4;
console.log(object2.number); //----4
console.log(object3.number); //----4
console.log(object4.number); //----5

// Create a class Animal with the attributes name, type and color.
// The type is the animal type, for example: dog, cat, dolphin ect …

class Animal {
  constructor (name, type, color) {
    this.name = name;
    this.type = type;
    this.color = color;
  }
}
// Create a class Mamal that extends from the Animal class.
//Inside the class, add a method called sound(). This method takes a parameter:
// the sound the animal makes, and returns the details of the
// animal (name, type and color) as well as the sound it makes.
// Create a class Mamal that extends from the Animal class. Inside the class,
// add a method called sound(). This method takes a parameter: the sound the animal makes,
// and returns the details of the animal (name, type and color) as well as the sound it makes.

class Mamal extends Animal {
  constructor (name, type, color, sound) {
    super (name, type, color);
    this.sound = sound;
  }

  soundMethode (){
    console.log(`${this.sound} I'm a ${this.type}, my name is ${this.name}, and i'm ${this.color}`);
  }
}


// Create a farmerCow object that is an instance of the class Mamal. The object accepts a name,
// a type and a color and calls the sound method that “moos” her information.
// For example: Moooo I'm a cow, named Lily and I'm brown and white

const farmerCow = new Mamal ('Edna', 'cow', 'black and white', 'Mooooo');