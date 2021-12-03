var button = document.getElementById('gen');
var result = document.getElementById('result');
var hist = document.getElementById('history');
var dice = function (formula) {
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
button === null || button === void 0 ? void 0 : button.addEventListener('click', function (ev) {
    if (result && hist) {
        result.innerHTML = "<p>" + dice("1d6+10") + "</p>";
        hist.innerHTML += "<p>" + result.innerText + "</p>";
    }
});
var theBegining = function () {
    return "";
};
