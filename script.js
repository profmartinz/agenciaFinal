// =====================================
// AULA 3 — CHAT AUTOMÁTICO - FINAL
// =====================================

let botao = document.getElementById("chat-toggle");
let chat = document.getElementById("chat");
let fechar = document.getElementById("fechar");
let enviarBtn = document.getElementById("enviar");
let input = document.getElementById("input");
let chatBox = document.getElementById("chat-box");

botao.addEventListener("click", function () {
    chat.classList.toggle("hidden");
});

fechar.addEventListener("click", function () {
    chat.classList.add("hidden");
});

enviarBtn.addEventListener("click", enviar);

input.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        enviar();
    }
});

function enviar() {

    let texto = input.value.trim();
    console.log("Texto original:", texto);

    if (texto === "") return;
    
    chatBox.innerHTML += "<div class='usuario'>" + texto + "</div>";

    input.value = "";

    //Código aqui abaixo

    
}

function responder(texto) {

    texto = texto.toLowerCase();

    let palavras = texto.split(" ");

    if (palavras.includes("oi") || palavras.includes("olá")) {
        return "Olá! Como posso ajudar?";
    } 
    else if (palavras.includes("serviço")) {
        return "Oferecemos design, sites e marketing!";
    } 
    else if (palavras.includes("preço")) {
        return "Entre em contato para orçamento 😊";
    } 
    else if (palavras.includes("contato")) {
        return "Você pode falar conosco pelo WhatsApp: (86) 9 9999-9999!";
    } 
    else {
        return "Não entendi 😅";
    }
}