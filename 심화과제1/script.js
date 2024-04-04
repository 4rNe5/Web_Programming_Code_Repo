document.addEventListener("DOMContentLoaded", function() {
    const tabButtons = document.querySelectorAll(".tab-button");
    const tabContents = document.querySelectorAll(".tab-content");

    tabButtons.forEach(button => {
        button.addEventListener("click", function() {
            const tabName = this.getAttribute("data-tab");
            openTab(tabName);
        });
    });

    tabContents.forEach(content => {
        content.addEventListener("mouseleave", function() {
            closeAllTabs();
        });
    });
});

function openTab(tabName) {
    const tabButtons = document.querySelectorAll(".tab-button");
    const tabContents = document.querySelectorAll(".tab-content");

    tabContents.forEach(content => {
        content.style.display = "none";
    });

    tabButtons.forEach(button => {
        button.classList.remove("active");
    });

    document.getElementById(tabName).style.display = "block";

    document.querySelector(`[data-tab="${tabName}"]`).classList.add("active");
}

function closeAllTabs() {
    const tabButtons = document.querySelectorAll(".tab-button");
    const tabContents = document.querySelectorAll(".tab-content");

    tabContents.forEach(content => {
        content.style.display = "none";
    });

    tabButtons.forEach(button => {
        button.classList.remove("active");
    });
}
