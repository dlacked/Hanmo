let seconds = 50;
let minutes = 59;
let hours = 9;
let eleSeconds = document.getElementById('seconds');
let eleMinutes = document.getElementById('minutes');
let eleHours = document.getElementById('hours');
let interval;
let clickedSugang = document.getElementById('sugang');
var startTime, duringTime;

window.onload = function(){ //사이트 열자마자 실행되는 함수
    interval = setInterval(startTimer, 1000);
    setTimeout(function(){
        startTime = new Date()
        console.log(startTime);
    }, 10000)
}

clickedSugang.onclick = function(){    //스톱워치, register 총합 8번 눌렸을 시 스톱워치 종료
    var endTime = new Date()
    if (isNaN(endTime - startTime) == true){
        alert('수강신청 기간이 아닙니다.');
    } else {
        duringTime = (endTime - startTime) / 1000 //스톱워치 종료시간에서 페이지 입장 시간을 뺌
        localStorage.setItem('duringTime', duringTime);
        //console.log(duringTime);
        location.replace('../html/Course_Registeration.html');
    }
    //location.replace('index.html');
    //console.log(noObject)
}

function startTimer(){
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