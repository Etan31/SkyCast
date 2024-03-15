/**
 * @license MIT
 * @fileoverview All api related stuff like api_key, api request etc.
 * @copyright codewithsadee 2023 All rights reserved
 * @author codewithsadee <mohammadsadee24@gmail.com>
 */

const api_key = "b8a84b455015781db98c293e744cbaf3"

export const  fetchData = function(URL, callback){
   fetch(`${URL}&appid=${api_key}`)
   .then(rex => res.json())
   .then(data => callback(data));
}

export const url = { 
   //added a text lat and lon before the value
   // https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=b8a84b455015781db98c293e744cbaf3
   currentWeather(lat, lon) {
      return `https://api.openweathermap.org/data/2.5/weather?${lat}&${lon}&units=metric`
   },
   forecast(lat, lon) {
      return `https://api.openweathermap.org/data/2.5/forecast?${lat}&${lon}&units=metric`
   },
   airPollution(lat, lon){
      return `http://api.openweathermap.org/data/2.5/air_pollution?${lat}&${lon}`
   },
   reverseGeo(lat, lon){
      return `http://api.openweathermap.org/geo/1.0/reverse?${lat}&${lon}&limit=5`
   },
   geo(query) {
      return `http://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5`
   }
}