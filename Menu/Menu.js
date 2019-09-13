/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

const menuBtn = document.querySelector('.menu-button')
const header = document.querySelector('.header');

function createMenu(arr) {
  const menu = document.createElement('div');
  let menuList = document.createElement('ul');
  menu.classList.add('menu');
  arr.forEach(function(element){
  let li = document.createElement('li');
  li.textContent = element;
  menuList.appendChild(li);
  menu.appendChild(menuList);
})
menuBtn.addEventListener('click', (event) => {
  menu.classList.toggle('menu--open');
})
return menu;
}

header.appendChild(createMenu(menuItems));
