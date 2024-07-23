let DarkModeCounter = 0;
const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
let isPhone = false;

if (isDarkMode === true) {
	lightDarkModeSetter({
		bodyColor: 'white',
		bodyBackgroundColor: '#0c0c0c',
		mainPageBackgroundImage: "url('./img/bg_global_dark.png')",
		spansColor: 'white',
		innerText: '라이트 모드'
	})
	++DarkModeCounter;
}


window.onload = function deviceCheck() {
	const user = navigator.userAgent;
	
	const startPractice = document.getElementById('startPractice');
	
	if ( user.indexOf('iPhone') > -1 || user.indexOf('Android') > -1) {
		isPhone = true;
		startPractice.removeAttribute('onclick');
		startPractice.innerText = '데스크탑을 사용해주세요.'
		startPractice.style.backgroundColor = '#f4f4f4';
		startPractice.style.color = 'black';
	}
}


function lightDarkModeSetter(settingValues) {
	const mainPage = document.getElementById('mainPage');
	const spans = document.getElementsByTagName('span')
	const darkModeButton = document.getElementById('darkMode');
	
	document.body.style.color = settingValues.bodyColor;
	document.body.style.backgroundColor = settingValues.bodyBackgroundColor;
	mainPage.style.backgroundImage = settingValues.mainPageBackgroundImage;
	for (let i = 0; i < spans.length-3; i++){
		spans[i].style.color = settingValues.spansColor;
	}
	
	darkModeButton.innerText = settingValues.innerText;
	
}

function fDarkMode() {
	if (DarkModeCounter === 1){
		lightDarkModeSetter({
			bodyColor: 'black',
			bodyBackgroundColor: 'white',
			mainPageBackgroundImage: "url('./img/bg_global_light.png')",
			spansColor: 'black',
			innerText: '다크 모드'
		})
		--DarkModeCounter;
	} 
	
	else {
		
		lightDarkModeSetter({
			bodyColor: 'white',
			bodyBackgroundColor: '#0c0c0c',
			mainPageBackgroundImage: "url('./img/bg_global_dark.png')",
			spansColor: 'white',
			innerText: '라이트 모드'
		})
		
		++DarkModeCounter;
	}
	
	
}

function fGoPractice() {
	location.replace('./html/selectMode.html');
}


let counted = false;

window.addEventListener('scroll', (event)=> {
	let scrollY = this.scrollY;
	let countA = 100;
	let countB = 1;
	let countC = 50;
	
	if ((scrollY >= 2100 && counted === false && isPhone === true) || (scrollY >= 2350 && counted === false && isPhone === false)){
		countValue({
			classNum: 0,
			valueCount: 100,
			howMuchCount: 11,
			lastCount: 13500,
			showLastCount: '13.5K+',
			howMuchDelay: 1
			
		})
		
		countValue({
			classNum: 1,
			valueCount: 1,
			howMuchCount: 1,
			lastCount: 40,
			showLastCount: '40+',
			howMuchDelay: 50
			
		})
		
		countValue({
			classNum: 2,
			valueCount: 50,
			howMuchCount: 11,
			lastCount: 2070,
			showLastCount: '2K+',
			howMuchDelay: 20
			
		})
		counted = true;
		
	}
})

function countValue(obj){
	let valueCounter = setInterval(function() {
		document.getElementsByClassName('counter')[obj.classNum].innerText = `${obj.valueCount}`;
		obj.valueCount += obj.howMuchCount;
		if (obj.valueCount >= obj.lastCount){
			clearInterval(valueCounter);
			document.getElementsByClassName('counter')[obj.classNum].innerText = `${obj.showLastCount}`;
		}
	}, obj.howMuchDelay)
}

