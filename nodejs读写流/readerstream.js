var fs = require("fs");

//空的容器
var data = '';
//创建可读流
var readerStream = fs.createReadStream('input.txt');

// 处理流事件 --> data, end, and error
//data 在不断读的状态
//end 读完的状态
//error 出现错误的状态

readerStream.on('data', function(chunk) {
	data += chunk;
});

//完全读完的状态
readerStream.on('end', function() {
	console.log(data);
});
