// Un alert() espone 5 numeri generati casualmente.
// Da li parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

// FUNZIONI


// Definisco un array contenente 5 numeri casuali con range a 0 a 100
let arrayNumeriCasuali = [];


/* riempio l'array con in numeri con un ciclo che viene eseguito fintanto che 
il numero degli elementi nell'array non è uguale a 5 */

while(arrayNumeriCasuali.length < 5){
    var r = Math.floor(Math.random() * 100) + 1;
    if(arrayNumeriCasuali.indexOf(r) === -1) arrayNumeriCasuali.push(r);
}


// eseguo un alert che espone il mio array appena creato

alert("I numeri da ricordare sono:" + " " + arrayNumeriCasuali);


// definisco un array vuoto che andrà riempito con i numeri che inserirà l'utente

let arrayNumeriUtente = [];


// definisco un array vuoto che andrà rimepito solamente con i numeri inseriti dall'utente se questi sono uguali ai numeri generati casualmente dal software

let numeriCorrispondenti = [];


// Dopo 30 secondi l'utente deve inserire, uno alla volta, i 5 numeri che ha visto precedentemente, tramite 5 prompt().

setTimeout(
    function() {
        // ciclo for per inserire 5 volte i 5 numeri di input utente in un array(inputUtente)
       for (let i = 0; i < 5; i++) {
           let inputUtente = parseInt(prompt("Inserisci un numero!!"));
           arrayNumeriUtente.push(inputUtente);
           
        // all interno del ciclo, se l'input utente è presente all interno dell array (numeriCasuali)
           if(arrayNumeriCasuali.includes(arrayNumeriUtente[i])) {

            // riempio l'array dei numeri corrispondenti solamente con i numeri corrispondenti
            numeriCorrispondenti.push(arrayNumeriUtente[i]);
        }
       }
       console.log(arrayNumeriUtente);
       console.log(numeriCorrispondenti);
    
        // il software dice quali e quanti numeri sono stati indovinati

       
    }, 
    1500 //intervallo di tempo in millisecondi
);


// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
