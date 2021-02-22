
function displayTime() {
    //Gives values to variables
    let clock = document.getElementById('time');
    let time = new Date();
    let hour = time.getHours();
    let minute = time.getMinutes();
    let second = time.getSeconds();
    let amOrPm = 'AM';


    //AM or PM
    if (hour >= 12) {
        amOrPm = 'PM';
    }

    //Sets standard time
    if(document.getElementById('stanTime').checked) {
        if (hour > 12) {
            hour = hour - 12;
    }
    //Sets 2 digits 00:00:00AMPM
    }
    if(document.getElementById('milTime').checked) {
        amOrPm = '';
    }
    if (hour < 10) {
        hour = "0" + hour;
    }
    if (minute < 10) {
        hour = "0" + hour;
    }
    if (second < 10) {
        second = "0" + second;
    }
       let timeNow = hour + ':' + minute + ':' + second + amOrPm;
    
    //bringing it all together
    clock.innerHTML = timeNow;
}
displayTime();
setInterval(displayTime, 1000);


