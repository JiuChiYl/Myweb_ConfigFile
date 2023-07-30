var get = {};
get.jsonVal = function (dataType) {
    dataType = {};
    dataType.key = function (jsonda) {
        var res = Object.keys(jsonda);
        return res;
    }
    dataType.val = function (jsonda) {
        var res = Object.values(jsonda);
        return res;
    }
    dataType.ret = function(cmd){
        dataType[cmd.type](cmd.jsonda);
    }
}
get.jsn = function(demo){
    get.jsonVal(demo.dataType);
}
get.ads = function(sdm){
    get[sdm.type]()
}