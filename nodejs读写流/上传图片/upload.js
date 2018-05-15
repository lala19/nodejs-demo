var express=require('express');
var multer=require("multer");
var storage = multer.diskStorage({
    //上传的文件夹
    destination: (req, file, cb)=> {
        cb(null, './uploads')
    },
    //保存的名字
    filename:(req, file, cb)=>{
        // console.log(req,file);
        cb(null, Date.now() + "-" + file.originalname);
    }
})
var uploads= multer({
    storage: storage
})
var app = express();
app.post('/getimg', uploads.single('selfile'), function (req, res) {
    res.append("Access-Control-Allow-Origin", "*");
    res.send('获取图片');
});
app.listen(9000);