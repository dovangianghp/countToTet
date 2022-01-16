
var longtime = 20000;
function start() {
    longtime = longtime - 1000;
    document.querySelector("body").style.height = String(window.innerHeight) + "px";
    var time = document.querySelectorAll(".box__clock__element");
    var countdown = document.querySelector(".box");
    var final = document.querySelector(".final");
    var currentTime = new Date();
    var NewYear = new Date("2/1/2022");
    // const longtime= NewYear.getTime()- currentTime.getTime();
    console.log(currentTime);
    if (longtime > 10000) {
        final.style.display = "none";
        countdown.style.display = "block";
        //tổng số giây mls->s
        let seconds = Math.floor(longtime / 1000);
        //tổng số phút s->phút
        let minutes = Math.floor(seconds / 60);
        //tổng số giờ phút-> giờ
        let hours = Math.floor(minutes / 60);
        //tổng số ngày giờ -> ngày
        let days = Math.floor(hours / 24);
        time[3].innerText = String(seconds % 60);
        time[2].innerText = String(minutes % 60);
        time[1].innerText = String(hours % 24);
        time[0].innerText = String(days);
    }
    else {
        final.style.display = "block";
        countdown.style.display = "none";
        if (longtime > 0) {
            final.innerText = String(Math.floor(longtime / 1000));
        }
        else {
            if (longtime > -10000) {
                final.innerText = "Chúc mừng năm mới";
            }
            else {
                document.querySelector("#box__titile").innerText = "2022";
                longtime = -longtime;
                final.style.display = "none";
                countdown.style.display = "block";
                //tổng số giây mls->s
                let seconds = Math.floor(longtime / 1000);
                //tổng số phút s->phút
                let minutes = Math.floor(seconds / 60);
                //tổng số giờ phút-> giờ
                let hours = Math.floor(minutes / 60);
                //tổng số ngày giờ -> ngày
                let days = Math.floor(hours / 24);
                time[3].innerText = String(seconds % 60);
                time[2].innerText = String(minutes % 60);
                time[1].innerText = String(hours % 24);
                time[0].innerText = String(days);
                longtime = -longtime;
            }
        }
    }
}
start();
setInterval(start, 1000);