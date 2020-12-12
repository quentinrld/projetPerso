"use strict";
let nouvelActivite = "";
let tempsActivite = 0;
let tempsTot = 0;
let activite = [];
function ajouterActivite(){
    nouvelActivite = document.ajouterSport.nonActivite.value;
    tempsActivite = Number(document.ajouterSport.tempsActivite.value);
    tempsTot += tempsActivite;
    document.affichageSport.activiteAjoute.value = nouvelActivite;
    document.affichageSport.tempsTotalActivite.value = tempsTot;
    activite.push({nouvelActivite : tempsActivite});
    var nouvel = "<option>nouvelActivite"+" pendant "+"tempsActivite</option>"
    document.getElementById("activite").innerHTML = nouvel;
}
function reset(){
    nouvelActivite = "réinitialisé";
    tempsTot = 0;
    document.affichageSport.activiteAjoute.value = nouvelActivite;
    document.affichageSport.tempsTotalActivite.value = tempsTot;
    document.affichageSport.toutesActivites.value = "réinitialisé"
}

