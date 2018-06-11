var express = require('express');
var multer = require('multer');
var storage = multer.diskStorage({
    // 上传文件夹
    destination: function (req, file, cb) {
        cb(null, './uploads')
    },
    // 保存的文件名字
    filename: function (req, file, cb) {
        console.log(file)
        cb(null, Date.now() + "-" + file.originalname)
    }
})
var upload = multer({
    storage: storage
})
var app = express();
app.post('/getimg', upload.single('logo'), function (req, res) {
    res.append("Access-Control-Allow-Origin", "*");
    res.send('获取图片');
});
app.listen(8888);