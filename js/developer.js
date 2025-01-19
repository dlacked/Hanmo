const now = new Date();

check = () => {
	//if(true){
	if (localStorage.getItem('deviceInfo') === 'false'){
		location.href = 'https://vsugangpractice.com/';
	}
}

check();