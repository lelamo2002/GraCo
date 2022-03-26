<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <link href='https://fonts.googleapis.com/css?family=Poppins' rel='stylesheet'>
    <link rel="stylesheet" type="text/css" href="../css_sz/css_graficas.css"/>
    <title>Graco</title>
    <?php include '../js_sz/js_graficas.php';?>
</head>
<body>
    <h1 id="h1main">Graco</h1>
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