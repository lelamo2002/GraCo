if (localStorage.getItem('listaUsuario') == null) {
    alert("Você precisa estar logado para acessar essa página!")
    location = "index.html"
}

let user = JSON.parse(localStorage.getItem('listaUsuario'))
let nomeUser = document.getElementById("nomeUser")

let sobrenomeUser = document.getElementById("sobrenomeUser")

let matriculaUser = document.getElementById("matriculaUser")

let campusUser = document.getElementById("campusUser")

nomeUser.innerHTML = user[0].nomeCadastro
sobrenomeUser.innerHTML = user[0].sobrenomeCadastro
matriculaUser.innerHTML = user[0].matriculaCadastro
campusUser.innerHTML = user[0].campoCadastro



$(document).ready(function () {
    carregar_json('estado');
    function carregar_json(id, cidade_id) {
        var html = '';

        $.getJSON('https://gist.githubusercontent.com/letanure/3012978/raw/36fc21d9e2fc45c078e0e0e07cce3c81965db8f9/estados-cidades.json', function (data) {

            html += '<option>Selecionar ' + id + '</option>';
            console.log(data);
            if (id == 'estado' && cidade_id == null) {
                for (var i = 0; i < data.estados.length; i++) {
                    html += '<option value=' + data.estados[i].sigla + '>' + data.estados[i].nome + '</option>';
                }
            } else {
                for (var i = 0; i < data.estados.length; i++) {
                    if (data.estados[i].sigla == cidade_id) {
                        for (var j = 0; j < data.estados[i].cidades.length; j++) {
                            html += '<option value=' + data.estados[i].sigla + '>' + data.estados[i].cidades[j] + '</option>';
                        }
                    }
                }
            }

            $('#' + id).html(html);
        });

    }

    $(document).on('change', '#estado', function () {
        var cidade_id = $(this).val();
        console.log(cidade_id);
        if (cidade_id != null) {
            carregar_json('cidade', cidade_id);
        }
    });

});


$(document).ready(function () {
    carregar_json('campus');
    function carregar_json(id, cursos_id) {
        var html = '';

        $.getJSON('https://gist.githubusercontent.com/marialuisa214/361f44ec0d51b988367ef4626ff01b0f/raw/3e5b9e2a7a921660110881249524ace93473cc1b/campus-curso.json', function (data) {
            console.log("funcionou")
            html += '<option>Selecionar ' + id + '</option>';
            console.log(data);
            if (id == 'campus' && cursos_id == null) {
                for (var i = 0; i < data.campus.length; i++) {
                    html += '<option value=' + data.campus[i].sigla + '>' + data.campus[i].nome + '</option>';
                }
            } else {
                for (var i = 0; i < data.campus.length; i++) {
                    if (data.campus[i].sigla == cursos_id) {
                        for (var j = 0; j < data.campus[i].cursos.length; j++) {
                            html += '<option value=' + data.campus[i].sigla + '>' + data.campus[i].cursos[j] + '</option>';
                        }
                    }
                }
            }

            $('#' + id).html(html);
        });

    }

    $(document).on('change', '#campus', function () {
        var cursos_id = $(this).val();
        console.log(cursos_id);
        if (cursos_id != null) {
            carregar_json('cursos', cursos_id);
        }
    });

});


//declarando as variaveis e pegando os input's 
let nome = document.getElementById("nome");
let nomeLabel = document.getElementById("nomeLabel");
let validNome = false;

let matricula = document.getElementById("matricula");
let matriculaLabel = document.getElementById("matriculaLabel");
let validMatricula = false;

// usando o function para conseguir "resgatar" o valor do option

let genero = document.getElementById("genero");
let validGenero = false
function getSelectGeneroValue() {
    let generoValue = document.getElementById("genero").value;
    validGenero = true

    return generoValue, validGenero
}
let raça = document.getElementById("raça");
let validRaça = false
function getSelectRacaValue() {
    let raçaValue = document.getElementById("raça").value;
    validRaça = true

    return raçaValue, validRaça
}

let estado = document.getElementById("estado");
let validEstado = false
function getSelectEstadoValue() {
    let estadoValue = document.getElementById("estado").value;
    validEstado = true

    return estadoValue, validEstado
}

let campus = document.getElementById("campus");
let validCampus = false
function getSelectCampusValue() {
    let campusValue = document.getElementById("campus").value;
    validCampus = true

    return campusValue, validCampus
}

let curso = document.getElementById("curso");
let validCurso = false
function getSelectCursoValue() {
    let cursoValue = document.getElementById("curso").value;
    validCurso = true

    return cursoValue, validCurso
}

let semestre = document.getElementById("semestre");
let validSemestre = false
function getSelectSemestreValue() {
    let semestreValue = document.getElementById("semestre").value;
    validSemestre = true

    return semestreValue, validSemestre
}

let confiança = document.getElementById("nivelConfiança");
let validConfiança = false
function getSelectConfiancaValue() {
    let confiançaValue = document.getElementById("nivelConfiança").value;
    validConfiança = true

    return confiançaValue, validConfiança
}

let vacina = document.getElementById("vacinação");
let validVacina = false
function getSelectVacinaValue() {
    let vacinaValue = document.getElementById("vacinação").value;
    validVacina = true

    return vacinaValue, validVacina
}

let modelo = document.getElementById("modelo");
let validModelo = false
function getSelectModeloValue() {
    let modeloValue = document.getElementById("modelo").value;
    validModelo = true

    return modeloValue, validModelo
}


//Validação
nome.addEventListener('keyup', () => {
    if (nome.value.length <= 2) {
        nomeLabel.setAttribute('style', 'color: red')
        nomeLabel.innerHTML = "<strong>Nome:</strong>"

    } else {
        nomeLabel.setAttribute('style', 'color: green')
        nomeLabel.innerHTML = "<strong>Nome:</strong>"
        validNome = true
    }
})

matricula.addEventListener('keyup', () => {
    if (matricula.value.length != 8) {
        matriculaLabel.setAttribute('style', 'color: red')
        matriculaLabel.innerHTML = "<strong>Matrícula:</strong>"

    } else {
        matriculaLabel.setAttribute('style', 'color: green')
        matriculaLabel.innerHTML = "<strong>Matrícula:</strong>"
        validMatricula = true
    }
})

genero.addEventListener('change', () => {
    if (getSelectGeneroValue() == "") {
        validGenero = false

    }
    else {
        validGenero = true
        return validGenero

    }
})

raça.addEventListener('change', () => {
    if (getSelectGeneroValue() == "") {
        validRaça = false

    }
    else {
        validRaça = true
        return validRaça

    }
})

estado.addEventListener('change', () => {
    if (getSelectEstadoValue() == "") {
        validEstado = false

    }
    else {
        validEstado = true
        return validEstado

    }
})

campus.addEventListener('change', () => {
    if (getSelectCampusValue() == "") {
        validCurso = false

    }
    else {
        validCurso = true
        return validCurso

    }
})

curso.addEventListener('change', () => {
    if (getSelectCursoValue() == "") {
        validCampus = false

    }
    else {
        validCampus = true
        return validCampus

    }
})

semestre.addEventListener('change', () => {
    if (getSelectSemestreValue() == "") {
        validSemestre = false

    }
    else {
        validSemestre = true
        return validSemestre

    }
})

confiança.addEventListener('change', () => {
    if (getSelectConfiancaValue() == "") {
        validConfiança = false

    }
    else {
        validConfiança = true
        return validConfiança

    }
})

vacina.addEventListener('change', () => {
    if (getSelectVacinaValue() == "") {
        vacinaValue = false

    }
    else {
        vacinaValue = true
        return vacinaValue

    }
})


modelo.addEventListener('change', () => {
    if (getSelectModeloValue() == "") {
        validModelo = false

    }
    else {
        validModelo = true
        return validModelo

    }
})

function apagar() {
    localStorage.clear();

    location = "index.html"
}


//envio para o banco de dados
function post(url, body) {
    let request = new XMLHttpRequest()
    request.open("POST", url, true)
    request.setRequestHeader("Content-type", "application/json")
    request.send(JSON.stringify(body))

    request.onload = function () {
        console.log(this.responseText)
        // location = "capa.html"
        if (this.responseText == '{ "statusCode": 200 }') {
            console.log('passei aqui')
        }
    }
    return request.responseText

}


function enviar() {
    if (validNome && validMatricula && validGenero && validRaça && validEstado && validCampus && validCurso && validSemestre && validConfiança && validVacina && validModelo) {
        let url = "http://localhost:3000/plot"
        event.preventDefault()

        body = {
            "matricula": matricula.value,
            "curso": curso.value,
            "semestre": semestre.value,
            "campus": campus.value,
            "confianca": confiança.value,
            "vacinacao": vacina.value,
            "pior_modelo": modelo.value
        }
        post(url, body)

    }
    else {
        alert("Preencha corretamente todos os campos antes de cadastrar-se!")

    }
}
