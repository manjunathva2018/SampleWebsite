var express=require('express');

var app=express();
var path=require('path');

app.use(express.static('public'));

app.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/public/index.html'));
})

var server=app.listen(2001,function(){
    console.log('Server started at port 2001')
})