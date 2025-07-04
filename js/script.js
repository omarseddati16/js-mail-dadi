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
