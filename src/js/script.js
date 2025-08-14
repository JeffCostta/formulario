const Formulario = document.getElementById("formulario");
const NomeUsuario = document.getElementById("nomeUsuario");
const Email = document.getElementById("email");
const Telefone = document.getElementById("telefone");
const Mensagem = document.getElementById("mensagem");

Formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    checkFormulario();

})

NomeUsuario.addEventListener("blur", function() {
    checkNomeUsuario();
})

Email.addEventListener("blur", function() {
    checkEmail();
})

Telefone.addEventListener("blur", function() {
    checkTelefone();   
}) 

Mensagem.addEventListener("blur", function() {
    checkMensagem();
})

function checkNomeUsuario() {
    const valorDoNome = NomeUsuario.value;
    if (valorDoNome === "") {
        inputError(NomeUsuario, "O nome de usuário é obrigatório.");
    }else{
        inputFeito(NomeUsuario, "Nome de usuário válido.");
    }
}

function checkEmail() {
    const valorEmail = Email.value;
    if (valorEmail === "") {
        inputError(Email, "O Email é obrigatório.");
    }else{
        inputFeito(Email, "Email válido.");
    }
}

function checkTelefone() {
    const valorTelefone = Telefone.value;
    if (valorTelefone === "") {
        inputError(Telefone, "O Telefone é obrigatório.");
    }else if(valorTelefone.length < 11){
        inputError(Telefone, "O Telefone deve ter pelo menos 11 dígitos.");
    }else{
        inputFeito(Telefone, "Telefone válido.");
    }
}

function checkMensagem() {
    const valorMensagem = Mensagem.value;
    if (valorMensagem === "") {
        inputError(Mensagem, "Digite uma mensagem.");
    }else{
        inputFeito(Mensagem, "Perfeito!");
    }
}

function checkFormulario(){
    checkNomeUsuario();
    checkEmail();
    checkTelefone();
    checkMensagem();

    const conteudoFormulario = document.querySelectorAll(".conteudo-formulario");
    const ehValido = [...conteudoFormulario].every((item) => {
        return item.className === "conteudo-formulario feito";
    })

    if (ehValido) {
        alert("Formulário enviado com sucesso!");
    }
}


function inputError(input, message) {
    const conteudoFormulario = input.parentElement;
    const textoMensagem = conteudoFormulario.querySelector("a");
    textoMensagem.innerText = message;

    conteudoFormulario.className = "conteudo-formulario erro";
}

function inputFeito(input, message) {
    const conteudoFormulario = input.parentElement;
    const textoMensagem = conteudoFormulario.querySelector("a");
    textoMensagem.innerText = message;

    conteudoFormulario.className = "conteudo-formulario feito";
}