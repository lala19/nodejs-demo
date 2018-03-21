    // 原来的数组
    var arr = [{
        value: '100',
        time: '2016/02/11'
    }, {
        value: '101',
        time: '2016/03/12'
    }, {
        value: '102',
        time: '2015/02/11'
    }];

    var newArr=[];
    for (const item in arr) {
        var time=arr[item]["time"];
        var arrSplit=time.split("/");
        let obj={};
        obj.value=arr[item]["value"];
        obj.year=arrSplit[0];
        obj.month=arrSplit[1];
        obj.time=time;
        newArr.push(obj);
    }

    var obj={};
    for (const item in newArr) {
        var year=newArr[item]["year"];
        var month=newArr[item]["month"];
        if(obj[year]==undefined){
            obj[year]={};
        }
        if(obj[year][month]==undefined){
            obj[year][month]=[];
        }
        console.log(obj[year][month]);
    }
    console.log(obj);
    /**
     * { '2015': { '02': [{
        value: '100',
        time: '2016/02/11'
    }] , 
    '2016':{}.....
    }
     * 
     */