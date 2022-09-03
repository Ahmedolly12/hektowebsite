   let hamburger = document.querySelector('.hamburger-icon')
    let mobileMenu = document.querySelector('.mobile-menu') 
    
    hamburger.addEventListener ('click', () => {
        mobileMenu.classList.toggle('mobile-menu')
        hamburger.classList.toggle('open').style.width = "100%";
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
