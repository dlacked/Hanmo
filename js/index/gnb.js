const $GNB = document.getElementsByTagName('header')[0];
const $GNBclass = document.getElementsByClassName('show')[0];
var lastScroll, nowScroll;
window.addEventListener('scroll', function() {
	lastScroll = nowScroll;
	nowScroll = window.scrollY;
	if (nowScroll > 0 && nowScroll != undefined) {
		$GNB.style.color = 'black';
		$GNB.style.background = 'white';
	} else{
		$GNB.style.color = 'white';
		$GNB.style.background = '#000d18';
	}
	if (nowScroll > lastScroll) {
		$GNBclass.classList.add('hide');
		$GNBclass.classList.remove('show');
	} else {
		$GNBclass.classList.add('show');
		$GNBclass.classList.remove('hide');
		$GNB.style.color
	}
})

$GNB.addEventListener('mouseenter', function() {
	if (nowScroll === 0 || nowScroll === undefined) {
		$GNB.style.background = 'white';
		$GNB.style.color = 'black';
	}
})

$GNB.addEventListener('mouseleave', function() {
	if (nowScroll === 0 || nowScroll === undefined) {
		$GNB.style.background = '#000d18';
		$GNB.style.color = 'white';
	}
})