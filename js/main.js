let firstMenu = document.querySelector("li.first__menu")
let secondMenu = document.querySelector("li.second__menu")
let thereMenu = document.querySelector("li.there__menu")

let ulFirstDrop = document.querySelector("ul.first__drop")
let ulSecondDrop = document.querySelector("ul.second__drop")
let ulThereDrop = document.querySelector("ul.there__drop")

let icon = document.querySelectorAll(".open__menu")



firstMenu.addEventListener("mousemove", function (e) {
	ulFirstDrop.style.cssText = `display: block; transition: all 0.5s;`
	firstMenu.style.cssText = `background-color: #F4CF87; color: #000;`
})
firstMenu.addEventListener("mouseleave", function (e) {
	ulFirstDrop.style.cssText = `display: none;`
	firstMenu.style.cssText = `background-color: none;`
})
ulFirstDrop.addEventListener("mouseleave", function (e) {
	ulFirstDrop.style.cssText = `display: none;`
})
// aaaaaaaaaaaa
secondMenu.addEventListener("mousemove", function (e) {
	ulSecondDrop.style.cssText = `display: block;`
	secondMenu.style.cssText = `cursor: pointer; background-color: #F4CF87; color: #000;`
})
secondMenu.addEventListener("mouseleave", function (e) {
	ulSecondDrop.style.cssText = `display: none;`
	secondMenu.style.cssText = `background-color: none;`
})
ulSecondDrop.addEventListener("mouseleave", function (e) {
	ulSecondDrop.style.cssText = `display: none;`
})
// aaaaaaaaaaaa
thereMenu.addEventListener("mousemove", function (e) {
	thereMenu.style.cssText = `cursor: pointer;background-color: #F4CF87; color: #000;`
	ulThereDrop.style.cssText = `display: block;`
})
thereMenu.addEventListener("mouseleave", function (e) {
	ulThereDrop.style.cssText = `display: none;`
	thereMenu.style.cssText = `background-color: none;`
})
ulThereDrop.addEventListener("mouseleave", function (e) {
	ulThereDrop.style.cssText = `display: none;`
})

$(".slider").slick({
	infinite: true,
	speed: 300,
	dots: false,
	prevArrow:
		'<button id="prev" type="button" class="slider__prev btn btn-juliet"><i class="slider-arrow fa fa-angle-left" aria-hidden="true"></i></button>',
	nextArrow:
		'<button id="next" type="button" class="slider__next btn btn-juliet"><i class="slider-arrow fa fa-angle-right" aria-hidden="true"></i></button>'
})

$(".promotional__sliders-item").slick({
	infinite: false,
	speed: 300,
	dots: false,
	slidesToShow: 1,
	slidesToScroll: 1,
	prevArrow:
		'<button id="prev" type="button" class="slider__prev btn btn-juliet"><i class="slider-arrow fa fa-angle-left" aria-hidden="true"></i></button>',
	nextArrow:
		'<button id="next" type="button" class="slider__next btn btn-juliet"><i class="slider-arrow fa fa-angle-right" aria-hidden="true"></i></button>'
})

$('.all__brends-slider').slick({
	centerMode: true,
	centerPadding: '100px',
	slidesToShow: 5,
	prevArrow:
		'<button id="prev" type="button" class="slider__prev btn btn-juliet"><i class="slider-arrow fa fa-angle-left" aria-hidden="true"></i></button>',
	nextArrow:
		'<button id="next" type="button" class="slider__next btn btn-juliet"><i class="slider-arrow fa fa-angle-right" aria-hidden="true"></i></button>',
	responsive: [
	  {
		breakpoint: 768,
		settings: {
		  arrows: false,
		  centerMode: true,
		  centerPadding: '40px',
		  slidesToShow: 5
		}
	  },
	  {
		breakpoint: 480,
		settings: {
		  arrows: false,
		  centerMode: true,
		  centerPadding: '40px',
		  slidesToShow: 1
		}
	  }
	]
  });



let myUser = document.querySelector(".my__acount");
let userPanel = document.querySelector(".modal__user");

myUser.addEventListener("click", function (e){
	userPanel.style.cssText = `display: block;`;
})

let closeModal = document.querySelector(".close__icon");

closeModal.addEventListener("click", function (e){
	userPanel.style.cssText = `display: none;`;
})


let forRegistr = document.querySelector(".for__registr");
let closeReg = document.querySelector(".close__icon-reg");
let modalReg = document.querySelector(".modal__registration");

forRegistr.addEventListener("click", function (){
	modalReg.style.cssText = `display: block;`;
	userPanel.style.cssText = `display: none;`;
})

closeReg.addEventListener("click", function (e){
	modalReg.style.cssText = `display: none;`;
})


window.addEventListener('scroll', function() {
	// document.getElementById('showScroll').innerHTML = pageYOffset + 'px';
	userPanel.style.cssText = `display: none;`;
	modalReg.style.cssText = `display: none;`;
  });

// ----------------search

let searchModal = document.querySelector(".modal__search");
let closeSearchModal = document.querySelector(".search__exit-inn");

let headerInput = document.querySelector(".header__input");

closeSearchModal.addEventListener("click", function (e){
	searchModal.style.cssText = `display: none;`;
})

headerInput.addEventListener("click", function (e){
	searchModal.style.cssText = `display: block;`;
})