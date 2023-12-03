let quesitons_et_reponses = [
    {
        q: "Vous n'avez qu'une boîte d'allumettes avec un cure-dent et vous entrez dans un château sombre. Il n'y a pas d'électricité, mais vous avez une bougie, une lampe à gaz et une lampe à kérosène. Qu'allumez-vous en premier ?",
        vR: "une bougie",
    },

    {
        q: "Combien d'animaux de chaque espèce Moïse a-t-il mis dans son arche : 1, 2 ou 3 ? Répondez juste par un nombre.",
        vR: "0",
    },
    {
        q: "Combien de mois ont 28 jours sur une période de 6 ans ? Mettez le nombre suivi de < mois >.",
        vR: "72 mois",
    },
    {
        q: "Vous vous êtes levé à 8 heures pour aller travailler ; vous vous êtes endormi à 7 h. Combien d'heures avez-vous dormi ? Ecris en lettre",
        vR: "une heure",
    },
    {
        q: "Vous conduisez un bus avec 43 passagers à bord qui est parti de Paris. Il s'est arrêté à Lyon pour prendre 7 personnes et laisser 5 passagers, puis à Marseille pour laisser 8 passagers et en prendre 4 autres, pour enfin arriver à Colliure 20 heures plus tard. Quel est le nom du conducteur ?",
        vR: "votre nom",
    },
    {
        q: "Le 14 juillet on célèbre la fête nationale de la république française. Au Canada, il y a aussi le 14 juillet ?",
        vR: "oui",
    },
    {
        q: "Combien de numéros neuf y a-t-il de 0 à 100 ? Répondez juste par un nombre." ,
        vR: "20",
    },
    {
        q: "Une mère a 40 ans et son fils en a 10. Combien d'années doivent s'écouler pour que l'âge de la mère soit trois fois plus élevé que celui du fils ? Mettez le nombre suivi de < ans >.",
        vR: "5 ans",
    },
    {
        q: "Combien de quarts sont six moitiés ? Répondez juste par un nombre.",
        vR: "12",
    },
    {
        q: "Combien de fois peut-on soustraire le chiffre 1 au chiffre 1 111 ? Mettez le nombre suivi de < fois >.",
        vR: "1 fois",
    },
    {
        q: "Un enfant consomme 500 grammes de pain par jour. Quelle sera la consommation quotidienne en kilogrammes d'une salle à manger de 126 enfants ? Mettze le nombre suivi de < grammes >.",
        vR: "63 grammes",
    },
    {

    }

]
let afficher_scrore_etat = document.querySelector(".afficher_scrore")
let afficher_nmbr_reponse = document.querySelector(".nmbr_reponse")
let afficher_nmbr_qstn = document.querySelector(".nmbr_qstn span")
const afficher_qstn = document.querySelector(".afficher_qstn p")
const input_reponse = document.querySelector(".input_reponse input")
const btn_repondre = document.querySelector(".btn_repondre .btn_reponse")
const btn_recommencer = document.querySelector(".btn_repondre .btn_recommencer")
let messages = document.querySelector(".reponse form label")


let nombre = 0
const jouer = true 
window.onload = function () {
    btn_recommencer.style = "display: none;"
    
    affichageQstns()
    btn_repondre.addEventListener("click", btnReponse)
}

const affichageQstns =  ()=> {

    if (jouer == true) {

        if (nombre !== quesitons_et_reponses[nombre]) {
            
            afficher_qstn.innerHTML = quesitons_et_reponses[nombre].q

            nombre = nombre
            
        }
        
    }
}

const btnReponse =  (event)=> {
    event.preventDefault()
    
    
    if (input_reponse.value == "") {
    

        input_reponse.placeholder = "Veillez écrire votre réponse..."
        
    }else if (input_reponse.value !== "") {

        if (input_reponse.value.toUpperCase() === quesitons_et_reponses[nombre].vR.toUpperCase()) {

            afficher_qstn.innerHTML = quesitons_et_reponses[nombre+1].q
            afficher_nmbr_reponse.innerHTML++
            afficher_nmbr_qstn.innerHTML++
    
            nombre = nombre+1

            if (parseInt(afficher_nmbr_qstn.innerHTML) == 12) {

                afficher_nmbr_qstn.innerHTML = 11
                afficher_qstn.innerHTML = quesitons_et_reponses[10].q
    
                btn_recommencer.style = "display: unset;"
                btn_repondre.style = "display: none;"

                input_reponse.style = "visibility: hidden;"



                if (parseInt(afficher_nmbr_reponse.innerHTML) == 11) {
                    afficher_scrore_etat.style = "background-color: rgba(0, 255, 38, 0.082); border: 0.1px solid rgba(0, 255, 42, 0.488);"
                    messages.innerHTML = "Vous avez réussi à toutes les questions et voilà que vous etes un geni, Bravo!!!"
                    messages.style = "color: rgb(100, 221, 100);"

                }
            }
            
        }else if (input_reponse.value !== quesitons_et_reponses[nombre].vR) {
            afficher_qstn.innerHTML = quesitons_et_reponses[nombre+1].q
            afficher_nmbr_qstn.innerHTML++
            nombre = nombre+1

            if (parseInt(afficher_nmbr_qstn.innerHTML) == 12) {

                afficher_nmbr_qstn.innerHTML = 11
                afficher_qstn.innerHTML = quesitons_et_reponses[10].q
    
                btn_recommencer.style = "display: unset;"
                btn_repondre.style = "display: none;" 

                input_reponse.style = "visibility: hidden;"


                if (parseInt(afficher_nmbr_reponse.innerHTML) == 5) {

                    messages.innerHTML = "Vous avez eu la moyenne, Bravo!!!"
                    messages.style = "color: rgb(100, 221, 100);"
                    afficher_scrore_etat.style = "background-color: rgba(0, 255, 38, 0.082); border: 0.1px solid rgba(0, 255, 42, 0.488);"

                }else if (parseInt(afficher_nmbr_reponse.innerHTML) >= 6) {

                    messages.innerHTML = "Vous avez eu plus que la moyenne, Bravo!!!"
                    messages.style = "color: rgb(100, 221, 100);"
                    afficher_scrore_etat.style = "background-color: rgba(0, 255, 38, 0.082); border: 0.1px solid rgba(0, 255, 42, 0.488);"

                }else if (parseInt(afficher_nmbr_reponse.innerHTML) <= 4) {

                    messages.innerHTML = "Vous êtes en dessous de la moyenne"
                    messages.style = "color: rgb(171, 11, 11);"
                    afficher_scrore_etat.style = "background-color: rgba(255, 0, 0, 0.082); border: 0.1px solid rgba(255, 0, 0, 0.693);"

                }

            }
        }

    }

    
    input_reponse.value = ""
}

