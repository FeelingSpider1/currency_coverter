const in_amount = document.getElementById("sus");
const dd_from = document.getElementById("cs2");
const dd_to = document.getElementById("cs3");
const div_result = document.getElementById("y");

const exchangeRates = {
dollars: {
    dollars: 1,
    pounds: 0.78,
    DC: 6.59,
    BC: 0.000015,
    EC: 0.00028
},
pounds: {
    dollars: 1.27,
    pounds: 1,
    DC: 8.39,
    BC: 0.000019,
    EC: 0.00036
},
DC: {
    dollars: 0.15,
    pounds: 0.12,
    DC: 1,
    BC: 0.0000023,
    EC: 0.000043
},
BC: {
    dollars: 67069.10,
    pounds: 52615.04,
    DC: 441203.41,
    BC: 1,
    EC: 18.99
},
EC: {
    dollars: 3530.95,
    pounds: 2774.25,
    DC: 23320.50,
    BC: 0.053,
    EC: 1
},
}
function convertCurrency() {
    let in_amount_value = document.getElementById("sus").value;
    let dd_from_value = document.getElementById("cs2").value;
    let dd_to_value = document.getElementById("cs3").value;
    let ConC = in_amount_value*exchangeRates[dd_from_value][dd_to_value]
    document.getElementById('skibidi_toilet').value = ConC
}