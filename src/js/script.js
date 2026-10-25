// Menu do celular: abre e fecha, e avisa leitores de tela se está aberto.
document.addEventListener("DOMContentLoaded", function () {
    var botao = document.querySelector(".menu-btn");
    var menu = document.getElementById("menu-principal");
    if (!botao || !menu) return;

    var icone = botao.querySelector("use");
    var texto = botao.querySelector(".sr-only");

    function definir(aberto) {
        menu.classList.toggle("open", aberto);
        botao.setAttribute("aria-expanded", aberto ? "true" : "false");
        if (icone) icone.setAttribute("href", aberto ? "#i-close" : "#i-menu");
        if (texto) texto.textContent = aberto ? "Fechar menu" : "Abrir menu";
    }

    botao.addEventListener("click", function () {
        definir(botao.getAttribute("aria-expanded") !== "true");
    });

    // Fecha o menu ao escolher um link
    menu.querySelectorAll("a").forEach(function (link) {
        link.addEventListener("click", function () { definir(false); });
    });

    // Fecha com a tecla Esc
    document.addEventListener("keydown", function (e) {
        if (e.key === "Escape" && botao.getAttribute("aria-expanded") === "true") {
            definir(false);
            botao.focus();
        }
    });
});
