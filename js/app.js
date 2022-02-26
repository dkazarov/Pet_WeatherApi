'use strict';

const  select = document.querySelector('#cities'),
       headerTitle = document.querySelector('.header__title'),
       weatherIcon = document.querySelector('.icon'),
       locationOut = document.querySelector('.location'),
       temp = document.querySelector('.temp'),
       stress = document.querySelector('.stress'),
       maxTemp = document.querySelector('.max-temp'),
       minTemp = document.querySelector('.min-temp'),
       wind = document.querySelector('.wind');

const param = {
	"url" : "https://api.openweathermap.org/data/2.5/",
	"appid" : "df6323c09e8d7869991460f3e64324f5"
};

// Connect to Api
function getWeather() {
	const cityId = document.querySelector('#cities').value;
   
	fetch(`${param.url}weather?id=${cityId}&units=metric&APPID=${param.appid}`)
	.then(weather => { 
			return weather.json();
		}).then(showWeather);
}

function showWeather(data) {
      weatherIcon.innerHTML = `<img src="http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png">`;
      temp.innerHTML = `${Math.round(data.main.temp)}&deg`;
      stress.innerHTML = `Атмосверний тиск: <br>${data.main.pressure} гПа`;
      maxTemp.innerHTML = `Макс. температура сьогодні: ${Math.round(data.main.temp_max)}&deg`;
      minTemp.innerHTML = `Мін. температура сьгодні: ${Math.round(data.main.temp_min)}&deg`;
      wind.innerHTML = `Швидкість вітра: <br>${data.wind.speed} км / год`;
}

// City
const cities = {
   703448 : "Київ",
   706483 : "Харків",
   698740 : "Одесса",
   709930 : "Дніпро",
   709717 : "Донецьк",
   687700 : "Запоріжжя",
   702550 : "Львів",
   703845 : "Кривий Ріг",
   700569 : "Миколаїв",
   701822 : "Маріуполь",
   702658 : "Луганськ",
   689558 : "Вінниця",
   702320 : "Макіївка",
   706448 : "Херсон",
   710735 : "Чернігів",
   696643 : "Полтава",
   706369 : "Хмельницький",
   710791 : "Черкаси",
   710719 : "Чернівці",
   686967 : "Житомир",
   692194 : "Суми",
   695594 : "Рівне",
   707471 : "Івано-Франківськ",
   691650 : "Тернопіль",
   702569 : "Луцьк"
};

// Dynamic create select for Object city
function selectCity () {
   for (let key in cities) {       
      const option = document.createElement('option');
      option.classList.add('city__item');
      option.setAttribute('value', key);
      select.appendChild(option).innerHTML = cities[key];
   }
}
// changes the number of cities
function changeTitle (obj, div) {
   let countCity = 0;
   for (let index in obj) {
      countCity++;  
   }
   div.innerHTML = `Погода в найбільших ${countCity} містах України`;
}

//Date

// Add zero
const date = new Date();
const day = ['Неділя', 'Понеділок', 'Вівторок', 'Середа', 'Четвер', 'Пʼятниця', 'Субота'];
const month = ['Січня', 'Лютого', 'Березеня', 'Квітня', 'Травня', 'Червня', 'Липня', 'Серпня', 'Вересня', 'Жовтня', 'Листопада', 'Грудня'];

const addZero = (dayMonth) => {
   if (dayMonth < 10) { 
      return dayMonth = '0' + dayMonth; 
   } else {
      return dayMonth;
   }
};

const showDate = () => {
   const today = document.querySelector('.today__date');
   const dayOfMonth = date.getDate();
   today.textContent = `${day[date.getDay()]} ${addZero(dayOfMonth)} ${month[date.getMonth()]} `;
};



showDate();
changeTitle(cities, headerTitle);
selectCity();
getWeather();

document.querySelector('#cities').onchange = getWeather;