/*index.html은 index.js에서 환경 체킹함*/
const now = new Date();

const title = document.getElementsByClassName('title')[0];

restrictHanmo = () => {
	if (((now.getHours() === 9 && now.getMinutes() >= 58) || (now.getHours() === 10 && now.getMinutes() <= 10)) || localStorage.getItem('deviceInfo') === 'false'){
		location.href = 'https://vsugangpractice.com/';
	}
}

setSemester = () => {
	let hakgi = 1
	if (now.getMonth() >= 3 && now.getMonth() <= 8){
		hakgi = 2;
	}
	title.innerText = `${now.getFullYear()}-${hakgi}학기`;

}


setSemester();
restrictHanmo();