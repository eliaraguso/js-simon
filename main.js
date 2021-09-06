// Un alert() espone 5 numeri generati casualmente.
// Da li parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

// Definisco un array contenente 5 numeri casuali con range a 0 a 100
let arrayNumeri = [];


/* riempio l'array con in numeri con un ciclo che viene eseguito fintanto che 
il numero degli elementi nell'array non è uguale a 5 */

while(arrayNumeri.length < 5){
    var r = Math.floor(Math.random() * 100) + 1;
    if(arrayNumeri.indexOf(r) === -1) arrayNumeri.push(r);
}

// eseguo un alert che espone il mio array appena creato
alert("I numeri da ricordare sono:" + " " + arrayNumeri);
