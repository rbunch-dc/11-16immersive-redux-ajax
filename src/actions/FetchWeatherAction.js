import $ from 'jquery';
// import axios from 'axios'

const APIKEY = '482c145ce8edf1d69ea5168f9d06460c';
const weatherUrl = 'http://api.openweathermap.org/data/2.5/weather?units=imperial&appid=' + APIKEY + '&zip=';

export default function GetTheWeather(zipCode){
	console.log("Action running!!!", zipCode);
	const fullWeatherUrl = weatherUrl + zipCode;
	const thePromise = $.getJSON(fullWeatherUrl);
	console.log(thePromise);
	return{
		type: 'getWeather',
		payload: thePromise
	}		
}