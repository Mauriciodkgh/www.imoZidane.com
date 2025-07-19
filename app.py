from flask import Flask, render_template, 
request, redirect, url_for app = 
Flask(__name__)
# Page d'accueil
@app.route('/') def index(): return 
    render_template('index.html')
# Page À propos
@app.route('/a-propos') def a_propos(): 
    return 
    render_template('a-propos.html')
# Page de connexion admin
@app.route('/login', methods=['GET', 
'POST']) def login():
    if request.method == 'POST': user = 
        request.form.get('username') 
        password = 
        request.form.get('password') if 
        user == 'admin' and password == 
        'zidane123':
            return 
            redirect(url_for('dashboard'))
        else: return 
            render_template('login.html', 
            error='Identifiants 
            incorrects')
    return render_template('login.html')
# Tableau de bord
@app.route('/dashboard') def dashboard(): 
    return 
    render_template('dashboard.html')
# Lancement de l'application
if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
from core.utiles import format_nom, 
generer_id_annonce, est_email_valide, 
format_prix
# Exemple :
nom = format_nom(" jean dupont ") # Jean 
Dupont id_annonce = generer_id_annonce() 
# IMO-20250719164500
email_valide = 
est_email_valide("test@example.com") # 
True
prix = format_prix(2500000)  # 2 500 000 FCFA
