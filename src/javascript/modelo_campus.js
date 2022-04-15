function httpGet(theUrl) {
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.open("GET", theUrl, false); // false for synchronous request
  xmlHttp.send(null);
  return JSON.parse(xmlHttp.responseText);
}

const data = httpGet('http://localhost:3000/plot');

function getColumns(data) {
  const campus = [];
  const pior_modelo = [];

  for (var i = 0; i < data.length; i++) {
    campus.push(data[i].campus);
    pior_modelo.push(data[i].pior_modelo);
  }
  return [campus, pior_modelo];
}
const columns = getColumns(data)
console.log(columns)
const [campus, pior_modelo] = columns;
console.log(campus, pior_modelo);

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

const modeloporcampus = countPiorModelo(campus, pior_modelo);

modeloporcampus.unshift(['campus', 'online', 'hibrido', 'presencial'])

console.log(modeloporcampus);

google.charts.load('current', { 'packages': ['bar'] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var data = google.visualization.arrayToDataTable(modeloporcampus);

  var options = {
    chart: {
      title: 'Company Performance',
      subtitle: 'Sales, Expenses, and Profit: 2014-2017',
    }
  };

  var chart = new google.charts.Bar(document.getElementById('columnchart_material'));

  chart.draw(data, google.charts.Bar.convertOptions(options));
}
