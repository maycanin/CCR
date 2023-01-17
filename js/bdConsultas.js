var bd = openDatabase("meuBD", "1.0", "Meu Banco de Dados", 4080);

bd.transaction(function (criar) {
    criar.executeSql(
        "CREATE TABLE consultas (nome TEXT, numeroConvenio INTEGER, data DATETIME, convenio TEXT, valor DOUBLE, imagem BLOB )" //CREATE=criar TABLE=tabela INTEGER=inteiro
    );
});

function coletarInfoConsulta() {
    const nomeUsuario = document.getElementById("nome").value.toUpperCase();

    const numeroConvenio = parseInt(document.getElementById("numero").value);

    const dataConsulta = document.getElementById("data").value;

    const convenio = document
        .getElementById("novoConvenio")
        .value.toUpperCase();

    const valorConsulta = parseFloat(
        document.getElementById("valorConsulta").value
    );

    const imagemGuia = document.getElementById("foto");

    let reader = new FileReader()

    reader.readAsDataURL(inputFoto.files[0])

    reader.onload = () => {
        let fileInfo = {
            name: foto.name,
            type: foto.type,
            size: Math.round(foto.size / 1000) + ' kb',
            base64: reader.result,
            file: foto
        }
    }
    
    salvarConsultaBD(nomeUsuario, numeroConvenio, dataConsulta, convenio, valorConsulta, imagemGuia)

    limparCamposConsulta()
}

function salvarConsultaBD(nome, numeroConvenio, data, convenio, valor, imagem){
    bd.transaction(function (inserir) {
        inserir.executeSql(
            "INSERT INTO consultas (nome, numeroConvenio, data, convenio, valor, imagem) VALUES (?, ?, ?, ?, ?, ?)", //INSERT=inserir INTO=dentro VALUES=valores
            [nome, numeroConvenio, data, convenio, valor, imagem]
        );
    });
    
}

function limparCamposConsulta(){
    const status = document.getElementById("status-imagem");
    document.getElementById("nome").value = "";
    document.getElementById("data").value = "";
    document.getElementById("numero").value = "";
    document.getElementById("novoConvenio").value = "";
    document.getElementById("valorConsulta").value = "";
    status.innerText = "";

}

// salvarConsultaBD("aderson", 123456789, "2023-01-13 10:00:15", "unimed", 120.00, new Blob(["text"], {type: 'text/plain'}))