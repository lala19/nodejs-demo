//敌机类
class Enemy{
    constructor(){
        this.ele=null;
        this.id=parseInt(Math.random()*10000)+"";//飞机id
        this.type=0;//飞机类型
        this.hp=0;//血量
        this.speed=0;//飞机速度
        this.main=new GameEngine().init();
        this.count=0;//分数
    };
    //初始化敌人飞机
    init(){
        this.ele=document.createElement("div");
        this.main.ele.appendChild(this.ele);
        if(Math.random()>=0.95){
            this.ele.className="enemy-large";//大飞机
            this.type=6;
            this.speed=150;
            this.hp=10;
        }else if(Math.random()<0.95&&Math.random()>=0.7){
            this.ele.className="enemy-middle";//中飞机
            this.type=4;
            this.speed=90;
            this.hp=5;
        }else if(Math.random()<0.7){
            this.ele.className="enemy-small";//小飞机
            this.type=3;
            this.speed=50;
            this.hp=1;
        }
        this.ele.style.left=((this.main.ele.offsetWidth-this.ele.offsetWidth)*Math.random())+"px";
        this.ele.style.top=(0-this.ele.offsetHeight)+"px";
        this.main.enemys[this.id]=this;
        return this;
    };
    //敌人飞机移动
    move(){
        this.timer=setInterval(function(){
            this.ele.style.top=this.ele.offsetTop+3+"px";
            if(this.ele.offsetTop>=this.main.ele.offsetHeight){
                clearInterval(this.timer);
                delete(this.main.enemys[this.id]);
                this.ele.remove();
            }
        }.bind(this),this.speed)
    }
    //受伤
    hurt(){
        this.hp--;
        if(this.hp<=0){
            this.boom();
        }
    }
    //爆炸
    boom(){
        //敌机爆炸动画
        var num=0;
        clearInterval(this.ele.timer);
        if(this.type==6){
            this.count+=1000;
        }else if(this.type==4){
            this.count+=500;
        }else if(this.type==3){
            this.count+=100;
        }
        delete(this.main.enemys[this.id]);
        this.ele.timer=setInterval(function(){
            num++;
            if(this.type==3){//小飞机
                this.ele.style.backgroundImage=`url(images/plane1_die${num}.png)`;
                if(num>=this.type){
                    clearInterval(this.ele.timer);
                    this.ele.remove();
                }
            }else if(this.type==4){//中飞机
                this.ele.style.backgroundImage=`url(images/plane2_die${num}.png)`;
                if(num>=this.type){
                    clearInterval(this.ele.timer);
                    this.ele.remove();
                }
            }else if(this.type==6){
                this.ele.style.backgroundImage=`url(images/plane3_die${num}.png)`;
                if(num>=this.type){//大飞机
                    clearInterval(this.ele.timer);
                    this.ele.remove();
                }
            }

        }.bind(this),this.type*50);
    }
    //分数
    score(){
        return this.count;
    }
}