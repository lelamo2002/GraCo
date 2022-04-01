import { openDb } from "../configDB.js";

export async function checksExistsUserAccount(request, response, next) {
  const db = await openDb();
  const { email } = request.body;
  const sql = `SELECT * FROM user WHERE email = ?`;
  const user = await db.get(sql, [email]);
  if (user) {
    response.status(400).json({ error: "User already exists" });
  } else {
    next();
  }
}

export async function checksDontExistUserAccount(request, response, next) {
  const db = await openDb();
  const { email } = request.body;
  const sql = `SELECT * FROM user WHERE email = ?`;
  const user = await db.get(sql, [email]);
  if (!user) {
    response.status(400).json({ error: "User doesn't exists" });
  } else {
    next();
  }
}

export async function checkPassword(request, response, next) {
  const db = await openDb();
  const { email, password } = request.body;
  const sql = `SELECT * FROM user WHERE email = ?`;
  const user = await db.get(sql, [email]);
  if (user.senha !== password) {
    return response.status(400).json({ error: "Email or password is wrong" });
  } else {
    request.user = user;
    next();
  }
}

export async function createTableUser() {
  openDb().then(db => { db.exec('CREATE TABLE IF NOT EXISTS user ( id INTEGER PRIMARY KEY,carinbo_data_hora DATE NOT NULL, curso VARCHAR(255) NOT NULL,nome VARCHAR(255) NOT NULL,sobrenome VARCHAR(255) NOT NULL, matricula VARCHAR(255) NOT NULL, email VARCHAR(255) NOT NULL, campus VARCHAR(255) NOT NULL, senha VARCHAR(255) NOT NULL )') })
}


export async function InsertUser(user) {
  openDb().then(db => { db.run(`INSERT INTO user (carinbo_data_hora,curso,nome,sobrenome,matricula,email,campus,senha) VALUES ("${new Date().toLocaleDateString()}","${user.curso}","${user.nome}","${user.sobrenome}","${user.matricula}","${user.email}","${user.campus}","${user.senha}")`) })
}