const printValue = document.getElementsByClassName('printValue')[0];
const setting = document.getElementsByClassName('setting')[0];
const settingSection = document.getElementsByClassName('settingSection')[0];
const psugangInput = document.getElementsByClassName('psugangVal')[0];
const vsugangInput = document.getElementsByClassName('vsugangVal')[0];

var isSettedValue = false;


// 모바일 감지 시 index.html로 강제 이동 (모바일 접속을 막기 위함)

function isValidSetting(preselected, requested, waiting) {
	return Number.isInteger(preselected) && preselected >= 1 && preselected <= 15
		&& Number.isInteger(requested) && requested >= 1 && requested <= preselected
		&& (waiting === 'yes' || waiting === 'no');
}

setValue = () => {
	const preselected = Number(localStorage.getItem('psubjectValue'));
	const requested = Number(localStorage.getItem('subjectValue'));
	isSettedValue = isValidSetting(preselected, requested, localStorage.getItem('waitingValue'));
	if (isSettedValue){
		printValue.innerText = '올바른 설정값이 들어갔어요.'
		printValue.style.color = 'white';
		setting.style.background = '#001203';
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
function getSettingValue() {
	const psugangVal = Number(psugangInput.value);
	const vsugangVal = Number(vsugangInput.value);
	const waitingVal = document.querySelector('input[name="waitingYN"]:checked').value;
	
	if (!isValidSetting(psugangVal, vsugangVal, waitingVal)) {
		alert('설정 값을 다시 확인해주세요.');
	} else{
		localStorage.setItem('psubjectValue', psugangVal);
		localStorage.setItem('subjectValue', vsugangVal);
		localStorage.setItem('waitingValue', waitingVal);
		
		settingSection.style.display = 'none';
		setValue();
	}
	
}

function openSettingPanel() {
	settingSection.style.display = 'flex';
	
	psugangInput.value = localStorage.getItem('psubjectValue');
	vsugangInput.value = localStorage.getItem('subjectValue');
}