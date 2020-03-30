const connect = require('../config/connect');

//função de gravação que recebe os 3 parâmetros
function save(req, res) {
    //receber os dados do formuário que são enviados por post
    const name = req.sanitize('nome').escape();
    const birthdate = req.sanitize('numero').escape();
    //const date = "17/03/2020";
    var query = "";
    var queryPontos = "";
  /*  var post = {
        name: name,
        birthdate: birthdate,
        date: date
    }; */
    var teste = {
        nome: name,
        numero: birthdate
    }
    query = connect.con.query('INSERT INTO teste SET ?', teste, function (err, rows, fields) {
        console.log(query.sql);
        if (!err) {
            res.status(200).location(rows.insertId).send({
                "msg": "inserted with success"
            });
            console.log("Number of records inserted: " + rows.affectedRows);
        } else {
            if (err.code == "ER_DUP_ENTRY") {
                res.status(409).send({ "msg": err.code });
                console.log('Error while performing Query.', err);
            } else res.status(400).send({ "msg": err.code });
        }
    });

/*    queryPontos = connect.con.query('INSERT INTO teste SET ?', teste, function (err, rows, fields) { //Query para acrescentar os pontos ao recluso  ir buscar a atividade, por numa var, acrescentar aos pontos ja num recluso e dar insert
        console.log(query.sql);
        if (!err) {
            res.status(200).location(rows.insertId).send({
                "msg": "inserted with success"
            });
            console.log("Number of records inserted: " + rows.affectedRows);
        } else {
            if (err.code == "ER_DUP_ENTRY") {
                res.status(409).send({ "msg": err.code });
                console.log('Error while performing Query.', err);
            } else res.status(400).send({ "msg": err.code });
        }
    }); */
}
module.exports = {
    save: save
};