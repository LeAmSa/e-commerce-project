const menuBtn = document.querySelector('.menu-btn')
let menuOpen = false

menuBtn.addEventListener('click', () => {
    const navBar = document.querySelector('.nav_list')
    navBar.classList.toggle('active')
    if(!menuOpen) {
        menuBtn.classList.add('open')
        menuOpen = true
    } else {
        menuBtn.classList.remove('open')
        menuOpen = false
    }
})