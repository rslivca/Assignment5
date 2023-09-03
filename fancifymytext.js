document.addEventListener("DOMContentLoaded", function() {
    textbox = document.getElementById("userText");
    var b = document.getElementById("Bigger");
    b.onclick = Enlarge;
    var fancy = document.getElementById("FancyShmancy");
    fancy.onclick = fancify;
    var boring = document.getElementById("BoringBetty");
    boring.onclick = reset;
    var bold = document.getElementById("bold");
    bold.onclick = boldify;
    var moo = document.getElementById("Moo");
    moo.onclick = moof;
})

var textbox;

function Enlarge() {
    textbox.style.fontSize = "24px";
}

function fancify() {
    textbox.style.fontFamily = "Comic Sans MS, sans-serif";

    var red = Math.floor(Math.random() * 256);
    var green = Math.floor(Math.random() * 256);
    var blue = Math.floor(Math.random() * 256);
    textbox.style.color = "rgb(" + red + ", " + green + ", " + blue + ")";
}

function reset() {
    textbox.style = "";
}

function boldify() {
    textbox.style.fontWeight = "900";
    textbox.style.textDecoration = "underline";
    textbox.style.color = "blue";
}

function moof() {
    var text = textbox.value;
    uppercase = text.toUpperCase();
    var parts = uppercase.split(".");
    uppercase = parts.join("-Moo.");
    textbox.value = uppercase;
}