import { openDb } from "../configDB.js";


function ImportCsv() {
  openDb().then(db => {
    db.run('.import "C:/Users/Usuário/Documents/coding/2022/TerrasArrasadas/src/backend/src/planilha.csv" INTO TABLE plot FIELDS TERMINATED BY "," LINES TERMINATED BY "/n" IGNORE 1 ROWS;');
  })
}

ImportCsv()

// db.run('.import "C:/Users/Usuário/Documents/coding/2022/TerrasArrasadas/src/backend/src/planilha.csv"' + 'INTO TABLE plot' + 'FIELDS TERMINATED BY ","' + 'ENCLOSED BY "\'"' + 'LINES TERMINATED BY \'\\n\'' + 'IGNORE 1 ROWS' + ')');
