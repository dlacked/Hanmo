const title = document.getElementsByClassName('title')[0];
const today = new Date();

checkDate = () => {
	let hakgi = 1
	if (today.getMonth() >= 2 && today.getMonth() <= 7){
		hakgi = 2;
	}
	title.innerText = `${today.getFullYear()}-${hakgi}학기`;

}


checkDate();