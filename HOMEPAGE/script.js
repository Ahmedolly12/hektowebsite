// let homed = document.getElementById('homed');
// let dropdown = document.getElementById('dropdown');

// homed.addEventListener('click', () =>{
//     dropdown.classList.toggle('sub-dropdown')
//     dropdown.classList.toggle('dropdown')
// })
// let navToggle = ()=>{

    let hamburger = document.querySelector('.hamburger')
    let navBar = document.querySelector('.navbar') 
    
    hamburger.addEventListener('click', () => {
        navBar.classList.toggle('navlink')
        hamburger.classList.toggle('close')
    })
// }
// navToggle()