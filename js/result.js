const $timeBox = document.querySelector('.time');
const $resultBox = document.querySelector('.result');

timeCheck = () => {
	var psubjectValue = localStorage.getItem('psubjectValue');
	var subjectValue = localStorage.getItem('subjectValue');
	var waitingValue = localStorage.getItem('waitingValue');
	if (localStorage.getItem('practiceSetter') == 2){
		subjectValue = 0;
	} 
	
	const TIMEtime = Number(localStorage.getItem('TIMEtime')).toFixed(3);
	if (waitingValue === 'yes'){
		SELECTtime = Number(localStorage.getItem('SELECTtime')-((2*subjectValue)+2)).toFixed(3);
	} else {
		SELECTtime = Number(localStorage.getItem('SELECTtime')).toFixed(3);
	}
	const TOTALtime = (Math.round((Number(TIMEtime) + Number(SELECTtime))*1000)/1000).toFixed(3);
	
	$timeBox.insertAdjacentHTML('afterbegin', `<p>연습한 과목 수 ${psubjectValue}개 중 ${subjectValue}개 / 접속 대기 여부 ${waitingValue.toUpperCase()}</p>
					<p>TIME 부분 소요 시간<span>${TIMEtime}초</span></p>
					<p>SELECT 부분 소요 시간<span>${subjectValue > 0 ? SELECTtime : '0.000'}초</span></p>
					<p class='caption'>※ 접속 대기 시간은 소요 시간에 포함하지 않아요.</p>`);
	$resultBox.insertAdjacentHTML('afterbegin', `
					<p>총 소요 시간<span>${subjectValue > 0 ? TOTALtime : TIMEtime}초</span></p>`);
}

timeCheck();
