var bd = openDatabase("meuBD", "1.0", "Meu Banco de Dados", 4080);

bd.transaction(function (criar) {
    criar.executeSql(
        "CREATE TABLE consultas (nome TEXT, numeroConvenio INTEGER, data DATETIME, convenio TEXT, valor DOUBLE, imagem BLOB )" //CREATE=criar TABLE=tabela INTEGER=inteiro
    );
});

const formCadastroConsulta = document.getElementById("cadastroConsulta");

formCadastroConsulta?.addEventListener("submit", (event) => {
    event.preventDefault();
    coletarInfoConsulta();
});

function coletarInfoConsulta() {
    const nomeUsuario = document.getElementById("nome").value.toUpperCase();

    const numeroConvenio = parseInt(document.getElementById("numero").value);

    const dataConsulta = document.getElementById("data").value;
    console.log(dataConsulta.value);

    const convenio = document
        .getElementById("novoConvenio")
        .value;

    const valorConsulta = document
        .getElementById("valorConsulta")
        .value.slice(2);

    const imagemGuia = document.getElementById("foto");

    const reader = new FileReader();

    const file = imagemGuia.files[0];

    if (file == undefined) {
        salvarConsultaBD(
            nomeUsuario,
            numeroConvenio,
            dataConsulta,
            convenio,
            valorConsulta
        );
        limparCamposConsulta();
    } else {
        reader.readAsDataURL(file);
        reader.onload = () => {
            const fileInfo = {
                name: file.name,
                type: file.type,
                size: Math.round(foto.size / 1000) + " kb",
                base64: reader.result,
                file: file,
            };
            salvarConsultaBD(
                nomeUsuario,
                numeroConvenio,
                dataConsulta,
                convenio,
                valorConsulta,
                fileInfo.base64
            );
        };
        limparCamposConsulta();
    }
}

function salvarConsultaBD(nome, numeroConvenio, data, convenio, valor, imagem) {
    bd.transaction(function (inserir) {
        inserir.executeSql(
            "INSERT INTO consultas (nome, numeroConvenio, data, convenio, valor, imagem) VALUES (?, ?, ?, ?, ?, ?)", //INSERT=inserir INTO=dentro VALUES=valores
            [nome, numeroConvenio, data, convenio, valor, imagem]
        );
    });
}

function limparCamposConsulta() {
    const status = document.getElementById("status-imagem");
    document.getElementById("nome").value = "";
    document.getElementById("data").value = "";
    document.getElementById("numero").value = "";
    document.getElementById("novoConvenio").value = "";
    document.getElementById("valorConsulta").value = "";
    status.innerText = "";
}

//define a data today como a maxima aceita
const data = document.getElementById("data");
if (data) {
    const today = new Date();
    const currentDate = today
        .toLocaleString()
        .split(" ")[0]
        .split("/")
        .reverse()
        .join("-");
    data.max = currentDate + "T23:59";
}

// cria marcara R$ 00,00 par ao campo valor da consulta
function mascaraMoeda(event) {
    const onlyDigits = event.target.value
        .split("")
        .filter((s) => /\d/.test(s))
        .join("")
        .padStart(3, "0");
    const digitsFloat = onlyDigits.slice(0, -2) + "." + onlyDigits.slice(-2);
    event.target.value = maskCurrency(digitsFloat);
}

function maskCurrency(valor, locale = "pt-BR", currency = "BRL") {
    return new Intl.NumberFormat(locale, {
        style: "currency",
        currency,
    }).format(valor);
}

const inputFoto = document.getElementById("foto");
inputFoto?.addEventListener("change", exibeGuiaConvenio);

function exibeGuiaConvenio() {
    const status = document.getElementById("status-imagem");
    status.innerText = "arquivo carregado: " + inputFoto.files[0].name;
}

const btnMobile = document.getElementById("btn-mobile");

function toggleMenu(event) {
    if (event?.type === "touchstart") event.preventDefault();
    const nav = document.getElementById("nav");
    nav.classList.toggle("active");
    const active = nav.classList.contains("active");
    event?.currentTarget.setAttribute("aria-expanded", active);
    if (active) {
        event?.currentTarget.setAttribute("aria-label", "Fechar Menu");
    } else {
        event?.currentTarget.setAttribute("aria-label", "Abrir Menu");
    }
}

btnMobile.addEventListener("click", toggleMenu);
btnMobile.addEventListener("touchstart", toggleMenu);
window.onload = () => {
    window.innerWidth;
    if (window.innerWidth <= 785) {
        removeClass();
    }
};

function removeClass() {
    const theme = document.getElementById("theme");
    const btnNav = document.getElementById("btnNav");
    const btnNav1 = document.getElementById("btnNav1");
    const sair = document.getElementById("sair");
    theme.classList.remove("btnNav");
    btnNav.classList.remove("btnNav");
    btnNav1.classList.remove("btnNav");
    sair.classList.remove("sair");
}

const body = document.querySelector("body");
const initialTheme = "light";
const statusMode = document.getElementById("status-mode");

const setTheme = (theme) => {
    localStorage.setItem("theme", theme);
    body.setAttribute("data-theme", theme);
};

const toggleTheme = () => {
    const activeTheme = localStorage.getItem("theme");

    toggleMenu();

    if (activeTheme === "light") {
        setTheme("dark");
    } else {
        setTheme("light");
    }
    verificaMode();
};
verificaMode();

const setThemeOnInit = () => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
        body.setAttribute("data-theme", savedTheme);
    } else {
        setTheme(initialTheme);
    }
};

function verificaMode() {
    if (localStorage.getItem("theme") !== "light") {
        statusMode.innerText = "on";
    } else {
        statusMode.innerText = "off";
    }
}

setThemeOnInit();
