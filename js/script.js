class Scenar {
    constructor(begining, mission, place, ennemy) {
        this.begining = begining
        this.mission = mission
        this.place = place
        this.ennemy = ennemy
    }

    toHTML() {
        return "<tr><td style='color: royalblue'>" +
                    this.begining +
                    "</td><td style='color: orange'>" +
                    this.mission +
                    "</td><td style='color: lime'>" +
                    this.place +
                    "</td><td style='color: red'>" +
                    this.ennemy +
                    "</td></tr>"
    }
}

let button = document.getElementById('gen');
let result = document.getElementById('result');
let ennemies = document.getElementById('ennemies');

let currentScenar = null
let allScenar = []
const MEMORY = 10

const dice = function (formula) {
    var nDice = parseInt(formula.split(/[dD]/gm)[0]);
    var fDice = parseInt(formula.split(/[dD]/gm)[1].split('+')[0]);
    var ret = 0;
    if (formula.split('+').length >= 2) {
        ret = parseInt(formula.split('+')[1]);
    }
    for (var i = 0; i < nDice; i++) {
        ret += (Math.floor(Math.random() * (fDice + 10)) % fDice) + 1;
    }
    return ret;
};

/*button.addEventListener('click', function (ev) {
    if (result && hist && ennemies) {
        let ennemy = ennemies.value;
        let line = "<tr><td style='color: royalblue'>" +
                    theBegining() +
                    "</td><td style='color: orange'>" +
                    theMission() +
                    "</td><td style='color: lime'>" +
                    thePlace() +
                    "</td><td style='color: red'>" +
                    theEnnemy(ennemy) +
                    "</td></tr>"
        result.innerHTML =  "<tr>" +
                            "    <th>Le commencement</th>" +
                            "    <th>La mission</th>" +
                            "    <th>Le lieu</th>" +
                            "    <th>L'ennemi</th>" +
                            "</tr>";
        result.innerHTML += line
        hist.innerHTML += line;
    }
});*/

const scenarsToHTML = (current, all = []) => {
    let html = '<tr><th>Le commencement</th><th>La mission</th><th>Le lieu</th><th>L\'ennemi</th></tr>'
    html += current.toHTML()
    //html += '<tr class="separator"><td></td><td></td><td></td><td></td></tr>'
    let isFirst = true
    for(scenar of all) {
        if(isFirst) { isFirst = false }
        else { html += scenar.toHTML() }
    }

    result.innerHTML = html
}

button.addEventListener('click', function (ev) {
    if (result && ennemies) {
        currentScenar = new Scenar(theBegining(), theMission(), thePlace(), theEnnemy(ennemies.value))
        allScenar.unshift(currentScenar)
        if(allScenar.length > MEMORY) { allScenar.pop() }
        scenarsToHTML(currentScenar, allScenar)
    }
});

const theBegining = function () {
    switch (parseInt(dice('1d6').toString() + dice('1d6'))) {
        case 11: return "Au cœur d’un salon confortable";
        case 12: return "Des enfants ont disparu";
        case 13: return "Des informations dans un vieux grimoire";
        case 14: return "Des nouvelles échangées avec d’autres aventuriers";
        case 15: return "Des ombres dans la forêt";
        case 16: return "Des puits ont été empoisonnés";
        case 21: return "Des runes tracées sur un mur";
        case 22: return "En plein milieu d’une course poursuite";
        case 23: return "En pleine nuit sur un chemin de montagne";
        case 24: return "Les gens ont peur";
        case 25: return "Les gobelins sur le chemin de la guerre";
        case 26: return "Sur la place du marché";
        case 31: return "Sur les bords d’un lac";
        case 32: return "Sur les marches d’un temple perdu";
        case 33: return "Un appel à l’aide";
        case 34: return "Un défi lancé par un roi";
        case 35: return "Un dragon a été tué";
        case 36: return "Un incendie de forêt";
        case 41: return "Un murmure porté par les génies du vent";
        case 42: return "Un rendez - vous secret avec des gens bizarres";
        case 43: return "Un rêve prémonitoire";
        case 44: return "Un ulfur messager";
        case 45: return "Un village est attaqué par des trolls";
        case 46: return "Une bagarre entre deux bandes rivales";
        case 51: return "Une bouteille à la mer";
        case 52: return "Une colonne de pèlerins passant dans la vallée";
        case 53: return "Une convocation dans un château";
        case 54: return "Une discussion tard le soir";
        case 55: return "Une guerre se prépare entre deux seigneurs";
        case 56: return "Une offre d’emploi61Une prophétie qui arrive à son terme";
        case 61: return "Une prophétie qui arrive à son terme";
        case 62: return "Une rencontre avec des mandragores migratrices";
        case 63: return "Une rumeur dans une taberge";
        case 64: return "Une sombre menace dans les collines";
        case 65: return "Une statue qui parle";
        case 66: return "Une terrible tempête";
        default: return "Error";
    }
};

const theMission = function () {
    switch (parseInt(dice('1d6').toString() + dice('1d6'))) {
        case 11: return "Acheter un objet précieux à un maître artisan";
        case 12: return "Aider une ou des personnes";
        case 13: return "Apporter un message";
        case 14: return "Arrêter un criminel";
        case 15: return "Attaquer un lieu";
        case 16: return "Chasser un monstre";
        case 21: return "Convoyer une personne ou un objet précieux";
        case 22: return "Déjouer une conspiration";
        case 23: return "Délivrer un prisonnier";
        case 24: return "Détruire un objet dangereux";
        case 25: return "Éliminer une menace";
        case 26: return "Empêcher un assassinat";
        case 31: return "Empêcher un rituel dangereux";
        case 32: return "Explorer un lieu sauvage";
        case 33: return "Explorer une ruine";
        case 34: return "Faire appliquer une loi";
        case 35: return "Fouiller une bibliothèque à la recherche d’un savoir ancien";
        case 36: return "Gagner un tournoi";
        case 41: return "Livrer une cargaison";
        case 42: return "Mener une enquête";
        case 43: return "Organiser une fête ou une cérémonie";
        case 44: return "Protéger un village";
        case 45: return "Protéger une personne pendant un certain temps";
        case 46: return "Ramener une tête de dragon";
        case 51: return "Recevoir l’enseignement d’un maître";
        case 52: return "Retrouver le gardien d’un secret";
        case 53: return "Retrouver un artefact magique";
        case 54: return "Retrouver un trésor perdu";
        case 55: return "Retrouver une ou des personnes";
        case 56: return "Se renseigner sur une menace";
        case 61: return "Signer un traité de paix";
        case 62: return "Surveiller une rencontre secrète";
        case 63: return "Trouver un cadeau pour une personne importante";
        case 64: return "Trouver un lieu caché ou protégé";
        case 65: return "Trouver une information dissimulée";
        case 66: return "Voler un objet";
        default: return "Error";
    }
};

const thePlace = function () {
    switch (parseInt(dice('1d6').toString() + dice('1d6'))) {
        case 11: return "Dans un port fluvial infesté de pirates";
        case 12: return "Des arènes";
        case 13: return "Des manufactures gnomes";
        case 14: return "Des marais pestilentiels";
        case 15: return "La Vallée des Morts qui Courent";
        case 16: return "Le Palais des Mille Plaisirs";
        case 21: return "Le sanctuaire perdu des hommes - dragons";
        case 22: return "Le temple du dieu aveugle dont personne ne connaît le nom";
        case 23: return "Les bayous maudits des gardiens aux yeux d’or";
        case 24: return "Les bois - poison de Succulente";
        case 25: return "Les cavernes de cristal de Lucène";
        case 26: return "Les coteaux des collines brûlées d’Enclume";
        case 31: return "Les forêts anciennes de Cornecroc";
        case 32: return "Les forges élémentaires de la Vagance";
        case 33: return "Les frontières du Negaverse";
        case 34: return "Les halls du roi des gobelins";
        case 35: return "Les pentes cendreuses d’un volcan encore fumant";
        case 36: return "Les piliers des fées du désert des murmures";
        case 41: return "Les profondeurs de Fungu";
        case 42: return "Les quais et les tavernes du port franc de Kanaï";
        case 43: return "Les remparts du Mur sans fin";
        case 44: return "Les rives du lac noir";
        case 45: return "Les rocailles de l’est";
        case 46: return "Les rues de la plus grande cité du monde";
        case 51: return "Les terres gelées du nord";
        case 52: return "Un cimetière de bateaux";
        case 53: return "Un col bloqué par la neige";
        case 54: return "Un grand bazar plein de voleurs";
        case 55: return "Un grand marché gobelin";
        case 56: return "Un marché aux esclaves mandragore";
        case 61: return "Un marché aux parfums";
        case 62: return "Un temple englouti dans une baie isolée";
        case 63: return "Un  village  d’Aquilia  sur  le  dos  de  la  tortue  Salicorne";
        case 64: return "Une cité aérienne";
        case 65: return "Une forteresse";
        case 66: return "Une grande bibliothèque";
        default: return "Error";
    }
};

const theEnnemy = function (ennemy) {
    switch (ennemy) {
        case 'random':
            switch (parseInt(dice('1d6').toString() + dice('1d6'))) {
                case 11: return "<table class='ennemy'><tr><td>Barbiroux</td><td>L’alité</td></tr></table>";
                case 12: return "<table class='ennemy'><tr><td>Charbonneux</td><td>L’aveugle</td></tr></table>";
                case 13: return "<table class='ennemy'><tr><td>Cœur de marbre</td><td>L’énorme</td></tr></table>";
                case 14: return "<table class='ennemy'><tr><td>Couronné</td><td>L’épouvanté</td></tr></table>";
                case 15: return "<table class='ennemy'><tr><td>Crapaudin</td><td>L’évanescent</td></tr></table>";
                case 16: return "<table class='ennemy'><tr><td>Dents - de - bois</td><td>L’immonde</td></tr></table>";
                case 21: return "<table class='ennemy'><tr><td>Double - queue</td><td>L’impatient</td></tr></table>";
                case 22: return "<table class='ennemy'><tr><td>Draekan</td><td>L’impétrant</td></tr></table>";
                case 23: return "<table class='ennemy'><tr><td>Dragobelin</td><td>L’indicible</td></tr></table>";
                case 24: return "<table class='ennemy'><tr><td>Dragon - baleine</td><td>Le boiteux</td></tr></table>";
                case 25: return "<table class='ennemy'><tr><td>Dragonbellule</td><td>Le bouffi</td></tr></table>";
                case 26: return "<table class='ennemy'><tr><td>Dragon - juge</td><td>Le brutal</td></tr></table>";
                case 31: return "<table class='ennemy'><tr><td>Dragon - luciole</td><td>Le cruel</td></tr></table>";
                case 32: return "<table class='ennemy'><tr><td>Dragon - ruche</td><td>Le destructeur</td></tr></table>";
                case 33: return "<table class='ennemy'><tr><td>Drakaragne</td><td>Le dévoreur</td></tr></table>";
                case 34: return "<table class='ennemy'><tr><td>Drakoférox</td><td>Le fou</td></tr></table>";
                case 35: return "<table class='ennemy'><tr><td>Drakomouth</td><td>Le furibond</td></tr></table>";
                case 36: return "<table class='ennemy'><tr><td>Drasaurus</td><td>Le gluant</td></tr></table>";
                case 41: return "<table class='ennemy'><tr><td>Écailleux</td><td>Le gravide</td></tr></table>";
                case 42: return "<table class='ennemy'><tr><td>Flamiche</td><td>Le majestueux</td></tr></table>";
                case 43: return "<table class='ennemy'><tr><td>Frégatine</td><td>Le maléfique</td></tr></table>";
                case 44: return "<table class='ennemy'><tr><td>Gran’cornu</td><td>Le nerveux</td></tr></table>";
                case 45: return "<table class='ennemy'><tr><td>Lourchefangue</td><td>Le noir</td></tr></table>";
                case 46: return "<table class='ennemy'><tr><td>Malifeux</td><td>Le pénible</td></tr></table>";
                case 51: return "<table class='ennemy'><tr><td>Mange - monde</td><td>Le puant</td></tr></table>";
                case 52: return "<table class='ennemy'><tr><td>Maresqueux</td><td>Le quêteur</td></tr></table>";
                case 53: return "<table class='ennemy'><tr><td>Négéglace</td><td>Le rouge</td></tr></table>";
                case 54: return "<table class='ennemy'><tr><td>Noir de suie</td><td>Le rusé</td></tr></table>";
                case 55: return "<table class='ennemy'><tr><td>Pustuleux</td><td>Le sinistre</td></tr></table>";
                case 56: return "<table class='ennemy'><tr><td>Queue - d’épines</td><td>Le sourd</td></tr></table>";
                case 61: return "<table class='ennemy'><tr><td>Ricaneur</td><td>Le tarabusteur</td></tr></table>";
                case 62: return "<table class='ennemy'><tr><td>Salamandrake</td><td>Le terrifiant</td></tr></table>";
                case 63: return "<table class='ennemy'><tr><td>Scaracier</td><td>Le torve</td></tr></table>";
                case 64: return "<table class='ennemy'><tr><td>Tarantantale</td><td>Le tragédien</td></tr></table>";
                case 65: return "<table class='ennemy'><tr><td>Ténébrax</td><td>Le troué</td></tr></table>";
                case 66: return "<table class='ennemy'><tr><td>Vifombre</td><td>Le verbeux</td></tr></table>";
                default: return "Error";
            }
        case "assassin":
            switch (dice('1d6')) {
                case 1: return 'l\'assassin Brûle - feu';
                case 2: return 'l\'assassin Le Diacre';
                case 3: return 'l\'assassin Le Fossoyeur';
                case 4: return 'l\'assassin Le Maître d\'hôtel';
                case 5: return 'l\'assassin Le Sonneur de cloches';
                case 6: return 'Masque';
                default: return 'Error';
            }
        case 'warchief':
            switch (dice('1d6')) {
                case 1: return 'le chef de guerre Capitaine Ardent';
                case 2: return 'le chef de guerre Fer de Lance';
                case 3: return 'le chef de guerre Général Main - Rouge';
                case 4: return 'la cheffe de guerre La Folle';
                case 5: return 'le chef de guerre Queue de Baliste';
                case 6: return 'le chef de guerre Trois doigts';
                default: return 'Error';
            }
        case 'sorcerer':
            switch (dice('1d6')) {
                case 1: return 'le sorcelier Feu Follet';
                case 2: return 'le sorcelier Le Munificent';
                case 3: return 'le sorcelier Le Ratier';
                case 4: return 'le sorcelier Le Sculpteur';
                case 5: return 'le sorcelier Longs Sourcils';
                case 6: return 'le sorcelier Sérénissime';
                default: return 'Error';
            }
        case 'lich':
            switch (dice('1d6')) {
                case 1: return 'la liche Assya la reine d’ébène';
                case 2: return 'la liche Cataserept Sable - rouge';
                case 3: return 'la liche Clockenwork le mécanique';
                case 4: return 'la liche Finkelbel le dragon d’os';
                case 5: return 'la liche Trokkenfirr Sang - de - Glace';
                case 6: return 'la liche Vernac Alascubile';
                default: return 'Error';
            }
        default: return 'Error';
    }
};

currentScenar = new Scenar(theBegining(), theMission(), thePlace(), theEnnemy('random'))
allScenar.push(currentScenar)
scenarsToHTML(currentScenar, allScenar)