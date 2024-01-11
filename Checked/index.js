// .checked = Propriedade que determina o estado de um botão rádio e/ou de uma checkbox

const meuCheckbox = document.getElementById("meuCheckbox");
const visaBtn = document.getElementById("visaBtn");
const masterBtn = document.getElementById("masterBtn");
const paypalbtn = document.getElementById("paypalbtn");
const confirmarBtn = document.getElementById("confirmarBtn");
const resultadoInscrito = document.getElementById("resultadoInscrito");
const resultadoCartão = document.getElementById("resultadoCartão");


confirmarBtn.onclick = function(){
    if(meuCheckbox.checked){
        resultadoInscrito.textContent = `Você é inscrito!`;
    }else{
        resultadoInscrito.textContent = `Você não é inscrito!`;
    }

    if(visaBtn.checked){
        resultadoCartão.textContent = `Você escolheu Visa!`;
    }else if(masterBtn.checked){
        resultadoCartão.textContent = `Você escolheu Mastercard!`;
    }else if(paypalbtn.checked){
        resultadoCartão.textContent = `Você escolheu PayPal!`;
    }else{
        resultadoCartão.textContent = `Por favor, selecione uma forma de pagamento`;
    }
};