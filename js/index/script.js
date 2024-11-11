const $NOTICELIST = document.getElementsByClassName('noticeList')[0];
const $NOTICELISTQUERY = document.querySelector(".noticeList");
const $GRID1 = document.getElementsByClassName('grid1')[0];
const $GRID2 = document.getElementsByClassName('grid2')[0];
const $GRID3 = document.getElementsByClassName('grid3')[0];
/*리스트에 공지사항 내용 적어주세요.*/
const noticeList = ['25학번의 새로운 시작을 응원해요!', '2025년 2월, 한모가 업데이트되었어요.', '한국외국어대학교 70주년 (1954년 개교)']

for (var i = noticeList.length-1; i >= 0; i--) {
	$NOTICELISTQUERY.insertAdjacentHTML('afterbegin', `<li>${noticeList[i]}</li>`)
}

var cnt = 79;

const setNotice = setInterval(function(){
	if (noticeList.length * 79 < cnt + 79) {
		cnt = 0;
	}
	$NOTICELIST.style.bottom = `${cnt}px`;
	cnt += 79;
}, 3000);

const setGrid = setInterval(function() {
	$GRID1.style.gridTemplateRows = `${Number(Math.random())*100}fr ${Number(Math.random())*100}fr`;
	$GRID2.style.gridTemplateRows = `${Number(Math.random())*100}fr ${Number(Math.random())*100}fr`;
	$GRID3.style.gridTemplateRows = `${Number(Math.random())*100}fr ${Number(Math.random())*100}fr`;
}, 2000);