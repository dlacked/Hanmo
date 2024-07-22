let DarkModeCounter = 0;
const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

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
		startPractice.removeAttribute('onclick');
		startPractice.innerText = '데스크탑을 사용해주세요.'
		startPractice.style.backgroundColor = '#f4f4f4';
		startPractice.style.color = 'black';
		document.getElementById('fixed').style.display = 'none';
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
	console.log(scrollY);
	let countA = 100;
	let countB = 1;
	let countC = 50;
	
	if (scrollY >= 2200 && scrollY <= 2400 && counted === false){
		countA = 100
		let counterA = setInterval(function() {
			document.getElementsByClassName('counter')[0].innerText = `${countA}`
			countA += 11;
			if (countA >= 13500){
				clearInterval(counterA);
			document.getElementsByClassName('counter')[0].innerText = `13.5K+`

			}
		}, 1)

		countB = 1
		let counterB = setInterval(function() {
			document.getElementsByClassName('counter')[1].innerText = `${countB}`
			countB++;
			if (countB >= 40){
				clearInterval(counterB);
			document.getElementsByClassName('counter')[1].innerText = `40+`

			}
		}, 50)

		countC = 50
		let counterC = setInterval(function() {
			document.getElementsByClassName('counter')[2].innerText = `${countC}`
			countC += 11;
			if (countC >= 2070){
				clearInterval(counterC);
			document.getElementsByClassName('counter')[2].innerText = `2K+`

			}
		}, 20)
		counted = true;
		
	}
	if (scrollY >= 2820){
		document.getElementById('fixed').style.boxShadow = '0px 0px 0px';
	} else{
		document.getElementById('fixed').style.boxShadow = '0px 4px 4px #777777';
	}
})

