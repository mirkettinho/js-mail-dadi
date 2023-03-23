// EMAIL
const userEmail = document.getElementById("email-form")
const validEmail = [
  "mirkettinho@gmail.com", 
  "mirko@gmail.com", 
  "mirko@libero.it", 
  "mirko@libero.com"
];

const banEmail = ["sonobannato.com", "sonobannato.it"]
let esito = document.getElementById("esito")

console.log(userEmail, validEmail, banEmail )

const accedi = document.querySelector(".accedi")

accedi.addEventListener("click", function(){

  console.log(accedi)

if (userEmail.value === ""){
  esito.innerHTML = `compila il form`
  esito.classList.add("orange")
  console.log("il prompt è vuoto")

}else if(validEmail.includes(userEmail.value)){
  esito.innerHTML = `verifica superata.`
  esito.classList.add("green")
  let link = document.getElementById("link")
  document.getElementById("link").classList.remove("hide");
  console.log("verifica superata")

} else if (banEmail.includes(userEmail.value)){
  esito.innerHTML = `impossibile accedere, la sua email è nella blacklist`
  esito.classList.add("red")
    console.log("utente bannato")

}else if(!(validEmail.includes(userEmail.value))){
  esito.innerHTML = `utente non registrato`
  console.log("verifica non superata")
}
} )



