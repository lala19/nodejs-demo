var arr=[{goods_type:"歌星",name:"刘德华"},{goods_type:"帅哥",name:"刘处长"},{goods_type:"帅哥",name:"刘处长帅"}]
var result = [];
for (var i = 0; i < arr.length; i++) {
    var flag = true;
    var keyres = arr[i].goods_type;
    for (var j = 0; j < result.length; j++) {
        for (var key in result[j]) {
            if (keyres == key) {
                flag = false;
                result[j][key].push(arr[i]);
            }
        }
    }
    if (flag) {
        var obj = {};
        obj[keyres] = [arr[i]];
        result.push(obj);
    }
}
for (var i = 0; i < result.length; i++) {
    for (const key in result[i]) {
        result[i].goods = result[i][key];
    }
}
console.log(result);
//处理后:[{歌星:[{goods_type:"歌星",name:"刘德华"}]},{帅哥:[{goods_type:"帅哥",name:"刘处长"},{goods_type:"帅哥",name:"刘处长帅"}]}]
