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
}