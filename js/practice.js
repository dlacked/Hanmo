const practiceValue = localStorage.getItem('practiceSetter');
const practiceMode = document.getElementsByClassName('practiceMode')[0];
const timer = document.getElementsByClassName('timer')[0];

//시간 측정값을 초기화시킴
localStorage.setItem('TIMEtime', '0.000');
localStorage.setItem('SELECTtime', '0.000');

if (practiceValue == 3){ //SELECT MODE
	console.log(practiceValue)
	practiceMode.innerText = '연습 모드: SELECT MODE'
	timer.innerHTML = '<span>10:00:00</span>'

} else{ //TIME MODE
	practiceValue == 2 ? practiceMode.innerText = '연습 모드: TIME MODE' : practiceMode.innerText = '연습 모드: BASIC MODE';
	timer.innerHTML = '<span class="hours">09</span>:<span class="minutes">59</span>:<span class= "seconds">50</span>'
	
	let seconds = 50;
	let minutes = 59;
	let hours = 9;
	let eleSeconds = document.getElementsByClassName('seconds')[0];
	let eleMinutes = document.getElementsByClassName('minutes')[0];
	let eleHours = document.getElementsByClassName('hours')[0];
	let interval;
	let clickedSugang = document.getElementsByClassName('sugang')[0];
	let startTime, duringTime;

	window.onload = function deviceCheck(){
		setInterval(timerFunc, 1000);
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

	function timerFunc(){
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