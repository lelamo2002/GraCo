
google.load('visualization', '1.0', { 'packages': ['corechart, bar'] });

// Set a callback to run when the Google Visualization API is loaded.
google.setOnLoadCallback(drawChart);

// Callback that creates and populates a data table,
// instantiates the pie chart, passes in the data and
// draws it.
function drawChart() {

  // Create the data table.
  const dataConfianca = google.visualization.arrayToDataTable([
    ['Confiança', 'Quantidade'],
    ['sim', ConfiancaSim],
    ['não', ConfiancaNao]
  ]);
  // Create the data table.
  const modeloAlunoData = google.visualization.arrayToDataTable([
    ['modelo', 'quantia'],
    ['online', modeloOnline],
    ['hibrido', modeloHibrido],
    ['presencial', modeloPresencial],
  ]);

  const dataVacina = google.visualization.arrayToDataTable(vacinacaoporcampus);


  const modeloCampusData = google.visualization.arrayToDataTable(modeloporcampus);


  // Set chart options
  var optionsConfianca = {
    title: 'My Daily Activities',
    is3D: true,
  };
  // Set chart options
  var modeloAlunoOptions = {
    title: 'My Daily Activities',
    is3D: true,
  };
  // Set chart options
  var modeloCampusOptions = {
    chart: {
      title: 'Company Performance',
      subtitle: 'Sales, Expenses, and Profit: 2014-2017',
    }
  };

  var VacinaOptions = {
    chart: {
      title: 'Porcentagem de cada dose de vacinação por campus',
      subtitle: 'Sales, Expenses, and Profit: 2014-2017',
    },
    vAxes: {
      // Adds titles to each axis.
      0: { title: 'alunos (%)' },
    },
  };

  // Instantiate and draw our chart, passing in some options.
  var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
  chart.draw(dataConfianca, optionsConfianca);
  var chart2 = new google.visualization.PieChart(document.getElementById('chart_div2'));
  chart2.draw(modeloAlunoData, modeloAlunoOptions);
  var chart3 = new google.charts.Bar(document.getElementById('chart_div3'));
  chart3.draw(modeloCampusData, modeloCampusOptions);
  var chart4 = new google.charts.Bar(document.getElementById('chart_div4'));
  chart4.draw(dataVacina, VacinaOptions);

}