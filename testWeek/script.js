import axios from 'axios'
import * as cheerio from 'cheerio'
import fs from 'fs'

const test = new Date("2026-04-21")
const TIME = document.getElementById('time');
const SEMESTER = document.getElementById('semester')

async function getHufsData() {
    try {
        const url = 'https://www.hufs.ac.kr/hufs/11360/subview.do'
        const {data} = await axios.get(url)
        const $ = cheerio.load(data);
        const calendarData=[];
        const keywords = ["고사"]
        // 1. 모든 일정 박스를 순회합니다.
        $('.list-inner .list-box').each((index, element) => {
            // 2. 날짜 추출 (span 안의 텍스트)
            const date = $(element).find('.list-date span').text().trim();
            
            // 3. 내용 추출 (p.list-content의 텍스트)
            const content = $(element).find('.list-content').text().trim();

            const isTarget = keywords.some(keyword => content.includes(keyword))
            if (isTarget) {
                calendarData.push({date, content})
            }
        });

        fs.writeFileSync('data.json', JSON.stringify(calendarData, null, 2))
    } catch (error) {
        console.error('크롤링 에러:', error);
    }
}

const nowForTestName = new Date()
const counter = () => {
    setInterval(()=> {
        const now = new Date()
        
        distance = test.getTime() - now.getTime()

        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);

        TIME.innerText = `${days.toString().padStart(2, '0')}:${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}:${((distance%1000)/10).toString().padStart(2, '0').slice(0, 2)}`
    }, 10)
}

const setTestName = () => {
	let hakgi = 1
    let testname = "중간고사"
	if (nowForTestName.getMonth() >= 6 && nowForTestName.getMonth() <= 11){
		hakgi = 2;
        testname = "기말고사"
	}
	SEMESTER.innerText = `${nowForTestName.getFullYear()}-${hakgi}학기 ${testname}까지`;

}

getHufsData()
counter()
setTestName()