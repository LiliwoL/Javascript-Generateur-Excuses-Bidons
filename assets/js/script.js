function genererExcuse() {
    let themeSelect = document.getElementById("themeSelect");
    let selectedTheme = themeSelect.value;

    // Choix aléatoire d'une excuse dans la thématique sélectionnée
    let excuseArray = excuses[selectedTheme];
    let randomExcuse = excuseArray[Math.floor(Math.random() * excuseArray.length)];

    // Affichage de l'excuse générée
    let excuseDisplay = document.getElementById("excuseDisplay");
    excuseDisplay.innerHTML = "<p>" + randomExcuse + "</p>";

    // Animation CSS
    excuseDisplay.classList.remove("hidden");
    excuseDisplay.classList.add("fade-in");
}



// Evenemnt sur le click sur le bouton genererExcuse
document.getElementById('btnGenerateExcuse').addEventListener('click',
    genererExcuse);