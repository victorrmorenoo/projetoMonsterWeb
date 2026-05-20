/* Obtém botão de envio */
let botaoEnviar = document.querySelector("#enviar");
let formulario = document.querySelector("#frmContato");

botaoEnviar.addEventListener("click", function (event) {
    event.preventDefault(); // Impede o envio do formulário

    /* Verifica se o usuário preencheu o e-mail ou telefone */
    if (formulario.email.value === '' && formulario.telefone.value === '') {
        return alert("Por favor, preencha o campo de e-mail ou telefone.");
    }

    /* Mostra o texto de retorno */
    let msgRetorno = "<span>"+formulario.nomesobrenome.value + "</span>, obrigado por entrar em contato conosco! <br><br> Em breve, responderemos sua mensagem.";

    /* Abre a div de retorno */
    document.getElementById("formRetorno").style.display = "block";
    /* Efetua o retorno */
    document.getElementById("textoRetorno").innerHTML = msgRetorno;
    formulario.style.display = "none";
});