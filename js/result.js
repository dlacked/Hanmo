const $timeBox = document.querySelector('.timeBox');

timeCheck = () => {
	var subjectValue = localStorage.getItem('subjectValue');
	const TIMEtime = localStorage.getItem('TIMEtime');
	const SELECTtime = localStorage.getItem('SELECTtime');
	const TOTALtime = Math.round((Number(TIMEtime) +  Number(SELECTtime))*1000)/1000;
	if (SELECTtime === '0.000') {
		subjectValue = 0;
	}
	$timeBox.insertAdjacentHTML('afterbegin', `<p class='subject'><span>연습한 과목 수</span>${subjectValue}개</p>
					<p class='time'><span>TIME 부분 소요 시간</span>${TIMEtime}초</p>
					<p class='time'><span>SELECT 부분 소요 시간</span>${SELECTtime}초</p>
					<hr>
					<p class='time'><span>총 소요 시간</span>${TOTALtime}초</p>`);
}

timeCheck();
