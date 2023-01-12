var bd = openDatabase("meuBD", "1.0", "Meu Banco de Dados", 4080);

bd.transaction(function (criar) {
    criar.executeSql(
        "CREATE TABLE consultas (nome TEXT, numeroConvenio INTEGER, data DATE, convenio TEXT, valor DOUBLE, imagem BLOB )" //CREATE=criar TABLE=tabela INTEGER=inteiro
    );
});



function salvarInfo() {
    const nomeUsuario = document
        .getElementById("nome")
        .value.toUpperCase();
        
    const numeroConvenio = parseInt(
        document.getElementById("").value    
    );

    const dataConsulta = 
        document.getElementById("data").value    
    ;
    const convenio = document
    .getElementById("novoConvenio")
    .value.toUpperCase();

    const valorConsulta = parseInt(
        document.getElementById("valorConsulta").value    
    );
    


   
    bd.transaction(function (inserir) {
        inserir.executeSql(
            "INSERT INTO formulario (nome, idade, email ) VALUES (?, ?, ?)", //INSERT=inserir INTO=dentro VALUES=valores
            [nomeUsuario, numero, dataConsulta]
        );
    });
    document.getElementById("nome-usuario").value = "";
    document.getElementById("idade-usuario").value = "";
    document.getElementById("email-usuario").value = "";
}