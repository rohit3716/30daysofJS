function time(){
    var date = new Date();
    var Hour = date.getHours();
    var Minutes = date.getMinutes();
    var Seconds = date.getSeconds();

    var currentTime = Hour + ":" + Minutes + ":" + Seconds;

    return currentTime;
}

function print(){
    console.log(time());
}

var interval = setInterval( print, 1000);
setTimeout(() => {
    clearInterval(interval);     
}, 5000);

