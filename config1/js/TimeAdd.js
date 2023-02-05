var sxsd = 1000;
function liatTime() {
    E = new Date("2022/5/5 00:00:00");
    N = new Date();
    T = (N.getTime() - E.getTime());
    g =  12*30*24*60*60*1000;
    y = T / g;
    Y = Math.floor(y);
    month = (y - Y) * 12;
    O = Math.floor(month);
    d = (month - O) * 30;
    D = Math.floor(d);
    h = (d - D) * 24;
    H = Math.floor(h);
    m = (h - H) * 60;
    M = Math.floor(m);
    s = (m - M) * 60;
    S = Math.floor(s);
    Y = Y < 10 ? '0' + Y : Y;
    O = O < 10 ? '0' + O : O;
    D = D < 10 ? '0' + D : D;
    H = H < 10 ? '0' + H : H;
    M = M < 10 ? '0' + M : M;
    S = S < 10 ? '0' + S : S;
    //  增加一个可以控制速度的功能
    document.getElementsByClassName("Times")[0].innerHTML = Y + "年" + O + "月" + D + "天" + "<span style='color:blue;'>" + H + "</span>" + "时" + "<span style='color:orange;'>" + M + "</span>" + "分" + "<span style='color:green;'>" + S + "</span>" + "秒";
    // document.getElementsByClassName("Times")[0].innerHTML = H+"天"+H+"时"+M+"分"+S+"秒"
}