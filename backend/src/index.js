// import { openDb } from './configDB.js';
import { createTablePlot, InsertPlot } from './controller/plot.js'
import { checkPassword, checksDontExistUserAccount, checksExistsUserAccount, createTableUser, InsertUser } from './controller/user.js'
import express from 'express';

const app = express()

app.use(express.json())
const port = 3000

createTablePlot()
createTableUser()


app.post('/cadastro', checksExistsUserAccount, (req, res) => {
  InsertUser(req.body);
  res.status(200).json({ message: "Usuário cadastrado com sucesso" })
});

app.get('/login', checksDontExistUserAccount, checkPassword, (req, res) => {
  const { user } = req;
  res.status(200).json({ message: "Usuário logado com sucesso", user })

})

app.post('/plot', (req, res) => {
  InsertPlot(req.body);
  console.log(req.body)
  res.json({ "statusCode": 200 })
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
