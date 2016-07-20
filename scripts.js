//////// Global variables////////
// does the same as the parse
var rioStart = new Date('August 5, 2016 19:00').getTime();
var birthStart = new Date('October 12, 2016 01:00').getTime(); 

var getRio = document.getElementById('counterRio');
var getBirth = document.getElementById('counterBirth');

var secondsInAMinute = 60;
var secondsInAnHour = secondsInAMinute * 60;
var secondsInADay = secondsInAnHour * 24;
var secondsInAWeek = secondsInADay * 7;


////////////////////////////////////////////////////////////////////////


function updateCounter(theCounter, EventStart){
// Get current time in millisecond since 1970 using the unix epoch
var now = Date.now();
// var rioStart = Date.parse('August 5, 2016 19:00')

// Time in seconds between the current moment and the start of Rio 2016
var getTimeTilEvent = (EventStart - now) / 1000;

console.log(getTimeTilEvent);

// Get various units time til event
var seconds = Math.floor(getTimeTilEvent % 60);
var minutes = Math.floor((getTimeTilEvent / secondsInAMinute) % 60);
var hours = Math.floor((getTimeTilEvent / secondsInAnHour) % 24);
var days = Math.floor((getTimeTilEvent / secondsInADay) % 7);
var weeks = Math.floor((getTimeTilEvent / secondsInAWeek) % 52);


console.log(weeks + " " + days + " " + hours + " " + minutes + " " + seconds);


var countdownTimer = document.getElementById('countdown-timer');
//console.dir(countdownTimer);

var minutesDigit = (document.getElementsByClassName('minutes-number')[0]);
var hoursDigit = (document.getElementsByClassName('hours-number')[0]);
var daysDigit = (document.getElementsByClassName('days-number')[0]);
var weeksDigit = (document.getElementsByClassName('weeks-number')[0]);
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

console.log(weeksDigit);
weeksDigit.style.color = "white";

} ///close function





//Call the setInterval that will run our update function every 1sec or 1000 millisecond
//turn on the timer
//   http://www.w3schools.com/jsref/met_win_setinterval.asp
	//setInterval(updateCounterEvent , 1000);
	//setInterval(updateCounterRio , 1000);

//button.onclick=function(){setInterval(updateCounterRio , 1000)};

	

