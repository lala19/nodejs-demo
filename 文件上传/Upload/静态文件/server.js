var express = require('express');
var app = express();
//app.use(express.static('files'));
app.use(express.static(__dirname + '/files'));
app.use(express.static('img'));
console.log(__dirname + '/files')
//app.use(express.static(__dirname + '/public'));
// app.post('/getimg', function (req, res) {
//     res.append("Access-Control-Allow-Origin", "*");
//     res.send('获取图片');
// });
// app.get('/', function (req, res) {
//     res.append("Access-Control-Allow-Origin", "*");
//     res.send('打开静态文件');
// }); 
app.listen(9999);
console.log("开启服务器")