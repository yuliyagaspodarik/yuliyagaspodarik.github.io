'use strict';
var toggleButton = document.querySelector('.toggle-button');
var mainNav = document.querySelector('.main-nav__items');
var backDrop = document.querySelector('.backdrop');

toggleButton.addEventListener('click', function () {
    mainNav.style.display = 'block';
    backDrop.style.display = 'block';
});
backDrop.addEventListener('click', function () {
    mainNav.style.display = 'none';
    backDrop.style.display = 'none';

})