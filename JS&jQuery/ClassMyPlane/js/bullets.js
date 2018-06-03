//子弹类
class Bullet{
    constructor(){
        this.ele=null;
        this.id=parseInt(Math.random()*10000)+"";//给子弹一个id
        this.main=new GameEngine().init();//主引擎 this.main
        this.myplane=new MyPlane();//我的飞机
    }
    //初始化子弹
    init(){
        this.ele=document.createElement('div');
        this.main.ele.appendChild(this.ele);
        this.ele.className="bullet";
        this.ele.style.top=this.myplane.ele.offsetTop-this.ele.offsetHeight+"px";
        this.ele.style.left=(this.myplane.ele.offsetLeft+(this.myplane.ele.offsetWidth/2)-2)+"px";
        this.main.bullets[this.id]=this;
        return this;
    }
    //子弹移动
    move(){
        var self=this;
        //定时器控制移动
        this.ele.timer=setInterval(function(){
            self.ele.style.top=self.ele.offsetTop-10+"px";//-10 px
            if((self.ele.offsetTop+self.ele.offsetHeight)<=0){
                clearInterval(self.ele.timer);
                self.ele.remove();
                delete(self.main.bullets[self.id]);
            }
        },50)
    };
    //爆炸
    boom(){
        var num=0;
        clearInterval(this.ele.timer);
        delete(this.main.bullets[this.id]);
        this.timer=setInterval(function(){
            num++;
            this.ele.style.width="41px";
            this.ele.style.height="39px";
            this.ele.style.backgroundImage=`url(images/die${num}.png)`;
            this.ele.style.backgroundSize="cover";
            this.ele.style.left=this.ele.offsetLeft-20+"px";
            this.ele.style.top=this.ele.offsetTop-6+"px";
            if(num>=2){
                clearInterval(this.ele.timer);
                clearInterval(this.timer);
                this.ele.remove();
            }
        }.bind(this),40);
    }
}