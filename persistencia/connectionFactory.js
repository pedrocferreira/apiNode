var mysql = require('mysql');
const utf8 = require('utf8');
function createDBConnection() {
    return mysql.createConnection({
        host: 'mysql427.umbler.com',
        user: 'torresoff',
        password: '9cce22f2',
        database: 'torresoff'
    });
    
}


module.exports = function () {
    return createDBConnection;
}