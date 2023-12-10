function updateTime() {
    const now = new Date();
    const currHour = now.getHours();
    const currMin = now.getMinutes();
    const currDay = now.getDay();
    const currDate = now.getData();
    //const currMonth = now.getMonth();

    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    //let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    let ampm = "am";
    let hourAltered = currHour;
    if(currHour>12) {hourAltered-=12;ampm="pm"}

    let output = "It is currently " + hourAltered + ":" + currMin + ampm + " on " + days[currDay] + "," + currDate;

    document.getElementById("date-time").innerHTML = output;


    return 0;
}

setInterval(updateTime, 1000);