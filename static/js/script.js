// script.js 1. Animation de défilement 
// fluide pour les liens internes
document.querySelectorAll('a[href^="#"]').forEach(link 
=> {
  link.addEventListener("click", function 
  (e) {
    e.preventDefault(); const target = 
    document.querySelector(this.getAttribute("href")); 
    if (target) {
      target.scrollIntoView({ behavior: 
        "smooth"
      });
    }
  });
});
// 2. Bouton retour en haut de page
const topBtn = 
document.createElement("button"); 
topBtn.textContent = "⬆"; 
topBtn.style.position = "fixed"; 
topBtn.style.bottom = "20px"; 
topBtn.style.right = "20px"; 
topBtn.style.padding = "10px"; 
topBtn.style.borderRadius = "50%"; 
topBtn.style.border = "none"; 
topBtn.style.background = "#0284c7"; 
topBtn.style.color = "white"; 
topBtn.style.fontSize = "20px"; 
topBtn.style.display = "none"; 
topBtn.style.cursor = "pointer"; 
document.body.appendChild(topBtn); 
topBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: 
  "smooth" });
});
window.addEventListener("scroll", () => { 
  if (window.scrollY > 300) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
});
// 3. Message d’accueil personnalisé
window.addEventListener("DOMContentLoaded", 
() => {
  console.log("Bienvenue sur Immobilière 
  Zidane !");
});
// 4. Notification toast (optionnelle)
function showToast(message) { const toast 
  = document.createElement("div"); 
  toast.textContent = message; 
  toast.style.position = "fixed"; 
  toast.style.bottom = "40px"; 
  toast.style.left = "50%"; 
  toast.style.transform = 
  "translateX(-50%)"; 
  toast.style.background = "#0f172a"; 
  toast.style.color = "white"; 
  toast.style.padding = "1rem 2rem"; 
  toast.style.borderRadius = "8px"; 
  toast.style.boxShadow = "0 4px 20px 
  rgba(0,0,0,0.2)"; 
  document.body.appendChild(toast); 
  setTimeout(() => toast.remove(), 4000);
}
// Appelle ça où tu veux :
// showToast("Nouvelle maison disponible à Kinshasa !");
