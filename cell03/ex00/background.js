document.getElementById("btn").onclick = function () {
    let color = "#" + Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, "0");

    document.body.style.backgroundColor = color;
};