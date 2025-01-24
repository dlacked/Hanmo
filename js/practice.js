const practiceValue = localStorage.getItem('practiceSetter');
const practiceMode = document.getElementById('practiceMode');

//시간 측정값을 초기화시킴
localStorage.setItem('TIMEtime', '0.000');
localStorage.setItem('SELECTtime', '0.000');

if (practiceValue == 3){ //SELECT MODE
	practiceMode.innerText = '연습 모드: SELECT MODE'
	document.getElementById('timer').innerHTML = '<span>10:00:00</span>'

} else{ //TIME MODE
	practiceValue == 2 ? practiceMode.innerText = '연습 모드: TIME MODE' : practiceMode.innerText = '연습 모드: BASIC MODE';
	
	document.getElementById('timer').innerHTML = '<span id="hours">09</span>:<span id="minutes">59</span>:<span id = "seconds">50</span>'
	
	let seconds = 50;
	let minutes = 59;
	let hours = 9;
	let eleSeconds = document.getElementById('seconds');
	let eleMinutes = document.getElementById('minutes');
	let eleHours = document.getElementById('hours');
	let interval;
	let clickedSugang = document.getElementById('sugang');
	let startTime, duringTime;

	window.onload = function deviceCheck(){
		interval = setInterval(timer, 1000);
		setTimeout(function(){
			startTime = new Date();
		}, 10000);
	}

	clickedSugang.onclick = function(){ //스톱워치, register 총합 8번 눌렸을 시 스톱워치 종료
		var endTime = new Date()
		if (isNaN(endTime - startTime) == true){
			alert('수강신청 기간이 아닙니다.');
		} else {
			duringTime = (endTime - startTime) / 1000
			if (practiceValue == 1){ //BASIC MODE
				//duringTime = (endTime - startTime) / 1000 //스톱워치 종료시간에서 페이지 입장 시간을 뺌
				localStorage.setItem('TIMEtime', duringTime);
				location.replace('./selectZone.html');
			} else{
				 //스톱워치 종료시간에서 페이지 입장 시간을 뺌
				localStorage.setItem('TIMEtime', duringTime);
				location.replace('./result.html');
			}
			
		}
	}

	function timer(){
		seconds++;
		if(seconds <= 9) eleSeconds.innerText = '0' + seconds;
		else eleSeconds.innerText = seconds;

		if(seconds >= 60){
			minutes++;
			if(minutes <= 9) eleMinutes.innerText = '0' + minutes;
			else eleMinutes.innerText = minutes;
			seconds = 0;
			eleSeconds.innerText = '00';
		}

		if(minutes >= 60){
			hours++;
			if(hours <= 9) eleHours.innerText = '0' + hours;
			else eleHours.innerText = hours;
			minutes = 0;
			eleMinutes.innerText = '00';
		}
	}

}