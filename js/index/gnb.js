const $GNB = document.getElementsByTagName('header')[0];
const $GNBclass = document.getElementsByClassName('show')[0];
const $mobileHide = document.getElementsByClassName('mobileHide');
var lastScroll, nowScroll;

window.onload = function deviceCheck() {
	const user = navigator.userAgent;
	
	if ( user.indexOf('iPhone') > -1 || user.indexOf('Android') > -1) {
		for (var i = 0; i < $mobileHide.length; i++){
			$mobileHide[i].style.display = 'none';
		}
	}
}

window.addEventListener('scroll', function() {
	lastScroll = nowScroll;
	nowScroll = window.scrollY;
	if (nowScroll > 0 && nowScroll != undefined) {
		$GNB.style.color = 'black';
		$GNB.style.background = 'white';
	} else{
		$GNB.style.color = 'white';
		$GNB.style.background = 'transparent';
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
		$GNB.style.background = 'transparent';
		$GNB.style.color = 'white';
	}
})