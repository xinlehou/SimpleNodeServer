var express = require('express');
var bodyParser = require('body-parser');
var app = express();
 
app.get('/', function(request, response){
  // 输出 JSON 格式
   data = {
       'name':'王老师',
       'type': 'GET'
   };
   console.log(data);
  //  response.end(JSON.stringify(data));
   response.json(data);
});
 
// 创建 application/x-www-form-urlencoded 编码解析
// var urlencodedParser = bodyParser.urlencoded({ extended: false });

// 创建 application/json 编码解析
app.use(bodyParser.json());
var urlencodedParser = bodyParser.urlencoded({ extended: false });


 
app.post('/post', urlencodedParser, function(request, response){
  // 输出 JSON 格式
  //  data = {
  //      'name':request.body.name,
  //      'gender':request.body.gender
  //  };
   data = {
     'name':'王老师',
     'type': 'POST'
   }

  //  console.log(request.body);
  //  console.log(data,'======');
  //  response.end(JSON.stringify(data));
   response.json(data);
});
 
app.get('/roby', function(request, response){
  var hostName = request.hostname;
  console.log("hostName: %s", hostName);
  response.send("I got you!");
});
 
var server = app.listen(8083, function(){
  // var host = server.address().address;
  // var port = server.address().port;
  console.log("address: http://localhost:8083");
});