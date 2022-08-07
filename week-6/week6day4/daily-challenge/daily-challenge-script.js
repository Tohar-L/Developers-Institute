let client = "John";

let groceries = {
    fruits : ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice : "20$",
    other : {
        payed : true,
        meansOfPayment : ["cash", "creditCard"]
    }
}

//Create an arrow function named displayGroceries,
//that console.logs the 3 fruits from the groceries object. Use the forEach method.

// displayGroceries = () => groceries.fruits.forEach(console.log);
displayGroceries = () => {
    groceries.fruits.forEach(e => {
        console.log(e);
    })}; displayGroceries();