function getURL() {
    const href = document.getElementsByTagName("a")[0].href;
    document.getElementById("show").innerHTML = href;
}
