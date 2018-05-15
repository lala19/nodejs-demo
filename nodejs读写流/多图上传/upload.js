var express= require("express");
var multer = require('multer');

var storage=multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads')//上传文件夹
    },
    // 保存的文件名字
    filename: function (req, file, cb) {
        cb(null, Date.now() + "-" + file.originalname)
    }
})
var upload=multer({
    storage:storage
});
//实例化第一个express的应用
var app = express();
app.post('/getimg', upload.any(), function (req, res) {
    res.append("Access-Control-Allow-Origin", "*");
    res.send('获取图片');
});
app.listen(9000);