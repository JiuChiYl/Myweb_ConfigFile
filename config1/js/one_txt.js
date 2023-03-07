i = 0;
        ib = 0;
        function show() {
            content = ["在你通向那个人的路上，也许会有更多困难，但只要你坚信这条路通往『正确』，一切就有意义——钟离",
            "当你重新踏上旅途之后，一定要记得旅途本身的意义。——温迪", 
            "拾花鸟之一趣，照月风之长路。——万叶",
            "见证者，为见证而来。铭记者，因铭记而生。——钟离",
            "用自己的双脚丈量土地，将未知变为知识。——阿贝多",
            "我等必将复起，古木已发新枝。——忍冬之树",
            "总有地上的生灵，敢于直面雷霆的威光。",
            "最初的鸟儿是不会飞翔的，飞翔是他们勇敢跃入峡谷的奖励。——安柏",
            "只要不失去你的崇高，整个世界都会向你敞开。",
            "正是因为有大家的寄托，烟花才能以如此美妙的姿态一直存在下去吧。——宵宫",
            "纵使古玩价值连城，给人的快乐不过刚拥有时的一瞬。——凝光",
            "心有所向，日复一日，必有精进。——刻晴"
            ,""];
            sads = content[ib];
            str = content[ib].substr(0, i);
            gdds.innerHTML = str + "<span class='shanshuo'>_</span>";
            i++;
            console.log("当前字符位置>%c"+i+"%c/当前数组>%c"+ib+":%c"+content[ib],"color:#ff5d13","color:#000","color:#51ff00","color:#0099ff")
            if (i > sads.length) {
                clearInterval(tstm);
                i = 0;
                    setTimeout(function () {
                        ib++;
                        tstm = setInterval(show,150);
                        if(ib == (content.length) - 1){
                            ib = 0;
                            console.info("ib="+ib)
                        }
                    }, 10000);
            }
        }
        var tstm = setInterval(show, 150);
        show()