const header = document.querySelector("header");
const whiteLogo = document.getElementById("white-logo");
const blueLogo = document.getElementById("blue-logo");
window.addEventListener ("scroll", function() {
	header.classList.toggle ("sticky", window.scrollY > 0);
	whiteLogo.classList.toggle("hide", window.scrollY > 0);
	blueLogo.classList.toggle("hide", window.scrollY == 0);

});

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
	menu.classList.toggle('bx-x');
	navbar.classList.toggle('open');
};

window.onscroll = () => {
	menu.classList.remove('bx-x');
	navbar.classList.remove('open');
};