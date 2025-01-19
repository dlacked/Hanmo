/*index.html은 index.js에서 환경 체킹함*/
const now = new Date();

check = () => {
	//if(true){
	if (((now.getHours() === 9 && now.getMinutes() >= 58) || (now.getHours() === 10 && now.getMinutes() <= 10)) || localStorage.getItem('deviceInfo') === 'false'){
		location.href = 'https://vsugangpractice.com/';
	}
}

check();