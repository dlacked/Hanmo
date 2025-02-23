const practiceValue = localStorage.getItem('practiceSetter');
const subjectValue = localStorage.getItem('subjectValue');
const subjectTable = document.querySelector('.table');
const waiting = document.getElementsByClassName('unvisible')[0];
const waitingArea = document.getElementsByClassName('unvisible')[1];

for (var i = 1; i <= Number(subjectValue); i++){
	subjectTable.insertAdjacentHTML('beforeend', 
		`<tr id='subject${i}'>
		<td>${i}</td>
		<td><button class="register" onClick="registerClick(${i})" tabIndex="-1"></button></td>
		<td>연습</td>
		<td>H00000000</td>
		<td></td>
		<td>한국외국어대학교 모의수강신청${i}</td>
		<td>1</td>
		<td>1</td>
		<td>Hankuk University of F.S. Professor ${i}</td>
		<td>월 1 2 3 ( )</td>
		<td>0 / 100</td>
		<td><input type="checkbox"></td>
		<td></td>
		</tr>`
   )
}

const practiceMode = document.getElementsByClassName('practiceMode')[0];

practiceValue == 1 ? practiceMode.innerText = '연습 모드: BASIC MODE' : practiceMode.innerText = '연습 모드: SELECT MODE'


function pyoDisplay() {
	//Search 버튼 눌렀을 때 표 표시
	const pyo = document.getElementsByClassName('table')[0];
	if (pyo.style.visibility !== 'hidden') {
		pyo.style.visibility = 'visible'
	}
}

function registerClick(val) {
	//첫 번째 과목 클릭 시 실행되는 함수
	var TorF = confirm('과목을 수강신청 하시겠습니까?')
	if (TorF === true) {
		window.addEventListener('keydown', (e) => {
			if(e.keyCode == 13){
				e.preventDefault();
			}
		})
		waiting.style.display = 'flex';
		waitingArea.style.display = 'flex';
		setTimeout(() => {
			waiting.style.display = 'none';
			waitingArea.style.display = 'none';
			if (rc[val-1] === true) {
				alert('201 : 이미 신청된 교과목을 신청하였습니다.\n 다시확인하시고 신청해 주십시오.')
			} else {
				alert('수강신청이 저장완료되었습니다.')
				count++
				rc[val-1] = true
				done(val)

				if (count == subjectValue) {
					stopStopwatch()
				}
			}
		}, 2000)
    	
	}
}

function stopStopwatch() {
	var today2 = new Date()
	localStorage.setItem('SELECTtime', (today2-today1)/1000);
  	location.replace('result.html')
}

function deleteDone(nowCnt) {
  var torf = confirm('해당 과목을 삭제 하시겠습니까?')
  if (torf === true) { 
    cnt-- //삭제 후 추가시 번호가 8이 넘어가는 현상을 막기 위함
	rc[noObject[nowCnt]-1] = false
    
    const parent = document.getElementsByClassName('done')[0];
    parent.deleteRow(nowCnt - 1)
    const children = parent.childNodes
    for (i = 0; i < children.length; i++) {
      children[i].childNodes[0].innerHTML = `<td>${i + 1}</td>`
      children[i].childNodes[1].innerHTML = `<td><button class="delete" onClick=deleteDone(${i + 1})></button><td>`
      //console.log(children[i].childNodes[1])
    }
    count -= 1
    alert('수강신청함에서 선택한 과목이 삭제완료되었습니다.')
    delete noObject[nowCnt]
    for (var i = nowCnt; i <= Object.keys(noObject).length; i++){ //담겨진 수강신청 번호에 맞는 과목이 들어가도록 for문을 통해 재정비
      var tmp = noObject[i+1]
      noObject[i] = tmp
      delete noObject[i+1]
    }
    //console.log(noObject)
  }
}

//리스트 map을 통해 해당
function done(clicked) {
	//노드를 이용해 추후 삭제할 노드를 삭제
	//몇번을 클릭했느냐에 따라 함수 호출
	cnt += 1 //몇번째로 클릭했느냐에 따라 번호 출력
	// tr부분 요소
	let td = [] // td부분 요소
	let tr = document.createElement('tr')
	for (i = 0; i < 13; i++) {
	td.push(document.createElement('td'))
	}
	let text = [] //td에 저장할 텍스트
	let nowCnt = cnt
	//텍스트가 아닌 html요소 button을 입력하는 변수
	let btn = document.createElement('button')
	btn.setAttribute('class', 'delete')
	btn.setAttribute('onClick', `deleteDone(${nowCnt})`)
	let ipt = document.createElement('input')
	ipt.setAttribute('type', 'checkbox')
	
	noObject[cnt] = clicked;
	//숫자인 변수를 저장하기위해 백틱`${}`사용
	text.push(document.createTextNode(`${cnt}`))
	//button들어갈 곳
	text.push(document.createTextNode(''))
	text.push(document.createTextNode('연습'))
	text.push(document.createTextNode(`H00000000`));
	text.push(document.createTextNode(''))
	text.push(document.createTextNode(`한국외국어대학교 모의수강신청${clicked}`))
	text.push(document.createTextNode('1'))
	text.push(document.createTextNode('1'))
	text.push(document.createTextNode(`Hankuk University of F.S. Professor ${clicked}`))
	text.push(document.createTextNode('월 1 2 3 ( )'))
	text.push(document.createTextNode('0 / 100'))
	//input들어갈 곳
	text.push(document.createTextNode(''))
	text.push(document.createTextNode(''))
	for (i = 0; i < text.length; i++) {
		if (i === 1) {
			td[i].appendChild(btn)
		}
		if (i === 11) {
			td[i].appendChild(ipt)
		}
		if (i !== 1 && i !== 11) {
			td[i].appendChild(text[i])
		}
	}
	for (i = 0; i < 13; i++) {
    //td에 저장한 노드들을 tr의 자식노드로 전달
    	tr.appendChild(td[i])
  	}
  	tr.setAttribute('id', `${cnt}`)
  	//마지막으로 id='done'이라는 태그 밑에 자식 노드로 tr을 전달
  	document.getElementsByClassName('done')[0].appendChild(tr)
}

var noObject = {} //key: 담겨진 과목의 No., value: 예비수강신청함의 No.
var count = 0 
let cnt = 0 //done()함수용 count 위랑 다릅니다
var rc = new Array(subjectValue);
var today1 = new Date() //수강신청 및 수정/삭제 페이지 들어오자마자의 시간