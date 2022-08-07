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




let selected = Array.from(select.options)
.filter(option => option.selected)
.map(option => option.value);

console.log(selected);