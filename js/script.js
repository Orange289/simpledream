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
var minus_1 = document.getElementById('minus-1');
var minus_2 = document.getElementById('minus-2');
var minus_3 = document.getElementById('minus-3');
var plus_1 = document.getElementById('plus-1');
var plus_2 = document.getElementById('plus-2');
var plus_3 = document.getElementById('plus-3');
var input_1 = document.getElementById('products-quantity-1');
var input_2 = document.getElementById('products-quantity-2');
var input_3 = document.getElementById('products-quantity-3');


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

minus_1.onclick = function(){
	if(parseInt(input_1.value) >= 1) {
		input_1.value = parseInt(input_1.value)-1;
	}
}
plus_1.onclick = function(){
    input_1.value = parseInt(input_1.value)+1;
};

minus_2.onclick = function(){
	if(parseInt(input_2.value) >= 1) {
		input_2.value = parseInt(input_2.value)-1;
	}
}
plus_2.onclick = function(){
    input_2.value = parseInt(input_2.value)+1;
};

minus_3.onclick = function(){
	if(parseInt(input_3.value) >= 1) {
		input_3.value = parseInt(input_3.value)-1;
	}
}
plus_3.onclick = function(){
    input_3.value = parseInt(input_3.value)+1;
};

$('.page-input--products').keypress(function(event){
		var key, keyChar;
		if(!event) var event = window.event;

		if (event.keyCode) key = event.keyCode;
		else if(event.which) key = event.which;

		if(key==null || key==0 || key==8 || key==13 || key==9 || key==46 || key==37 || key==39 ) return true;
		keyChar=String.fromCharCode(key);

		if(!/\d/.test(keyChar))	return false;

	});
