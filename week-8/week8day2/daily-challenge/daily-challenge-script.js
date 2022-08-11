let frm = document.querySelector('form');
console.log(frm);
let hidden = document.getElementsByName('data');


const btn = document.getElementById('btn');

btn.addEventListener('click', (e)=> {
	e.preventDefault();
	const firstName = frm.firstName.value;
	const lastName = frm.lastName.value;
	console.log(firstName);
	console.log(lastName);
	let result = {firstName: firstName, lastName: lastName};
	// result1= [...result, firstName, lastName];
	console.log(result);
	console.log(JSON.stringify(result));
	
	const appear = document.createElement('appear');
	appear.innerText = JSON.stringify(result);
	frm.appendChild(appear);
})

