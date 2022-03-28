import { openDb } from "../configDB.js";

export async function createTablePlot() {
  openDb().then(db => { db.exec('CREATE TABLE IF NOT EXISTS plot2 ( id INTEGER PRIMARY KEY,carinbo_data_hora DATE NOT NULL, curso VARCHAR(255) NOT NULL, semestre VARCHAR(255) NOT NULL, campus VARCHAR(255) NOT NULL, confianca VARCHAR(255) NOT NULL, vacinacao VARCHAR(255) NOT NULL, pior_modelo VARCHAR(255) NOT NULL)') })
}


export async function InsertPlot(plot) {
  openDb().then(db => { db.run(`INSERT INTO plot2 (carinbo_data_hora,curso,semestre,campus,confianca,vacinacao,pior_modelo) VALUES ("${plot.data}","${plot.curso}","${plot.semestre}","${plot.campus}","${plot.confianca}","${plot.vacinacao}","${plot.modelo}")`) })
}