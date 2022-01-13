'use strict';

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
   687700 :"Запоріжжя",
         : "Львів",
         : "Кривий Ріг",
         : "Миколаїв",
         : "Севастополь",
         : "Маріуполь",
         : "Луганськ",
         : "Вінниця",
         : "Сімферополь",
         : "Макіївка",
         : "Херсон",
         : "Чернігів",
         : "Полтава",
         : "Хмельницький",
         : "Черкаси";
         : "Чернівці";
         : "Житомир",
         : "Суми",
         : "Рівне",
         : "Горлівка",
         : "Івано-Франківськ",
         : "Кам'янське",
         : "Кропивницький",
         : "Тернопіль",
         : "Луцьк"
}

function getWeather() {
	const cityId = document.querySelector('#city').value;
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

document.querySelector('#city').onchange = getWeather;