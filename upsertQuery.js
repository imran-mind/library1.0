 function addContacts(req, res, next) {
    log.info('--->rider  addContact ', req.body);
    var input = req.body;
    var p = '' ;
    var d = '' ;
    var query1 = "INSERT INTO contacts (name,mobile,email) VALUES "
    var query2 = " ON CONFLICT (mobile,email) DO UPDATE SET name = exclude.name;"
    var finalQuery = '' ;
    for (var i = 0; i < input.length; i++) {
        if (i !== (input.length-1)) {
            d = "(" + "\'"+input[i].name+"\'"+","+"\'"+ input[i].mobile+"\'"+","+"\'"+ input[i].email+"\'"+"),";
            p = p + d;
        }
        else {
            d = "(" + "\'"+input[i].name+"\'"+","+"\'"+ input[i].mobile+"\'"+","+"\'"+ input[i].email+"\'"+")";      
            p = p + d;
        }
    }
    finalQuery =query1+p+query2;
       req.app.get('models').Contact.query(finalQuery).spread(function (reesult, metadata) {
       //metadata tell how many rows affected
       })
    return res.status(204).send();
}
