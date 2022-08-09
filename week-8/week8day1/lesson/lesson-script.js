//mine:
  // // get the form
  // let theForm = document.forms.yours; 
  // console.log(theForm);
  // // <form name="yours">
  // //   <input name="one" value="55555">
  // //   <input name="two" value="2">
  // // </form>

  // // get the element
  // let elem = theForm.elements.one; 
  // console.log(elem); 
  // // <input name="one" value="55555">



// let formYay = document.forms[0];
// let ageElems = formYay.elements.age;
// console.log(ageElems);  

//   console.log(ageElems[0].value); // "10"


  // console.log(form.elements.login); // <input name="login" type="text">
  // let formFieldset = form.elements.userFields;
  // console.log(formFieldset);

  // console.log(fieldset.elements.login == form.elements.login); ......fieldset doesn't work!






// console.log(form.elements.login == form.login); // true, the same <input>
// form.elements[0].name = "username";
// // change the name of the input
// // form.elements updated the name:
// console.log(form.elements.login); // undefined
// console.log(form.elements.username); // <input name="username">
// // form allows both names: the new one and the old one
// console.log(form.username == form.login); // true




// let selected = Array.from(select.options)
// .filter(option => option.selected)
// .map(option => option.value);

// console.log(selected);


document.createElement('option');
// let option = new Option("Text", "value");
let option = new Option("Text", "value", true, true);


function validate(frm){
  console.log(frm);
  let val = frm.txt.value;
  alert(val)
  if(val === 'ziv')
    return false;
  else
    return true;
}


// let form = document.createElement('form');
// form.action = 'https://google.com/search';
// form.method = 'GET';
// form.innerHTML = '<input name="q" value="test">';
// document.body.append(form);


// formElem.onsubmit = async (e) => {
//   e.preventDefault();
//   let response = await fetch('/article/formdata/post/user', {
//     method: 'POST',
//     body: new FormData(formElem)
//   });
// }

// let result = await response.json();
// alert(result.message);


// let formData = new FormData();
// formData.append('key1', 'value1');
// formData.append('key2', 'value2');
// console.log(formData);

// for(let [name, value] of formData) {
//         console.log(`${name} = ${value}`); // key1 = value1, then key2 = value2
//       }



// const form  = document.getElementsByTagName('form')[0];
// const email = document.getElementById("mail");
// const name = document.getElementById("name");
// const tel1 = document.getElementsByTagName('tel1');

// email.addEventListener("input", function (event) {
//   if (email.validity.typeMismatch) {
//     email.setCustomValidity("I am expecting an e-mail address!");
//   } else {
//     email.setCustomValidity("");
//   }
// });


// tel1.addEventListener("input", function(event){
//   if (tel1.validity.typeMismatch) {
//     tel1.setCustomValidity("I am expecting 3 digits!");
//   } else {
//     tel1.setCustomValidity("");
//   }
// })

// form.addEventListener("submit", function (event) {
//   if(!email.validity.valid) {
//     email.setCustomValidity("I am expecting an e-mail address!");
//   } else {
//     email.setCustomValidity("");
//   }
// });

//ziv:
// let opt = new option('Melon', 'melon') ;
// // document.createElement('option');
// opt.value = 'melon';
// opt.innerText = "Melon";
// Selection.oppendChild(opt);