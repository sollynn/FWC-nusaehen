let btn = document.getElementById("btn");

btn.onclick = function () {
    let a = Number(document.getElementById("left").value);
    let b = Number(document.getElementById("right").value);
    let op = document.getElementById("operator").value;
    let result;

    if (!Number.isInteger(a) || !Number.isInteger(b) || a < 0 || b < 0) {
        alert("Error :(");
        return;
    }

    if ((op == "/" || op == "%") && b == 0) {
        alert("It's over 9000!");
        console.log("It's over 9000!");
        return;
    }

    if (op == "+")
        result = a + b;
    else if (op == "-")
        result = a - b;
    else if (op == "*")
        result = a * b;
    else if (op == "/")
        result = a / b;
    else if (op == "%")
        result = a % b;

    alert(result);
    console.log(result);
};

setInterval(function () {
    alert("Please, use me...");
}, 30000);