const $NOTICELIST = document.getElementsByClassName('noticeList')[0];
const $NOTICELISTQUERY = document.querySelector(".noticeList");
const $SUGANGBUTTON = document.getElementsByClassName('button')[0];
const $GANEUNG = document.getElementsByClassName('ganeung')[0];
const $JEHAN = document.getElementsByClassName('jehan')[0];
const $ADFIT = document.getElementsByClassName('adfit')[0];
const title = document.getElementsByClassName('title')[0];

const $TITLECONTAINER = document.getElementsByClassName('titleContainer')[0];
const $CONTAINER = document.getElementsByClassName('container')[0];
const $PHONECONTAINER = document.getElementsByClassName('phoneContainer')[0];

const nowTime = new Date();

/*리스트에 공지사항 내용 적어주세요.*/
const noticeList = ['수강신청 연습 방식을 커스텀할 수 있도록 업데이트했어요.', '개발자의 복학을 축하해주세요! 한모 처음 써봐요 🍀']

for (var i = noticeList.length-1; i >= 0; i--) {
	$NOTICELISTQUERY.insertAdjacentHTML('afterbegin', `<li>${noticeList[i]}</li>`)
}

var cnt = 1;

const setNotice = setInterval(() => {
	if (cnt === 1) {
		$NOTICELIST.style.bottom = '77px';
		cnt++;
	} else if (cnt === 2) {
		$NOTICELIST.style.bottom = '0px';
		cnt=1;
	} 
}, 5000);

check = () => {
	if(localStorage.getItem('deviceInfo') === 'false'){
		//다 안 보여주고 알림만 보여주기
		$CONTAINER.style.display = 'none';
		$TITLECONTAINER.style.display = 'none';
		$PHONECONTAINER.style.display = 'flex';
		$ADFIT.style.display = 'none';
	} 
	
	//if(true){
	//if ((nowTime.getHours() === 20 && nowTime.getMinutes() >= 58) || (nowTime.getHours() === 21 && nowTime.getMinutes() <= 10)){
	if ((nowTime.getHours() === 9 && nowTime.getMinutes() >= 58) || (nowTime.getHours() === 10 && nowTime.getMinutes() <= 10)){
		$SUGANGBUTTON.classList.add('noDisplay');
		$SUGANGBUTTON.classList.remove('display');
		$GANEUNG.classList.remove('thisTime');
		$JEHAN.classList.add('thisTime');
	}
}

setSemester = () => {
	let hakgi = 1
	if (nowTime.getMonth() >= 2 && nowTime.getMonth() <= 7){
		hakgi = 2;
	}
	title.innerText = `${nowTime.getFullYear()}-${hakgi}학기`;

}


setSemester();
check();