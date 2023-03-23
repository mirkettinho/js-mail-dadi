//  DADI

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
