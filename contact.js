 let hamburger = document.querySelector('.hamburger')
    let navBar = document.querySelector('.navbar') 
    
    hamburger.addEventListener('click', () => {
        navBar.classList.toggle('navlink')
        hamburger.classList.toggle('close')
    })

let fname= document.getElementById("fname");
let email = document.getElementById("email");
let subject= document.getElementById("subject");
let textArea= document.getElementById("textarea");
let submit= document.getElementById('submit');

// fname= fname.addEventListener('keyup', () =>{
//     if(firstname===0 || fname)
// })
 let fname = fname.addEventListener('keyup',() =>{
    let fullName = document.getElementById('FullName').value;    
    if (fullName.length ==   0){
        errorName.innerHTML = 'name cannot be empty'
        return false
    } 
    if (!fullName.match(/^[A-Za-z]\s{1}[A-Za-z]$/)){
        errorName.innerHTML = 'write full name';
        return false
    }else
     errorName.innerHTML = 'correct'
    return true
    
} )
let mail = Email.addEventListener('keyup',() =>{
        let Email = document.getElementById('Email').value;
           
           if (Email.length == 0){
               errorEmail.innerHTML = 'Email is required'
               return false
               } 
               if (!Email.match(/^[A-Za-z\._\-[0-9][@][A-Za-z][\.][a-z]{2,4}$/)){
                   errorEmail.innerHTML = 'Email Invalid';
                   return false
               }
               errorEmail.innerHTML = 'correct';
               return true
 })
let textContent = textArea.addEventListener('keyup',() =>{
        let textArea = document.getElementById('textarea').value;
        let required = 250;
        let left = required - textArea.length;
           
           if (left > 0){
               errorTextArea.innerHTML = left    +   ' more characters is required'
               return false
               } 
               if( left > 250){
                errorTextArea.innerHTML = left + ' number exceeeded'
                return false
               }
               errorTextArea.innerHTML = 'correct';
            return true
 })
        
 submitButton.addEventListener('click', () =>{
    let submitButton = document.getElementById('submit')
    if(!fName || !mail || !textContent ){
        errorSubmit.style.display ='block'
        errorSubmit.innerHTML ='Please fix error to submit';
        setTimeout(function(){ errorSubmit.style.display ='none', 5000;})
        return false;
    }
 })