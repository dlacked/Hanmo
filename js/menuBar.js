const $GNB = document.getElementsByTagName('header')[0];
const $TITLE = document.getElementsByClassName('title')[0];
var nowScrollValue, lastScrollValue = 0;

window.addEventListener('scroll', function() {
	lastScrollValue = nowScrollValue;
	nowScrollValue = window.scrollY;
	
	if (lastScrollValue < nowScrollValue) {
		$GNB.classList.remove('visible');
		$GNB.classList.remove('gnbTransparent');
		$GNB.classList.add('invisible');
		$TITLE.setAttribute('src', '../img/menuLogoBlack.svg');
		$GNB.style.color = 'black'

	} else{
		$GNB.classList.remove('invisible');
		$GNB.classList.remove('gnbTransparent');
		$GNB.classList.add('visible');
		$TITLE.setAttribute('src', '../img/menuLogoBlack.svg');
		$GNB.style.color = 'black'
		if (nowScrollValue === 0) {
			$GNB.classList.add('gnbTransparent');
			$TITLE.setAttribute('src', '../img/menuLogo.svg');
			$GNB.style.color = 'white'
		}
	}
});

$GNB.addEventListener('mouseenter', function () {
	if (nowScrollValue === 0) {
		$TITLE.setAttribute('src', '../img/menuLogoBlack.svg');
		$GNB.style.color = 'black'
	}
})

$GNB.addEventListener('mouseleave', function () {
	if (nowScrollValue === 0) {
		$TITLE.setAttribute('src', '../img/menuLogo.svg');
		$GNB.style.color = 'white'
	}
})