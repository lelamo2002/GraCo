/*Autenticação do usuario usando localStorage */
function entrar(){
    let emailInput = document.querySelector("#emailInput")[0].value.toLowerCase();
    let emailLabel = document.querySelector("#emailLabel");

    let senhaInput = document.querySelector("#senhaInput")[0].value;
    let senhaLabel = document.querySelector("#senhaLabel");


    let url = "http://localhost:3000/login"
    post(url)
    if (validEmail && validSenha) {
        function logarUsuario() {
            let url = "http://localhost:3000/login"
            event.preventDefault()
        
            body = {
               
            "email": emailInput.value,
            
            "senha": senhaInput.value 
           
        }
    post(url, body)
    }
    }
    
   
    logarUsuario();
    console.log("body")
     
            
        }else{
            emailLabel.setAttribute("style", "color: red")
            senhaLabel.setAttribute("style", "color: red")
            emailInput.focus()

            alert("usuario ou senha incorretos")
        }
    }
}