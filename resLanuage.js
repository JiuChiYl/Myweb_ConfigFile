const getLanuage = function(dict,lanu,dom){
    $.ajax({
        url:dict,
        dataType:'json',
        type:'get',
        success:function(data){
            for(var i = 0;i < Object.keys(dom).length; i++){
                if(Object.values(data.config[Object.keys(dom)[i]]) = 'val'){
                    Object.values(dom)[i].val(data.dom[Object.values(dom)[i]]);
                }else if(Object.values(data.config[Object.keys(dom)[i]]) = 'text'){
                    Object.values(dom)[i].text(data.dom[Object.values(dom)[i]]);
                }
            }
        }
    });
}
const getlang = function(cdm){
    getLanuage(cdm.dict,cdm.lanu,cdm.dom);
}