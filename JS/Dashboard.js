// Add Class 'hovered' When Mouse Over The List Element
let list = document.querySelectorAll('.menu_bar ul li');

function hover() {
  list.forEach(li => li.classList.remove('hovered'));
  this.classList.add('hovered');
}

list.forEach(li => {
  li.addEventListener('mouseover', hover);
});

// Add Active Class In 'menu-bar' & 'mainSec' When 'toggle div' Was Clicked
let toggle = document.querySelector('.main .header .toggle ion-icon');
let menu_bar = document.querySelector('.menu_bar');
let mainSec = document.querySelector('.main');

toggle.addEventListener('click', _ => {
  menu_bar.classList.toggle('active');
  mainSec.classList.toggle('active');
});

