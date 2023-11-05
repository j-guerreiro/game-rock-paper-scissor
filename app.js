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
 * Calcula o resultado do embate 
 * Humano Vs Computador.
 */
function calculaPlacar(humano, computador) {
  if (humano === computador) {
    return 'Empate!';
  }

  if (humano.includes('Tesoura')) {
    humano = humano.substring(0,7).trim();
  } 
  
  // Filtra textContent para remover o emoji
  if (computador.includes('Tesoura')) {
    computador = computador.substring(0,7).trim();
  }
 
  if (computador.includes('Papel') || computador.includes('Pedra')) {
    computador = computador.substring(0,5).trim();
  }

  if (humano.includes('Papel') || humano.includes('Pedra')) {
    humano = humano.substring(0,5).trim();
  }

  // Checagem de placar
  if (humano.includes('Pedra') && computador.includes('Tesoura')) {
    return 'Jogador venceu!';
  }

  if (computador.includes('Pedra') && humano.includes('Papel')) {
    return 'Jogador venceu!';
  }

  if (computador.includes('Pedra') && humano.includes('Tesoura')) {
    return 'Computador venceu!';
  }

  if (humano.includes('Papel') && computador.includes('Tesoura')) {
    return 'Computador venceu!';
  }

  if (computador.includes('Tesoura') && humano.includes('Papel')) {
    return 'Computador venceu!';
  }
  
  if (humano.includes('Pedra') && computador.includes('Papel')) {
    return 'Computador venceu!';
  }

  if (humano.includes('Tesoura') && computador.includes('Papel')) {
    return 'Jogador venceu!';
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