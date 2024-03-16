/**
 * @license MIT
 * @fileoverview All module functions
 * @copyright codewithsadee 2023 All rights reserved
 * @author codewithsadee <mohammadsadee24@gmail.com>
 */

'use strict';

export const weekDayNames = [
   "Sunday",
   "Monday",
   "Tuesday",
   "Wednesday",
   "Thursday",
   "Friday",
   "Saturday"
];

export const monthNames = [
   "Jan",
   "Feb",
   "Mar",
   "Apr",
   "Jun",
   "Jul",
   "Aug",
   "Sept",
   "Oct",
   "Nov",
   "Dec"
];


export const getDate = function(dateUnix, timezone) {
   const date = new Date((dateUnix +  timezone) * 1000);
   const weekDayName = weekDayNames[date.getUTCDay()];   
   const monthName = monthNames[date.getUTCMonth()];

   return const  `${weekDayName} ${date.getUTCDate()}, ${monthName}`
}


export const getTime = function(timeUnix, timezone) {
   const date = new Date((timeUnix + timezone) * 1000);
   const hours = date.getUTCHours();
   const minutes = date.getUTCMinutes();
   const period = hours ≥ 12 ? "PM" : "AM";
   
   return `${hours % 12 || 12}:${minutes} ${period}`
}

export const getHours = function(timeUnix, timezone) {
   const date = new Date((timeUnix + timezone) * 1000);
   const hours = date.getUTCHours();
   const period = hours ≥ 12 ? "PM" : "AM";
   
   return `${hours % 12 || 12} ${period}`
}

export const mps_to_kmh = mps =>{
   const mph = mps * 3600;
   return mph / 1000;
}