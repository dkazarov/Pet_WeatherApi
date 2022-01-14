'use strict';

const main = document.querySelector('main');
const headerTitle = document.querySelector('.header__title');
console.log(headerTitle);

const param = {
	"url" : "https://api.openweathermap.org/data/2.5/",
	"appid" : "df6323c09e8d7869991460f3e64324f5"
}

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
}

function selectCity () {
   let select = document.createElement('select');
   select.id = 'cities';
   main.appendChild(select);
   for (let key in cities) {      
      const option = document.createElement('option');
      option.classList.add('city__item');
      option.setAttribute('value', key);
      select.appendChild(option).innerHTML = cities[key];
   }
   console.log(select);
}

selectCity();

function changeHeaderTitle () {
   const countCity = Object.entries(cities);
   headerTitle.innerHTML = `Погода в найбільших ${countCity.length} містах України`;
}

changeHeaderTitle();

function getWeather() {
	const cityId = document.querySelector('#cities').value;
   
	fetch(`${param.url}weather?id=${cityId}&units=metric&APPID=${param.appid}`)
	.then(weather => { 
			return weather.json();
		}).then(showWeather);
   console.log(cityId);
}

function showWeather(data) {
	console.log(data);
}

getWeather();

document.querySelector('#cities').onchange = getWeather;