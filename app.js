function getInput (input) {
    var result = document.getElementById("result");
    result.value += input;
}

function clearRes() {
    var result = document.getElementById("result");
    result.value = ""
}

function getResult () {
    var result = document.getElementById("result");
    result.value = eval(result.value);
}