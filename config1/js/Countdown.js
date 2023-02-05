var da = document.querySelector('.day');
var ho = document.querySelector('.hour');
var mi = document.querySelector('.minute');
var se = document.querySelector('.second');
let newTime = +new Date("2025-6-30 00:00:00");
function resTime(){
    let sintim = +new Date();
    let ftim = (newTime - sintim) / 1000;
    let d = parseInt(ftim / 60 / 60 / 24);
    let h = parseInt(ftim / 60 / 60 % 24);
    let m = parseInt(ftim / 60 % 60);
    let s = parseInt(ftim % 60);
    d = d < 10 ? '0' + d : d;
    h = h < 10 ? '0' + h : h;
    m = m < 10 ? '0' + m : m;
    s = s < 10 ? '0' + s : s;
    da.innerHTML = d;
    ho.innerHTML = h;
    mi.innerHTML = m;
    se.innerHTML = s;
}
resTime();
setInterval(resTime,1000);