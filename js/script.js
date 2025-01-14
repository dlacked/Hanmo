const $NOTICELIST = document.getElementsByClassName('noticeList')[0];
const $NOTICELISTQUERY = document.querySelector(".noticeList");

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

