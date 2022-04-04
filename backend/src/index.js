// import { openDb } from './configDB.js';
import { createTablePlot, InsertPlot } from './controller/plot.js'
import { checkPassword, checksDontExistUserAccount, checksExistsUserAccount, createTableUser, InsertUser } from './controller/user.js'
import { getData, checCad } from './controller/plot.js'
import express from 'express';
import cors from 'cors';

//iniciando o express
const app = express()


// configuração do express
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
  app.use(cors());
  next();
});

app.use(express.json())
const port = 3000

//crianção das tabelas no banco de dados
createTablePlot()
createTableUser()

//cadastro do usuario
// a funçao checksExistsUserAccount verifica se o usuario ja existe no banco de dados
app.post('/cadastro', checksExistsUserAccount, (req, res) => {

  const data = req.body
  const matricula = data.matricula
  if (matricula.length != 9) {
    return res.status(400).json({ error: "Matricula invalida" })
  } else {
    InsertUser(data);
    res.status(200).json({ message: "Usuário cadastrado com sucesso" })
  }
});

//login do usuario
//a função cheksDontExistUserAccount verifica se o usuario não existe no banco de dados
//a função checkPassword verifica se a senha está correta
app.post('/login', checksDontExistUserAccount, checkPassword, (req, res) => {
  const { user } = req;
  res.status(200).json(user)

})


//inserir dados do form na tabela
// a função checCad verifica se o usuario já respondeu o form
app.post('/plot', checCad, (req, res) => {

  InsertPlot(req.body);
  res.json({ "statusCode": 200 })
});


//buscar dados da tabela
app.get('/plot', (req, res) => {
  getData().then(data => {
    res.json(data)
  })
});


//iniciando o servidor
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
