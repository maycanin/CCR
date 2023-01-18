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

// Adiciona os dados na tabela
for (let i = 0; i < lista.length; i++) {
  // Cria nova linha
  let trow = table.insertRow(-1)
  for (let j = 1; j < cols.length; j++) {
    const cell = trow.insertCell(-1)

    // Insere cada célula no lugar correto
    cell.innerHTML = lista[i][cols[j]]

    if (cols[j] == 'imgGuia' && lista[i][cols[j]] == null) {
      cell.innerHTML = '<input type="button" value="Enviar" class="btnBaixar"/>'
    }
    if (cols[j] == 'imgGuia' && lista[i][cols[j]] !== null) {
      cell.innerHTML = '<input type="button" value="Baixar" class="btnBaixar"/>'
    }
    if (cols[j] == 'data') {
      let data = lista[i][cols[j]].split('T')
      let dataFormat = data[0].split('-').reverse().join('/')
      let horaFormat = data[1].split(':').slice(0, 2).join(':')
      cell.innerHTML = dataFormat + ' às ' + horaFormat + ' horas'
      console.log(horaFormat)
    }
    if (cols[j] == 'valorConsulta') {
      cell.innerHTML = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format(parseFloat(lista[i][cols[j]]))
    }
  }
}

let somaConsulta = 0
lista.forEach((item) => {
  somaConsulta += parseFloat(item.valorConsulta)
})

consultasTotal.innerHTML = lista.length
somaPeriodo.innerHTML = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
}).format(somaConsulta)
