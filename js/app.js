// DOM ELEMENTS
let time = document.getElementById('time'),
greeting = document.getElementById('greeting'),
name = document.getElementById('name'),
focus = document.getElementById('focus'),
amPmBtn = document.getElementById('switch'),
morning = document.getElementById('morning'),
afternoon = document.getElementById('afternoon'),
evening = document.getElementById('evening'),
fontInputName = document.getElementById('fontInputName'),
navBar = document.getElementById('navBar'),
iconBtn = document.getElementById('iconBtn'),
iconBtn2 = document.getElementById('iconBtn2'),
iconBtn3 = document.getElementById('iconBtn3'),
linkToFont = document.getElementById('fontSetter');

const morningUrl = morning.value = localStorage.getItem('morning_img') ? localStorage.getItem('morning_img') : '';
const afternoonUrl = afternoon.value = localStorage.getItem('afternoon_img') ? localStorage.getItem('afternoon_img') : '';
const eveningUrl = evening.value = localStorage.getItem('evening_img') ? localStorage.getItem('evening_img') : '';
linkToFont.href = localStorage.getItem('fontURL') ? localStorage.getItem('fontURL') : 'https://fonts.googleapis.com/css?family=Open+Sans&display=swap';
let myFont = fontInputName.value = "'" +localStorage.getItem('fontName')+ "'" ? localStorage.getItem('fontName') : ""; 

if (localStorage.getItem('fontURL') && localStorage.getItem('fontName')) {
	$('body').css('font-family', myFont + ", sans-serif");
}

// OPTIONS
let showAmPm = localStorage.getItem('AM-PM') == 'true' ? true:false;
amPmBtn.checked = localStorage.getItem('AM-PM');
//SHOW THE TIME
function showTime(){
	let today = new Date(),
	hour = today.getHours(),
	min = today.getMinutes(),
	sec = today.getSeconds();

	// SET AM OR PM
	const amPm = hour >= 12 ? 'PM' : "AM";

	// 12 HOUR FORMAT
	hour = hour%12 || 12;

	// OUTPUT THE TIME WITH or WITHOUT SECONDS
	//time.innerHTML = `${addZero(hour)}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)} ${showAmPm ? amPm : ''}`;
	time.innerHTML = `${addZero(hour)}<span>:</span>${addZero(min)} ${showAmPm ? amPm : ''}`;

	setTimeout(showTime,1000);
}

//ADD ZERO
function addZero(n){
	return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

//SET BACKGROUND AND GREETING
function setBgGreeting(){
	let today = new Date(),
	hour = today.getHours();

	if (hour < 12) {
		//MORNING
		document.body.style.backgroundImage = morningUrl ? "linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url('"+morningUrl+"')" : "linear-gradient(rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1)), url('./img/morning.jpg')";
		greeting.textContent = "Good Morning";
		iconBtn.classList.remove("iconNightMode");
		navBar.classList.remove("nightMode");
	}else if(hour < 18){
		//AFTERNOON
		document.body.style.backgroundImage = afternoonUrl ? "linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url('"+afternoonUrl+"')" : "linear-gradient(rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.1)), url('./img/afternoon.jpg')";
		greeting.textContent = "Good Afternoon";
		iconBtn.classList.remove("iconNightMode");
		navBar.classList.remove("nightMode");
	}else{
		//EVENING
		document.body.style.backgroundImage = eveningUrl ? "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('"+eveningUrl+"')" : "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url('./img/evening.jpg')";
		greeting.textContent = "Good Evening";
		document.body.style.color = "white";
		iconBtn.classList.add("iconNightMode");
		iconBtn2.classList.add("iconNightMode");
		iconBtn3.classList.add("iconNightMode");
		navBar.classList.add("nightMode");	
	}
}

//GET NAME
function getName(){
	if (localStorage.getItem('name') === null) {
		name.textContent = '[Enter Name]';
	}else{
		name.textContent = localStorage.getItem('name');
	}
}

//SET NAME
function setName(e){
	if (e.type === 'keypress') {
		//MAKE SURE ENTER IS PRESSED
		if (e.which == 13 || e.keyCode == 13) {
			localStorage.setItem('name', e.target.innerText);
			name.blur();
		}

	}else{
		localStorage.setItem('name', e.target.innerText);

	}
}

//GET FOCUS
function getFocus(){
	if (localStorage.getItem('focus') === null) {
		focus.textContent = '[Enter Focus]';
	}else{
		focus.textContent = localStorage.getItem('focus');
	}
}

//SET FOCUS
function setFocus(e){
	if (e.type === 'keypress') {
		//MAKE SURE ENTER IS PRESSED
		if (e.which == 13 || e.keyCode == 13) {
			localStorage.setItem('focus', e.target.innerText);
			focus.blur();
		}

	}else{
		localStorage.setItem('focus', e.target.innerText);

	}
}

//SET BACKGROUND URL
function setBgMorning(e){
	if (e.type === 'keypress') {
		//MAKE SURE ENTER IS PRESSED
		if (e.which == 13 || e.keyCode == 13) {
			localStorage.setItem('morning_img', e.target.value);
			focus.blur();
			location.reload();
		}

	}else{
		localStorage.setItem('morning_img', e.target.value);
		location.reload();
	}
}
function setBgAfternoon(e){
	if (e.type === 'keypress') {
		//MAKE SURE ENTER IS PRESSED
		if (e.which == 13 || e.keyCode == 13) {
			localStorage.setItem('afternoon_img', e.target.value);
			focus.blur();
			location.reload();
		}

	}else{
		localStorage.setItem('afternoon_img', e.target.value);
		location.reload();

	}
}
function setBgEvening(e){
	if (e.type === 'keypress') {
		//MAKE SURE ENTER IS PRESSED
		if (e.which == 13 || e.keyCode == 13) {
			localStorage.setItem('evening_img', e.target.value);
			focus.blur();
			location.reload();
		}

	}else{
		localStorage.setItem('evening_img', e.target.value);
		location.reload();
	}
}


function setFontName(e){
	if (e.type === 'keypress') {
		//MAKE SURE ENTER IS PRESSED
		if (e.which == 13 || e.keyCode == 13) {
			localStorage.setItem('fontName', e.target.value);
			focus.blur();
			font = e.target.value.replace(" ", "+");
			localStorage.setItem('fontURL', "https://fonts.googleapis.com/css?family="+font+"&display=swap");
			location.reload();
		}

	}else{
		localStorage.setItem('fontName', e.target.value);
		font = e.target.value.replace(" ", "+");
		localStorage.setItem('fontURL', "https://fonts.googleapis.com/css?family="+font+"&display=swap");
		location.reload();
	}
}


//LISTENERS
name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);

focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);

morning.addEventListener('keypress', setBgMorning);
morning.addEventListener('blur', setBgMorning);

afternoon.addEventListener('keypress', setBgAfternoon);
afternoon.addEventListener('blur', setBgAfternoon);

evening.addEventListener('keypress', setBgEvening);
evening.addEventListener('blur', setBgEvening);

fontInputName.addEventListener('keypress', setFontName);
fontInputName.addEventListener('blur', setFontName);



amPmBtn.addEventListener('change', function() {
    if(this.checked) {
        localStorage.setItem('AM-PM', true);
    } else {
        localStorage.setItem('AM-PM', false);
    }
    showAmPm = localStorage.getItem('AM-PM') == 'true' ? true:false;
});


//GEOLOCATION AND CLIMATE
window.addEventListener('load', ()=>{
	iconBtn3.addEventListener('click', ()=>{
		let lat, long;
		let climateDescription = document.querySelector("#climate-description");
		let temp = document.querySelector("#temperature");


		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(position =>{
				lat = position.coords.latitude;
				long = position.coords.longitude;

				const proxy = "https://cors-anywhere.herokuapp.com/";

				const api = `${proxy}https://api.darksky.net/forecast/293a082e421a0ce8cc6303c8b936c14e/${lat},${long}?lang=pt`;

				fetch(api)
				.then(response =>{
					return response.json();
				})
				.then(data =>{
					console.log(data);
					const tm = data.timezone;
					const {temperature, summary} = data.currently;
					//SET DOM ELEMENTS FROM API
					climateDescription.textContent = summary;
					temp.textContent = parseInt((temperature-32)/1.8) + '°C';

					
				});
			});
		}
	})
})



//RUN
showTime();
setBgGreeting();
getName();
getFocus();
