console.log("Activity-A: Triggering Activity-B at "+showTime());
setTimeout(showSessionExpired,5000);
console.log("Activity-A: Triggered Activity-B at "+showTime()+" will execute after 5 seconds");

function showTime(){
    const date = new Date();
    return date.getHours() + "Hrs:" + date.getMinutes() +"Min:" + date.getSeconds()+ "Secs";
}

function showSessionExpired(){
    console.log("Activity-B: Your session expired at "+showTime());
}