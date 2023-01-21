import { lista } from './dados.js'

const cols = []

for (let i = 0; i < lista.length; i++) {
  for (const k in lista[i]) {
    if (cols.indexOf(k) === -1) {
      // Adiciona todas as chaves no array
      cols.push(k)
    }
  }
}

const table = document.getElementById('table')

if (table) {
  for (let i = 0; i < lista.length; i++) {
    // Cria nova linha
    let trow = table.insertRow(-1)
    for (let j = 0; j < cols.length; j++) {
      const cell = trow.insertCell(-1)

      // Insere cada célula no lugar correto
      cell.innerHTML = lista[i][cols[j]]

      if (cols[j] == 'imagem' && lista[i][cols[j]] == undefined) {
        cell.innerHTML =
          '<input type="button" value="Enviar" class="btnBaixar"/>'
      }
      if (cols[j] == 'imagem' && lista[i][cols[j]] !== undefined) {
        cell.innerHTML = '<input type="button" value="Ver" class="btnBaixar"/>'
      }
      if (cols[j] == 'data') {
        let data = lista[i][cols[j]].split('T')
        let dataFormat = data[0].split('-').reverse().join('/')
        let horaFormat = data[1].split(':').slice(0, 2).join(':')
        cell.innerHTML = dataFormat + ' às ' + horaFormat + ' horas'
        console.log(horaFormat)
      }
      if (cols[j] == 'valor') {
        cell.innerHTML = new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }).format(parseFloat(lista[i][cols[j]]))
      }
    }
  }

  let somaConsulta = 0

  lista.forEach((item) => {
    somaConsulta += parseFloat(item.valor)
  })

  consultasTotal.innerHTML = lista.length
  somaPeriodo.innerHTML = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(somaConsulta)
}

function adicionaNovoConvenio() {
  const novoConvenio = document.getElementById('cadastraConvenio').value
  const select = document.getElementById('novoConvenio')
  adcionaConvenio(novoConvenio)
  cadastraConvenio.value = ''
  cadastraConvenio.style.display = 'none'
  btnConfirmaConvenio.style.display = 'none'
  select.style.display = 'block'
  btnConv.value = '+'
}

function adicionaOpcaoPadrao() {
  const select = document.getElementById('novoConvenio')
  select.innerHTML = `<option value="">Selecione</option>`
  carregaConvenios()
}

function adicionaOpcaoConvenio(opcao) {
  const select = document.getElementById('novoConvenio')
  select.innerHTML += `<option value="">${opcao}</option>`
}
