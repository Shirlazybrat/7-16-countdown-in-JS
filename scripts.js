//////// Global variables////////
// does the same as the parse
var rioStart = new Date('August 5, 2016 19:00').getTime();
var birthStart = new Date('October 12, 2016 01:00').getTime(); 

var secondsInAMinute = 60;
var secondsInAnHour = secondsInAMinute * 60;
var secondsInADay = secondsInAnHour * 24;
var secondsInAWeek = secondsInADay * 7;

var minutesDigit = (document.getElementsByClassName('minutes-number')[0]);
var hoursDigit = (document.getElementsByClassName('hours-number')[0]);
var daysDigit = (document.getElementsByClassName('days-number')[0]);
var weeksDigit = (document.getElementsByClassName('weeks-number')[0]);


console.log(weeksDigit);
weeksDigit.style.color = "white";

////////////////////////////////////////////////////////////////////////

function updateCounterBirth(){
// Get current time in millisecond since 1970 using the unix epoch
var now = Date.now();
// var rioStart = Date.parse('August 5, 2016 19:00')


// Time in seconds between the current moment and the start of Rio 2016
var getTimeTilBirth = (birthStart - now) / 1000;

console.log(getTimeTilBirth);

// Het various units time til event
var seconds = Math.floor(getTimeTilBirth % 60);
var minutes = Math.floor((getTimeTilBirth / secondsInAMinute) % 60);
var hours = Math.floor((getTimeTilBirth / secondsInAnHour) % 24);
var days = Math.floor((getTimeTilBirth / secondsInADay) % 7);
var weeks = Math.floor((getTimeTilBirth / secondsInAWeek) % 52);


console.log(weeks + " " + days + " " + hours + " " + minutes + " " + seconds);


var countdownTimer = document.getElementById('countdown-timer');
//console.dir(countdownTimer);

//*** 3 different ways to target something in the DOM ///////
//console.log(countdownTimer.querySelector('.weeks-number'));
var secondsDigit = (document.getElementsByClassName('seconds-number')[0]);
//console.log( document.getElementsByTagName('span')[0])


//Set the HTML of the given unit with the new amount
secondsDigit.innerHTML = seconds;
minutesDigit.innerHTML = minutes;
hoursDigit.innerHTML = hours;
daysDigit.innerHTML = days;
weeksDigit.innerHTML = weeks;
} ///close function


function updateCounterRio(){
// Get current time in millisecond since 1970 using the unix epoch
var now = Date.now();
// var rioStart = Date.parse('August 5, 2016 19:00')


// Time in seconds between the current moment and the start of Rio 2016
var getTimeTilRio = (rioStart - now) / 1000;

console.log(getTimeTilRio);

// Het various units time til event
var seconds = Math.floor(getTimeTilRio % 60);
var minutes = Math.floor((getTimeTilRio / secondsInAMinute) % 60);
var hours = Math.floor((getTimeTilRio / secondsInAnHour) % 24);
var days = Math.floor((getTimeTilRio / secondsInADay) % 7);
var weeks = Math.floor((getTimeTilRio / secondsInAWeek) % 52);


console.log(weeks + " " + days + " " + hours + " " + minutes + " " + seconds);


var countdownTimer = document.getElementById('countdown-timer');
//console.dir(countdownTimer);

//*** 3 different ways to target something in the DOM ///////
//console.log(countdownTimer.querySelector('.weeks-number'));
var secondsDigit = (document.getElementsByClassName('seconds-number')[0]);
//console.log( document.getElementsByTagName('span')[0])


//Set the HTML of the given unit with the new amount
secondsDigit.innerHTML = seconds;
minutesDigit.innerHTML = minutes;
hoursDigit.innerHTML = hours;
daysDigit.innerHTML = days;
weeksDigit.innerHTML = weeks;
} ///close function


//Call the setInterval that will run our update function every 1sec or 1000 millisecond
//   http://www.w3schools.com/jsref/met_win_setinterval.asp
setInterval(updateCounterRio , 1000);
setInterval(updateCounterBirth , 1000);