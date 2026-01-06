const flightTimes = {
  "그리스": 12.5,        // 아테네(ATH)
  "네덜란드": 11.5,      // 암스테르담(AMS)
  "노르웨이": 12.0,      // 오슬로(OSL) - 계절편 기준
  "덴마크": 11.5,        // 코펜하겐(CPH)
  "독일": 11.5,          // 베를린/프랑크푸르트 기준(FRA)
  "러시아": 9.0,         // 모스크바(SVO) - 현재 우회 항로 기준 차이 발생 가능
  "루마니아": 12.0,      // 부쿠레슈티(OTP)
  "말레이시아": 6.5,      // 쿠알라룸푸르(KUL)
  "몽골": 3.5,           // 울란바토르(UBN)
  "미국": 14.0,          // 워싱턴 D.C.(IAD) - 동부 기준
  "베트남": 5.0,          // 하노이(HAN)
  "불가리아": 12.0,      // 소피아(SOF)
  "세르비아": 12.0,      // 베오그라드(BEG)
  "스웨덴": 11.5,        // 스톡홀름(ARN)
  "스페인": 13.5,        // 마드리드(MAD)
  "슬로바키아": 11.0,    // 브라티슬라바(BTS)
  "아랍에미리트": 10.0,   // 아부다비/두바이(DXB)
  "아제르바이잔": 9.5,     // 바쿠(GYD)
  "에티오피아": 12.5,     // 아디스아바바(ADD)
  "우크라이나": 11.0,     // 키이우(KBP) - 현재 운항 중단 전 기준
  "이탈리아": 12.5,      // 로마(FCO)
  "인도": 9.0,           // 뉴델리(DEL)
  "인도네시아": 7.0,      // 자카르타(CGK)
  "일본": 2.0,           // 도쿄(NRT/HND)
  "이란": 10.5,          // 테헤란(IKA)
  "중국": 2.0,           // 베이징(PEK/PKX)
  "체코": 11.5,          // 프라하(PRG)
  "카자흐스탄": 7.0,      // 아스타나(NQZ)
  "크로아티아": 12.0,    // 자그레브(ZAG)
  "태국": 6.0,           // 방콕(BKK)
  "튀르키예": 11.5,      // 앙카라/이스탄불(IST)
  "포르투갈": 13.5,      // 리스본(LIS)
  "폴란드": 11.0,        // 바르샤바(WAW)
  "프랑스": 12.0,        // 파리(CDG)
  "헝가리": 11.5,        // 부다페스트(BUD)
  "개발자 본가": 2.5      // 기준점 또는 국내
};

const countryClicked = (countryInfo) => {
  const data = {country: keys[countryInfo], endtime: flightTimes[keys[countryInfo]], duringTime: 0}
  localStorage.setItem('data', JSON.stringify(data))
  location.href = './timer'
}

const MENU = document.getElementById('menu');
const keys = Object.keys(flightTimes); // 키들만 모은 배열 ["그리스", "네덜란드", ...]

// 1. 반복문 안에서 기존 내용을 덮어쓰지 않도록 빈 문자열 생성
let menuHTML = "";

for (let i = 0; i < keys.length; i++) {
    const countryName = keys[i];          // "그리스"
    const time = flightTimes[countryName]; // 12.5

    // 2. 문자열을 계속 더해줍니다 (+=)
    menuHTML += `
        <div class='${countryName} country' onclick="countryClicked(${i})">
            <img src="./img/${countryName}.svg">
            <p>${countryName}</p>
            <p>${time}시간</p>
        </div>`;
}

// 3. 마지막에 한 번만 HTML에 삽입 (성능상 이점)
MENU.innerHTML = menuHTML;