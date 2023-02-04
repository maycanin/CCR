bd.transaction(function (criar) {
    criar.executeSql("CREATE TABLE convenios (nome TEXT)");
});

const convenios = ["Unimed", "Santa Rita", "Solumed", "Prever"];

function coletaJaInseridos(convenios) {
    bd.transaction(function (ler) {
        ler.executeSql(
            "SELECT * FROM convenios",
            [],
            function (ler, resultados) {
                const conveniosCadastros = [];
                for (let i = 0; i < resultados.rows.length; i++) {
                    conveniosCadastros[i] = resultados.rows.item(i).nome;
                }
                for (let i = 0; i < convenios.length; i++) {
                    if (!conveniosCadastros.includes(convenios[i])) {
                        bd.transaction(function (inserir) {
                            inserir.executeSql(
                                "INSERT INTO convenios VALUES (?)",
                                [convenios[i]]
                            );
                        });
                    }
                }
            }
        );
        adicionaOpcaoPadrao();
    });
}

function adicionaOpcaoConvenio(opcao) {
    const select = document.getElementById("novoConvenio");
    select.innerHTML += `<option value="${opcao}">${opcao}</option>`;
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

function adicionaOpcaoPadrao() {
    const select = document.getElementById("novoConvenio");
    select.innerHTML = `<option value="">Selecione</option>`;
    carregaConvenios();
}

function adicionaConvenio(convenio) {
    bd.transaction(function (ler) {
        ler.executeSql(
            "SELECT * FROM convenios",
            [],
            function (ler, resultados) {
                const conveniosCadastros = [];
                for (let i = 0; i < resultados.rows.length; i++) {
                    conveniosCadastros[i] = resultados.rows.item(i).nome;
                }
                if (!conveniosCadastros.includes(convenio)) {
                    bd.transaction(function (inserir) {
                        inserir.executeSql("INSERT INTO convenios VALUES (?)", [
                            convenio,
                        ]);
                    });
                    adicionaOpcaoPadrao();
                } else {
                    alert("Convênio já existe");
                }
            }
        );
    });
}

function adicionaNovoConvenio() {
    const novoConvenio = document.getElementById("cadastraConvenio").value;
    const select = document.getElementById("novoConvenio");
    adicionaConvenio(novoConvenio);
    cadastraConvenio.value = "";
    cadastraConvenio.style.display = "none";
    btnConfirmaConvenio.style.display = "none";
    select.style.display = "block";
    btnConv.value = "+";
}

function exibeCadastraConvenio() {
    const cadastraConvenio = document.getElementById("cadastraConvenio");
    const btnConfirmaConvenio = document.getElementById("btnConfirmaConvenio");
    const novoConvenio = document.getElementById("novoConvenio");
    const btnConv = document.getElementById("btnConv");
    if (cadastraConvenio.style.display == "none") {
        cadastraConvenio.style.display = "block";
        btnConfirmaConvenio.style.display = "block";
        novoConvenio.style.display = "none";
        btnConv.value = "-";
    } else if (cadastraConvenio.style.display == "block") {
        cadastraConvenio.style.display = "none";
        btnConfirmaConvenio.style.display = "none";
        novoConvenio.style.display = "block";
        btnConv.value = "+";
    }
}

coletaJaInseridos(convenios);