window.onload = function deviceCheck() {
	const user = navigator.userAgent;
	
	if ( user.indexOf('iPhone') > -1 || user.indexOf('Android') > -1) {
		location.replace('../index.html');
	}
}

const ad = document.getElementById('ad');
const basicMode = document.getElementById('basicMode');
const timeMode = document.getElementById('timeMode');
const selectMode = document.getElementById('selectMode');
const title = document.getElementById('title');
const today = new Date();
const subjectValue = document.getElementById('subjectValue');

if (localStorage.getItem('subjectValue')){
	subjectValue.setAttribute('value', localStorage.getItem('subjectValue'));
	settedSubjectValue.innerText = `과목 수를 ${localStorage.getItem('subjectValue')}개로 지정할게요.`
}


let c = 0;
setInterval(() => {
    if (c === 0){
        ad.innerHTML="<img src='../img/dlacked_logo.png' /><p>dlacked</p>";
        ++c
    }else if (c === 1) {
        ad.innerHTML="<img src='../img/hufs70.png' /><p>한국외국어대학교 70주년</p>";
        --c
    }
}, 3000);

let hakgi = 2
if (today.getMonth() >= 0 && today.getMonth() <= 5){
	console.log(today.getMonth())
	hakgi = 1;
}
title.innerText = `${today.getFullYear()}-${hakgi}학기 한국외국어대학교 모의수강신청`;

function goPractice(val) {
	localStorage.setItem('practiceSetter', val);
	location.href='practice.html';
}

function printSubjectValue() {
	const subjectValue = document.getElementById('subjectValue').value;
	const settedSubjectValue = document.getElementById('settedSubjectValue')
	if (!Number(subjectValue)) {
		settedSubjectValue.innerText = `과목 수를 다시 지정해주세요.`
		settedSubjectValue.style.color = 'red';
	} else if (subjectValue < 1 || subjectValue > 15){
		settedSubjectValue.innerText = `1 ~ 15 사이의 값을 입력해주세요.`
		settedSubjectValue.style.color = 'red';
		
	} else{
		settedSubjectValue.innerText = `과목 수를 ${subjectValue}개로 지정할게요.`
		settedSubjectValue.style.color = 'white';
		localStorage.setItem('subjectValue', subjectValue)
		console.log(subjectValue)
	}
	
}