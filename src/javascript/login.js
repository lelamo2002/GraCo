let erro = document.querySelector("#mensagemErro")

let emailInput = document.querySelector("#emailInput");
let emailLabel = document.querySelector("#emailLabel");
let validEmail = false

let senhaInput = document.querySelector("#senhaInput");
let senhaLabel = document.querySelector("#senhaLabel");
let validSenha = false

let eyes = document.getElementById("eyes")

emailInput.addEventListener('keyup', ()=>{
    const inputEmail = event.currentTarget
    const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    const emailTeste = regex.test(inputEmail.value)

    if(emailTeste) {
        emailLabel.setAttribute('style', 'color: #8EFA7E')
        validEmail = true
        
    }
})

senhaInput.addEventListener('keyup', ()=>{
    if(senhaInput.value.length < 6) {
        senhaLabel.setAttribute('style', 'color: #FA8D66')
        senhaLabel.innerHTML = "<strong>Senha:</strong>"

    } else{
        senhaLabel.setAttribute('style', 'color: #8EFA7E')
        senhaLabel.innerHTML = "<strong>Senha:</strong>"
        validSenha = true
    }
})

function visualizar(){
    let inputTypeSenha = senhaInput.type == "password"

    if(inputTypeSenha) {
        mostrarSenha()
    }else{
        ocultarSenha()
    }
}

function mostrarSenha() {
    senhaInput.setAttribute("type", "text")
    eyes.setAttribute("src", "imagens/closeEye.svg")
}

function ocultarSenha() {
    senhaInput.setAttribute("type", "password")
    eyes.setAttribute("src", "imagens/openEye.svg")
    
}

function post(url, body) {
    console.log(body)
        let request = new XMLHttpRequest()
        request.open("POST", url, true)
        request.setRequestHeader("Content-type", "application/json")
        request.send(JSON.stringify(body))
        console.log("passando pelo banco de dados")

        request.onload = function() {
            console.log(this.response)
            if(JSON.parse(this.responseText).id){
                erro.setAttribute('style', 'visibility: hidden;' )

                let listaUsuario = JSON.parse(localStorage.getItem("listaUsuario") || "[]")

                listaUsuario.push({ 
                    "nomeCadastro": JSON.parse(this.responseText).nome,
                    "sobrenomeCadastro": JSON.parse(this.responseText).sobrenome,
                    "matriculaCadastro": JSON.parse(this.responseText).matricula,
                    "campoCadastro": JSON.parse(this.responseText).campus
                
                })

                localStorage.setItem("listaUsuario", JSON.stringify(listaUsuario))
                
                location = "capa.html"

            } else {
                erro.setAttribute('style', 'visibility: visible;' )

                emailLabel.setAttribute("style", "color: #FA8D66")
                senhaLabel.setAttribute("style", "color: #FA8D66")
                emailInput.focus()
            }
        }
        
        return request.responseText
    }

function entrar(){    
    let url = "http://localhost:3000/login"
    
    if (validEmail && validSenha) {
        logarUsuario();
        function logarUsuario() {
            let url = "http://localhost:3000/login"
            event.preventDefault()
        
            body = {
            "email": emailInput.value,
            "password": senhaInput.value 
           }
         
            post(url, body)
        }
        
    
    }else{
        
        emailLabel.setAttribute("style", "color: #FA8D66")
        senhaLabel.setAttribute("style", "color: #FA8D66")
        emailInput.focus()

        alert("usuario ou senha incorretos")
    }
}