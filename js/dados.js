const lista = [
  {
    nome: 'Maria do Carmo',
    numeroConvenio: '123456789',
    data: '2022-10-28T15:09:00',
    convenio: 'Unimed',
    valor: '100,00',
    imagem: 'https://picsum.photos/200/300',
  },
  {
    nome: 'Mario do Parmo',
    numeroConvenio: '123456789',
    data: '2022-01-28T15:09:00',
    convenio: 'Santa Rita',
    valor: '150,00',
    imagem: undefined,
  },
  {
    nome: 'Mariana do Carmo',
    numeroConvenio: '123456789',
    data: '2022-03-28T15:09:00',
    convenio: 'Solumed',
    valor: '230,00',
    imagem: 'https://picsum.photos/200/300',
  },
  {
    nome: 'Marrie de Carme',
    numeroConvenio: '123456789',
    data: '2022-09-28T15:09:00',
    convenio: 'Prever',
    valor: '200,00',
    imagem: 'https://picsum.photos/200/300',
  },
  {
    nome: 'Marcia do Carmo',
    numeroConvenio: '123456789',
    data: '2022-10-28T15:09:00',
    convenio: 'Unimed',
    valor: '101,00',
    imagem: 'https://picsum.photos/200/300',
  },
  {
    nome: 'Marcio do Parmo',
    numeroConvenio: '123456789',
    data: '2022-01-28T15:09:00',
    convenio: 'Santa Rita',
    valor: '109,00',
    imagem: 'https://picsum.photos/200/300',
  },
  {
    nome: 'Mariana dos Santos',
    numeroConvenio: '123456789',
    data: '2022-03-28T15:09:00',
    convenio: 'Solumed',
    valor: '203,00',
    imagem: 'https://picsum.photos/200/300',
  },
  {
    nome: 'Marrie de Carmolina',
    numeroConvenio: '123456789',
    data: '2022-09-28T15:09:00',
    convenio: 'Prever',
    valor: '220,00',
    imagem: undefined,
  },
]

lista.forEach((e) => insereBD(e));

function insereBD(elemento) {
    console.log(elemento);
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
            `SELECT * FROM convenio WHERE nome=${elemento.nomeUsuario} AND convenio=${elemento.convenio} AND valor=${elemento.valorDaConsulta} `,
            [],
            function (ler, resultados) {
                console.log(resultados);
                return true;
            }
        );
    });
}