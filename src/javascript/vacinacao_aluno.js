function httpGet(theUrl) {
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.open("GET", theUrl, false); // false for synchronous request
  xmlHttp.send(null);
  return JSON.parse(xmlHttp.responseText);
}

const VacinaData = httpGet('http://localhost:3000/plot');

function getColumns(data) {
  const campus = [];
  const vacinacao = [];

  for (var i = 0; i < data.length; i++) {
    campus.push(data[i].campus);
    vacinacao.push(data[i].vacinacao);
  }
  return [campus, vacinacao];
}
const VacinaColumns = getColumns(VacinaData)

const [VacinaCampus, VacinaVacinacao] = VacinaColumns;


//count each response for vacinacao by campus, possible results are: "0", "1","2", "3"
function countPiorvacinacao(campus, vacinacao) {

  // count total amount of terms per campus
  var campus_count = {};
  for (var i = 0; i < campus.length; i++) {
    if (campus_count[campus[i]] == undefined) {
      campus_count[campus[i]] = 1;
    } else {
      campus_count[campus[i]]++;
    }
  }





  var vacinacaoPorCampus = {};
  for (i = 0; i < campus.length; i++) {
    if (vacinacaoPorCampus[campus[i]] == undefined) {
      vacinacaoPorCampus[campus[i]] = { "0": 0, "1": 0, "2": 0, "3": 0 };
    }
    vacinacaoPorCampus[campus[i]][vacinacao[i]] += 1;
  }
  //object vacinacaoPorCampus to array like: [campus, 1,1,1]
  var vacinacaoPorCampusArray = [];
  for (var key in vacinacaoPorCampus) {
    //insert percentage of vacinação per campus
    vacinacaoPorCampusArray.push([key, ((vacinacaoPorCampus[key]["0"] / campus_count[key]) * 100), ((vacinacaoPorCampus[key]["1"] / campus_count[key]) * 100), ((vacinacaoPorCampus[key]["2"] / campus_count[key]) * 100), ((vacinacaoPorCampus[key]["3"] / campus_count[key]) * 100)]);
  }
  return vacinacaoPorCampusArray;
}

const vacinacaoporcampus = countPiorvacinacao(VacinaCampus, VacinaVacinacao);

vacinacaoporcampus.unshift(['campus', 'sem vacina', '1 dose', '2 doses', '3 doses']);



