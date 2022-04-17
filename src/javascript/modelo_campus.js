function httpGet(theUrl) {
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.open("GET", theUrl, false); // false for synchronous request
  xmlHttp.send(null);
  return JSON.parse(xmlHttp.responseText);
}

const modeloCampusData = httpGet('http://localhost:3000/plot');

function getColumns(data) {
  const campus = [];
  const pior_modelo = [];

  for (var i = 0; i < data.length; i++) {
    campus.push(data[i].campus);
    pior_modelo.push(data[i].pior_modelo);
  }
  return [campus, pior_modelo];
}
const modeloCampusColumns = getColumns(modeloCampusData)

const [campus_modelo, pior_modelo_campus] = modeloCampusColumns;


//count each response for pior_modelo by campus, possible results are: "undefined", "online","hibrido", "presencial"
function countPiorModelo(campus, pior_modelo) {

  var modeloPorCampus = {};
  for (i = 0; i < campus.length; i++) {
    if (modeloPorCampus[campus[i]] == undefined) {
      modeloPorCampus[campus[i]] = { "online": 0, "hibrido": 0, "presencial": 0 };
    }
    modeloPorCampus[campus[i]][pior_modelo[i]] += 1;
  }
  //object modeloPorCampus to array like: [campus, 1,1,1]
  var modeloPorCampusArray = [];
  for (var key in modeloPorCampus) {
    modeloPorCampusArray.push([key, modeloPorCampus[key].online, modeloPorCampus[key].hibrido, modeloPorCampus[key].presencial]);
  }
  return modeloPorCampusArray;
}

const modeloporcampus = countPiorModelo(campus_modelo, pior_modelo_campus);

modeloporcampus.unshift(['campus', 'online', 'hibrido', 'presencial'])

