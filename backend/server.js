var express        =         require("express");
var bodyParser     =         require("body-parser");
var app            =         express();
var PORT           =         3001;
var shell = require('shelljs');
var cors = require('cors');
app.use(cors());
app.post('/',function(req,res){
  // console.log('This is peer')
  var ip = require("ip").address();
  shell.exec('chmod 0755 run.sh');
  shell.exec('./run.sh');
  var res_data = {
    'success':'The Node is successfully created',
    'url': ip+':8080'};
  res.send(res_data);
  });
app.listen(PORT,function(){
  console.log("Started on PORT " + PORT);
})
