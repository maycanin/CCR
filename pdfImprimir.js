function CriaPDF() {
    let minhaTabela = document.getElementById('table').innerHTML;
    // CRIA UM OBJETO WINDOW
    let win = window.open('', '', 'height=700,width=700');
    win.document.write('<html><head>');
    win.document.write('<title>Relatório de Consultas</title>');   // <title> CABEÇALHO DO PDF.
    win.document.write('<link rel="stylesheet" href="styleTablePrint.css"/>' );// INCLUI UM ESTILO NA TAB HEAD
    win.document.write('</head>');
    win.document.write('<body>');
    win.document.write(minhaTabela);// O CONTEUDO DA TABELA DENTRO DA TAG BODY
    win.document.write('</body></html>');
    win.document.close(); 	                                         // FECHA A JANELA
    win.print();                                                            // IMPRIME O CONTEUDO
}