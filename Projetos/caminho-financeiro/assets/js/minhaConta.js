const form = document.getElementById("form-cadastro-carteira");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const nomeCliente = document.getElementById("nome-cliente").value.trim();
  const emailCliente = document.getElementById("email-cliente").value.trim();
  const nomeCarteira = document.getElementById("nome-carteira").value.trim();

  if (!nomeCliente || !emailCliente || !nomeCarteira) {
    alert("Por favor, preencha todos os campos.");
    return;
  }

  // Salvar dados no Local Storage
  const carteira = { nomeCliente, emailCliente, nomeCarteira };
  const carteiras = JSON.parse(localStorage.getItem("carteiras")) || [];
  carteiras.push(carteira);
  localStorage.setItem("carteiras", JSON.stringify(carteiras));

  alert("Carteira salva com sucesso!");
  form.reset();
});
