let background = document.querySelector('.background')
let header = document.querySelector('header')
let mailSent = document.querySelector('.mail__buttons')
let mailButton = document.querySelector('#mail-submit-button')
let topContactUsButton = document.querySelector('#top-contact-us-button')
let contactBox = document.querySelector('#contact-box')
let bigLogoImg = document.querySelector('#big-logo-img')

window.addEventListener('scroll', function (e) {
	if (window.scrollY + 100 > window.innerHeight) {
		background.classList.add('background1')
	} else {
		background.classList.remove('background1')
	}

	if (window.scrollY > 10) {
		header.classList.add('scrolled')
	} else {
		header.classList.remove('scrolled')
	}

}, false);

window.onload = function () {
	document.getElementById('contact-form').addEventListener('submit', function (event) {
		event.preventDefault();

		mailButton.style.pointerEvents = 'none'
		emailjs.sendForm('service_ax5pngh', 'template_zbj4avu', this)
			.then(function () {
				mailSent.classList.add('sent')
				mailButton.style.pointerEvents = 'auto'
				setTimeout(() => {
					mailSent.classList.remove('sent')
				}, 4000)
			}, function (error) {
				console.log(error);
				mailButton.style.pointerEvents = 'auto'
			});
	});
}

topContactUsButton.addEventListener('click', () => {
	contactBox.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
})

bigLogoImg.addEventListener('click', () => {
	window.scrollTo({
		top: 0,
		left: 0,
		behavior: 'smooth'
	});
})