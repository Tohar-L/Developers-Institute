// Exercise 3 : JSON Mario

let marioGame = {
  detail : "An amazing game!",
  characters : {
    mario : {
      description:"Small and jumpy. Likes princesses.",
      height: 10,
      weight: 3,
      speed: 12,
    },
    bowser : {
      description: "Big and green, Hates princesses.",
      height: 16,
      weight: 6,
      speed: 4,
    },
    princessPeach : {
      description: "Beautiful princess.",
      height: 12,
      weight: 2,
      speed: 2,
    }
  },
}

// Convert this JS object into a JSON object. What happens to the nested objects ?
// the nested objects all appear in the same long string, with curley brackets seperators.
let jsonMarioGame = JSON.stringify(marioGame, null, 2);
// debugger;
console.log(jsonMarioGame);

let marioPars = JSON.parse(jsonMarioGame);
console.log(marioPars);

// Convert and pretty print this JS object into a JSON object. (did this when turned the space number to 2)
// Use your web inspector to add a breakpoint.(sources, I picked line 29 and 31);
//Check the values of the JSON object in the debugger.