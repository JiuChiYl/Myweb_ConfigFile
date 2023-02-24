var $mocc = {
    /////////////////////////金字塔//////////////////////////
    jzt: function(ots_int,show_obj,dom_obj){
        if(show_obj == ''){
            show_obj = "*";
        }
        for(var i = 1; i < ots_int; i++){
            for(var j = 1;j < ots_int - i;j++){
                dom_obj.append(' ');
            }
            for(var j = 1;j < i;j++){
                dom_obj.append(show_obj+' ');
            }
            dom_obj.append("<br>");
        }
    },
/////////////////////////侧边栏//////////////////////////
    cbl: function(cbl_obj,wind,transition,onk){
        var i = 0;
        var wid = ["",wind+"px","0px"];
        onk.click(function(){
            if (i == (wid.length) - 1)i=0;
            i++;
            cbl_obj.css({"width":wid[i],"transition":transition});
        })
    },
/////////////////////////查看更多////////////////////////
    xsgd: function(block_obj,hide_onk,show_onk){
        show_onk.click(function(){
            block_obj.css("display","block");
            hide_onk.css("display","block");
            show_onk.css("display","none");
        });
        hide_onk.click(function(){
            block_obj.css("display","none");
            hide_onk.css("display","none");
            show_onk.css("display","block");
        })
    },
/////////////////////////倒计时//////////////////////////
    djs: function(day,hou,min,sec,newTime,res_function){
        let newTimes = new Date(newTime);
        function letgoTime(){
            let nowTime = +new Date();
            let pnt_time = (newTimes - nowTime) / 1000;
            let d = parseInt(pnt_time / 60 / 60 / 24);
            let h = parseInt(pnt_time / 60 / 60 % 24);
            let m = parseInt(pnt_time / 60 % 60);
            let s = parseInt(pnt_time % 60);
                d = d < 10 ? '0' + d : d;
                h = h < 10 ? '0' + h : h;
                m = m < 10 ? '0' + m : m;
                s = s < 10 ? '0' + s : s;
                    day.text(d);
                    hou.text(h);
                    min.text(m);
                    sec.text(s);
                        if(d,h,m,s === 0){
                            return res_function;
                            return clearInterval(retime);
                        }
        }
        // setTimeout(function(){
            letgoTime();
            const retime = setInterval(letgoTime,1000);
        // },3000)
        
    }
}