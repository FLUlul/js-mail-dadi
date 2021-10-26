/* Mail
Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere (che hai fatto tu precedentemente), stampa un messaggio appropriato sull’esito del controllo.

Qui, come detto, NON possiamo usare metodi nuovi sugli array ma lo facciamo con le cose viste questa mattina. */

const accessOut = document.getElementById("access");


/* creo un'array con 5 email */
const mailList = ["gino@gmail.com", "mauro@gmail.com", "anna@gmail.com", "carola@gmail.com", "valerio@gmail.com"];

/* chiedo all'utente la sua mail */
const userMail = prompt("Inserisci la tua email per il controllo");


/* creo un ciclo di controllo */
for (i=0; i<mailList.length; i++){

    let matchMail = userMail === mailList[i];
    /* se l'email dell'utente e uguale a una delle mail inserite nell'array */
    if(matchMail){

    /* stampo : accesso approvato */
    /* console.log(mailList[i]); */
    console.log("Accesso Approvato" ,mailList[i]);
    /* accessOut.innerHTML = ("Accesso Approvato"); */

    } else {
    /* altrimenti */

        /* stampo : accesso negato */
        console.log("Accesso Negato");
        /* accessOut.innerHTML = ("Accesso Negato"); */
    }

}
