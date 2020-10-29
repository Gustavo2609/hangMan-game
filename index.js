let words = ["apple", "ball", "bag", "water", "oven", "stove", "fridge", "wall", "book"];
let randomWord = words[Math.round(Math.random()*(words.length-1))];
let sizeWord = randomWord.length;
let createDiv = document.createElement('div');
let player = document.getElementById('letter');
let acertos, erros  = 0 ;
let playing = true;
let acertou = false;
let obj, letra;
let pesq;
let letraTmp;
let matching;
let inputs; 
let wrongLetters = document.getElementById("wrongletters");
console.log(randomWord);
createDiv.setAttribute("class", "inputs");
document.body.appendChild(createDiv);
function randomInputs_start_resest(){
    for (let i = 0; i < sizeWord; i++) {
        inputs = document.createElement('input');
        inputs.setAttribute('id', 'letter' + i);
        inputs.style.border = "none";
        inputs.style.borderBottom = "1px solid black";
        inputs.style.marginLeft = "5px";
        createDiv.appendChild(inputs);
    }
}
document.addEventListener('keyup', function (){
    player.focus();
        if(playing){
        letra = player.value;
        player.value = "";
        acertou = false;
        matching = randomWord.match(letra);//inicialização
            while(matching != null){//condição
                acertou = true;
                acertos++;
                let position = randomWord.search(letra);
                document.getElementById("letter"+position).value = letra;
                randomWord = randomWord.replace(letra, '0');
                matching = randomWord.match(letra);//condição de parada do while
               }        
        }
        if(!acertou){
            wrongLetters.innerText += "  "+ letra + ", ";
            erros++;
        }
        if(acertos == randomWord.length){
            document.write("<p>O jogador ganhou<p>");
            erros++;
        }else {
            if(erros > randomWord.length){
                document.write("o jogador perdeu");
            }
        }
    });
function removeElementsInputs() {
    for (let i = 0; i < sizeWord; i++) {
        document.getElementById('letter' + i).remove();
    }
}
function resest(){ 
    player.focus();
    acertos = 0;
    erros = 0;
    removeElementsInputs();
    randomWord = words[Math.round(Math.random()*(words.length - 1))];
    sizeWord = randomWord.length;  
    randomInputs_start_resest(); 
    wrongLetters.innerText = "wrong digital letters: ";
}

window.addEventListener('load', randomInputs_start_resest);


