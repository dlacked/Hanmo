// 페이지 로드 완료 시 사용자의 디바이스를 체크하는 함수
window.onload = function deviceCheck() {
	const user = navigator.userAgent;
	
	if ( user.indexOf('iPhone') > -1 || user.indexOf('Android') > -1) { 
		location.replace('../index.html');
		// 모바일 감지 시 index.html로 강제 이동 (모바일 사용을 막기 위함)
	}
}

if (localStorage.getItem('userInfo')){
	document.getElementById('loginout').innerText = 'logout';
	alert(localStorage.getItem('userInfo'))
}

console.log(localStorage.getItem('userInfo'))
const ad = document.getElementById('ad');
const basicMode = document.getElementById('basicMode');
const timeMode = document.getElementById('timeMode');
const selectMode = document.getElementById('selectMode');
const title = document.getElementById('title');
const today = new Date();
const subjectValue = document.getElementById('subjectValue');

// setInterval을 사용해 메인 페이지 상단 배너 3초에 한 번 내용 수정
let c = 0;
setInterval(() => {
    if (c === 1){
        ad.innerHTML="<a href='https://cord-postage-549.notion.site/dlacked-536254fac9104d82b267a82b59e3db25'><img src='../img/dlacked_logo.png' /><p>dlacked</p></a>";
        ad.style.backgroundColor = 'rgba(11, 16, 106, 0.7)';
		++c;
    }else if (c === 0) {
        ad.innerHTML="<a href='https://hufs.ac.kr'><img src='../img/hufs70.png' /><p>한국외국어대학교 70주년</p></a>";
        ad.style.backgroundColor = 'rgba(0, 45, 86, 0.7)';
		++c;
    }else if (c === 2) {
        ad.innerHTML="<img src='../img/caution.png' /><p>실제 수강신청 사이트가 아닙니다.</p></a>";
        ad.style.backgroundColor = 'rgba(237, 220, 30, 0.7)';
		c = 0;
    }
}, 5000);

// 날짜에 따라 title 자동 수정할 수 있도록 셋팅
let hakgi = 2
if (today.getMonth() >= 0 && today.getMonth() <= 5){
	hakgi = 1;
}
title.innerText = `${today.getFullYear()}-${hakgi}학기 한국외국어대학교 모의수강신청`;

// 모드 버튼 선택 시 필요한 조건문 셋팅
// practice.html 넘어갈 때 어떤 버튼을 눌렀는지 판별하기 위해 버튼마다 주어진 val 값을 localStorage에 저장 및 practice.js에 전송
function goPractice(val) {
	if ((localStorage.getItem('subjectValue') < 1 || localStorage.getItem('subjectValue') > 15 || !Number(localStorage.getItem('subjectValue'))) && !(val === 2)){
		alert('셋팅 값을 확인해주세요.')
	} else{
		localStorage.setItem('practiceSetter', val);
		location.href='practice.html';
	}
}

//SETTING 버튼 기본 셋팅
if (localStorage.getItem('subjectValue')){
	subjectValue.setAttribute('value', localStorage.getItem('subjectValue'));
	if (localStorage.getItem('subjectValue') < 1 || localStorage.getItem('subjectValue') > 15 || !Number(localStorage.getItem('subjectValue'))) {
		settedSubjectValue.innerText = 
			`과목 수를 다시 지정해주세요.`
		settedSubjectValue.style.color = 'red';
	} else{
		settedSubjectValue.innerText = `과목 수를 ${localStorage.getItem('subjectValue')}개로 지정할게요.`
	}
}

//SETTING 버튼 작동 함수
function printSubjectValue() {
	const subjectValue = document.getElementById('subjectValue').value;
	const settedSubjectValue = document.getElementById('settedSubjectValue')
	if (subjectValue < 1 || subjectValue > 15 || !Number(subjectValue)) {
		settedSubjectValue.innerText = 
			`과목 수를 다시 지정해주세요.`
		settedSubjectValue.style.color = 'red';
	} else{
		settedSubjectValue.innerText = `과목 수를 ${subjectValue}개로 지정할게요.`
		settedSubjectValue.style.color = 'white';
	}
	
	localStorage.setItem('subjectValue', subjectValue)
	
}