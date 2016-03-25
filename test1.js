var async = require('async');

actionArray = [
    function one(cb) {
        console.log("one");
        cb(null,'one');
    },
    function two(cb) {
        console.log("two");
        cb(null,'two');
    },
    function three(cb){
        console.log("three");
        cb(null,'three');
    }
]

async.parallel(actionArray,function(err,result){
    if(err){
        console.log('error in asyn parallel',err);
    }
    console.log('result',result);
});