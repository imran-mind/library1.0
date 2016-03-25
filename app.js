var express = require('express');
var app = express();
var router = express.Router();
var json2xls = require('json2xls');
app.use(json2xls.middleware);
router.get('/',function(req,res) {
    res.send("Hello World This = is =Beautiful world and Awesome Dunia ,Beauty of Node.js");
});

router.get('/name',function(req, res){
    var data = req.params.name;
   res.send('hello world '+data);
});

router.post('/add', function(req, res){
    var data= req.body;
    console.log('name');
    console.log(data);
    res.send('data inserted');
})
var jsonArr = [{
    foo: 'bar',
    qux: 'moo',
    poo: 123,
    stux: new Date()
},
    {
        foo: 'bar',
        qux: 'moo',
        poo: 345,
        stux: new Date()
    }];

app.use('/',router);



app.get('/excel',function(req,res) {
    /*res.setHeader('Content-disposition', 'attachment; filename=sample.csv');
    res.setHeader('Content-type', 'text/csv');
    res.write(csv);*/
    res.xls('data.xlsx', jsonArr);
});


app.listen(3300);
console.log('server is lestining on 3300')


