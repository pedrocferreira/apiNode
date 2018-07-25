var express = require('express');
var consign = require('consign');
var bodyParser= require('body-parser');
var expressValidetor = require ('express-validator');

module.exports =function () {
    var app = express();
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());
    app.use(expressValidetor());

    consign()
    .include('controllers')
    .then('persistencia')
    .into(app);

    return app;
<<<<<<< HEAD
}
=======
}
>>>>>>> bf849e9136af32159f91045c96f572e89ba5a600
