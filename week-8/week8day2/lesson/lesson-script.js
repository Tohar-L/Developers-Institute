const promise = new Promise ((resolve, reject) => {
	if (true) { 
		resolve('stuff worked');
	} else {
		reject('error, it broke');
	}
})

promise
.then(result => {return result + '!'})
.then (result2 => result + '?')
// .then(result => 
// 	// throw Error)
// 	console.log(result);
.catch(() => console.log('error!'));