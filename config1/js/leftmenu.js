		var i = 0;
		var wid = ["","300px","0px"];
	function sow(){
		if(i == (wid.length) - 1)i = 0;
		i++;
		$(".cbl").css("width",wid[i]);
	}
	$("#exit").click(function(){
		if(i == (wid.length) - 1)i = 0;
		i++;
		$(".cbl").css("width",wid[i]);
	})
		//////////////////侧边栏控件/////////////////////
		$("#cjs1").click(function(){
			if($("#ctab1").is(":hidden")){
				$("#ctab1").slideDown(300);
				$("#ctab2,#ctab3,#ctab4").slideUp(300);
			}else{
				$("#ctab1").slideUp(300);
			}
		})
		$("#cjs2").click(function(){
			if($("#ctab2").is(":hidden")){
				$("#ctab2").slideDown(300);
				$("#ctab1,#ctab3,#ctab4").slideUp(300);
			}else{
				$("#ctab2").slideUp(300);
			}
		})
		$("#cjs3").click(function(){
			if($("#ctab3").is(":hidden")){
				$("#ctab3").slideDown(300);
				$("#ctab2,#ctab1,#ctab4").slideUp(300);
			}else{
				$("#ctab3").slideUp(300);
			}
		})
		$("#cjs4").click(function(){
			if($("#ctab4").is(":hidden")){
				$("#ctab4").slideDown(300);
				$("#ctab2,#ctab3,#ctab1").slideUp(300);
			}else{
				$("#ctab4").slideUp(300);
			}
		})