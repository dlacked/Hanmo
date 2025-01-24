const $headerNotice = document.getElementsByClassName('headerNotice')[0];
const $HEADERNOTICELIST = document.getElementsByClassName('headerNoticeList')[0];
const $deviceCheck = document.getElementsByClassName('deviceCheck')[0];
const $deviceCheckList = document.getElementsByClassName('deviceCheckList')[0];
const $header = document.getElementsByTagName('header')[0];

const user = navigator.userAgent;
const thisTime = new Date();

checkDevice = () => {
	//if(true){
	//if((localStorage.getItem('deviceInfo') === null) && true){
	//if((localStorage.getItem('deviceInfo') === null) && (thisTime.getHours() === 20 && thisTime.getMinutes() >= 53 && thisTime.getMinutes() < 58)){
	if((localStorage.getItem('deviceInfo') === null) && (thisTime.getHours() === 9 && thisTime.getMinutes() >= 53 && thisTime.getMinutes() < 58)){
		$header.style.top = '0px';
		$headerNotice.style.display = 'flex';
		setTimeout(function() {
			if (user.indexOf('iPhone') > -1 || user.indexOf('Android') > -1) {
				$deviceCheck.style.background = '#800309'; 
				$deviceCheck.style.height = '64px';
				$deviceCheckList.style.bottom = '26px';
				localStorage.setItem('deviceInfo', false);
				location.href = 'https://vsugangpractice.com/';
			} else {
				$deviceCheck.style.background = '#038003';
				$deviceCheck.style.height = '64px';
				$deviceCheckList.style.bottom = '164px';
				localStorage.setItem('deviceInfo', true);
			}
			setTimeout(function() {
				$header.style.top = '-64px';
			}, 3000);
		}, 1500);
	} 
	
	//else if (true){
	//else if(thisTime.getHours() === 20 && thisTime.getMinutes() >= 53 && thisTime.getMinutes() < 58){
	else if(thisTime.getHours() === 9 && thisTime.getMinutes() >= 53 && thisTime.getMinutes() < 58){
		$header.style.top = '-40px';
		$headerNotice.style.display = 'flex';
	}
	
	else if ((localStorage.getItem('deviceInfo') === null)) {
		$header.style.top = '0px';
		setTimeout(function() {
			if (user.indexOf('iPhone') > -1 || user.indexOf('Android') > -1) {
				$deviceCheck.style.background = '#800309'; 
				$deviceCheck.style.height = '64px';
				$deviceCheckList.style.bottom = '26px';
				localStorage.setItem('deviceInfo', false);
				location.href = 'https://vsugangpractice.com/';
			} else {
				$deviceCheck.style.background = '#038003';
				$deviceCheck.style.height = '64px';
				$deviceCheckList.style.bottom = '164px';
				localStorage.setItem('deviceInfo', true);
			}
			setTimeout(function() {
				$header.style.top = '-64px';
			}, 3000);
		}, 1500);
	}
	
	
}

checkDevice();

var headerNoticeCnt = 1;

const setHeaderNotice = setInterval(() => {
	if (headerNoticeCnt === 1) {
		headerNoticeBottom = 81;
		headerNoticeCnt = 2;
	} else if (headerNoticeCnt === 2) {
		headerNoticeBottom = 137;
		headerNoticeCnt = 3;
	} else{
		headerNoticeBottom = 25;
		headerNoticeCnt = 1;
	}
	$HEADERNOTICELIST.style.bottom = `${headerNoticeBottom}px`;
}, 5000);

