const lista = [
    {
        id: "001",
        nomeDoPaciente: "Maria do Carmo",
        data: "2022-10-28T15:09:00",
        convenio: "Unimed",
        valorConsulta: "100,00",
        imgGuia: "https://picsum.photos/200/300",
    },
    {
        id: "002",
        nomeDoPaciente: "Mario do Parmo",
        data: "2022-01-28T15:09:00",
        convenio: "Santa Rita",
        valorConsulta: "150,00",
        imgGuia: null,
    },
    {
        id: "003",
        nomeDoPaciente: "Mariana do Carmo",
        data: "2022-03-28T15:09:00",
        convenio: "Solumed",
        valorConsulta: "230,00",
        imgGuia: "https://picsum.photos/200/300",
    },
    {
        id: "004",
        nomeDoPaciente: "Marrie de Carme",
        data: "2022-09-28T15:09:00",
        convenio: "Prever",
        valorConsulta: "200,00",
        imgGuia: "https://picsum.photos/200/300",
    },
    {
        id: "005",
        nomeDoPaciente: "Marcia do Carmo",
        data: "2022-10-28T15:09:00",
        convenio: "Unimed",
        valorConsulta: "101,00",
        imgGuia: "https://picsum.photos/200/300",
    },
    {
        id: "006",
        nomeDoPaciente: "Marcio do Parmo",
        data: "2022-01-28T15:09:00",
        convenio: "Santa Rita",
        valorConsulta: "10,00",
        imgGuia: "https://picsum.photos/200/300",
    },
    {
        id: "007",
        nomeDoPaciente: "Mariana dos Santos",
        data: "2022-03-28T15:09:00",
        convenio: "Solumed",
        valorConsulta: "20,00",
        imgGuia: "https://picsum.photos/200/300",
    },
    {
        id: "008",
        nomeDoPaciente: "Marrie de Carmolina",
        data: "2022-09-28T15:09:00",
        convenio: "Prever",
        valorConsulta: "220,00",
        imgGuia: null,
    },
];

lista.forEach((e) => insereBD(e));

function insereBD(elemento) {
    if (confereDuplicata(elemento)) {
    } else {
        //insere
        bd.transaction(function (inserir) {
            inserir.executeSql(
                "INSERT INTO consultas VALUES (?,?,?,?,?)",
                [
                    elemento.nomeUsuario,
                    elemento.numeroConvenio,
                    elemento.dataConsulta,
                    elemento.convenio,
                    elemento.valorDaConsulta,
                ],
                function (inserir, imagens) {
                    imgblob = imagens.rows.item(0).imagem;
                }
            );
        });
    }
}
function confereDuplicata(elemento) {
    //confere se não esta
    bd.transaction(function (ler) {
        ler.executeSql(
            "SELECT * FROM convenio",
            [],
            function (ler, resultados) {
                //
                // return true;
            }
        );
    });
}
