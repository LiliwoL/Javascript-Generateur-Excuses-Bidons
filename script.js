

function genererExcuse() {
    var themeSelect = document.getElementById("themeSelect");
    var selectedTheme = themeSelect.value;

    // Choix aléatoire d'une excuse dans la thématique sélectionnée
    var excuseArray = excuses[selectedTheme];
    var randomExcuse = excuseArray[Math.floor(Math.random() * excuseArray.length)];

    // Affichage de l'excuse générée avec animation
    var excuseDisplay = document.getElementById("excuseDisplay");
    excuseDisplay.innerHTML = "<p>" + randomExcuse + "</p>";
    excuseDisplay.classList.remove("hidden");
    excuseDisplay.classList.add("fade-in");
}

document.getElementById('btnGenerer').addEventListener('click', genererExcuse);