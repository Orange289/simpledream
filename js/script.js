var menu_toggle = document.querySelector('.page-header__btn');
var menu = document.querySelector('.main-nav');

menu_toggle.addEventListener('click', function(event){
	event.preventDefault();
	menu_toggle.classList.toggle('page-header__btn--close');
	menu.classList.toggle('main-nav__show');
})
