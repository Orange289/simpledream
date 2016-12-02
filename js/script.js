var menu_toggle = document.querySelector('.page-header__btn');
var menu = document.querySelector('.main-nav');
var btn_special = document.querySelector('.products__arrow--special');
var btn_arabica = document.querySelector('.products__arrow--arabica');
var btn_robusta = document.querySelector('.products__arrow--robusta');
var btn_mix = document.querySelector('.products__arrow--mix');
var btn_expected = document.querySelector('.products__arrow--expected');
var btn_unavailable = document.querySelector('.products__arrow--unavailable');
var special_header = document.getElementById('special');
var arabica_header = document.getElementById('arabica');
var robusta_header = document.getElementById('robusta');
var mix_header = document.getElementById('mix');
var expected_header = document.getElementById('expected');
var unavailable_header = document.getElementById('unavailable');
var special_content = document.getElementById('special-content');
var arabica_content = document.getElementById('arabica-content');
var robusta_content = document.getElementById('robusta-content');
var mix_content = document.getElementById('mix-content');
var expected_content = document.getElementById('expected-content');
var unavailable_content = document.getElementById('unavailable-content');


menu_toggle.addEventListener('click', function(event){
	event.preventDefault();
	menu_toggle.classList.toggle('page-header__btn--close');
	menu.classList.toggle('main-nav__show');
})

btn_special.addEventListener('click', function(event) {
	event.preventDefault();
	btn_special.classList.toggle('products__arrow--open');
	special_content.classList.toggle('products__show');
	special_header.classList.toggle('products__border');
});
special_header.addEventListener('click', function(event) {
	event.preventDefault();
	btn_special.classList.toggle('products__arrow--open');
	special_content.classList.toggle('products__show');
	special_header.classList.toggle('products__border');
});

btn_arabica.addEventListener('click', function(event) {
	event.preventDefault();
	btn_arabica.classList.toggle('products__arrow--open');
	arabica_content.classList.toggle('products__show');
	arabica_header.classList.toggle('products__border');
});
arabica_header.addEventListener('click', function(event) {
	event.preventDefault();
	btn_arabica.classList.toggle('products__arrow--open');
	arabica_content.classList.toggle('products__show');
	arabica_header.classList.toggle('products__border');
});

btn_robusta.addEventListener('click', function(event) {
	event.preventDefault();
	btn_robusta.classList.toggle('products__arrow--open');
	robusta_content.classList.toggle('products__show');
	robusta_header.classList.toggle('products__border');
});
robusta_header.addEventListener('click', function(event) {
	event.preventDefault();
	btn_robusta.classList.toggle('products__arrow--open');
	robusta_content.classList.toggle('products__show');
	robusta_header.classList.toggle('products__border');
});

btn_mix.addEventListener('click', function(event) {
	event.preventDefault();
	btn_mix.classList.toggle('products__arrow--open');
	mix_content.classList.toggle('products__show');
	mix_header.classList.toggle('products__border');
});
mix_header.addEventListener('click', function(event) {
	event.preventDefault();
	btn_mix.classList.toggle('products__arrow--open');
	mix_content.classList.toggle('products__show');
	mix_header.classList.toggle('products__border');
});

btn_expected.addEventListener('click', function(event) {
	event.preventDefault();
	btn_expected.classList.toggle('products__arrow--open');
	expected_content.classList.toggle('products__show');
	expected_header.classList.toggle('products__border');
});
expected_header.addEventListener('click', function(event) {
	event.preventDefault();
	btn_expected.classList.toggle('products__arrow--open');
	expected_content.classList.toggle('products__show');
	expected_header.classList.toggle('products__border');
});

btn_unavailable.addEventListener('click', function(event) {
	event.preventDefault();
	btn_unavailable.classList.toggle('products__arrow--open');
	unavailable_content.classList.toggle('products__show');
	unavailable_header.classList.toggle('products__border');
});
unavailable_header.addEventListener('click', function(event) {
	event.preventDefault();
	btn_unavailable.classList.toggle('products__arrow--open');
	unavailable_content.classList.toggle('products__show');
	unavailable_header.classList.toggle('products__border');
});
