//Exercise 1: Analyzing The Map Method
//Analyze this code, what will be the output ?

[1, 2, 3].map(num => {
  if (typeof num === 'number') return num * 2;
  return ;
}); //expected: [2, 4, 6]


//Exercise 2: Analyzing The Reduce Method
const reduceCheck = [[0, 1], [2, 3]].reduce(
  (acc, cur) => {
    return acc.concat(cur);
  },
  [8,9],
);// I don't understand the word "concat" and the whole acc.concat(cur) syntax
console.log(reduceCheck);


//Exercise 3 : Analyze This Code. What is the value of i?
const arrayNum = [1, 2, 4, 5, 8, 9];
const newArrayNum = arrayNum.map((num, i) => {
  console.log(num, i);
  alert(num);
  return num * 2;
})

//answer: i stands for index, so will change from 0 to 5.
//my question: where is the "return num * 2" seen??






//Exercise 4 : Nested Arrays
//1. modify it to look like this array: [1,2,3,[4],[5]].
const array = [[1],[2],[3],[[[4]]],[[[5]]]];
// const newArray = [array[0][0], array[1][0], array[2][0], array[3][0][0], array[4][0][0]];
// console.log(newArray);

// Bonus Try to do it on one line.
newArray = ()=> {console.log([array[0][0], array[1][0], array[2][0], array[3][0][0], array[4][0][0]]);}
newArray()

// is there a shorter way to do this? to put all 1,2,3 in the same function, and then 4,5 in a different one;
// const newArray = array.map((i, value) => array[i][0]); -----says that 0 is unidentified.
// let [a, b, c, d, e] = array;
// const newArray = [[a[0], b[0], c[0], d[0][0], e[0][0]];-------- still says that 0 is unidentified.
// console.log(newArray)


//2. take this array 
const greeting = [["Hello", "young", "grasshopper!"], ["you", "are"], ["learning", "fast!"]];
//and modify it to look like this array:
//["Hello young grasshopper!","you are","learning fast!"].
let [c, d, e] = greeting;
const newGreeting = [c.join(' '), d.join(' '), e.join(' ')];
console.log(newGreeting);

//3. Turn the greeting array into a string: ‘Hello young grasshopper you are learning fast!’.
console.log(newGreeting.join(' '));

// 4. Turn the trapped number 3 into: [3]
const trapped = [[[[[[[[[[[[[[[[[[[[[[[[[[3]]]]]]]]]]]]]]]]]]]]]]]]]];
console.log([trapped.join()]);
