 let hamburger = document.querySelector('.hamburger')
    let navBar = document.querySelector('.navbar') 
    
    hamburger.addEventListener('click', () => {
        navBar.classList.toggle('navlink')
        hamburger.classList.toggle('close')
    })

  function validateForm() {
  let firstName = document.forms["myForm"]["firstname"].value;
  if (firstName == "") {
    alert("Single name should be provided and must not contain a number");
    return false;
  }
}
function validateForm() {
  let email = document.forms["myForm"]["email"].value;
  if (email == "") {
    alert("Email must be filled out correctly");
    return false;
  }
}
// function validateForm() {
//   let subject = document.forms["myForm"]["subject"].value;
//   if (subject == "") {
//     alert("subject should not be more than 10 words and must not contain a number");
//     return false;
//   }
// }
// function validateForm() {
//   let textContent = document.forms["myForm"]["textarea"].value;
//   if (textarea == "") {
//     alert("the text should not be less than 50 words ");
//     return false;
//   }
// }

// function validateForm() {
//   let submit = document.forms["myForm"]["submit"].value;
//   if (submit == "") {
//     alert("the text should not be less than 50 words ");
//     return false;
//   }
// }











  // function validateForm(){

  //   let firstName= document.forms.myForm.firstname.value;
  //   let email= document.forms.myForm.email.value;
  //   let subject= document.forms.myForm.subject.value;
  //   let textContent= document.forms.myForm.textarea.value;
  // }
  // if (firstname===""){
  //   alert("Please enter your name properly");
  //   firstname.focus
  //   return false;
  // }
  // if (subject===""){
  //   alert("Please enter a subject not less than 10 words");
  //   firstname.focus
  //   return false;
  // }


// const firstName = document.getElementById('firstName');
// const email = document.getElementById('email');
// const subject= document.getElementById('subject');
// const textArea= document.getElementById('textarea')
// const submit= document.getElementById('submit')
// const form = document.getElementById('form');

// submit.disabled = true;

// const validateFirstName = () => {
    
//     const firstNameValue = firstName.value.trim();
    
//     if (firstNameValue == '') {
//         errorMessage(
//           firstName,
//           'Name cannot be blank  (Name can accept any character except numbers)'
//         );
        
//     } else if (isValidName(firstNameValue)) {
//         errorMessage(firstName, 'Name accept any character except numbers');
//     } else {
//         success(firstName);
//     }
// }

// const validateEmail = () => {

//     const emailValue = email.value.trim();
    
//     if (emailValue == '') {
//         errorMessage(email, 'Email cannot be blank');
//     } else if (!isEmail(emailValue)) {
//       errorMessage(email, 'Not a valid Email')
//     } else {
//       success(email);
//     }
// }

// const validatetextArea = () =>{ 
//   const textAreaValue = textArea.value.trim ();
//   if ( textAreavalue < 50 ){
//     errorMessage(textArea, 'Write up to 50 words');
//   }else{
//     success(textArea);
//   }
// }


// const errorMessage = (input, message) => {
//     const formControl = input.parentElement;
//     const small = formControl.querySelector('small');
//     formControl.className = 'form-control error';
//     small.innerText = message;
// }
// const success = (input) => {
//   const formControl = input.parentElement;
//   formControl.className = 'form-control success';
// }

// const isEmail = (email) => {
//   return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
//     email
//   )
// }

// const isValidName = (name) => {
//     let regEx = /\d|\d[^0-9]|[^0-9]\d/gi
//     return name.match(regEx);
// }

// let firstValidation = firstName.addEventListener('blur', (e) => {
//   e.preventDefault()
//   validateFirstName()
// })

// submit.addEventListener('click', (e) => {
//   e.preventDefault();
//   addLoader()
// })

// if (
//   firstValidation &&
//   secondValidation &&
//   thirdValidation &&
//   forthValidation &&
//   fifthValidation
// ) {
//   submit.disabled = true
// }