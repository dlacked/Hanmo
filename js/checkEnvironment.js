const now = new Date();
const user = navigator.userAgent;

check = () => {
	if ((now.getHours() === 9 && now.getMinutes() >= 58) || (now.getHours() === 10 && now.getMinutes() <= 9)){
		location.href = 'https://vsugangpractice.com/html/disable.html';
	} else if (user.indexOf('iPhone') > -1 || user.indexOf('Android') > -1) { 
		location.href = 'https://vsugangpractice.com/html/disable.html';
	} 
}

check();