/*const jsonValues = require("../json/campusCurso.js")*/
$(document).ready(function(){
    carregar_json('campus');
    function carregar_json(id, cursos_id){
        var html = '';

        

        $.getJSON("https://gist.githubusercontent.com/marialuisa214/361f44ec0d51b988367ef4626ff01b0f/raw/3e5b9e2a7a921660110881249524ace93473cc1b/campus-curso.json", function(data){
           

            html += '<option>Selecionar '+ id +'</option>';
            console.log(data);
            if(id == 'campus' && cursos_id == null){
                for(var i = 0; i < data.campus.length; i++){
                    html += '<option value='+ data.campus[i].sigla +'>'+ data.campus[i].nome+'</option>';
                }
            }else{
                for(var i = 0; i < data.campus.length; i++){
                    if(data.campus[i].sigla == cursos_id){
                        for(var j = 0; j < data.campus[i].cursos.length; j++){
                            html += '<option value='+ data.campus[i].sigla +'>'+data.campus[i].cursos[j]+ '</option>';
                        }
                    }
                }
            }

            $('#'+id).html(html);
        });
        
    }

    $(document).on('change', '#campus', function(){
        var cursos_id = $(this).val();
        console.log(cursos_id);
        if(cursos_id != null){
            carregar_json('cursos', cursos_id);
        }
    });

});


let nome = document.querySelector("#nome")
let labelNome = document.querySelector("#labelNome")
let validNome = false

let sobrenome = document.querySelector("#sobrenome")
let labelSobrenome = document.querySelector("#labelSobrenome")
let validSobrenome = false

let email = document.querySelector("#email")
let LabelEmail = document.querySelector("#labelEmail")
let validEmail = false

let matricula = document.querySelector("#matricula")
let labelMatricula = document.querySelector("#labelMatricula")
let validMatricula = false

let senha = document.querySelector("#senha")
let labelSenha = document.querySelector("#labelSenha")
let validSenha = false

let confirmação = document.querySelector("#confirmação")
let labelConfirmação = document.querySelector("#labelConfirmação")
let validConfirmação = false

let campus = document.getElementById("campus");
let validCampus = false
function getSelectCampusValue() {
    let campusValue = document.getElementById("campus").value;
    validCampus= true

    return campusValue, validCampus
}

let curso = document.getElementById("cursos");
let validCurso = false
function getSelectCursoValue() {
    let cursoValue = document.getElementById("cursos").value;
    validCurso= true

    return cursoValue, validCurso
}



/*Validação: */
nome.addEventListener('keyup', ()=>{
    if(nome.value.length <= 2) {
        labelNome.setAttribute('style', 'color: red')
        labelNome.innerHTML = "<strong>Nome:</strong>"

    } else{
        labelNome.setAttribute('style', 'color: green')
        labelNome.innerHTML = "<strong>Nome:</strong>"
        validNome = true
    }
})

sobrenome.addEventListener('keyup', ()=>{
    if(sobrenome.value.length <= 2) {
        labelSobrenome.setAttribute('style', 'color: red')
        labelSobrenome.innerHTML = "<strong>Sobrenome:</strong>"

    } else{
        labelSobrenome.setAttribute('style', 'color: green')
        labelSobrenome.innerHTML = "<strong>Sobrenome: </strong>"
        validSobrenome = true
    }
})

matricula.addEventListener('keyup', ()=>{
    if(matricula.value.length != 9) {
        labelMatricula.setAttribute('style', 'color: red')
        labelMatricula.innerHTML = "<strong>Matrícula:</strong>"

    } else{
        labelMatricula.setAttribute('style', 'color: green')
        labelMatricula.innerHTML = "<strong>Matrícula:</strong>"
        validMatricula = true
    }
})

email.addEventListener('keyup', ()=>{
    const inputEmail = event.currentTarget
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    const emailTeste = regex.test(inputEmail.value)

    if(emailTeste) {
        labelEmail.setAttribute('style', 'color: green')
        validEmail = true
        
    }
    else{
        labelEmail.setAttribute('style', 'color: red')
        LabelEmail.innerHTML = "<strong>E-mail:</strong>"
        validEmail = false
    }

})

senha.addEventListener('keyup', ()=>{
    if(senha.value.length < 6) {
        labelSenha.setAttribute('style', 'color: red')
        labelSenha.innerHTML = "<strong>Senha:</strong>"

    } else{
        labelSenha.setAttribute('style', 'color: green')
        labelSenha.innerHTML = "<strong>Senha:</strong>"
        validSenha = true
    }
})

confirmação.addEventListener('keyup', ()=>{
    if(confirmação.value != senha.value) {
        labelConfirmação.setAttribute('style', 'color: red')
        labelConfirmação.innerHTML = "<strong>Confirme sua senha:</strong>"

    } else{
        labelConfirmação.setAttribute('style', 'color: green')
        labelConfirmação.innerHTML = "<strong>Confirme sua senha:</strong>"
        validConfirmação = true
    }
})

campus.addEventListener('change', ()=>{
    if(getSelectCampusValue() == "") {
        validCurso = false 
        
    } 
    else {
        validCurso = true
        return validCurso
        
    } 
})

curso.addEventListener('change', ()=>{
    if(getSelectCursoValue() == "") {
        validCampus = false 
        
    } 
    else {
        validCampus = true
        return validCampus
        
    } 
})

function post(url, body) {
    console.log(body)
    let request = new XMLHttpRequest()
    request.open("POST", url, true)
    request.setRequestHeader("Content-type", "application/json")
    request.send(JSON.stringify(body))

    request.onload = function() {
        console.log(this.responseText)
    }
    return request.responseText
    
}


function cadastrar() {
    if(validNome && validSobrenome && validMatricula && validEmail && validCampus && validCurso && validSenha && validConfirmação){
        function cadastrarUsuario() {
            let url = "http://localhost:3000/cadastro"
            event.preventDefault()
            
            body = {
                "nome": nome.value,
                "sobrenome": sobrenome.value,
                "matricula": matricula.value,
                "email": email.value,
                "campus":campus.value,
                "curso":curso.value,
                "senha": senha.value   
            }
        post(url, body)
            

        }
       
        cadastrarUsuario();
        
        window.location.href = 'index.html'
    }
    else{
        alert("Preencha corretamente todos os campos antes de cadastrar-se!")

        
    }
}