let background = document.querySelector('.background')
let header = document.querySelector('header')
let mailSent = document.querySelector('.mail__buttons')
let mailButton = document.querySelector('#mail-submit-button')
let topContactUsButton = document.querySelector('#top-contact-us-button')
let contactBox = document.querySelector('#contact-box')
let helpersMail = document.querySelector('#helpers-mail')
let bigLogoImg = document.querySelector('#big-logo-img')
let topScrollArrow = document.querySelector('#top-scroll-arrow')
let about = document.querySelector('.about')
let main = document.querySelector('.main')

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

		mailButton.classList.add('sending')
		emailjs.sendForm('service_jmxg1co', 'template_zbj4avu', this)
			.then(function () {
				mailSent.classList.add('sent')
				mailButton.classList.remove('sending')
				setTimeout(() => {
					mailSent.classList.remove('sent')
				}, 4000)
			}, function (error) {
				mailButton.classList.remove('sending')
			});
	});
}

topContactUsButton.addEventListener('click', () => {
	SmoothVerticalScrolling(contactBox, 300, 'top')
})

helpersMail.addEventListener('click', () => {
	SmoothVerticalScrolling(contactBox, 300, 'top')
})


bigLogoImg.addEventListener('click', () => {
	SmoothVerticalScrolling(main, 300, 'top')
})

topScrollArrow.addEventListener('click', () => {
	SmoothVerticalScrolling(about, 300, 'top')
})


function SmoothVerticalScrolling(e, time, where) {
	var eTop = e.getBoundingClientRect().top;
	var eAmt = eTop / 100;
	var curTime = 0;
	while (curTime <= time) {
		window.setTimeout(SVS_B, curTime, eAmt, where);
		curTime += time / 100;
	}
}

function SVS_B(eAmt, where) {
	if(where == "center" || where == "")
		window.scrollBy(0, eAmt / 2);
	if (where == "top")
		window.scrollBy(0, eAmt);
}