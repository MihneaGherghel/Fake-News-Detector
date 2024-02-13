const mysql=require('mysql2/promise');

const pool=mysql.createPool({
    host: 'localhost',
    database:'fake_news',
    user: 'root',
    password: 'MyNewPass',
    port:3306
});

module.exports= pool;