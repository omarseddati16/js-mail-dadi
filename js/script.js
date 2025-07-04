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

for (let i = 0; i < 1; i++) {
  const computer = (Math.floor(Math.random() * 6) + 1);
  const giocatore = (Math.floor(Math.random() * 6) + 1);
  if (computer > giocatore) {
    console.log('Vince computer');
    punticomputer++;
  }
  else if (computer < giocatore) {
    console.log('Vince giocatore')
    puntigiocatore++;
  }
  else {
    console.log('Pareggio')
  }
}

