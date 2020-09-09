function description() {
  document.getElementsByTagName("p")[0].innerText =
    "Daqui a dois anos estarei trabalhando com o que eu sempre sonhei.";
  return;
}

description();

function changeColorYellow() {
  document.getElementsByClassName("main-content")[0].style.background =
    "rgb(76,164,109)";
  return;
}

changeColorYellow();

function changeColorRed() {
  document.getElementsByClassName("center-content")[0].style.background =
    "white";
  return;
}

changeColorRed();

function correcting() {
  document.getElementsByClassName("title")[0].innerText =
    "Exercício 5.1 - Javascript ";
}

correcting();

function uppercase() {
  let textSelect = document.getElementsByTagName("p")
  for (let i = 0; i < textSelect.length; i += 1) {
    let textUpper = textSelect[i].style.textTransform = "uppercase"
    textUpper;
  }
  return;
}

uppercase();

function dispConsole() {
  let disp = document.getElementsByTagName("p")
  for (let i = 0; i < disp.length; i += 1) {
    textDisplay = disp[i].innerHTML
    console.log(textDisplay)
  }
  return;
}

dispConsole();