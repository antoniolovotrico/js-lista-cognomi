//Chiedere all'utente il cognome
var btn = document.getElementById("btn");
var mioCognome = document.getElementById("mio_cognome");
var listaCognomi = [
    'Bianchi',
    'Rossi',
    'Duzioni',
    'Balsano',
    'Verdi'
];

btn.addEventListener("click" , function() {
    var userCognome = mioCognome.value;
    listaCognomi.push(userCognome);
    console.log(userCognome);
    console.log(listaCognomi);


})