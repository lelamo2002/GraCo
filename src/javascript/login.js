/*Autenticação do usuario usando localStorage */
function entrar(){
    let emailInput = document.querySelector("#emailInput");
    let emailLabel = document.querySelector("#emailLabel");

    let senhaInput = document.querySelector("#senhaInput");
    let senhaLabel = document.querySelector("#senhaLabel");

    let listaUser = [];

    let validacaoUsuario = { nome: "", sobrenome: "", matricula: "", email:"", senha:""}

    listaUser = JSON.parse(localStorage.getItem("listaUser"))

    listaUser.forEach((item) => {
        if(emailInput.value == item.emailCadastro && senhaInput.value == item.senhaCadastro){
            validacaoUsuario ={
                nome: item.nomeCadastro, 
                sobrenome: item.sobrenomeCadastro, 
                matricula: item.matriculaCadastro, 
                email: item.emailCadastro, 
                senha: item.senhaCadastro
            }
        }
    })
    if(emailInput.value == validacaoUsuario.email && senhaInput.value == validacaoUsuario.senha){
        alert("Deu bom gata") /*linkar com a página principal */
    } else{
        emailLabel.setAttribute("style", "color: red")
        senhaLabel.setAttribute("style", "color: red")
        emailInput.focus()

        alert("usuario ou senha incorretos")
    }
}