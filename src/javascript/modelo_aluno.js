function httpGet(theUrl) {
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.open("GET", theUrl, false); // false for synchronous request
  xmlHttp.send(null);
  return JSON.parse(xmlHttp.responseText);
}

const dataModeloAlunos = httpGet('http://localhost:3000/plot');

function getColumns(data) {

  const pior_modelo = [];

  for (var i = 0; i < data.length; i++) {

    pior_modelo.push(data[i].pior_modelo);
  }
  return [pior_modelo];
}
const modeloAlunoColumns = getColumns(dataModeloAlunos)

const [pior_modelo_alunos] = modeloAlunoColumns;

//count each response for pior_modelo by campus, possible results are: "undefined", "online","hibrido", "presencial"
function countPiorModelo(pior_modelo) {
  var online = 0;
  var hibrido = 0;
  var presencial = 0;


  for (var i = 0; i < pior_modelo.length; i++) {
    if (pior_modelo[i] == "online") {
      online++;
    } else if (pior_modelo[i] == "hibrido") {
      hibrido++;
    } else if (pior_modelo[i] == "presencial") {
      presencial++;
    } else {
      continue;
    }
  }
  return [online, hibrido, presencial];
}


const [modeloOnline, modeloHibrido, modeloPresencial] = countPiorModelo(pior_modelo_alunos);

