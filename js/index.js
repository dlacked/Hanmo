const $NOTICELIST = document.getElementsByClassName('noticeList')[0];
const $NOTICELISTQUERY = document.querySelector(".noticeList");
const $SUGANGBUTTON = document.getElementsByClassName('button')[0];
const $JEHAN = document.getElementsByClassName('jehan')[0];

const nowTime = new Date();

/*리스트에 공지사항 내용 적어주세요.*/
const noticeList = ['한국외대 25학번 학우들의 첫 학기를 응원합니다!', '2025년 1월, 한모 UI 업데이트 완료', '한국외국어대학교 70주년 (1954년 개교)']

for (var i = noticeList.length-1; i >= 0; i--) {
	$NOTICELISTQUERY.insertAdjacentHTML('afterbegin', `<li>${noticeList[i]}</li>`)
}

var cnt = 1;

const setNotice = setInterval(() => {
	if (cnt === 1) {
		$NOTICELIST.style.bottom = '77px';
		cnt++;
	} else if (cnt === 2) {
		$NOTICELIST.style.bottom = '154px';
		cnt++;
	} else{
		$NOTICELIST.style.bottom = '0px';
		cnt=1;
	}
}, 3000);

check = () => {
	//if((nowTime.getHours() === 23 && nowTime.getMinutes() >= 15)){
	if ((nowTime.getHours() === 9 && nowTime.getMinutes() >= 58) || (nowTime.getHours() === 10 && nowTime.getMinutes() <= 9)){
		$SUGANGBUTTON.classList.add('unavailable');
		$SUGANGBUTTON.classList.remove('available');
		$JEHAN.style.color = 'red';
	}else if (user.indexOf('iPhone') > -1 || user.indexOf('Android') > -1) { 
		location.href = 'https://vsugangpractice.com/html/disable.html';
	} 
}

check();