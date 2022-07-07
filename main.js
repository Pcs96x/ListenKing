let button = document.querySelector(".menu-btn");
let menu = document.querySelector(".navbar");

menu.style.display = ('none');

button.onclick = () => {
    if (menu.style.display == 'none') {
        menu.style.display = 'block'
    } else {
        menu.style.display = 'none'
    };
}