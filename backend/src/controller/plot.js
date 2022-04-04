import { openDb } from "../configDB.js";



export async function checCad(request, response, next) {
  const db = await openDb();
  const { matricula } = request.body;
  const sql = `SELECT * FROM plot WHERE matricula = ?`;
  const plot = await db.get(sql, [matricula]);
  if (plot) {
    response.status(400).json({ error: "Registro já existente!" });
  } else {

    next();
  }
}

export async function getData() {
  const db = await openDb();
  const sql = `SELECT * FROM plot`;
  const plot = await db.all(sql);
  return plot;
}

export async function createTablePlot() {
  openDb().then(db => { db.exec('CREATE TABLE IF NOT EXISTS plot ( id INTEGER PRIMARY KEY, matricula INTEGER NOT NULL,carinbo_data_hora DATE NOT NULL, curso VARCHAR(255) NOT NULL, semestre VARCHAR(255) NOT NULL, campus VARCHAR(255) NOT NULL, confianca VARCHAR(255) NOT NULL, vacinacao VARCHAR(255) NOT NULL, pior_modelo VARCHAR(255) NOT NULL)') })
}


export async function InsertPlot(plot) {
  openDb().then(db => { db.run(`INSERT INTO plot (matricula,carinbo_data_hora,curso,semestre,campus,confianca,vacinacao,pior_modelo) VALUES ("${plot.matricula}","${new Date().toLocaleDateString()}","${plot.curso}","${plot.semestre}","${plot.campus}","${plot.confianca}","${plot.vacinacao}","${plot.pior_modelo}")`) })
}