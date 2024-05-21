let secondiUtente = Number.parseInt(prompt('scrivi i secondi devi attendere?'),10);

if(secondiUtente > 10 || Number.isNaN(secondiUtente)){
    secondiUtente = 5;
}

const timer = setInterval(function(){
    secondiUtente --;
    console.log(secondiUtente);
    if(secondiUtente <= 0){
        clearInterval(timer);
        alert('TEMPO SCADUTO');
    }
},1000);