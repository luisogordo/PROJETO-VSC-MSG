let frases = ['F1','F2','F3',]
let  frasesCopiada = [...frases]

function geradorMensagens() {
    if (frases.length == 0){
        frases = [...frasesCopiada]
}
let indiceGerado = Math.floor(Math.random()*(frases.length));
let fraseGerada = frases[indiceGerado];
document.querySelector("#msg").textContent = fraseGerada;
frases.splice(indiceGerado, 1);
}

geradorMensagens()