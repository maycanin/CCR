const cols = [];

for (let i = 0; i < lista.length; i++) {
    for (const k in lista[i]) {
        if (cols.indexOf(k) === -1) {
            // Adiciona todas as chaves no array
            cols.push(k);
        }
    }
}
const table = document.getElementById("table");

// Adiciona os dados na tabela
for (let i = 0; i < lista.length; i++) {
    // Cria nova linha
    let trow = table.insertRow(-1);
    for (let j = 0; j < cols.length; j++) {
        const cell = trow.insertCell(-1);

        // Insere cada célula no lugar correto
        cell.innerHTML = lista[i][cols[j]];
    }
}

let somaConsulta = 0;
lista.forEach((item) => {
    somaConsulta += parseFloat(item.valorConsulta);
});

consultasTotal.innerHTML = lista.length;
somaPeriodo.innerHTML = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
}).format(somaConsulta);