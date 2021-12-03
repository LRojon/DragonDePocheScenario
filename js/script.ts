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
        result.innerHTML = "<p>test</p>"
        hist.innerHTML += "<p>" + result.innerText + "</p>"
    }
})

const theBegining = (): string => {
    switch(dice('11d6')){
        case 11:
            return "Au cœur d’un salon confortable"
        case 12:
            return "Des enfants ont disparu"
        case 13:
            return "Des informations dans un vieux grimoire"
        case 14:
            return "Des nouvelles échangées avec d’autres aventuriers"
        case 15:
            return "Des ombres dans la forêt"
        case 16:
            return "Des puits ont été empoisonnés"
        case 17:
        case 18:
        case 19:
        case 20:
        case 21:
            return "Des runes tracées sur un mur"
        case 22:
            return "En plein milieu d’une course poursuite"
        case 23:
            return "En pleine nuit sur un chemin de montagne"
        case 24:
            return "Les gens ont peur"
        case 25:
            return "Les gobelins sur le chemin de la guerre"
        case 26:
            return "Sur la place du marché"
        case 27:
        case 28:
        case 29:
        case 30:
        case 31:
            return "Sur les bords d’un lac"
        case 32:
            return "Sur les marches d’un temple perdu"
        case 33:
            return "Un appel à l’aide"
        case 34:
            return "Un défi lancé par un roi35Un dragon a été tué"
        case 35:
        case 36:
            return "Un incendie de forêt"
        case 37:
        case 38:
        case 39:
        case 40:
        case 41:
            return "Un murmure porté par les génies du vent"
        case 42:
            return "Un rendez-vous secret avec des gens bizarres"
        case 43:
            return "Un rêve prémonitoire"
        case 44:
            return "Un ulfur messager"
        case 45:
            return "Un village est attaqué par des trolls"
        case 46:
            return "Une bagarre entre deux bandes rivales"
        case 47:
        case 48:
        case 49:
        case 50:
        case 51:
            return "Une bouteille à la mer"
        case 52:
            return "Une colonne de pèlerins passant dans la vallée"
        case 53:
            return "Une convocation dans un château"
        case 54:
            return "Une discussion tard le soir"
        case 55:
            return "Une guerre se prépare entre deux seigneurs"
        case 56:
            return "Une offre d’emploi61Une prophétie qui arrive à son terme"
        case 57:
        case 58:
        case 59:
        case 60:
        case 61:
        case 62:
            return "Une rencontre avec des mandragores migratrices"
        case 63:
            return "Une rumeur dans une taberge"
        case 64:
            return "Une sombre menace dans les collines"
        case 65:
            return "Une statue qui parle"
        case 66:
            return "Une terrible tempête"
        default:
            return "Error"
    }
}