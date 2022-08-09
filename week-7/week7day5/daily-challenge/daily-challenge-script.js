// function anagramCheck (a, b) {
// 	console.log(a, b);
// 	// anagram(true) ? console.log("yes") : console.log("no");
// }('hellow', 'bye');


// function anagram () {
// 	true;
// }


// const array = 'dena';
// const newArr = array.split(['']);
// const secondWord = 'nedt';
// const newSecondWord = secondWord.split(['']);
// console.log('newArr:', newArr);
// console.log('newSecondWord', newSecondWord);

// const newArra = array.includes(element, 0);
 // for (item of 'tohar'){
	// console.log(item)
// }

// array.forEach(function (e){
// 	console.log(e)
// })



// good!!!!: three next ones:
// var isAna = newArr.every((value) =>{
// 	for (let i=0; i<newArr.length; i++) {
// 		return (value == newSecondWord[i]);
// 	}})

// function checking(array, secondWord, newArr, newSecondWord) {
// 	for (let i=0; i<newArr.length; i++){
// 		const array = 'dena';
// 		const newArr = array.split(['']);
// 		const secondWord = 'nedt';
// 		const newSecondWord = secondWord.split(['']);
// 		console.log('newArr:', newArr);
// 		console.log('newSecondWord', newSecondWord);
// 		if (newArr.length === newSecondWord.length){
// 			newSecondWord.includes(newArr[i])? console.log(`${array} is an anagram of ${secondWord}`): console.log(`${array} is not an anagram of ${secondWord}`);
// 		} else {
// 			console.log("not an anagram")
// 		}
// 	}

// newArr.length == newSecondWord.length? console.log(true): console.log(false);

// console.log()
// 1st loop:
// //is a an anagram of b?
// newSecondWord.includes( newArr[0]);//true

// //2nd loop:
// newSecondWord.includes( newArr[1]);//true

// // 3rd loop
// newSecondWord.includes( newArr[2]);//true

// //4th loop: 
// newSecondWord.includes( newArr[3]);//true

// //5th loop:
// newSecondWord.includes( newArr[4]); //false

//next to do is check the second condition. only if the "if" loop is true will we enter the 2nd condition loop. else{console.log(false)}
//2nd condition:

// var isAna = newArr.every((value) =>{
// 	return (value == 'a', 't','t');
// })


// function isAnangram (value) {
// 	newArr.some((value) =>{
// 		return (value == 't');
// 	})
// }

// console.log(isAna? console.log(true): console.log(false));



// for (let i=0; i<array.length; i++) {
// 	if {array.includes('t');
// } return true {
// 	return false
// };

// function filterArray (array, param) {
// 	array.filter( (param) =>{
// 		array.includes('param');
// 	})}

// let anagramCheck = (filterArray.length === array.length) ? console.log(true) : console.log(false);

// function anagram(a[], b[]) {
// 	// let a = [];
// 	// let b = [];
// 	let param;
// 	if (b.includes(a[param])) {
// 		return true
// 	} else {
// 		return false
// 	}
// }





//ziv:
const anagram = (str1, str2) => {
	if (str1.length !== str2.length) {
		return false;
	}
	let sort1 = str1.split('').sort();
	let sort2 = str2.split('').sort();
	return sort1.join('') === sort2.join('');
}


//daniel did: pretty much the same
let sort1 = str1.split('').sort().join('');
let sort2 = str2.split('').sort().join('');	
return sort1 === sort2


//ziv - another way for taking off white spaces:
let sort1 = str1.split('').filter(item=> item !== '').sort().join('');









//mine:
// const array = 'dena';
// const newArr = array.split(['']);
// const secondWord = 'nedt';
// const newSecondWord = secondWord.split(['']);
// console.log('newArr:', newArr);
// console.log('newSecondWord', newSecondWord);

// function checking(string1, string2) {
// 	var new1 = string1.split(['']);
// 	console.log(new1);
// 	var new2 = string2.split(['']);
// 	console.log(new2);


// 	for (let i=0; i<new1.length; i++){
// 		var doesInclude = new2.includes(new1[i]);
// 		// console.log(doesInclude);
// 		if (new1.length === new2.length){
// 			if (doesInclude == true){
// 				console.log(`the letter ${new1[i]} is in the word ${string2}`);
// 			} else {
// 				console.log(`the letter ${new1[i]} does not appear in the word ${string2}, therefor the word ${string1} isn't an anagram of ${string2}`)
// 				break
// 				// console.log(`${string1} is not an anagram of ${string2}`)
// 			};	
// 		} else {
// 			console.log("the words aren't the same length, not an anagram")
// 		}
// 	}
// }

// // if {doesInclude == true}

// // new2.includes(new1[i])