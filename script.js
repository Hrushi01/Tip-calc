var perperson, billtip, person, bill, tip, custom;
var cyan = "hsl(172, 67%, 45%)",
    dark = "hsl(183, 100%, 15%)";
document.querySelector("#bill").addEventListener('input', function() {
    bill = document.querySelector("#bill").valueAsNumber;

})



for (var i = 0; i < 5; i++) {
    document.querySelectorAll(".tip")[i].addEventListener("click", function(e) {
        tip = e.target.id;
        buttonactive(e.target.id);
        if (person > 0) {
            clactip(tip, person);
        }
    });
}

document.querySelector("#custom").addEventListener('input', function() {
    custom = document.querySelector("#custom").valueAsNumber;
    tip = custom;
    if (person > 0) {
        clactip(tip, person);
    }
})
document.querySelector("#custom").addEventListener("click", resetactivebutton);
document.querySelector('#number-of-People').addEventListener('input', function() {
    person = document.querySelector('#number-of-People').valueAsNumber;
    clactip(tip, person);
})

function clactip(tip, person) {

    billtip = ((bill * tip) / 100) + bill;
    perperson = billtip / person;
    console.log('bill is', bill);
    console.log('Tip is', tip);
    console.log('Number of people', person);
    console.log('Total is', billtip);
    console.log('Per person', perperson);
    document.querySelector(".output").innerHTML = "$" + perperson.toFixed(2);
    document.querySelector(".output2").innerHTML = "$" + billtip.toFixed(2);


}

function buttonactive(id) {
    resetactivebutton();
    document.getElementById(id).style.backgroundColor = cyan;
}

function resetactivebutton() {
    var buttons = document.querySelectorAll('button');
    for (var i = 0; i <= (buttons.length) - 1; i++) {
        buttons[i].style.backgroundColor = dark;

    }
}