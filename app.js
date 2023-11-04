/**
 * Seleção dos elementos do DOM.
 */
let placarHumano = document.getElementById('humano');
let placarComputador = document.getElementById('computador');
let resultado = document.getElementById('resultado');

/**
 * Insere no array o conteúdo de texto 
 * de cada botão do painel do jogador.
 */
let btns = document.querySelectorAll('button');
let btnsTextArray = [];

btns.forEach(function (btn) {
  btnsTextArray.push(btn.textContent);
});

/**
 * Calculado o resultado do embate 
 * Humano Vs Computador.
 */
function calculaPlacar(humano, computador) {
  if (humano === computador) {
    return 'Empate!';
  }
}

/**
 * Atribui um índice aleatório ao array 
 * como opção para o computador.
 */
function randomizeMyArray(array) {
  let arrayLength = array.length;
  let cpuOption;

  for (let index = 0; index < arrayLength; index++) {
    let randomIndex = Math.floor(Math.random() * arrayLength);
    cpuOption = array[randomIndex];
  }

  return cpuOption;
}

/**
 * Itera sobre os botões do jogador e anexa o 
 * event listener em cada um.
 */
let opcaoHumano;

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {

    switch (btn.id) {
      case 'pedra':
        opcaoHumano = btn.textContent;
        placarHumano.textContent = opcaoHumano;
        placarComputador.textContent = randomizeMyArray(btnsTextArray);
        resultado.textContent = calculaPlacar(placarHumano.textContent, placarComputador.textContent);
        break;

      case 'papel':
        opcaoHumano = btn.textContent;
        placarHumano.textContent = opcaoHumano;
        placarComputador.textContent = randomizeMyArray(btnsTextArray);
        resultado.textContent = calculaPlacar(placarHumano.textContent, placarComputador.textContent);
        break;

      case 'tesoura':
        opcaoHumano = btn.textContent;
        placarHumano.textContent = opcaoHumano;
        placarComputador.textContent = randomizeMyArray(btnsTextArray);
        resultado.textContent = calculaPlacar(placarHumano.textContent, placarComputador.textContent);

        break;

      default:
        break;
    }
  });
});