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

const pc = [1,2,3,4,5,6];
const human = [1,2,3,4,5,6]


let risultato = document.querySelector(".risultato")
console.log(risultato)

let redCorner = document.querySelector(".red")

let blueCorner = document.querySelector(".blue")


let randomNumberPc = Math.floor(Math.random()*pc.length + 1);
blueCorner.innerHTML = randomNumberPc



let randomNumberHuman = Math.floor(Math.random()*human.length + 1 );
redCorner.innerHTML = randomNumberHuman


console.log("pc " + randomNumberPc)
console.log("player " + randomNumberHuman)

if (randomNumberPc === randomNumberHuman){
  console.log("pareggio")
  risultato.innerHTML = `NULLA`
}

if (randomNumberPc > randomNumberHuman){
  console.log("il vincitore è il pc")
  risultato.innerHTML = `PC`
}

if (randomNumberPc < randomNumberHuman){
  console.log("il vincitore è l'umano")
  risultato.innerHTML = `UMANO`
}


