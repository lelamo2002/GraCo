function httpGet(theUrl) {
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.open("GET", theUrl, false); // false for synchronous request
  xmlHttp.send(null);
  return JSON.parse(xmlHttp.responseText);
}

const data = httpGet('http://localhost:3000/plot');

function getColumns(data) {

  const pior_modelo = [];

  for (var i = 0; i < data.length; i++) {

    pior_modelo.push(data[i].pior_modelo);
  }
  return [pior_modelo];
}
const columns = getColumns(data)
console.log(columns)
const [pior_modelo] = columns;

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

const [online, hibrido, presencial] = countPiorModelo(pior_modelo);

console.log(online, hibrido, presencial);

google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(drawChart);





function drawChart() {

  var data = google.visualization.arrayToDataTable([
    ['modelo', 'quantia'],
    ['online', online],
    ['hibrido', hibrido],
    ['presencial', presencial],
  ]);

  var options = {
    title: 'My Daily Activities'
  };

  var chart = new google.visualization.PieChart(document.getElementById('piechart'));

  chart.draw(data, options);
}