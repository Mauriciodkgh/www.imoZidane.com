function voirCommissions() { 
  document.getElementById("resultat").innerHTML 
  = `
    <h3>Nos Commissions</h3> <ul> 
      <li>Vente : 3%</li> <li>Achat : 
      2.5%</li> <li>Location : 1 mois de 
      loyer</li>
    </ul> `;
}
function voirMaisons() { 
  document.getElementById("resultat").innerHTML 
  = `
    <h3>Maisons Disponibles</h3> <p>📍 
    Gombe - 3 chambres, $120,000</p> 
    <p>📍 Kintambo - 2 chambres, 
    $80,000</p> <p>📍 Limete - Studio, 
    $45,000</p>
  `;
}
function contacter() { 
  window.open("https://wa.me/243896470305", 
  "_blank");
}
function prendreRDV() { 
  document.getElementById("resultat").innerHTML 
  = `
    <h3>Prendre rendez-vous</h3> 
    <p>Envoyez-nous un message sur <a 
    href="https://wa.me/243896470305" 
    target="_blank">WhatsApp</a></p>
  `;
}
