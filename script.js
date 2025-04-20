function convertir() {
    const p_boite = parseFloat(document.getElementById("p_boite").value);
    const p_perso = parseFloat(document.getElementById("p_perso").value);
    const t_boite = parseFloat(document.getElementById("t_boite").value);

    if (isNaN(p_boite) || isNaN(p_perso) || isNaN(t_boite) || p_perso === 0) {
        document.getElementById("resultat").textContent = "Merci de remplir correctement tous les champs.";
        document.getElementById("resultat").style.display = "block";
        document.getElementById("resultat").style.color = "red";
        document.getElementById("resultat").style.fontSize = "20px";
        document.getElementById("resultat").style.fontWeight = "bold";
        document.getElementById("resultat").style.textAlign = "center";
        document.getElementById("resultat").style.marginTop = "20px";
        document.getElementById("resultat").style.padding = "10px";
        return;
    }

    
    let t_perso = (p_boite * t_boite * 60) / p_perso;
let minutes = Math.floor(t_perso / 60);
let secondes = Math.round(t_perso % 60);
let heures = Math.floor(minutes / 60);
minutes = minutes % 60;


let resultatTemps = '';
if (heures > 0) {
    resultatTemps += `${heures} heure${heures > 1 ? 's' : ''} `;
}
if (minutes > 0) {
    resultatTemps += `${minutes} minute${minutes > 1 ? 's' : ''} `;
}
if (secondes > 0 || (heures === 0 && minutes === 0)) {
    resultatTemps += `${secondes} seconde${secondes > 1 ? 's' : ''}`;
}


document.getElementById("resultat").textContent = `Le temps de cuisson est de ${resultatTemps}.`;
document.getElementById("resultat").style.display = "block";
document.getElementById("resultat").style.color = "green";
document.getElementById("resultat").style.fontSize = "20px";
document.getElementById("resultat").style.fontWeight = "bold";
document.getElementById("resultat").style.textAlign = "center";
document.getElementById("resultat").style.marginTop = "20px";
document.getElementById("resultat").style.padding = "10px";
document.getElementById("resultat").style.border = "2px solid green";
document.getElementById("resultat").style.borderRadius = "5px";
document.getElementById("resultat").style.backgroundColor = "#f0fff0";
document.getElementById("resultat").style.boxShadow = "0 0 10px rgba(0, 128, 0, 0.5)";
document.getElementById("resultat").style.transition = "all 0.3s ease-in-out";
document.getElementById("resultat").style.opacity = "1";
document.getElementById("resultat").style.transform = "scale(1.05)";
document.getElementById("resultat").style.animation = "fadeIn 1s ease-in-out";
document.getElementById("resultat").style.animationFillMode = "forwards";

    
    let compteurPlats = localStorage.getItem("compteurPlats") || 0;  
    compteurPlats = parseInt(compteurPlats) + 1;  
    localStorage.setItem("compteurPlats", compteurPlats);  

    
    document.getElementById("compteur").textContent = `Nombre de plats cuisinés : ${compteurPlats}`;
}


window.onload = function() {
    let compteurPlats = localStorage.getItem("compteurPlats") || 0;
    document.getElementById("compteur").textContent = `Nombre de plats cuisinés : ${compteurPlats}`;
};
