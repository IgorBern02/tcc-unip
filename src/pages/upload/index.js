const tituloInput = document.getElementById("titulo");
const descricaoInput = document.getElementById("descricao");

document.getElementById("confirmar").addEventListener("click", function () {
  const title = tituloInput.value;
  const password = descricaoInput.value;

  if (title !== "" || password !== "") {
    window.location.href = "../../index.html";
  } else {
    swal("Por favor, preencha todos os campos obrigatórios.");
  }
});
