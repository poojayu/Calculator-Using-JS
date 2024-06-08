function triger(keyPressed) {
    if (document.getElementById("errorbox").innerHTML != '') {
        document.getElementById("errorbox").style.display = 'none';
    }
    if (keyPressed === 'reset') {
        fullClear();
    } else if (keyPressed <= 0 || keyPressed >= 0) {
        printValue(keyPressed);
    } else if (keyPressed === '-') {
        let PresentData = document.getElementById("data").value;
        if ((PresentData.slice(-1)) != '+' && (PresentData.slice(-1)) != '-' && (PresentData.slice(-1)) != '/' && (PresentData.slice(-1)) != '*' && (PresentData.slice(-1)) != '.') {
            printValue(keyPressed);
        } else {
            errorCall("Invalid input");
        }
    } else if (keyPressed === '/' || keyPressed === '+' || keyPressed === '*' || keyPressed === '.') {
        let PresentData = document.getElementById("data").value;
        if (PresentData != '' && (PresentData.slice(-1)) != '+' && (PresentData.slice(-1)) != '-' && (PresentData.slice(-1)) != '/' && (PresentData.slice(-1)) != '*' && (PresentData.slice(-1)) != '.') {
            printValue(keyPressed);
        } else {
            errorCall("Invalid input");
        }
    } else if (keyPressed === '=') {
        if ((document.getElementById("data").value) === '') {
            document.getElementById("errorbox").innerHTML = "no data to perform any action";
            errorCall("no data to perform any action");
        } else {
            let result = (eval(document.getElementById('data').value)).toFixed(2);;
            fullClear();
            printValue(result);
        }
    } else if (keyPressed === 'del') {
        if ((document.getElementById("data").value) === '') {
            errorCall("no data to clear");
        } else {
            let AfterSlice = (document.getElementById("data").value).slice(0, -1);
            fullClear();
            printValue(AfterSlice);
        }
    } else {
        fullClear();
        printValue('');
    }
}
function printValue(valieddata) {
    document.getElementById("data").value += valieddata;
}
function fullClear() {
    document.getElementById("data").value = '';
}
function errorCall(err) {
    document.getElementById("errorbox").innerHTML = err;
    document.getElementById("errorbox").style.backgroundColor = "red";
    document.getElementById("errorbox").style.display = 'block';
}

function fun() {
    errorCall("Typing is not allowed, please use the buttons")
}

