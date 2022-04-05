/*
a- Chiedere nome all'utente
b- Chiedere cognome all'utente
c- Chiedre all'utente il suo colore preferito
d- stampare in pagina: nomecognomecolorepreferito22

Flusso di lavoro:
1. inizializzare le variabili
2. far inserire i dati
3. Stampare tutto a video
*/

const firstName = prompt('inserisci il tuo nome');

const lastName = prompt('il tuo cognome');

const favouriteColor = prompt("qual'è il tuo colore preferito?");

const outputList =
`
<ul>
  <li>${firstName}</li>
  <li>${lasttName}</li>
  <li>${favouriteColor}</li>
</ul>
`;

const pwGenerator = firstName + lastName + favouriteColor;

console.log(pwGenerator);

document.getElementById('output-list').innerHTML = outputList;

document.getElementById('output-pword').innerHTML = pwGenerator;

