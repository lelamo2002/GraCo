var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'teste3'
});


var data = "2022/10/20"
var nome = "pedro"
var matricula = "200131324"
var curso = "pedro"
var semestre = "4"
var campus = "sim"
var confiança = "a"
var vacinação = "e"
var modelo = "4"



connection.connect();


connection.query(`INSERT INTO forms VALUES ("${data}","${nome}","${matricula}","${curso}","${semestre}","${campus}","${confiança}","${vacinação}","${modelo}",default)`, function (error, results, fields) {
    if (error) throw error;
    console.log('The solution is: ', results);
  });



connection.query('SELECT * FROM forms', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results[[results.length - 1]]);});
  
connection.end();