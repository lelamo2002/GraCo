const mysql = require('mysql');
const express = require('express');

const app = express()

app.use(express.json())
const port = 3000

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'teste3'
});

connection.connect();



app.get('/', (req, res) => {
  connection.query('SELECT * FROM forms', function (error, results, fields) {
    res.send({ "solution": results });
  });

})

app.post('/cadastro', (req, res) => {
  const { data, nome, matricula, curso, semestre, campus, confiança, vacinação, modelo } = req.body;
  console.log(data, nome, matricula, curso, semestre, campus, confiança, vacinação, modelo)
  connection.query(`INSERT INTO forms VALUES ("${data}","${nome}","${matricula}","${curso}","${semestre}","${campus}","${confiança}","${vacinação}","${modelo}",default)`, function (error, results, fields) {
    res.send({ "solution": results });
  });

})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
