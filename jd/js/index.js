window.onload = function() {

    changeColor();
    downTime();


    // function countTime() {

    //     var liList = document.querySelectorAll('.top-left li');
    //     var total;
    //     var timer = null;
    // timer = setInterval(function() {

    //     total = 3 * 60 * 60;

    //     total--;
    //     if (total < 0) {
    //         clearInterval(timer);
    //         alert("时间到");
    //         return;
    //     }
    //     var hour = Math.floor(total / 3600);
    //     var min = Math.floor(total % 3600 / 60)
    //     var sec = total % 60;

    //     liList[0].innerHTML = Math.floor(hour / 10);
    //     liList[1].innerHTML = hour % 10;

    //     liList[3].innerHTML = Math.floor(min / 10);
    //     liList[4].innerHTML = min % 10;

    //     liList[6].innerHTML = Math.floor(sec / 10);
    //     liList[7].innerHTML = sec % 10;

    // }, 1000)


    // }
}

function changeColor() {

    var header = document.querySelector('header');
    var banner = document.querySelector('.banner')

    var banHeight = banner.offsetHeight;

    window.onscroll = function() {

        var result = document.body.scrollTop / banHeight;
        if (result >= 0.8) {
            result = 0.8;
        }
        // console.log(document.body.scrollTop / banHeight);
        header.style.background = 'rgba(201, 21, 35,' + result + ')';

    }
}

function downTime() {
    /*需要倒计时的时间*/

    var total = 5 * 60 * 60;
    var timer = null;

    /*操作dom*/
    var skTime = document.querySelector('.top-left');
    /*所有的SPAN*/
    var liList = skTime.querySelectorAll('li');

    timer = setInterval(function() {

        total--;
        if (total < 0) {
            clearInterval(timer);
            alert("时间到");
            return;
        }

        var hour = Math.floor(total / 3600);
        var min = Math.floor(total % 3600 / 60)
        var sec = total % 60;

        liList[0].innerHTML = Math.floor(hour / 10);
        liList[1].innerHTML = hour % 10;

        liList[3].innerHTML = Math.floor(min / 10);
        liList[4].innerHTML = min % 10;

        liList[6].innerHTML = Math.floor(sec / 10);
        liList[7].innerHTML = sec % 10;

    }, 18)
}