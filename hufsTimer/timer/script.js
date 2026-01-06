const TIME = document.getElementById('time');
const LEFTTIME = document.getElementById('leftTime')
let PP = document.getElementById('progressPercent')
let PF = document.getElementById('progressForeground')
const data = JSON.parse(localStorage.getItem('data'))
const NAME = document.getElementById('countryName')
const PC = document.getElementsByClassName('progressCountry')[1]
const PA = document.getElementById('progressAirplane')

PC.setAttribute('src', `../img/${data['country']}.svg`)
if (data['country'] == '개발자 본가'){
  PA.setAttribute('src', `../img/bus.svg`)
}
NAME.innerText = `${data['country']}까지`
const startedTime = new Date()
const studyPlan = data['endtime'] * 60 * 60 * 1000

const counter = () => {
    setInterval(()=> {
        const now = new Date()
        let left_time = studyPlan - (now - startedTime)
        
        let left_time_per = 1 - left_time / studyPlan

        let hours = Math.floor((left_time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((left_time % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((left_time % (1000 * 60)) / 1000);

        TIME.innerText = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}.${((left_time%1000)/10).toString().padStart(2, '0').slice(0, 2)}`
        PF.style.width = `${left_time_per}%`
        PP.innerText = `${left_time_per.toFixed(2)}%`

        if (hours == 0 && minutes == 0 && seconds == 0){
          NAME.innerText = `${data['country']}에 도착했습니다.`
          TIME.innerText = "오늘 여기까지 오시느라 수고 많으셨습니다!"
        }
    }, 10)
}

counter()