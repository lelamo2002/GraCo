<?php include '../php_sz/phpgraficas.php';?>
<script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
    <script type="text/javascript">
      google.charts.load('current', {'packages':['bar']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Campus', 'Sim', 'Nao', 'Tal vez'],
          ['DARCY', <?php echo $voltar[0]; ?>, <?php echo $voltar[1]; ?>, <?php echo $voltar[2]; ?>],
          ['FGA', <?php echo $voltar[3]; ?>, <?php echo $voltar[4]; ?>, <?php echo $voltar[5]; ?>],
          ['FCE', <?php echo $voltar[6]; ?>, <?php echo $voltar[7]; ?>, <?php echo $voltar[8]; ?>],
        ]);

        var options = {
          chart: {
            title: 'Número de pessoas aptas para o regresso às aulas presenciais',
          }
        };

        var chart = new google.charts.Bar(document.getElementById('columnchart_material'));

        chart.draw(data, google.charts.Bar.convertOptions(options));
      }
    </script>
    <script type="text/javascript">
      google.charts.load('current', {'packages':['bar']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Curso', 'Nao', '1a dose', '2a dose', '3a dose'],
          ['Engenharia de sistemas', <?php echo $vacur[0]; ?>, <?php echo $vacur[1]; ?>, <?php echo $vacur[2]; ?>, <?php echo $vacur[3]; ?>],
          ['Medicina', <?php echo $vacur[4]; ?>, <?php echo $vacur[5]; ?>, <?php echo $vacur[6]; ?>, <?php echo $vacur[7]; ?>],
          ['Agronomia', <?php echo $vacur[8]; ?>, <?php echo $vacur[9]; ?>, <?php echo $vacur[10]; ?>, <?php echo $vacur[11]; ?>],
        ]);

        var options = {
          chart: {
            title: 'Número de alunos vacinados por curso',
          }
        };

        var chart = new google.charts.Bar(document.getElementById('columnchart_material2'));

        chart.draw(data, google.charts.Bar.convertOptions(options));
      }
    </script>