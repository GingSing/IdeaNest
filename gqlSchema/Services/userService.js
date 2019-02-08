const connection = require('../db.js');

const getUsers = () => {
    connection.query('SELECT * FROM users', (err, results, fields) => {
        if(err) throw err;
        console.log(results);
    });
}

module.exports={
    getUsers
}