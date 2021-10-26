/* Mail
Chiedi all’utente la sua email, controlla che sia nella lista di chi può accedere (che hai fatto tu precedentemente), stampa un messaggio appropriato sull’esito del controllo.

Qui, come detto, NON possiamo usare metodi nuovi sugli array ma lo facciamo con le cose viste questa mattina. */

const accessOut = document.getElementById("access");
const inputMail = document.getElementById("user-email");
const verifyBtn = document.getElementById("verify");





verifyBtn.addEventListener("click", 

    function(){

        /* creo un'array con 5 email */
        const mailList = ["gino@gmail.com", "mauro@gmail.com", "anna@gmail.com", "carola@gmail.com", "valerio@gmail.com"];

        /* const userMail = prompt("Inserisci la tua email per il controllo"); */
        const userMail = inputMail.value;

        let accessoConsentito = false; 

        const lock = document.querySelector(".locked");
        const unlock = document.querySelector(".unlocked");


        for (i=0; i<mailList.length; i++){
            /* se l'email dell'utente e uguale a una delle mail inserite nell'array */
            if (userMail === mailList[i]){
                accessoConsentito = true;
            }
        }
        if (accessoConsentito === true) {
            accessOut.innerHTML = 'Accesso Consentito';
            accessOut.classList.add("green");
            lock.classList.add("none");
            unlock.classList.remove("none");
        } else {
            accessOut.innerHTML = 'Accesso Negato';
            accessOut.classList.add("red");
            accessOut.classList.remove("green");
            unlock.classList.add("none");
            lock.classList.remove("none");
        }
        console.log(inputMail.value);
    }

)



