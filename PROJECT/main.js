const togglebtn = document.querySelector('.navbar_togglebtn')
const menu = document.querySelector('.navbar_menu')
const icons = document.querySelector('.navbar_icons')

togglebtn.addEventListener('click',() => {
    menu.classList.toogle('active');
    iconsmenu.classList.toogle('active');
});