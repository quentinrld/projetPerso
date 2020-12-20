"use strict";
let nouvelActivite = "";
let tempsActivite = 0;
let tempsTot = 0;
let activite = {};

function initialiserPage(){

    var table = "calculateur de votre temps d'activitée physique";
    document.getElementById("sport").innerHTML = table;
    alert("Bienvenu dans cette aplication que permet de calculer le nombre d'heure de sport effectuer");
}
/**
 * cette fonction permet de recupérer les valeurs des formulairs, de  les enregisstrer et de les ecrirer dans de nouveaux formulairs
 * @param{text} nom de l'activité enregistrer
 * @param{number} temps de pratique de cette activité
 * @return{text} nom de la dernière activitée
 * @return{number} le nombre totale d'heure d'activité
 * @return{list} la lliste de toute les activitée
 */
function ajouterActivite(){
    nouvelActivite = document.ajouterSport.nomActivite.value;
    tempsActivite = Number(document.ajouterSport.tempsActivite.value);
    tempsTot += tempsActivite;
    afficherActivite()
}

function afficherActivite(){
    document.affichageSport.activiteAjoute.value = nouvelActivite;
    document.affichageSport.tempsTotalActivite.value = tempsTot;
    activite[nouvelActivite] = new Date().toLocaleString('fr-BE');
    let nouvel = "";
    for(let i in Object.keys(activite)) {
        nouvel += "<option>"+Object.keys(activite)[i]+ " pendant " +tempsActivite+" heure</option>";
    }
    document.getElementById("activite").innerHTML = nouvel;
    triNomActivite();
}
/**
 * cette fonction permet de réinitialiser l'objet des activités
 * @param {array} activite
 * @return {array} activite
 */
function reset(){
    nouvelActivite = "réinitialisé";
    tempsTot = 0;
    document.affichageSport.activiteAjoute.value = nouvelActivite;
    document.affichageSport.tempsTotalActivite.value = tempsTot;
    document.affichageSport.touteActivite.value = "réinitialisé";
    activite = {};
}
let nomActivite = [];
let activiteTri;
let activiteJoin;

function triNomActivite(){
    nomActivite.push(nouvelActivite);
    activiteTri = nomActivite.sort();
    activiteJoin = activiteTri.join(" - ");
    document.getElementById("nomActivite").innerHTML = activiteJoin;
}
