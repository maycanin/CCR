const cadastro = document.getElementById('cadastro')
const relatorio = document.getElementById('relatorio')

function login() {
  const login = document.getElementById('nomeUsuario').value
  const senha = document.getElementById('senhaUsuario').value
    if (login == 'admin' && senha == 'admin') {
      localStorage.setItem('estaLogado', true)
    window.location.replace('./cadastroConsulta.html')
  } else {
    loginNegado()
  }
}

function loginNegado() {
  const toast = document.getElementById('toast')
  const toastTitle = document.getElementById('toastTitle')
  const toastDescription = document.getElementById('toastDescription')
  toastTitle.innerText = 'Informações inválidas!'
  toastDescription.innerText = 'Usuário e/ou senha incorreto(s)'
  toast.classList.add('error', 'show')
  setTimeout(() => {
    toast.classList.remove('show')
  }, 5000)
}

function verificaLogin() {
    if (localStorage.getItem('estaLogado') !== "true") {
        window.location.replace('./index.html')
    }
}

function deslogar() {
    localStorage.removeItem('estaLogado')
    window.location.replace('./index.html')
}