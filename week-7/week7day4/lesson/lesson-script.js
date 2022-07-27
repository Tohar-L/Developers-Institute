var employee = {    // Object we want to destructure
    firstname: 'Jon',
    lastname: 'Snow',
    dateofbirth: '1990'
};

console.log(employee);

//exercise:
let myObj = {
    name : "John",
    lastName : "Doe",
    age : 25,
    friends : ["Mark", "Lucie", "Ana"]
};
var newObj1 = Object.entries(myObj);

console.log(newObj1.length);
for (let i=0; i<newObj1.length; i++) {
    for (var [key, value] of newObj1) {
    }
    console.log(`The ${i}  key is ${key}. The ${i} value is ${value}`)
}


//nested destructuring:
const student = {
    name: 'John Doe',
    age: 16,
    scores: {
        maths: 74,
        english: 63,
        science: 85
    }
};

const {name, scores: { maths = 0, english = 0, science = 0 }} = student;    

function displaySummary() {
    console.log('Hello, ' + name);
    console.log('Your Maths score is ' + maths);
    console.log('Your English score is ' + english);
    console.log('Your Science score is ' + science);
}(student) ///////------------here is a self-displaying function!




//classes exercise:
//Analyse the code below. Display the type of each rabbit and make them speak
class Rabbit {
    constructor(type) {
        this.type = type;
    }
    speak(line) {
        console.log(`The ${this.type} rabbit says '${line}'`);
    }
}
let killerRabbit = new Rabbit("killer");
let blackRabbit = new Rabbit("black");


killerRabbit.speak('lklk');
blackRabbit.speak('sweety');



class Animal { 
  constructor(name) {
    this.name = name;
}
speak() {
    console.log(`${this.name} makes a noise.`);
}
}

class Dog extends Animal {
  constructor(name,noise) {
    super(name);
    this.noise = noise;
}
speak() {
    console.log(`${this.name} barks. It says ${this.noise}`);
}
}

let d = new Dog('Mitzie', "Wouaf");
console.log(d.name);
console.log(d);




let date = document.getElementById('datetime');
date.addEventListener("change",function(event){
    let date = new Date(event.target.value);
    console.log(date);
}
);

let now = new Date();
console.log(now);

let dateString = now.toString();
console.log('toString',dateString);

let day = now.getDay();
console.log('getDay',day);

let dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
let dayName = dayNames[day];
console.log('dayNames',dayName);

console.log('getMonth',now.getMonth() + 1)
//returns the month of the date from 0 to 11,
//with 0 being January and 11 being December.

console.log('getDate',now.getDate())
// gives us the number for the dat of the month.

console.log('getFullYear',now.getFullYear())
// returns the 4 digit version of the year.

console.log('getHours',now.getHours())
// gives us a number from 0 to 23,
//which corresponds to midnight and 11pm.

console.log('getMinutes',now.getMinutes())
// returns the minutes of the hour from 0 to 59.

console.log('getSeconds',now.getSeconds())
// returns the seconds of the minute from 0 to 59.

console.log('getMilliseconds',now.getMilliseconds())
// returns a number from 0 to 999.

console.log('getTime',now.getTime())
// gives us the number of milliseconds that have elapsed since Jan 1, 1970 midnight UTC.

let today = new Date();
let anotherDay = new Date(2021,1,19, 11, 55)
let diff = anotherDay - today;
console.log('diff',diff);
let days = diff / (1000 * 60 * 60 * 24);
console.log('days',days);
console.log(Math.floor(days));