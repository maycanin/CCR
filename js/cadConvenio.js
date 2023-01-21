const cadastraConvenio = document.getElementById("cadastraConvenio");
const btnConfirmaConvenio = document.getElementById("btnConfirmaConvenio");
const novoConvenio = document.getElementById("novoConvenio");
const btnConv = document.getElementById("btnConv");

function exibeCadastraConvenio() {
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

function registrarConvenio() {
    const opt = document.createElement("option");
    opt.value = cadastraConvenio.value;
    opt.text = cadastraConvenio.value;
    novoConvenio.add(opt, null);
    cadastraConvenio.value = "";
    cadastraConvenio.style.display = "none";
    btnConfirmaConvenio.style.display = "none";
    novoConvenio.style.display = "block";
    btnConv.value = "+";
}

const inputFoto = document.getElementById("foto");
inputFoto.addEventListener("change", exibeGuiaConvenio);

function exibeGuiaConvenio() {
    //  alert(inputFoto.files[0].name);
    const status = document.getElementById("status-imagem");
    status.innerText = "arquivo carregado: " + inputFoto.files[0].name;
}
