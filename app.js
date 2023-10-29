// Placar
let placarHumano = document.getElementById('humano');
let placarComputador = document.getElementById('computador');

let btns = document.querySelectorAll('button');
let opcaoHumano;

let valoresPlacar = document.querySelectorAll('placar');

let btnsTextArray = [];

btns.forEach(function (btn) {
  btnsTextArray.push(btn.textContent);
});

/**
 * 
 * @param {*} array 
 * @returns 
 */
function randomizeMyArray(array) {
  let randomIndex = Math.floor(Math.random() * 2)
  let shuffledArray = [];

  for (let index = 0; index < array.length; index++) {
    shuffledArray.push(array[randomIndex]);
  }

  return shuffledArray;
}

let shuffledTextArray = [];
shuffledTextArray = randomizeMyArray(btnsTextArray);
console.log(shuffledTextArray);

// Iterate over the selected buttons and attach the event listener
btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {

    switch (btn.id) {
      case 'pedra':
        opcaoHumano = btn.textContent;
        placarHumano.textContent = opcaoHumano;
        break;

      case 'papel':
        opcaoHumano = btn.textContent;
        placarHumano.textContent = opcaoHumano;

        break;

      case 'tesoura':
        opcaoHumano = btn.textContent;
        placarHumano.textContent = opcaoHumano;

        break;

      default:
        break;
    }
  });
});