const lista = [
    {
        nome: "Maria do Carmo",
        numeroConvenio: 123456789,
        data: "2022-10-28T15:09:00",
        convenio: "Unimed",
        valor: 100.0,
        imagem: "https://picsum.photos/200/300",
    },
    {
        nome: "Mario do Parmo",
        numeroConvenio: 12412541,
        data: "2022-01-28T15:09:00",
        convenio: "Santa Rita",
        valor: 150.0,
        imagem: "undefined",
    },
    {
        nome: "Mariana do Carmo",
        numeroConvenio: 243663,
        data: "2022-03-28T15:09:00",
        convenio: "Solumed",
        valor: 230.0,
        imagem: "https://picsum.photos/200/300",
    },
    {
        nome: "Marrie de Carme",
        numeroConvenio: 23573547,
        data: "2022-09-28T15:09:00",
        convenio: "Prever",
        valor: 200.0,
        imagem: "https://picsum.photos/200/300",
    },
    {
        nome: "Marcia do Carmo",
        numeroConvenio: 1124,
        data: "2022-10-28T15:09:00",
        convenio: "Unimed",
        valor: 101.0,
        imagem: "https://picsum.photos/200/300",
    },
    {
        nome: "Marcio do Parmo",
        numeroConvenio: 24634,
        data: "2022-01-28T15:09:00",
        convenio: "Santa Rita",
        valor: 109.0,
        imagem: "https://picsum.photos/200/300",
    },
    {
        nome: "Mariana dos Santos",
        numeroConvenio: 847658,
        data: "2022-03-28T15:09:00",
        convenio: "Solumed",
        valor: 203.0,
        imagem: "https://picsum.photos/200/300",
    },
    {
        nome: "Marrie de Carmolina",
        numeroConvenio: 24356,
        data: "2022-09-28T15:09:00",
        convenio: "Prever",
        valor: 220.0,
        imagem: "undefined",
    },
];

// bd.transaction(function (inserir) {
//     inserir.executeSql("INSERT INTO consultas VALUES (?, ?, ?, ?, ?, ?)", []);
// });

lista.forEach((e) => insereBD(e));

function insereBD(elemento) {
    console.log(elemento);
    confereDuplicata(elemento);
}
function confereDuplicata(elemento) {
    //confere se não esta
    bd.transaction(function (ler) {
        return ler.executeSql(
            `SELECT * FROM consultas WHERE numeroConvenio=${elemento.numeroConvenio}`,
            [],
            function (ler, resultados) {
                if (resultados.rows.length == 0) {
                    addLinhaBd(elemento);
                    console.log("inserido");
                } else {
                    console.log("n - inserido");
                }
            }
        );
    });
}

function addLinhaBd(elemento) {
    bd.transaction(function (inserir) {
        inserir.executeSql(
            "INSERT INTO consultas VALUES (?,?,?,?,?,?)",
            [
                elemento.nome,
                elemento.numeroConvenio,
                elemento.data,
                elemento.convenio,
                elemento.valor,
                elemento.imagem,
            ]
        );
    });
}
