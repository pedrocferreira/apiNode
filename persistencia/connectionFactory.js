var mysql = require('mysql');
const utf8 = require('utf8');
function createDBConnection() {
    return mysql.createConnection({
        host: 'mysql427.umbler.com',
        user: 'torresoff',
        password: '9cce22f2',
        database: 'torresoff'
    });
<<<<<<< HEAD
<<<<<<< HEAD


}





module.exports = function () {
    return createDBConnection;
}
=======
=======
>>>>>>> bf849e9136af32159f91045c96f572e89ba5a600
    
}


module.exports = function () {
    return createDBConnection;
<<<<<<< HEAD
}
>>>>>>> bf849e9136af32159f91045c96f572e89ba5a600
=======
}
>>>>>>> bf849e9136af32159f91045c96f572e89ba5a600
