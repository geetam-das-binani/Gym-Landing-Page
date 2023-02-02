
var countdownDate = new Date("  11 05 2023 19:37:03").getTime();


var clear = setInterval(() => {


    var now = new Date().getTime();

    var timeleft = (countdownDate - now);

    var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeleft % (1000 * 60) / 1000));





    document.getElementById("timer").innerHTML = days + "d" + " " + hours + "h" + " " + minutes + "m" + " " + seconds + "s";

    if (timeleft < 0) {
        clearInterval(clear)
        document.getElementById("timer").innerHTML = "DEAL EXPIRED COME BACK LATER";
    }



}, 1000)







