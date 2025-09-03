// Corações (todos)
const coracoes = document.querySelectorAll(".coracao");
coracoes.forEach(coracao => {
  coracao.addEventListener("click", () => {
    coracao.classList.toggle("colorir");
  });
});

// Ícones de mensagem -> abre modal
const msgIcons = document.querySelectorAll(".msg-icon");
msgIcons.forEach(icon => {
  icon.addEventListener("click", () => {
    const postId = icon.getAttribute("data-post");
    const modal = document.getElementById("modal" + postId);
    if (modal) modal.classList.add("show");
  });
});

// Botões fechar
const closeButtons = document.querySelectorAll("[id^=close]");
closeButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    btn.closest(".modal").classList.remove("show");
  });
});
