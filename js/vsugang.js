const printValue = document.getElementsByClassName('printValue')[0];
const setting = document.getElementsByClassName('setting')[0];
var isSettedValue = false;


// 모바일 감지 시 index.html로 강제 이동 (모바일 접속을 막기 위함)

setValue = () => {
	if ((localStorage.getItem('subjectValue') >= 1 || localStorage.getItem('subjectValue') <= 20) && Number(localStorage.getItem('subjectValue'))) {
		printValue.innerText = `과목 수를 ${localStorage.getItem('subjectValue')}개로 설정했어요.`
		printValue.style.color = 'white';
		setting.style.background = '#001203';
		isSettedValue = true;
	} else{
		setting.style.background = '#120000';
	}
}

setValue();

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
	if (val === null){
		null;
	} else if (val < 1 || val > 20 || !Number(val)) {
		alert('1 ~ 20 사이의 값만 입력 가능해요.');
		inputValue();
	}else{
		localStorage.setItem('subjectValue', val);
		setValue();
	}
	
}