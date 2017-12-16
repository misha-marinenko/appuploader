var express = require('express');
var upload = require('multer')({ dest: 'all/' });
var admZip = require('adm-zip');
var app = express();
app.use('/allindex', express.static(__dirname + '/all'));
app.use('/', express.static(__dirname + '/uploader'));
app.post('/upload',upload.single('file'),function(req,res){
    debugger;
    var zip = new admZip(req.file);
    zip.extractAllTo(__dirname + "/all", true);
    res.json({status_text:"unzip", status:1});

});

var server = app.listen(process.env.PORT || 3000,function(){
    var host = server.address().address;
    var port = server.address().port;
    console.log(' appserver listening at http://%s:%s',host,port);
})