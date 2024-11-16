const title = document.getElementsByClassName('title')[0];
const today = new Date();
const printValue = document.getElementsByClassName('printValue')[0];
var isSettedValue = false;

checkDevice = () => {
	const user = navigator.userAgent;
	
	if ( user.indexOf('iPhone') > -1 || user.indexOf('Android') > -1) { 
		location.replace('../index.html');
		// 모바일 감지 시 index.html로 강제 이동 (모바일 접속을 막기 위함)
	}
}

setValue = () => {
	if (localStorage.getItem('subjectValue') >= 1 || localStorage.getItem('subjectValue') <= 20) {
		printValue.innerText = `과목 수를 ${localStorage.getItem('subjectValue')}개로 설정했어요.`
		printValue.style.color = 'white';
		isSettedValue = true;
	}
}

checkDate = () => {
	let hakgi = 2
	if (today.getMonth() >= 0 && today.getMonth() <= 5){
		hakgi = 1;
	}
	title.innerText = `${today.getFullYear()}-${hakgi}학기 한국외국어대학교 모의수강신청`;

}

checkDevice();
setValue();
checkDate();

function goPractice(val) {
	if (isSettedValue === false){
		alert('SETTING에서 과목 수를 지정해주세요.')
	} else{
		localStorage.setItem('practiceSetter', val);
		location.href='practice.html';
	}
}

//SETTING 버튼 작동 함수
function inputValue() {
	const val = prompt('수강신청 연습에 사용하실 과목 수를 입력해주세요.');
	if (val < 1 || val > 20 || !Number(val)) {
		alert('1 ~ 20 사이의 값만 입력 가능해요.');
		inputValue();
	} else{
		localStorage.setItem('subjectValue', val);
		setValue();
	}
	
}