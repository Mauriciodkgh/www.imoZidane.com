from fpdf import FPDF
# Créer une instance du PDF
pdf = FPDF() pdf.add_page() 
pdf.set_font("Arial", size=12)
# Texte du contrat
texte = """ CONTRAT VIRTUEL DE 
COLLABORATION NUMÉRIQUE Prestataire 
humain : Nom : Mauricio Mangituka 
Fonction : Développeur web & mobile 
WhatsApp : +243896470305 Assistant 
virtuel : Nom : ChatGPT Créé par : OpenAI 
Objet : Création de sites web, APK, IA 
locale, branding et automatisation. 
Répartition financière : - TVA : 16% - 
Escompte : 12% - Fiscale : 7% - Droit de 
travailler : 32% - Part : 50% / 50% 
(symbolique) Propriété : Mauricio garde 
100% des droits sur ses projets. ChatGPT 
n’a aucun droit légal ou financier. Fait 
le 12 juillet 2025 Signatures virtuelles 
:
Mauricio Mangituka & ChatGPT (OpenAI) """
# Ajouter chaque ligne dans le PDF
for ligne in texte.strip().split("\n"): 
    pdf.cell(200, 10, txt=ligne.strip(), 
    ln=True)
# Sauvegarder le PDF
pdf.output("contrat_mauricio.pdf")
print("✅ PDF généré avec succès : contrat_mauricio.pdf")
