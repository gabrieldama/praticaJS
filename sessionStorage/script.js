// Armazena o nome no sessionStorage
function salvar() {
    let nome = document.getElementById("nome").value;
    sessionStorage.setItem("nome", nome);
    document.getElementById("resultado").innerText = "Nome salvo!";
}

// Recupera o nome do sessionStorage
function recuperar() {
    let nome = sessionStorage.getItem("nome");

    if (nome) {
        document.getElementById("resultado").innerText = "Nome salvo: " + nome;
    } else {
        document.getElementById("resultado").innerText = "Nenhum nome salvo.";
    }
}
