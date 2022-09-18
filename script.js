
    // let hamburger = document.querySelector('.hamburger-icon')
    // let mobileMenu = document.querySelector('.mobile-menu') 
    
    // hamburger.addEventListener ('click', () => {
    //     mobileMenu.classList.toggle('mobile-menu')
    //     hamburger.classList.toggle('open').style.width = "100%";
    // }) 
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

    let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}
// function showSlides(n) {
//   let i;
//   let slides = document.getElementsByClassName("mySlides");
//   let dots = document.getElementsByClassName("rectangle");
//   if (n > slides.length) {slideIndex = 1}    
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";  
//   }
//   for (i = 0; i < rectangle.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";  
//   dots[slideIndex-1].className += " active";
// }