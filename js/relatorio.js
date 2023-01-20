//define a data today como a maxima aceita
const dataInicial = document.getElementById('dataInicial')
const todayInicial = new Date()
const currentDateInicial = todayInicial
  .toLocaleString()
  .split(' ')[0]
  .split('/')
  .reverse()
  .join('-')
dataInicial.max = currentDateInicial + 'T23:59'

//define a data today como a maxima aceita
const dataFinal = document.getElementById('dataFinal')
const todayFinal = new Date()
const currentDateFinal = todayFinal
  .toLocaleString()
  .split(' ')[0]
  .split('/')
  .reverse()
  .join('-')
dataFinal.max = currentDateFinal + 'T23:59'


