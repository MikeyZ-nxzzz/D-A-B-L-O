```markdown
# 🔥 D ¡ A B L O - Bot WhatsApp

![D ¡ A B L O Bot](https://img.shields.io/badge/WhatsApp-Bot-green) 
![Version](https://img.shields.io/badge/Version-2.0.0-blue)
![Commands](https://img.shields.io/badge/Commands-150-orange)

Bot WhatsApp ultra-puissant avec **150 commandes** réparties en 6 catégories. Développé avec des pouvoirs démoniaques! 👹

## ✨ Fonctionnalités

- 🎮 **25 commandes Fun** (blagues, jeux, divertissement)
- ⚡ **25 commandes Utilitaires** (calcul, météo, outils)
- 🎯 **25 commandes Jeux** (casino, quiz, divertissement)
- 📱 **25 commandes Média** (stickers, téléchargement)
- 👥 **25 commandes Groupe** (modération, gestion)
- 😈 **25 commandes Admin** (contrôle total)

## 🚀 Installation

```bash
# Cloner le repository
git clone https://github.com/ton-username/diablo-bot.git
cd diablo-bot

# Installer les dépendances
npm install

# Lancer le bot
npm start
```

📸 Configuration

1. Scannez le QR Code avec WhatsApp
2. Le bot se connecte automatiquement
3. Utilisez !help pour voir toutes les commandes

👑 Commandes Admin

· Numéro admin : +50936535649
· Commandes réservées : !ban, !kick, !stats, etc.

📋 Commandes Populaires

🎮 Fun

```bash
!blague      # Blague aléatoire
!dice        # Lancer un dé
!8ball       # Boule magique
!love        # Calculateur d'amour
!roast       # Insulte humoristique
```

⚡ Utilitaires

```bash
!help        # Aide complète
!ping        # Test de connexion
!time        # Heure actuelle
!calc        # Calculatrice
!password    # Générateur de mot de passe
```

🎯 Jeux

```bash
!rps         # Pierre-Feuille-Ciseaux
!slot        # Machine à sous
!number      # Deviner le nombre
!hangman     # Jeu du pendu
!russian     # Roulette russe
```

🛠️ Développement

Structure du projet

```
diablo-bot/
├── index.js          # Fichier principal
├── package.json      # Dépendances
├── commands/         # Modules de commandes
│   ├── fun.js       # Commandes fun
│   ├── utility.js   # Commandes utilitaires
│   ├── games.js     # Commandes jeux
│   ├── admin.js     # Commandes admin
│   ├── media.js     # Commandes média
│   └── group.js     # Commandes groupe
└── sessions/        # Sessions WhatsApp (auto)
```

Ajouter une commande

```javascript
// Dans le fichier de commandes correspondant
this.commands['macommande'] = this.maCommande.bind(this);

async maCommande(params, message) {
    await message.reply('Ma nouvelle commande!');
}
```

⚠️ Important

· 🔞 Usage responsable uniquement
· 📵 Respectez les conditions d'utilisation de WhatsApp
· 🚫 Pas de spam ou usage malveillant
· 🔒 Gardez votre numéro admin sécurisé

📞 Support

Pour toute question ou problème :

· Admin : +50936535649
· GitHub : Ouvrir une issue

📄 License

MIT License - Voir le fichier LICENSE pour plus de détails.

---

Développé avec ❤️ et un peu de magie noire 🔮

```

## 📄 **3. index.html** (si Spck Editor insiste)
```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>🔥 D ¡ A B L O - Bot WhatsApp</title>
    <style>
        body {
            font-family: 'Arial', sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            margin: 0;
            padding: 0;
            min-height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .container {
            background: white;
            padding: 40px;
            border-radius: 15px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.3);
            text-align: center;
            max-width: 600px;
        }
        h1 {
            color: #ff4757;
            font-size: 2.5em;
            margin-bottom: 10px;
        }
        .subtitle {
            color: #747d8c;
            font-size: 1.2em;
            margin-bottom: 30px;
        }
        .features {
            text-align: left;
            margin: 20px 0;
        }
        .feature {
            margin: 10px 0;
            padding: 10px;
            background: #f1f2f6;
            border-radius: 5px;
        }
        .warning {
            background: #fff9e6;
            border-left: 4px solid #ffa502;
            padding: 15px;
            margin: 20px 0;
            text-align: left;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>🔥 D ¡ A B L O</h1>
        <div class="subtitle">Bot WhatsApp avec 150 Commandes</div>
        
        <div class="warning">
            <strong>⚠️ Attention :</strong> Ceci est un projet Node.js, pas un site web.
            Cette page est uniquement informative.
        </div>
        
        <div class="features">
            <div class="feature">🎮 <strong>25 commandes Fun</strong> - Divertissement garanti</div>
            <div class="feature">⚡ <strong>25 commandes Utilitaires</strong> - Outils pratiques</div>
            <div class="feature">🎯 <strong>25 commandes Jeux</strong> - Amusement sans fin</div>
            <div class="feature">📱 <strong>25 commandes Média</strong> - Gestion multimédia</div>
            <div class="feature">👥 <strong>25 commandes Groupe</strong> - Modération avancée</div>
            <div class="feature">😈 <strong>25 commandes Admin</strong> - Contrôle total</div>
        </div>
        
        <p><strong>📁 Voir le fichier <a href="README.md">README.md</a> pour les instructions d'installation et d'utilisation.</strong></p>
        
        <p style="color: #747d8c; font-size: 0.9em; margin-top: 30px;">
            Développé avec ❤️ et un peu de magie noire 🔮
        </p>
    </div>
</body>
</html>
```
