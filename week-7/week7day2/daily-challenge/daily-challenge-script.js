let inventory = [
{ id: 1, car_make: "Lincoln", car_model: "Navigator", car_year: 2009 },
{ id: 2, car_make: "Mazda", car_model: "Miata MX-5", car_year: 2001 },
{ id: 3, car_make: "Honda", car_model: "Accord", car_year: 1983 },
{ id: 4, car_make: "Land Rover", car_model: "Defender Ice Edition", car_year: 2010 },
{ id: 5, car_make: "Honda", car_model: "Accord", car_year: 1995 },
];


// The function should loop through the array of object and return the
//  first car with the name “Honda”.
// then, return a string in the format This is a {car_make}
//  {car_model} from {car_year}.
// Hint : Find an array method that returns the value of the
//  first element in an array that pass a test.

let getCarHonda = ((carInventory) => {
	var firstHonda = inventory.find((element)=> element["car_make"] === "Honda");
	console.log(firstHonda);
	const {car_make, car_model, car_year} = firstHonda;
	const sentence = (`This is a ${car_make} ${car_model} from ${car_year}`);
	console.log(sentence);
});