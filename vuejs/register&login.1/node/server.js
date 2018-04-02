var express = require('express');
var bodyParser = require('body-parser');
var mysql = require("mysql");
var Connection=require("./createConnection.js");
var app = express();
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: false
}))
// parse application/json
app.use(bodyParser.json())

app.post("/register", function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*"); //允许跨域
    res.setHeader("Content-Type", "text/plain;charset=UTF-8"); //字符编码
    Connection(`insert into userinfo set username='${req.body.username}',password='${req.body.password}'`, function (results) {
        //执行关闭
        //console.log('The solution is: ', results);
        res.send("注册成功");
    });
})

app.post("/update", function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*"); //允许跨域
    res.setHeader("Content-Type", "text/plain;charset=UTF-8"); //字符编码
    Connection(`update userinfo set username='${req.body.username}',password='${req.body.password}' where id=${req.body.id}`, function (results) {
        res.send("修改成功");
    });
})

app.post("/delete", function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*"); //允许跨域
    res.setHeader("Content-Type", "text/plain;charset=UTF-8"); //字符编码
    Connection(`delete from userinfo where id=${req.body.id}`, function (results) {
        //res.send("删除成功");
        Connection(`select * from userinfo`,function(results1){
            res.send({
                results1
            });
        })
    });
})

app.post("/login", function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*"); //允许跨域
    res.setHeader("Content-Type", "text/plain;charset=UTF-8"); //字符编码
    Connection("select * from userinfo where username='" + req.body.username + "'", function (results) {
        //执行关闭
        if (results.length == 1 && results[0].password == req.body.password) {
            Connection("select * from userinfo", function (results1) {
                // connection.end();
                res.send({
                    results1
                });
            })
        } else {
            res.send({
                status: 0,
                msg: "用户名或密码错误"
            });
        }


    });
})

app.listen(9000);
console.log("开启服务器");