
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
    title: 'N° total de estudantes X Nivel de Confiança',
    subtitle: 'Dados da Covid- Graco. 2022',
    is3D: true,
  };
  // Set chart options
  var modeloAlunoOptions = {
    title: 'Sistema de Ensino',
    subtitle: 'Dados da Covid- Graco. 2022',
    is3D: true,
  };
  // Set chart options
  var modeloCampusOptions = {
    chart: {
      title: 'Modalidade de ensino X Instituição',
      subtitle: 'Dados da Covid- Graco. 2022',
      
    }
  };

  var VacinaOptions = {
    chart: {
      title: 'Porcentagem de Vacinação por campus',
      subtitle: 'Dados da Covid- Graco. 2022',
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