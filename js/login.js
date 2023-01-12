const cadastro = document.getElementById('cadastro')
const relatorio = document.getElementById('relatorio')

function login() {
    const login = document.getElementById("nomeUsuario").value;
    const senha = document.getElementById("senhaUsuario").value;
    if (login == "admin" && senha == "admin") {
        relatorio.style.display = 'block';
        cadastro.style.display = 'block';
    } else {
        loginNegado()
    }
}

function loginNegado() {
    const erroDiv = document.getElementById("erro")
    erroDiv.innerText = "Informações inválidas!"
    erroDiv.style.color = "red"
    erroDiv.style.textAlign = "center"
}