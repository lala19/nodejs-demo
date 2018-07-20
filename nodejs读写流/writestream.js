var fs = require("fs");
var data = 'asssssssssas';

//创建一个可以写入的流，写入到文件 output.txt中
var writerStream = fs.createWriteStream('output.txt');
//写
writerStream.write(data, 'UTF8');
//监听写完
writerStream.end(function() {
	console.log("写入完成。");
});
