// create a function called pangram - get the sentence as an input
// A pangram is a sentence that contains all the letter of tha alphabet

// return true if the sentense contains all
const pangram = (s) =>{
	let alphabet = 'abcdefghijklmnopqrstuvwxyz';
	let lowerCase = s.toLowerCase().split(' ').join('')
	console.log(lowerCase);

	for (let i=0; i<alphabet.length; i++) {
		console.log(lowerCase.indexOf(alphabet[i]));
		if (lowerCase.indexOf(alphabet[i]) ===-1) {
			return 'not pangram';
		}
	} return 'pangram'
}
console.log(pangram("The quick brown fox jumps over the lazy dog"));






// function checkPangram() {
// 	isPangram? return true: return false;
// }

// function isPangram (string) {
// 	let pangram = 'The quick brown fox jumps over the lazy dog';
// 	let result = text.includes("world", 12);
// }
