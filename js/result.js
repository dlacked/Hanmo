const $timeBox = document.querySelector('.time');
const $resultBox = document.querySelector('.result');

checkDevice = () => {
	const user = navigator.userAgent;
	
	if ( user.indexOf('iPhone') > -1 || user.indexOf('Android') > -1) { 
		alert('잘못된 접근입니다.')
		location.replace('../index.html');
	}
}

timeCheck = () => {
	var subjectValue = localStorage.getItem('subjectValue');
	const TIMEtime = localStorage.getItem('TIMEtime');
	const SELECTtime = localStorage.getItem('SELECTtime');
	const TOTALtime = Math.round((Number(TIMEtime) +  Number(SELECTtime))*1000)/1000;
	if (SELECTtime === '0.000') {
		subjectValue = 0;
	}
	$timeBox.insertAdjacentHTML('afterbegin', `<p>연습한 과목 수 ${subjectValue}개</p>
					<p>TIME 부분 소요 시간<span>${TIMEtime}초</span></p>
					<p>SELECT 부분 소요 시간<span>${SELECTtime}초</span></p>`);
	$resultBox.insertAdjacentHTML('afterbegin', `
					<p>총 소요 시간<span>${TOTALtime}초</span></p>`);
}

checkDevice();
timeCheck();
