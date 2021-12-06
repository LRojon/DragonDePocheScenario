let button = document.getElementById('gen')
let result = document.getElementById('result')
let hist = document.getElementById('history')

const dice = (formula: string): number => {

    let nDice: number = parseInt(formula.split(/[dD]/gm)[0])
    let fDice: number = parseInt(formula.split(/[dD]/gm)[1].split('+')[0])
    let ret: number = 0
    if(formula.split('+').length >= 2) {
        ret = parseInt(formula.split('+')[1])
    }

    for(let i = 0; i < nDice; i++) {
        ret += (Math.floor(Math.random() * (fDice + 10)) % fDice) + 1
    }

    return ret
}

button?.addEventListener('click', (ev) => {
    if(result && hist) {
        result.innerHTML = "<p><span style='color: royalblue'>" + 
                                theBegining() + 
                            "</span>&emsp;<span style='color: orange'>" + 
                                theMission() + 
                            "</span>&emsp;<span style='color: lime'>" + 
                                thePlace() + 
                            "</span>&emsp;<span style='color: red'>" + 
                                theEnney() + 
                            "</span></p>"
        hist.innerHTML += "<p>" + result.innerText + "</p>"
    }
})

const theBegining = (): string => {
    switch(parseInt(dice('1d6').toString() + dice('1d6'))){
        case 11: return "Au cœur d’un salon confortable"
        case 12: return "Des enfants ont disparu"
        case 13: return "Des informations dans un vieux grimoire"
        case 14: return "Des nouvelles échangées avec d’autres aventuriers"
        case 15: return "Des ombres dans la forêt"
        case 16: return "Des puits ont été empoisonnés"
        case 21: return "Des runes tracées sur un mur"
        case 22: return "En plein milieu d’une course poursuite"
        case 23: return "En pleine nuit sur un chemin de montagne"
        case 24: return "Les gens ont peur"
        case 25: return "Les gobelins sur le chemin de la guerre"
        case 26: return "Sur la place du marché"
        case 31: return "Sur les bords d’un lac"
        case 32: return "Sur les marches d’un temple perdu"
        case 33: return "Un appel à l’aide"
        case 34: return "Un défi lancé par un roi35Un dragon a été tué"
        case 35: return "Un dragon a été tué"
        case 36: return "Un incendie de forêt"
        case 41: return "Un murmure porté par les génies du vent"
        case 42: return "Un rendez-vous secret avec des gens bizarres"
        case 43: return "Un rêve prémonitoire"
        case 44: return "Un ulfur messager"
        case 45: return "Un village est attaqué par des trolls"
        case 46: return "Une bagarre entre deux bandes rivales"
        case 51: return "Une bouteille à la mer"
        case 52: return "Une colonne de pèlerins passant dans la vallée"
        case 53: return "Une convocation dans un château"
        case 54: return "Une discussion tard le soir"
        case 55: return "Une guerre se prépare entre deux seigneurs"
        case 56: return "Une offre d’emploi61Une prophétie qui arrive à son terme"
        case 61: return "Une prophétie qui arrive à son terme"
        case 62: return "Une rencontre avec des mandragores migratrices"
        case 63: return "Une rumeur dans une taberge"
        case 64: return "Une sombre menace dans les collines"
        case 65: return "Une statue qui parle"
        case 66: return "Une terrible tempête"
        default: return "Error"
    }
}

const theMission = ():string => {
    switch(parseInt(dice('1d6').toString() + dice('1d6'))) {
        case 11: return "Acheter un objet précieux à un maître artisan"
        case 12: return "Aider une ou des personnes"
        case 13: return "Apporter un message"
        case 14: return "Arrêter un criminel"
        case 15: return "Attaquer un lieu"
        case 16: return "Chasser un monstre"
        case 21: return "Convoyer une personne ou un objet précieux"
        case 22: return "Déjouer une conspiration"
        case 23: return "Délivrer un prisonnier"
        case 24: return "Détruire un objet dangereux"
        case 25: return "Éliminer une menace"
        case 26: return "Empêcher un assassinat"
        case 31: return "Empêcher un rituel dangereux"
        case 32: return "Explorer un lieu sauvage"
        case 33: return "Explorer une ruine"
        case 34: return "Faire appliquer une loi"
        case 35: return "Fouiller une bibliothèque à la recherche d’un savoir ancien"
        case 36: return "Gagner un tournoi"
        case 41: return "Livrer une cargaison"
        case 42: return "Mener une enquête"
        case 43: return "Organiser une fête ou une cérémonie"
        case 44: return "Protéger un village"
        case 45: return "Protéger une personne pendant un certain temps"
        case 46: return "Ramener une tête de dragon"
        case 51: return "Recevoir l’enseignement d’un maître"
        case 52: return "Retrouver le gardien d’un secret"
        case 53: return "Retrouver un artefact magique"
        case 54: return "Retrouver un trésor perdu"
        case 55: return "Retrouver une ou des personnes"
        case 56: return "Se renseigner sur une menace"
        case 61: return "Signer un traité de paix"
        case 62: return "Surveiller une rencontre secrète"
        case 63: return "Trouver un cadeau pour une personne importante"
        case 64: return "Trouver un lieu caché ou protégé"
        case 65: return "Trouver une information dissimulée"
        case 66: return "Voler un objet"
        default: return "Error"
    }
}

const thePlace = (): string => {
    switch(parseInt(dice('1d6').toString() + dice('1d6'))) {
        case 11: return "Dans un port fluvial infesté de pirates"
        case 12: return "Des arènes"
        case 13: return "Des manufactures gnomes"
        case 14: return "Des marais pestilentiels"
        case 15: return "La Vallée des Morts qui Courent"
        case 16: return "Le Palais des Mille Plaisirs"
        case 21: return "Le sanctuaire perdu des hommes-dragons"
        case 22: return "Le temple du dieu aveugle dont personne ne connaît le nom"
        case 23: return "Les bayous maudits des gardiens aux yeux d’or"
        case 24: return "Les bois-poison de Succulente"
        case 25: return "Les cavernes de cristal de Lucène"
        case 26: return "Les coteaux des collines brûlées d’Enclume"
        case 31: return "Les forêts anciennes de Cornecroc"
        case 32: return "Les forges élémentaires de la Vagance"
        case 33: return "Les frontières du Negaverse"
        case 34: return "Les halls du roi des gobelins"
        case 35: return "Les pentes cendreuses d’un volcan encore fumant"
        case 36: return "Les piliers des fées du désert des murmures"
        case 41: return "Les profondeurs de Fungu"
        case 42: return "Les quais et les tavernes du port franc de Kanaï"
        case 43: return "Les remparts du Mur sans fin"
        case 44: return "Les rives du lac noir"
        case 45: return "Les rocailles de l’est"
        case 46: return "Les rues de la plus grande cité du monde"
        case 51: return "Les terres gelées du nord"
        case 52: return "Un cimetière de bateaux"
        case 53: return "Un col bloqué par la neige"
        case 54: return "Un grand bazar plein de voleurs"
        case 55: return "Un grand marché gobelin"
        case 56: return "Un marché aux esclaves mandragore"
        case 61: return "Un marché aux parfums"
        case 62: return "Un temple englouti dans une baie isolée"
        case 63: return "Un  village  d’Aquilia  sur  le  dos  de  la  tortue  Salicorne"
        case 64: return "Une cité aérienne"
        case 65: return "Une forteresse"
        case 66: return "Une grande bibliothèque"
        default: return "Error"
    }
}

const theEnney = (): string => {
    switch(parseInt(dice('1d6').toString() + dice('1d6'))) {
        case 11: return "Barbiroux&emsp;&emsp;-&emsp;L’alité"
        case 12: return "Charbonneux&emsp;-&emsp;L’aveugle"
        case 13: return "Cœur de marbre&emsp;-&emsp;L’énorme"
        case 14: return "Couronné&emsp;&emsp;-&emsp;L’épouvanté"
        case 15: return "Crapaudin&emsp;&emsp;-&emsp;L’évanescent"
        case 16: return "Dents-de-bois&emsp;-&emsp;L’immonde"
        case 21: return "Double-queue&emsp;-&emsp;L’impatient"
        case 22: return "Draekan&emsp;&emsp;-&emsp;L’impétrant"
        case 23: return "Dragobelin&emsp;&emsp;-&emsp;L’indicible"
        case 24: return "Dragon-baleine&emsp;-&emsp;Le boiteux"
        case 25: return "Dragonbellule&emsp;-&emsp;Le bouffi"
        case 26: return "Dragon-juge&emsp;-&emsp;Le brutal"
        case 31: return "Dragon-luciole&emsp;-&emsp;Le cruel"
        case 32: return "Dragon-ruche&emsp;-&emsp;Le destructeur"
        case 33: return "Drakaragne&emsp;&emsp;-&emsp;Le dévoreur"
        case 34: return "Drakoférox&emsp;&emsp;-&emsp;Le fou"
        case 35: return "Drakomouth&emsp;&emsp;-&emsp;Le furibond"
        case 36: return "Drasaurus&emsp;&emsp;-&emsp;Le gluant"
        case 41: return "Écailleux&emsp;&emsp;-&emsp;Le gravide"
        case 42: return "Flamiche&emsp;&emsp;-&emsp;Le majestueux"
        case 43: return "Frégatine&emsp;&emsp;-&emsp;Le maléfique"
        case 44: return "Gran’cornu&emsp;&emsp;-&emsp;Le nerveux"
        case 45: return "Lourchefangue&emsp;&emsp;-&emsp;Le noir"
        case 46: return "Malifeux&emsp;-&emsp;Le pénible"
        case 51: return "Mange-monde&emsp;-&emsp;Le puant"
        case 52: return "Maresqueux&emsp;&emsp;-&emsp;Le quêteur"
        case 53: return "Négéglace&emsp;&emsp;-&emsp;Le rouge"
        case 54: return "Noir de suie&emsp;-&emsp;Le rusé"
        case 55: return "Pustuleux&emsp;&emsp;-&emsp;Le sinistre"
        case 56: return "Queue-d’épines&emsp;-&emsp;Le sourd"
        case 61: return "Ricaneur&emsp;&emsp;-&emsp;Le tarabusteur"
        case 62: return "Salamandrake&emsp;-&emsp;Le terrifiant"
        case 63: return "Scaracier&emsp;&emsp;-&emsp;Le torve"
        case 64: return "Tarantantale&emsp;-&emsp;Le tragédien"
        case 65: return "Ténébrax&emsp;&emsp;-&emsp;Le troué"
        case 66: return "Vifombre&emsp;&emsp;-&emsp;Le verbeux"
        default: return "Error"
    }
}