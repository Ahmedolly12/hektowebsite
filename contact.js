  //  let hamburger = document.querySelector('.hamburger-icon')
  //   let mobileMenu = document.querySelector('.mobile-menu') 
    
  //   hamburger.addEventListener ('click', () => {
  //       mobileMenu.classList.toggle('mobile-menu')
  //       hamburger.classList.toggle('open').style.width = "100%";
  //   }) 
  let menuBtn= document.getElementById('menu-btn')
    let sideNav= document.getElementById('sidenav')
    let menu= document.getElementById('menu')

     sideNav.style.right == "-250px";

    menuBtn.onclick= function (){
        if(sideNav.style.right == '-250px'){
             sideNav.style.right= '0';
                menu.src= "homepage_asset/closeicon.png"
        } else{
              sideNav.style.right = '-250px';
               menu.src= "homepage_asset/menu.png"
        }
    }

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
