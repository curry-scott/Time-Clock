function myFunction() {
    document.getElementById("button").innerHTML = "";
  }

setInterval(displayClock, 1000);

//Showing time- hours, minutes, seconds and AM or PM
function displayClock() {

let currentTime = new Date();
let hours = currentTime.getHours();
let minutes = currentTime.getMinutes();
let seconds = currentTime.getSeconds();
let amOrPm = '';


//AM or PM
if (hours < 12) {
    amOrPm = 'AM';
}
else{
    amOrPm = 'PM';
}




//format hours, minutes and seconds
if (hours < 10) {
    hours = "0" + hours;
}
if (minutes < 10) {
    minutes = "0" + minutes;
}
if (seconds < 10) {
    seconds = "0" + seconds;
}

let timeNow = hours + ':' + minutes + ':' + seconds + amOrPm;

//bringing it all together
clock.innerHTML = timeNow;

}

//Time
displayClock();