
var moment = require('moment-timezone');

var from_time = moment('23:00:00','HH:mm:ss');
var to_time = moment('08:00:00','HH:mm:ss');
var request_time = moment().format('HH:mm:ss');
request_time = moment(request_time, 'HH:mm:ss');
var start = new Date(Number(from_time));
var end = new Date(Number(to_time));

console.log('start - '+start);
console.log('end - '+end);
console.log('from_time  '+from_time);
console.log('to_time '+to_time );
console.log('request_time   '+request_time);

validate();

function validate() {

    if (from_time < to_time) {
        if (from_time.isBefore(request_time) && request_time.isBefore(to_time)) {
            console.log('VALID');
        }
        else {
            console.log('EXPIRED');
        }
    }
    else
    {   //to_time add one day and generate milliosecond
        to_time.add("days",1).toString();
        var incrementDay = new Date(Number(to_time));
        console.log('to_time'+incrementDay);
        console.log('one day add '+to_time);
        if (from_time.isBefore(request_time) && request_time.isBefore(to_time)) {
            console.log('VALID');
        }
        else {
            console.log('EXPIRED');
        }
    }

}

