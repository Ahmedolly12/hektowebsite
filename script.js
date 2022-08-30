
    let hamburger = document.querySelector('.hamburger')
    let navBar = document.querySelector('.navbar') 
    
    hamburger.addEventListener('click', () => {
        navBar.classList.toggle('navlink')
        hamburger.classList.toggle('close')
    })