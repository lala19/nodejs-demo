//我的飞机类 单例
class MyPlane{
    constructor(){
        if(!MyPlane.instance){
            MyPlane.instance = this;
        }else {
            return MyPlane.instance;
        }
        this.ele=null;
        this.bullteSpeed=0;
    }
    //初始化我的飞机
    init(){
        var main=new GameEngine().init().ele;
        this.ele=document.createElement("div");
        main.appendChild(this.ele);
        this.ele.className="myplane";
        this.ele.style.left=main.offsetWidth/2-(this.ele.offsetWidth)/2+"px";
        this.ele.style.top=main.offsetHeight-this.ele.offsetHeight+"px";
        return this;
    }
    //开火
    openfire(){
        setInterval(function(){
            new Bullet().init().move();
        },(this.bullteSpeed*2));
    }
    //爆炸
    boom(){
        var num=0;
        var self=this;
        var timer=setInterval(function(){
            num++;
            self.ele.style.backgroundImage=`url(images/me_die${num}.png)`;//boom sha ka la ka
            if(num>=4){
                clearInterval(timer);
                alert("游戏结束");
                window.location.href="dafeiji.html";
            }
        },400);
    }
};