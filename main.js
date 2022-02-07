// Un alert espone 5 numeri casuali.
// Da li parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire un prompt
// alla volta i numeri che ha visto precedentemente.
// Dopo che sono stati inseriti i 5 numeri, il software
// dice quanti e quali dei numeri da indovinare sono
// stati individuati



// creo le variabili che mi servono per implementare il programma
let listaNumeriCasuali = [];
let listaPrompt = [];
let numeriCasuali;
let numeroPrompt;
let secondi = 30;
let secondiDue = 29;


// implemento un ciclo for per generare 5 numeri casuali

for(let i = 0; i < 5; i++){
    numeriCasuali = genNumeriCasuali(1, 100);
    console.log(numeriCasuali);
    listaNumeriCasuali.push(numeriCasuali);
}

    //inserisco i numeri casuali all'interno dell'html
    document.getElementById('container-numeri').innerHTML = listaNumeriCasuali;

    console.log(listaNumeriCasuali);

    alert('Aspetta 30 secondi, nel frattempo memorizza i numeri');

    //creo un setTimeout più corto di un secondo per cancellare i numeri casuali creati
    setTimeout(function(){
      document.getElementById('container-numeri').innerHTML = '';
    }, secondiDue * 1000);

    //creo un setTimeout per l'attesa durante la memorizzazione dei numeri
    setTimeout(function() {
        for (let j = 0; j < 5; j++) {
          numeroPrompt = parseInt(prompt("inserisci i numeri che ricordi"));
          for (let f = 0; f < listaNumeriCasuali.length; f++) {
            if (numeroPrompt == listaNumeriCasuali[f]) {
              listaPrompt.push(numeroPrompt);
            }
          }
    
        }
        alert("Hai indovinato " + listaPrompt.length + " numeri. Esattamente i numeri: " + listaPrompt);
        console.log(listaPrompt);

      }, secondi * 1000);






// funzione numeri generali
function genNumeriCasuali(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }