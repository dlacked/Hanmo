const $timeBox = document.querySelector('.time');
const $resultBox = document.querySelector('.result');

timeCheck = () => {
	var subjectValue = localStorage.getItem('subjectValue');
	if (localStorage.getItem('practiceSetter') == 2){
		subjectValue = 0;
	}
	const TIMEtime = Number(localStorage.getItem('TIMEtime')).toFixed(3);
	const SELECTtime = Number(localStorage.getItem('SELECTtime')-((2*subjectValue)+2)).toFixed(3);
	const TOTALtime = (Math.round((Number(TIMEtime) + Number(SELECTtime))*1000)/1000).toFixed(3);
	
	$timeBox.insertAdjacentHTML('afterbegin', `<p>연습한 과목 수 ${subjectValue}개</p>
					<p>TIME 부분 소요 시간<span>${TIMEtime}초</span></p>
					<p>SELECT 부분 소요 시간<span>${SELECTtime}초</span></p>
					<p class='caption'>접속 대기 시간은 소요 시간에서 제외돼요.</p>`);
	$resultBox.insertAdjacentHTML('afterbegin', `
					<p>총 소요 시간<span>${TOTALtime}초</span></p>`);
}

timeCheck();
