const $GNB = document.getElementsByClassName('gnb')[0];
const $GNBclass = document.getElementsByClassName('show')[0];
const $mobileHide = document.getElementsByClassName('mobileHide');
const $headerNotice = document.getElementsByClassName('headerNotice')[0];
var lastScroll, nowScroll;
const now = new Date();

checkDevice = () => {
	const user = navigator.userAgent;
	
	if ( user.indexOf('iPhone') > -1 || user.indexOf('Android') > -1) {
		for (var i = 0; i < $mobileHide.length; i++){
			$mobileHide[i].style.display = 'none';
		}
	}
}

checkTime = () => {
	if ((now.getHours() === 9 && now.getMinutes() >= 58) || (now.getHours() === 10 && now.getMinutes() <= 5)){
		location.href = 'https://vsugangpractice.com/html/disable.html'
	}
	else if (now.getHours() === 9 && (now.getMinutes() >= 50)){
		$headerNotice.style.display = 'flex';
	}
}

checkDevice();
checkTime();

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

