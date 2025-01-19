/*index.html은 index.js에서 환경 체킹함*/
const now = new Date();

check = () => {
	console.log('실행')
	//if(true){
	if (((now.getHours() === 9 && now.getMinutes() >= 58) || (now.getHours() === 10 && now.getMinutes() <= 10)) || localStorage.getItem('deviceInfo') === 'false'){
		console.log('스마트폰')
		location.href = 'https://vsugangpractice.com/';
	}
}

check();