var EventEmitter = require('events').EventEmitter;
var emitter = new EventEmitter();
var fs = require('fs');

/*
emitter.on('start_read',function(file_name){
    console.log("Started Reading file....nn");
    fs.readFile('test.html', 'utf8', function (err,data) {
        if (err) {
            emitter.emit('error','from_read');
        }
        else{
            console.log("Done Reading file....nn");
            emitter.emit('print_content',data);
        }
    });

});

emitter.on('print_content',function(data){
    console.log("Printing content of file....nn");
    console.log(data);
    emitter.emit('done');

});

emitter.on('error',function(type){

    console.log("Faced error while "+type);
    emitter.emit('done');

});

emitter.on('done',function(){

    console.log("Ok its done !");

});


emitter.emit('start_read','/etc/hosts');*/



emitter.on('start', function(file){
    console.log('hello starting file reading process');
    emitter.emit('start_read',file);
});

emitter.on('start_read', function(file){
    console.log('it is reading file');
    fs.readFile(file,'utf8',function(err, data){
        if(err){
            emitter.emit('error');
            console.log('error in reading file');
        }
        else{
            emitter.emit('print_data', data);
        }
    });
})

emitter.on('error',function(){
    console.log('error catch by event listener');
})

emitter.on('print_data', function(data){
    console.log('file data is ');
    console.log(data);
})


emitter.emit('start','test.html');
