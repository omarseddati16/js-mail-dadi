// Creare una lista di email 
const emailinvites = ['sergio@gmail.com', 'luca@hotmail.com', 'paolo@yahoo.com', 'giacomo@hotmail.com', 'antonio@gmail.com']
// Chiedere all'utente l'email 
let email = prompt("Inserisci la tua email");
let find = false
// Creazione ciclo 
for (let i = 0; i < emailinvites.length; i++) {
  if (emailinvites[i] === email) {
    find = true;
  }
}
if (find) {
  console.log('Invitato');
} else {
  console.log('Non invitato')
}

// Dadi

const computer = []
const giocatore = []

let punticomputer = 0;
let puntigiocatore = 0;

console.log(Math.floor(Math.random() * 6) + 1)

for (let i = 1; i < 2; i++) {
  const computer = (Math.floor(Math.random() * 6) + 1);
  const giocatore = parseInt(prompt('Metti un numero'))

  numbericomputer.push(computer);
  numberigiocare.push(giocatore);

  if (computer > giocatore) {
    punticomputer++;
  }
  else if (computer < giocatore) {
    puntigiocatore++;
  }
}

if (punticomputer > puntigiocatore) {
  console.log('pc numeri ${computer}. giocatore numeri ${giocatore}. Vince computer')
}
else if (punticomputer < puntigiocatore) {
  console.log('pc numeri ${computer}. giocatore numeri ${giocatore}. Vince giocatore')
}