var bd = openDatabase('meuBD', '1.0', 'Meu Banco de Dados', 4080)

bd.transaction(function (criar) {
  criar.executeSql(
    'CREATE TABLE consultas (nome TEXT, numeroConvenio INTEGER, data DATETIME, convenio TEXT, valor DOUBLE, imagem BLOB )', //CREATE=criar TABLE=tabela INTEGER=inteiro
  )
})

function coletarInfoConsulta() {
  const nomeUsuario = document.getElementById('nome').value.toUpperCase()

  const numeroConvenio = parseInt(document.getElementById('numero').value)

  const dataConsulta = document.getElementById('data').value

  const convenio = document.getElementById('novoConvenio').value.toUpperCase()

  const valorConsulta = document.getElementById('valorConsulta').value.slice(2)

  const imagemGuia = document.getElementById('foto')

  const reader = new FileReader()

  const file = imagemGuia.files[0]

  reader.readAsDataURL(file)
  reader.onload = () => {
    const fileInfo = {
      name: file.name,
      type: file.type,
      size: Math.round(foto.size / 1000) + ' kb',
      base64: reader.result,
      file: file,
    }
    salvarConsultaBD(
      nomeUsuario,
      numeroConvenio,
      dataConsulta,
      convenio,
      valorConsulta,
      fileInfo.base64,
    )
  }

  limparCamposConsulta()
}

function salvarConsultaBD(nome, numeroConvenio, data, convenio, valor, imagem) {
  bd.transaction(function (inserir) {
    inserir.executeSql(
      'INSERT INTO consultas (nome, numeroConvenio, data, convenio, valor, imagem) VALUES (?, ?, ?, ?, ?, ?)', //INSERT=inserir INTO=dentro VALUES=valores
      [nome, numeroConvenio, data, convenio, valor, imagem],
    )
  })
}

function limparCamposConsulta() {
  const status = document.getElementById('status-imagem')
  document.getElementById('nome').value = ''
  document.getElementById('data').value = ''
  document.getElementById('numero').value = ''
  document.getElementById('novoConvenio').value = ''
  document.getElementById('valorConsulta').value = ''
  status.innerText = ''
}

//define a data today como a maxima aceita
const data = document.getElementById('data')
const today = new Date()
const currentDate = today
  .toLocaleString()
  .split(' ')[0]
  .split('/')
  .reverse()
  .join('-')
data.max = currentDate + 'T23:59'

// cria marcara R$ 00,00 par ao campo valor da consulta
function mascaraMoeda(event) {
  const onlyDigits = event.target.value
    .split('')
    .filter((s) => /\d/.test(s))
    .join('')
    .padStart(3, '0')
  const digitsFloat = onlyDigits.slice(0, -2) + '.' + onlyDigits.slice(-2)
  event.target.value = maskCurrency(digitsFloat)
}

function maskCurrency(valor, locale = 'pt-BR', currency = 'BRL') {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
  }).format(valor)
}
