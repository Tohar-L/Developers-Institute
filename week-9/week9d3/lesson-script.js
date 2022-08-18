const f = fetch('https://swapi.dev/api/people/1')

console.log(f);

f.then(res => {return res.json()
}).then(data=> {
	console.log(data)
}).catch(e=> {
	console.log()
})
;