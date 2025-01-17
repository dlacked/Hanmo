const $headerNotice = document.getElementsByClassName('headerNotice')[0];
const $HEADERNOTICELIST = document.getElementsByClassName('headerNoticeList')[0];
var lastScroll, nowScroll;
const thisTime = new Date();

checkTime = () => {
	if (true){
	//if(thisTime.getHours() === 22 && thisTime.getMinutes() >= 40){
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

