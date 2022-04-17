function httpGet(theUrl) {
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.open("GET", theUrl, false); // false for synchronous request
  xmlHttp.send(null);
  return JSON.parse(xmlHttp.responseText);
}

const dataConfianca = httpGet('http://localhost:3000/plot');

function getColumns(data) {

  const confianca = []

  for (var i = 0; i < data.length; i++) {
    confianca.push(data[i].confianca);
  }
  return [confianca];
}
const confiancaColumns = getColumns(dataConfianca)

const [confianca] = confiancaColumns;

//count each response for pior_modelo by campus, possible results are: "sim" or "nao"
function countPiorModelo(confianca) {
  var sim = 0;
  var nao = 0;


  for (var i = 0; i < confianca.length; i++) {
    if (confianca[i] == "sim") {
      sim++;
    } else if (confianca[i] == "nao") {
      nao++;
    } else {
      continue;
    }
  }
  return [sim, nao];
}


// modelo = {};
// for (i = 0; i < campus.length; i++) {
//   if (modelo[campus[i]] == undefined) {
//     modelo[campus[i]] = { "online": 0, "presencial": 0 };
//   }
//   if (pior_modelo[i] == "undefined") { continue; }
//   modelo[campus[i]][pior_modelo[i]] += 1;
// }
// return modelo;
// }

const [ConfiancaSim, ConfiancaNao] = countPiorModelo(confianca);

