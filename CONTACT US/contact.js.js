 let hamburger = document.querySelector('.hamburger')
    let navBar = document.querySelector('.navbar') 
    
    hamburger.addEventListener('click', () => {
        navBar.classList.toggle('navlink')
        hamburger.classList.toggle('close')
    })





const fname= document.getElementById("fname");
const email = document.getElementById("email");
const subject= document.getElementById("subject");
const textArea= document.getElementById("textarea");

fname.addEventListener('keyup', () => {
    if (fname === 0 || fname==="" ){
        alert("Name must be filled out correctly")
        // return false;
    }
})

// hamburger.addEventListener('click', () => {
// form.addEventListener('submit', e => {
//     e.preventDefault();

//     validateInputs();
// });

// const validateInputs= () => {
//     const nameValue= username.value.trim();
//     const emailValue= username.value.trim();
//     const subjectValue= username.value.trim();
//     const textAreaValue= username.value.trim();

// }