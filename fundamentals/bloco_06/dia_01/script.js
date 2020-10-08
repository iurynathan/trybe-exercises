let state = {
  AC: "Acre",
  AL: "Alagoas",
  AP: "Amapá",
  AM: "Amazonas",
  BA: "Bahia",
  CE: "Ceará",
  DF: "Distrito Federal",
  ES: "Espírito Santo",
  GO: "Goiás",
  MA: "Maranhão",
  MT: "Mato Grosso",
  MS: "Mato Grosso do Sul",
  MG: "Minas Gerais",
  PA: "Pará",
  PB: "Paraíba",
  PR: "Paraná",
  PE: "Pernambuco",
  PI: "Piauí",
  RJ: "Rio de Janeiro",
  RN: "Rio Grande do Norte",
  RS: "Rio Grande do Sul",
  RO: "Rondônia",
  RR: "Roraima",
  SC: "Santa Catarina",
  SP: "São Paulo",
  SE: "Sergipe",
  TO: "Tocantins",
};

let ufSelect = document.querySelector("select[name=estados]");
let dados = document.querySelector("section");
let title = document.createElement("h1");

for (let index in state) {
  ufSelect.innerHTML += `<option value="${index}">${state[index]}</option>`;
}

document.getElementById("enviar1").addEventListener("click", function (event) {
  let formulario = document.querySelectorAll(".formulario");
  for (let index = 0; index < formulario.length; index += 1) {
    if (
      formulario[index].checked != true &&
      formulario[index].value != "Enviar"
    ) {
      let dadosCurriculo = document.createElement("p");
      dadosCurriculo.innerText = formulario[index].value;
      dados.appendChild(dadosCurriculo);
    }
  }
  event.preventDefault();
});


