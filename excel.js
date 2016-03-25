/**
 * Created by root on 29/2/16.
 */
var json2xls = require('json2xls');
var fs = require('fs');
var fields = ['car', 'price', 'color'];
var myCars = [
    {
        "car": "Audi",
        "price": 40000,
        "color": "blue"
    }, {
        "car": "BMW",
        "price": 35000,
        "color": "black"
    }, {
        "car": "Porsche",
        "price": 60000,
        "color":  "green"
    }
];

json2xls({ data: myCars, fields: fields }, function(err, xls) {
    if (err) console.log(err);
    fs.writeFile('data.xlsx', xls, 'binary', function(err) {
        if (err) throw err;
        console.log('file saved');
    });
});