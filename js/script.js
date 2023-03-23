// EMAIL

const userEmail = prompt("inserisci la tua email", "mirko@gmail.com")
const validEmail = [
  "mirkettinho@gmail.com", 
  "mirko@gmail.com", 
  "mirko@libero.it", 
  "mirko@libero.com"
];

const banEmail = ["sonobannato.com", "sonobannato.it"]



console.log(userEmail, validEmail, banEmail )

if (userEmail === ""){
  alert("compila il prompt")
  console.log("il prompt è vuoto")
}else if(validEmail.includes(userEmail)){
  alert("verifica superata, sarai indirizzato alla pagina www.prova.com tra 5secondi.")
  console.log("verifica superata")
} else if (banEmail.includes(userEmail)){
    alert("impossibile accedere, la sua email è nella blacklist")
    console.log("utente bannato")
}else if(!(validEmail.includes(userEmail))){
  alert("utente non registrato")
  console.log("verifica non superata")
}

// DADI