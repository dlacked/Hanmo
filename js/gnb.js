const $headerNotice = document.getElementsByClassName('headerNotice')[0];
const $HEADERNOTICELIST = document.getElementsByClassName('headerNoticeList')[0];
var lastScroll, nowScroll;
const now = new Date();

checkTime = () => {
	if ((now.getHours() === 9 && now.getMinutes() >= 58) || (now.getHours() === 10 && now.getMinutes() <= 5)){
		location.href = 'https://vsugangpractice.com/html/disable.html'
	}
	else if (now.getHours() === 9 && now.getMinutes() >= 40){
//	else if (true){
		$headerNotice.style.top = '0px';
	}
}

checkTime();


var headerNoticeCnt = true;

const setHeaderNotice = setInterval(() => {
	if (headerNoticeCnt === true) {
		headerNoticeBottom = 100;
		headerNoticeCnt = false;
	} else {
		headerNoticeBottom = 44;
		headerNoticeCnt = true;
		
	}
	$HEADERNOTICELIST.style.bottom = `${headerNoticeBottom}px`;
}, 5000);

