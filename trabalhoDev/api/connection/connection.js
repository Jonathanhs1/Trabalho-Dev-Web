const mysql = require('mysql');

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  port: "3306",
  password: "root",
  database: "banco",
});

db.connect(err => {
  if(err){
    console.log('erro no db: ', err);
  } else{
    console.log('tudo certo no db');
  }
});

module.exports = db
