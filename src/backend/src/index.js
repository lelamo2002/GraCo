// import { openDb } from './configDB.js';
import { createTablePlot, InsertPlot } from './controller/plot.js'
import express from 'express';

const app = express()

app.use(express.json())
const port = 3000

createTablePlot()




// app.get('/', (req, res) => {
//   connection.query('SELECT * FROM forms', function (error, results, fields) {
//     res.send({ "solution": results });
//   });

// })

app.post('/cadastro', (req, res) => {
  InsertPlot(req.body);
  console.log(req.body)
  res.json({ "statusCode": 200 })
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
