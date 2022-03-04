<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <link href='https://fonts.googleapis.com/css?family=Poppins' rel='stylesheet'>
    <title>Graphics ;)</title>
    <?php
        $user=['nombre_prova','123456','curso_prova','estado_prova'];
        $voltar=[50,45,12,34,56,78,54,12,34];
        $vacur=[45,33,54,11,33,44,55,66,77,88,44,22];
        $aluvac=23;
        $alurec=45;
        $alucon=34;
    ?>
    <style>
    html, body{
        max-width: 100%;
        overflow-x: hidden;
    }
    #h1main{
    position: absolute;
     width: 341px;
    height: 21px;
    left: 30px;
    top: 10px;   
    z-index: 9999;
    font-family: 'Poppins';
    }
    #title{
    position: absolute;
    width: 341px;
    height: 21px;
    left: 400px;
    top: 250px;   
    z-index: 9999;
    font-family: 'Poppins';
    }
    .rectangle {
    position: absolute;
    width: 1550px;
    height: 85px;
    left: 0px;
    top: 0px;
    background: #C4C4C4;
    }
    .rectangle2{
    position: absolute;
    width: 1170px;
    height: 160px;
    left: 380px;
    top: 0px;
    background: #E0E0E0;
    }
    #ul1{
    list-style-type: none;
    position: absolute;
    width: 341px;
    height: 1700px;
    left: 0px;
    top: 69px;
    background: #C4C4C4;
    padding: 20px;
    }
    #ulli1 {
    background: #808080;
    padding: 5px;
    margin: 20px;
    font-size: 30px;
    font-family: 'Poppins';
    }
    #ulli1:hover{
    background: #E0E0E0;    
    }
    #ul2{
    list-style-type: none;
    position: absolute;
    width: 1200px;
    height: 100px;
    left: 600px;
    top: 65px;
    padding: 20px;
    }
    #ulli2 {
    padding: 5px;
    font-size: 15px;
    font-family: 'Poppins';
    }
    #pfp{
    position: absolute;
    z-index: 9999;   
    border-radius: 50%; 
    width: 120px;
    height: 120px;
    top: 100px;
    left: 450px;
    z-index: 9999;
    }
    a{
        text-decoration: none;
        color: black;
    }
    .info1{
    position: absolute;
    width: 300px;
    height: 150px;
    top: 360px;
    left: 450px;
    background: #E0E0E0;
    }
    #alvac{
    position: absolute;
    width: 300px;
    height: 250px;
    top: 360px;
    left: 480px;    
    font-family: 'Poppins';
    }
    #alvacval{
    position: absolute;
    width: 300px;
    height: 250px;
    top: 360px;
    left: 580px;    
    font-family: 'Poppins';
    font-size: 50px;
    }
    .info2{
    position: absolute;
    width: 300px;
    height: 150px;
    top: 360px;
    left: 800px;
    background: #E0E0E0;
    }
    #casrec{
    position: absolute;
    width: 300px;
    height: 250px;
    top: 360px;
    left: 835px;    
    font-family: 'Poppins';
    }
    #casrecval{
    position: absolute;
    width: 300px;
    height: 250px;
    top: 360px;
    left: 920px;    
    font-family: 'Poppins';
    font-size: 50px;
    }
    .info3{
    position: absolute;
    width: 300px;
    height: 150px;
    top: 360px;
    left: 1150px;
    background: #E0E0E0;
    }
    #alcon{
    position: absolute;
    width: 300px;
    height: 250px;
    top: 360px;
    left: 1165px;    
    font-family: 'Poppins';
    }
    #alconval{
    position: absolute;
    width: 300px;
    height: 250px;
    top: 360px;
    left: 1270px;    
    font-family: 'Poppins';
    font-size: 50px;
    }
    #columnchart_material{
    width: 800px; 
    height: 500px;    
    position: absolute;
    left: 550px;
    top: 600px;
    }
    #columnchart_material2{
    width: 800px; 
    height: 500px;    
    position: absolute;
    position: absolute;
    left: 550px;
    top: 1200px;
    }
</style>
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
</head>
<body>
    <h1 id="h1main">Nome do projeto</h1>
    <h1 id="title">Painel de controle</h1>
    <div class="rectangle"></div>
    <ul id="ul1">
    <a href="Configurações de usuário"><li id="ulli1">Configurações de usuário</li></a>
    <a href="Rastreamento"><li id="ulli1">Rastreamento</li></a>
    <a href="Dicas"><li id="ulli1">Dicas</li></a>
    <a href="Sobre nós"><li id="ulli1">Sobre nós</li></a>
    <a href="Sair"><li id="ulli1">Sair</li></a>
    <div class="rectangle2"></div>
    </ul>
    <ul id="ul2">
    <li id="ulli2">Nombre: <?php echo $user[0]; ?></li>
    <li id="ulli2">Matricula: <?php echo $user[1]; ?></li>
    <li id="ulli2">Curso: <?php echo $user[2]; ?></li>
    <li id="ulli2">Estado: <?php echo $user[3]; ?></li>
    </ul>
    <img id="pfp" src="https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/styles/480x272/public/media/image/2018/08/fotos-perfil-whatsapp_1.jpg?itok=iOqZEtvP">
    <div class="info1"></div>
    <h3 id="alvac">No de alunos vacinados</h3>
    <p id="alvacval"><?php echo $aluvac; ?></p>
    <div class="info2"></div>
    <h3 id="casrec">No de casos recuperados</h3>
    <p id="casrecval"><?php echo $alurec; ?></p>
    <div class="info3"></div>
    <h3 id="alcon">No de alunos contaminados</h3>
    <p id="alconval"><?php echo $alucon; ?></p>
      <?php var_dump($voltar); ?>
    <div id="columnchart_material"></div>
    <div id="columnchart_material2"></div>
</body>
</html>