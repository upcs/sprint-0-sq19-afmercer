var button = document.getElementById("calculate");
var x1Text = document.getElementById("x1");
var x2Text = document.getElementById("x2");
button.onclick = function() {
    var x1 = parseFloat(x1Text.value);
    var x2 = parseFloat(x2Text.value);
    var sum = add2(x1, x2);
    document.getElementById("sum").innerHTML = "" + sum;
}