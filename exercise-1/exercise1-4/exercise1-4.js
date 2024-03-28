function getInputValue() {
    const x = document.forms["form1"];
    let text = "";
    for (let i = 0; i < x.length; i++) {
        text += x.elements[i].value + "<br>";
    }
    document.getElementById("show").innerHTML = text;
}
