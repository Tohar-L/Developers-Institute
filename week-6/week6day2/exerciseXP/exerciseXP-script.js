// exercise-1
// 1. Analyse the code below, and predict what will be the value of a in all the following functions.
// 2. Write your prediction as comments in a js file.

// #1
function q1() {
    var a = 5;
    if(a > 1) {
        a = 3;
    }
    alert(a);// prediction: 3
}

// // run in the console:
// q1()

//#2
var a = 0;
function q2() {
    a = 5;
}

function q22() {
    alert(a);
}

// // run in the console:
// q22() --prediction 0
// q2() --prediction 5
// q22() -- prediction 5

// //#3
function q3() {
    window.a = "hello";
}


function q32() {
    alert(a);
}

// // run in the console:
// q3() --prediction: if we will run window.a it will be 3. (otherwise undefined)
// q32() -- prediction 3

// //#4
var a = 1;
function q4() {
    var a = "test";
    alert(a);
}


// // run in the console:
// q4() --prediction "test".

// //#5
var a = 2;
if (true) {
    var a = 5;
    alert(a);
}
alert(a);

//prediction a=5 and after that a=5 again.
//(if we would alert a before "if true", then a=2)



// exercise-2
//1. Transform the winBattle() function to an arrow function.
//2. Create a variable called experiencePoints.
//3. Assign to this variable, a ternary operator. If winBattle() is true, the experiencePoints variable should be equal to 10, else the variable should be equal to 1.
//4. Console.log the experiencePoints variable.

// function winBattle() {
//     return true;
// }

// #1
var winBattle = () => {
    return true;
}
var experiencePoints = () => {
    winBattle(true) ?  experiencePoints=10 :  experiencePoints=1; 
}
console.log (experiencePoints());


// exercise-3:
// Write a JavaScript arrow function that checks whether the value of the argument
// passed, is a string or not. Use ternary operator
// Check out the example below to see the expected output

//long way:
function isString(str) {
    if (typeof (str) == 'string') {
       return true;
   } 
   return false;
}

//with arrow+ternary operator:
isString = (str) => {
 (typeof (str) == 'string') ? console.log(true) : console.log(false);
}




// exercise-4
//Write a JavaScript program that displays the colors in the following order :
// “1# choice is Blue.” “2# choice is Green.” “3# choice is Red.” ect…
//Check if at least one element of the array is equal to the value “Violet”.
// If yes, console.log("Yeah"), else console.log("No...")

const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
colors.forEach((color, index) => {
    console.log(`#${index+1} choice is ${color}`);
})

var isViolet = colors.some((value) => {
    return (value == "Violet");
});
console.log(isViolet ? console.log("Yeah") : console.log ("No..."));






// exercise-5
//Write a JavaScript program that displays the colors this way:
//“1st choice is Blue .” “2nd choice is Green.” “3rd choice is Red.” ect
let ordinal = ["th","st","nd","rd"];
let newOrdinal = ["st","nd","rd","th"];


colors.forEach((color, index) => {
    // console.log(`${index+1} choice is: ${colors[index]}`);
    let temp = '';
    if (index>2) {
        temp = newOrdinal[3];
    } else {
        temp = newOrdinal[index];
    }
    console.log(`${index+1}${temp} color is ${colors[index]}`);
})

