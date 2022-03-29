import { openDb } from "../configDB.js";

export async function createTableUser() {
  openDb().then(db => { db.exec('CREATE TABLE IF NOT EXISTS user ( id INTEGER PRIMARY KEY,carinbo_data_hora DATE NOT NULL, curso VARCHAR(255) NOT NULL,nome VARCHAR(255) NOT NULL,sobrenome VARCHAR(255) NOT NULL, matricula VARCHAR(255) NOT NULL, email VARCHAR(255) NOT NULL, campus VARCHAR(255) NOT NULL, senha VARCHAR(255) NOT NULL)') })
}


export async function InsertUser(user) {
  openDb().then(db => { db.run(`INSERT INTO user (carinbo_data_hora,curso,nome,sobrenome,matricula,email,campus,senha) VALUES ("${new Date().toLocaleDateString()}","${user.curso}","${user.nome}","${user.sobrenome}","${user.matricula}","${user.email}","${user.campus}","${user.senha}")`) })
}