// import { openDb } from './configDB.js';
import { createTablePlot, InsertPlot } from './controller/plot.js'
import { createTableUser, InsertUser } from './controller/user.js'
import express from 'express';

const app = express()

app.use(express.json())
const port = 3000

createTablePlot()
createTableUser()



app.post('/cadastro', (req, res) => {
  InsertUser(req.body);
  console.log(req.body)
  res.json({ "statusCode": 200 })
});



app.post('/plot', (req, res) => {
  InsertPlot(req.body);
  console.log(req.body)
  res.json({ "statusCode": 200 })
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
