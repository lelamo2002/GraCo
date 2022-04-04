// import { openDb } from './configDB.js';
import { createTablePlot, InsertPlot } from './controller/plot.js'
import { checkPassword, checksDontExistUserAccount, checksExistsUserAccount, createTableUser, InsertUser } from './controller/user.js'
import { getData, checCad } from './controller/plot.js'
import express from 'express';
import cors from 'cors';

const app = express()

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
  app.use(cors());
  next();
});

app.use(express.json())
const port = 3000

createTablePlot()
createTableUser()


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

app.get('/login', checksDontExistUserAccount, checkPassword, (req, res) => {
  const { user } = req;
  res.status(200).json({ message: "Usuário logado com sucesso", user })

})

app.post('/plot', checCad, (req, res) => {

  InsertPlot(req.body);
  res.json({ "statusCode": 200 })
});

app.get('/plot', (req, res) => {
  getData().then(data => {
    res.json(data)
  })
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
