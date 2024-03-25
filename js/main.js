function delay(milliseconds) {
    return new Promise(resolve => {
        setTimeout(resolve, milliseconds);
    });

}

function startHide(element) {
    element.className = "buttonHide";

}

function startShow(element) {
    element.className = "buttonShow";

}

async function startCheckIn() {
    var button = document.getElementById("check-in");

    startHide(button);

    await delay(500);
    startShow(button);

}

async function pushReason() {
    var input = document.getElementById("reason");
    var label = document.getElementById("reasonLabel");
    var hint = document.getElementById("reasonLabelHint");

    input.className = "checkinShow";
    label.className = "checkinShow";
    hint.className = "checkinShow";

}

async function popReason() {
    var input = document.getElementById("reason");
    var label = document.getElementById("reasonLabel");
    var hint = document.getElementById("reasonLabelHint");

    if(input.className == "checkinHidden" && label.className == "checkinHidden" && hint.className == "checkinHidden")
        return;

    input.className = "checkinHide";
    label.className = "checkinHide";
    hint.className = "checkinHide";

}