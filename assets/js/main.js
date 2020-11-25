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

//Inserirlo in un array con altri cognom
btn.addEventListener("click" , function() {
    var userCognome = mioCognome.value;
    listaCognomi.push(userCognome);
    listaCognomi.sort()
    mioCognome.style.textTransform = "capitalize";
    //console.log(userCognome);
    //console.log(listaCognomi);
    for (var i=0; i<listaCognomi.length; i++) {
        var cognomi = listaCognomi[i];

        var elenco = document.getElementById("lista_cognomi").innerHTML;
        document.getElementById("lista_cognomi").innerHTML = elenco + "<li>" + cognomi + "</li>";
        // var position = userCognome.index();
        // document.getElementById("position").innerHTML = position;
        // var index = userCognome.index();
        // document.getElementById("position").innerHTML = index;
        var pos = (listaCognomi.indexOf(userCognome));
        document.getElementById("position").innerHTML = "Il tuo cognome si trova in" +" "+ (pos+1)+" "+ "posizione";
    }


})
