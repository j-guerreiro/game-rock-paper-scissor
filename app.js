/**
 * Seleção dos elementos do DOM.
 */
let placarHumano = document.getElementById('humano');
let placarComputador = document.getElementById('computador');
let resultado = document.getElementById('resultado');
let tituloResultado = document.getElementById('titulo-resultado');
let btns = document.querySelectorAll('button');

/**
 * Insere no array o conteúdo de texto 
 * de cada botão do painel do jogador.
 */
function pushButtonText(btns) {
  let btnsTextArray = [];
  
  btns.forEach(function (btn) {
    btnsTextArray.push(btn.textContent);
  });

  return btnsTextArray;
}

/**
 * Calcula o resultado do embate 
 * Humano Vs Computador.
 */
function calculaPlacar(humano, computador) {
  if (humano === computador) {
    return 'Empate!';
  }

  // Chamada de função que remove emoji.
  removerEmoji(humano, computador);

  // Checagem de vencedor.
  const resultadoChecagem = checaVencedor(humano, computador);
  return resultadoChecagem;
}

/**
 * Remove o emoji da string para mostrar
 * o resultado corretamente.
 */
function removerEmoji(humano, computador) {
  if (humano.includes('Tesoura')) {
    humano = humano.substring(0, 7).trim();
    return humano;
  }

  // Filtra textContent para remover o emoji
  if (computador.includes('Tesoura')) {
    computador = computador.substring(0, 7).trim();
    return computador;
  }

  if (computador.includes('Papel') || computador.includes('Pedra')) {
    computador = computador.substring(0, 5).trim();
    return computador;
  }

  if (humano.includes('Papel') || humano.includes('Pedra')) {
    humano = humano.substring(0, 5).trim();
    return humano;
  }
}

/**
 * Função que determina o vencedor
 * pela checagem da string.
 */
function checaVencedor(humano, computador) {
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
    resultado.classList.add('.animacao-placar');

    switch (btn.id) {
      case 'pedra':
        opcaoHumano = btn.textContent;
        placarHumano.textContent = opcaoHumano;
        placarComputador.textContent = randomizeMyArray(pushButtonText(btns));
        resultado.textContent = calculaPlacar(placarHumano.textContent, placarComputador.textContent);
        break;

      case 'papel':
        opcaoHumano = btn.textContent;
        placarHumano.textContent = opcaoHumano;
        placarComputador.textContent = randomizeMyArray(pushButtonText(btns));
        resultado.textContent = calculaPlacar(placarHumano.textContent, placarComputador.textContent);
        break;

      case 'tesoura':
        opcaoHumano = btn.textContent;
        placarHumano.textContent = opcaoHumano;
        placarComputador.textContent = randomizeMyArray(pushButtonText(btns));
        resultado.textContent = calculaPlacar(placarHumano.textContent, placarComputador.textContent);
        break;

      default:
        break;
    }
  });
});


/**
 * Animacao do placar.
 */
document.addEventListener("click", function (e) {
  tituloResultado.classList.add('animacao-placar');

  // Remove a classe após 1.5s
  setTimeout(() => {
    tituloResultado.classList.remove('animacao-placar');
  }, 1500);
});
