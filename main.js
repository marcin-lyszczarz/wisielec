const pass = "Bez pracy nie ma kołaczy".toUpperCase();

let blankPass = "";

function changePassToBlank(pass) {
  for (let i = 0; i < pass.length; i++) {
    if (pass.charAt(i) == " ") {
      blankPass += " ";
    } else blankPass += "-";
  }
}

function printPass() {
    changePassToBlank(pass);
    document.querySelector(".password").innerHTML = blankPass;

}

function showAlphabet() {
    const letterOfAlphabet = ['A', 'Ą', 'B', 'C', 'Ć', 'D', 'E', 'Ę', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'Ł', 'M', 'N', 'Ń', 'O', 'Ó', 'P', 'R', 'S', 'Ś', 'T', 'U', 'W', 'Y', 'Z', 'Ź', 'Ż'];
    let alphabetHtmlClas = document.querySelector('.play-ground__items--alphabet');

    for(let i = 0; i < letterOfAlphabet.length; i++){
        let divLetter = document.createElement('div');
        divLetter.className = 'letter';
        divLetter.textContent = letterOfAlphabet[i];
        alphabetHtmlClas.appendChild(divLetter);
    }
}

function checkLetter(){
    let valueLetter;
    let letters = [...document.querySelectorAll('.letter')];
    letters.forEach(leter => valueLetter = (leter.length-1).textContent);
    console.log(valueLetter);
    console.log(letters);
}

function start(){
    printPass();
    showAlphabet();
}

addEventListener('click', checkLetter);

window.onload = start;
