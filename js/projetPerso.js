"use strict";
let nouvelActivite = "";
let tempsActivite = 0;
let tempsTot = 0;
function ajouterActivite(){
    nouvelActivite = document.ajouterSport.nonActivite.value;
    tempsActivite = Number(document.ajouterSport.tempsActivite.value);
    tempsTot += tempsActivite;
    document.affichageSport.activiteAjoute.value = nouvelActivite;
    document.affichageSport.tempsTotalActivite.value = tempsTot;
    let activite = new Object();
    activite.name = nouvelActivite;
    activite.time = tempsActivite
    document.affichageSport.toutesActivites.value = activite

}
function reset(){
    nouvelActivite = "réinitialisé";
    tempsTot = 0;
    document.affichageSport.activiteAjoute.value = nouvelActivite;
    document.affichageSport.tempsTotalActivite.value = tempsTot;
    document.affichageSport.toutesActivites.value = "réinitialisé"
}
