import mysql from 'mysql2'

const pool = mysql.createPool({
host:'127.0.0.1',
user:'root',
password:'sam1234',
database:'notes_app2'
}).promise();
const result = await pool.query("select * from notes2")
console.log(result)