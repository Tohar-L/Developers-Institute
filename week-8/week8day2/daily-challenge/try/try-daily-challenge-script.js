



let form = document.querySelector('form');
console.log(form);

// let form1 = document.getElementsByTagName('form');
// console.log(form1);   ----less good because will be a collection. can't use for in loops.
//---------- same "grtElementsByClassName". same as querySelectorAll.

// let form2 = document.forms.form;
// console.log(form2);

// let form3 = document.forms[0];
// console.log(form3);
var nameValue = document.getElementsByName("firstName").value;
console.log(nameValue);


// form.addEventListener('submit', function (event) {
//     event.preventDefault();

    // const firstName = form.elements.firstnName.value;
    // const data = form.elements.data;

    // const firstName = document.getElementsByName('firstName').value;
    // const lastName = form.getElementsByName('lastName').value;

    // console.log(nameValue);
    // console.log(firstnName);// lastName);

    // console.log(JSON.stringify(`${firstnName, lastName}`));
    // form.elements.firstnName.value = JSON.stringify({firstnName, lastName});
    // form.elements.firstnName.value = "";

    // form.submit();
// })


// const formData = new FormData(form);
// console.log(formData);

// const tryForm = new HTMLFormElement(form);
// console.log(tryForm );


// const form = document.querySelector('#form');
// console.log(form);

// const btn = document.querySelector('#submit');
// console.log(btn);

// const values = [...formData.values()];

// let formData = new FormData(form);
// formData.append('key1', 'value1');
// formData.append('key2', 'value2');
// console.log(formData);

// for(let [name, value] of formData) {
//         console.log(`${name} = ${value}`); // key1 = value1, then key2 = value2
//     }



    // btn.addEventListener('click', (e) => {
    // 	e.preventDefault();
    // 	console.log(values);
    // })
    // const output = document.createElement('output');
    // output.innerText = formData;