function adcionaConveniosPadroes() {
    criaBDConvenios();

    const convenios = ["Unimed", "Santa Rita", "Solumed", "Prever"];
    const conveniosCadastros = coletaJaInseridos();
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

function coletaJaInseridos() {
    let a = [];
    bd.transaction(function (ler) {
        ler.executeSql(
            "SELECT * FROM convenios",
            [],
            function (ler, resultados) {
                const conveniosCadastros = new Array(resultados.rows.length);
                console.log(resultados.rows.length);
                for (let i = 0; i < resultados.rows.length; i++) {
                    console.log(resultados.rows.item(i).nome);
                    conveniosCadastros[i] = resultados.rows.item(i).nome;
                }
                a = conveniosCadastros;
            }
        );
    });
    return a;
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

// bd.transaction(function (inserir) {
//     conveniosParaAdd.forEach((e) =>
//         inserir.executeSql("INSERT INTO convenios (nome) VALUES (?)", [e])
//     );
// });

adcionaConveniosPadroes();
