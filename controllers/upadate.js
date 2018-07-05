var mysql = require('mysql');
var express = require('express');
var router = express.Router();
module.exports = function (app) {
    app.get('/torresoff', function (req, res) {
        console.log('Recebida quequisisçao  de teste na porta 3000');
        console.log('Conectato API TorresOFF');
        res.send('<script> alert("/torresoff/mercados || /torresoff/mercados ||/torresoff/mercados/avatar || /torresoff/mercados/avatar/folders "); </script>');

    });
    //Retorna toda lista completa de mercados  
    app.get('/torresoff/mercados',(req,res, err) => {
        var connection = app.persistencia.connectionFactory();
        connection.query('select * from mercado', (err, mercados)=>{

            console.log('Select tudo :::::::: ok;');
            console.log('....');
            console.log('Sv conectado');
            res.json(mercados);
        });
    })
// restorna URL do avatar
    app.get('/torresoff/mercados/avatar', (req, res, err) => {
        var connection = app.persistencia.connectionFactory();
        connection.query('select id, avatar,endereco  from mercado', (err, mercados) => {
            console.log('Select avatar :::::::: ok;');
            console.log('....');
            console.log('Sv conectado');
            
            
            
            res.json(mercados);
        });
    });
    app.get('/torresoff/parceiros', (req, res, err) => {
        var connection = app.persistencia.connectionFactory();
        connection.query('select * from parceiros', (err, parceiros) => {
            res.json(parceiros);
        })
    })

/*
    app.post('/torresoff/mercados/folders',(req,res,err)=>{
        var connection = app.persistencia.connectionFactory();
        var id = req.body;
        var sql = 'SELECT * FROM mercado WHERE id = ' + mysql.escape(id);

        connection.query('SELECT * FROM mercado WHERE id = '+ mysql.escape(id), (err, mercados) =>{
            res.json(mercados);
        })
        }
    );
*/




    
   
}





