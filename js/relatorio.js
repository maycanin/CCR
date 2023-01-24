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

function printTarget(tableId) {
  let divToPrint = document.getElementById('tableId');
  let htmlToPrint = 
      '<style type="text/css">' + 
      'table {'+'font-family: arial, sans-serif;'+ 
      'border-collapse: collapse;'+'width: 95%;'+ 
      'margin-left: 20px'+'}'+   
      'th, td {' +
      'border:1px solid #000;' +
      'padding: 8px;' +
      '}'+ 'tr:nth-child(even) {'+
      'background-color: #dddddd;'+'}'+
      '</style>';
  htmlToPrint += divToPrint.outerHTML;
  let windowToPrint = window.open("");    
  windowToPrint.document.write(htmlToPrint);
  windowToPrint.print();
  windowToPrint.close();
}

