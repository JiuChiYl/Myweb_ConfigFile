var $mocc = {
    /////////////////////////金字塔//////////////////////////
    /*                        说明                         */
////参数/////////////解释////////////////参数类型////////////
//  ots_int          显示数量              int             //
//  show_obj         显示对象              object/text     //
//  dom_obj          显示位置              object          //
/////////////////////////////////////////////////////////////
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
/*                        说明                         */
////参数/////////////解释////////////////参数类型////////
//  cbl_obj          侧边栏               object       //
//  wind             宽度(显示时的宽度)   int          //
//  transitiion      动画速度             text         //
//  onk              按钮(触发对象)       onclick      //
/////////////////////////////////////////////////////////
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
/*                        说明                         */
////参数/////////////解释////////////////参数类型////////
//  block_obj       需要显示/隐藏的块     object       //
//  hide_onk        按钮(隐藏)            onclick      //
//  show_onk        按钮(显示)            onclick      //
/////////////////////////////////////////////////////////
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
/*                        说明                         */
////参数/////////////解释////////////////////参数类型////
//  day             天数                     object    //
//  hou             时                       object    //
//  min             分                       object    //
//  sec             秒                       object    //
//  newTime         倒计时结束时间           text      //
//  res_function    倒计时完成后执行的函数   return    //
////////////////////////////////////////////////////////
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
                        if(s == 0&&m == 0&&h == 0&&d == 0){
                            clearInterval(retime);
                            return res_function();
                        }
        }
            letgoTime();
            const retime = setInterval(letgoTime,1000);
    }
}