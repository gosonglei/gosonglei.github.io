/**
 * Created by leisong on 2016-9-29.
 */
var time = function () {
    var Time = new Date();
    var years = Time.getFullYear();
    var months = Time.getMonth()+1;
    var day = Time.getDate();
    var hours  = Time.getHours();
    var minutes = Time.getMinutes();
    var seconds = Time.getSeconds();
    months = months< 10 ? "0"+months : months;
    day = day< 10 ? "0"+day : day;
    hours = hours< 10 ? "0"+hours : hours;
    minutes = minutes< 10 ? "0"+minutes : minutes;
    seconds = seconds< 10 ? "0"+seconds : seconds;
    var id = document.getElementById('now_time');

    id.innerHTML ="NOW:"+ years+'年'+months+'月'+day+'日  '+hours+':'+minutes+':'+ seconds;
};
var timing = function () {
    var setTime = function (d) {
        d.setFullYear(2017);
        d.setMonth(8-1);
        d.setDate(20);
        d.setHours(0);
        d.setMinutes(0);
        d.setSeconds(0);
        d.setMilliseconds(0);
        return d.getTime();
    };
    var data = new Date();
    var now = data.getTime();
    var together = setTime(data);
    var exp = now - together;
    var days=Math.floor(exp/(24*3600*1000));
    var leave1=exp%(24*3600*1000)    //计算天数后剩余的毫秒数
    var hours=Math.floor(leave1/(3600*1000))
    //计算相差分钟数
    var leave2=leave1%(3600*1000)        //计算小时数后剩余的毫秒数
    var minutes=Math.floor(leave2/(60*1000))
    //计算相差秒数
    var leave3=leave2%(60*1000)      //计算分钟数后剩余的毫秒数
    var seconds=Math.round(leave3/1000);
    var id = document.getElementById('together_time');
    id.innerHTML = " 相差 "+days+" 天 "+hours+" 小时 "+minutes+" 分钟 "+seconds+" 秒";
};
var updateTime = function () {
    time();
    timing();
};
setInterval(updateTime,1000);

var mycanvas = function () {
        var canvas=document.getElementById('myCanvas');
        var ctx=canvas.getContext('2d');
        ctx.fillStyle='ff00de';
        ctx.strokeRect(0,0,700,500);
}

//页面加载完执行
function addLoadEvent(func) {
    var oldonload = window.onload;
    if (typeof window.onload != 'function') {
        window.onload = func;
    }
    else {
        window.onload = function() {
            oldonload();
            func();
        }
    }
};
addLoadEvent(mycanvas);