//Function will update the current time and injects it into the DOM- Document Object Model- 
function updateClock() {

    let now = new Date();  //get current time
    let hours = now.getHours(); //gets hours
    let minutes = now.getMinutes(); //gets minutes
    let seconds = now.getSeconds(); //gets seconds

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

    //gets the element we want to inject the clock into
    let elem = document.getElementById('time');

    //sets the elements inner HTML value to clock data
    elem.innerHTML = hours + ':' + minutes + ':' + seconds;
            }

   
