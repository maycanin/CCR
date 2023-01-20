function adcionaConveniosPadroes() {
    criaBDConvenios();

    const convenios = ["Unimed", "Santa Rita", "Solumed", "Prever"];
    coletaJaInseridos(convenios);
    console.log(conveniosCadastros);

    const conveniosParaAdd = listaConveniosParaAdd(
        convenios,
        conveniosCadastros
    );
    console.log(conveniosParaAdd);
}

function criaBDConvenios() {
    bd.transaction(function (criar) {
        criar.executeSql("CREATE TABLE convenios (nome TEXT)");
    });
}

function coletaJaInseridos(convenios) {
    bd.transaction(function (ler) {
        ler.executeSql(
            "SELECT * FROM convenios",
            [],
            function (ler, resultados) {
                const conveniosCadastros = [];
                for (let i = 0; i < resultados.rows.length; i++) {
                    console.log(resultados.rows.item(i).nome);
                    conveniosCadastros[i] = resultados.rows.item(i).nome;
                }
                for (let i = 0; i < convenios.length; i++) {
                    if (!conveniosCadastros.includes(convenios[i])) {
                        adcionaConvenio(convenios[i]);
                    }
                }
            }
        );
    });
}

function carregaConvenios() {
    bd.transaction(function (ler) {
        ler.executeSql(
            "SELECT * FROM convenios",
            [],
            function (ler, resultados) {
                for (let i = 0; i < resultados.rows.length; i++) {
                    adicionaOpcaoConvenio(resultados.rows.item(i).nome);
                }
            }
        );
    });
}

function adcionaConvenio(convenio) {
    bd.transaction(function (inserir) {
        inserir.executeSql("INSERT INTO convenios VALUES (?)", [convenio]);
    });
    adicionaOpcaoPadrao();
}

function listaConveniosParaAdd(convenios, conveniosCadastros) {
    const conveniosParaAdd = [];
    convenios.forEach((e) =>
        conveniosCadastros.includes(e)
            ? conveniosParaAdd
            : conveniosParaAdd.push(e)
    );
    return conveniosParaAdd;
}
  
  adicionaOpcaoPadrao()

// bd.transaction(function (inserir) {
//     conveniosParaAdd.forEach((e) =>
//         inserir.executeSql("INSERT INTO convenios (nome) VALUES (?)", [e])
//     );
// });

adcionaConveniosPadroes();
