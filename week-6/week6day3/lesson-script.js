const language = "Python";
(learningAnotherLanguage = (param) => {
  learningNewLanguage(param);
  whatLanguage();

  function learningNewLanguage(param) {
    console.log(`Learning ${param} is fun!.`);
  }

  function whatLanguage() {
    console.log(`${param} is a server-side language.`);
  }
})(language);


// const language1 = 'JavaScript';

// (function learningLanguage(param){
//   return `I am learning ${param}.`;
// })(language1)