/**
 * 碰撞检测
 * 此方法为公共方法
 * @param {*} obj1 子弹节点 
 * @param {*} obj2 飞机div 飞机节点
 */
function crashTest(obj1,obj2){
    //水平的位移
    var  leftSide = obj1.offsetLeft - obj2.offsetWidth/2;
    var  rightSide = obj1.offsetLeft + obj1.offsetWidth + obj2.offsetWidth/2;

    var midX = obj2.offsetWidth/2 +obj2.offsetLeft;
    //垂直方向
    var  topSide = obj1.offsetTop - obj2.offsetHeight/2;
    var  bottomSide = obj1.offsetTop + obj1.offsetHeight + obj2.offsetHeight/2;

    var midY = obj2.offsetHeight/2 +obj2.offsetTop;

    if(leftSide<midX && rightSide> midX && topSide<midY && bottomSide>midY){
        return true;
    }else{
        return false;
    }
}