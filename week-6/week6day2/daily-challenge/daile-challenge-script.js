//Daily Challenge : Go Wildcats

const gameInfo = [
{
 username: "john",
 team: "red",
 score: 5,
 items: ["ball", "book", "pen"]
},
{
 username: "becky",
 team: "blue",
 score: 10,
 items: ["tape", "backpack", "pen"]
},
{
 username: "susy",
 team: "red",
 score: 55,
 items: ["ball", "eraser", "pen"]
},
{
 username: "tyson",
 team: "green",
 score: 1,
 items: ["book", "pen"]
},
];


//Create an array using forEach that contains all the usernames from the gameInfo array,
// add an exclamation point (ie. “!”) to the end of every username.
let usernameStudents = [];
gameInfo.forEach((item) => {usernameStudents.push(`${item["username"]}!`)});
console.log(usernameStudents);



// 2. Create an array using forEach that contains the usernames of all players
// with a score bigger than 5. Use the ternary operator.
let winners = [];
gameInfo.forEach (item => {
  item.score>5? winners.push(`${item["username"]}`): null;
})
console.log(winners);



// 3. Find and display the total score of the users. (Hint: The total score is 71)
let sumScore = 0;
gameInfo.forEach(item => {
  sumScore = sumScore + item.score
})
console.log(sumScore);