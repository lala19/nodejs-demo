//游戏引擎类 单例
class GameEngine {
    constructor(){
        if(!GameEngine.instance){
            GameEngine.instance = this;
        } else {
            return GameEngine.instance;
        }
        this.ele = null;
        this.myPlane = new MyPlane().init();
        this.enemys = [];//敌机
        this.bullets = [];//子弹
    }

    //初始化游戏引擎
    init(){
        this.ele = document.getElementById('main_body');
        return this;
    }

    //开始游戏
    start(){
        this.loading(function(){
            //创建飞机类创建飞机
            this.myPlane.init();
            this.keyControll();//设置键盘按下事件移动
        }.bind(this));
    }

    //游戏加载
    loading(callback){
        var logo = document.createElement("div");//logo
        this.ele.appendChild(logo);
        logo.className = "logo";
        var load = document.createElement("div");//加载的小灰机
        this.ele.appendChild(load);
        load.className = "loading";
        var num = 0;
        var timer = setInterval(function(){
            num++;
            load.style.backgroundImage = `url(images/loading${num % 3 + 1}.png)`;
            if(num >= 7){
                clearInterval(timer);//加载完 清空定时器
                //清空ele 开始游戏
                this.ele.innerHTML = "";
                if(callback){
                    callback();
                    this.myPlane.openfire();// 开火
                    setInterval(function(){
                        var en=new Enemy();
                        en.init().move();
                    }.bind(this), 900);
                }
            }
        }.bind(this), 50);
    }

    //键盘控制移动
    keyControll(){
        // 键盘控制:上下左右默认为false当按下改为true 键位松开立刻为false
        // 定时器:如果为键位按下为true 40ms加5px, 平滑移动
        var left = false;
        var right = false;
        var top = false;
        var bottom = false;
        var self = this;
        window.onkeydown = function(evt){
            var e = evt || window.event;
            var keyCode = e.keyCode;
            switch(keyCode){
                case 37:
                    left = true;
                    break;
                case 38:
                    top = true;
                    break;
                case 39:
                    right = true;
                    break;
                case 40:
                    bottom = true;
                    break;
            }
        };
        setInterval(function(){
            if(left){
                self.myPlane.ele.style.left = self.myPlane.ele.offsetLeft - 10 + "px";
            } else if(right){
                self.myPlane.ele.style.left = self.myPlane.ele.offsetLeft + 10 + "px";
            } else if(top){
                self.myPlane.ele.style.top = self.myPlane.ele.offsetTop - 10 + "px";
            } else if(bottom){
                self.myPlane.ele.style.top = self.myPlane.ele.offsetTop + 10 + "px";
            }
            if(self.myPlane.ele.offsetLeft <= 0){
                self.myPlane.ele.style.left = "0px";
            }
            if(self.myPlane.ele.offsetLeft >= (self.ele.offsetWidth - self.myPlane.ele.offsetWidth)){
                self.myPlane.ele.style.left = self.ele.offsetWidth - self.myPlane.ele.offsetWidth + "px";
            }
            if(self.myPlane.ele.offsetTop <= 0){
                self.myPlane.ele.style.top = "0px";
            }
            if(self.myPlane.ele.offsetTop >= (self.ele.offsetHeight - self.myPlane.ele.offsetHeight)){
                self.myPlane.ele.style.top = self.ele.offsetHeight - self.myPlane.ele.offsetHeight + "px";
            }
        }, 40);
        window.onkeyup = function(evt){
            var e = evt || window.event;
            var keyCode = e.keyCode;
            switch(keyCode){
                case 37:
                    left = false;
                    break;
                case 38:
                    top = false;
                    break;
                case 39:
                    right = false;
                    break;
                case 40:
                    bottom = false;
                    break;
            }
        }
    }

    //检测碰撞
    checkplane(){
        //子弹与敌机
        // this.score.innerText=count;
        setInterval(function(){
            for(var ekey in this.enemys){
                for(var bkey in this.bullets){
                    if(crashTest(this.bullets[bkey].ele, this.enemys[ekey].ele)){
                        this.enemys[ekey].hurt();//掉血
                        this.bullets[bkey].boom();//子弹爆炸
                    }
                }
            }
        }.bind(this));
        //敌机与我的灰机
        setInterval(function(){
            for(var key in this.enemys){
                if(crashTest(this.enemys[key].ele,this.myPlane.ele)){
                    delete(this.enemys[this.enemys[key].id]);
                    this.myPlane.boom();//我机爆炸
                }
            }
        }.bind(this))
    };
    //分数

}