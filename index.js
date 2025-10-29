const { Client, LocalAuth, MessageMedia } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
const fs = require('fs');

// Import des commandes
const FunCommands = require('./commands/fun');
const UtilityCommands = require('./commands/utility');
const GameCommands = require('./commands/games');
const AdminCommands = require('./commands/admin');
const MediaCommands = require('./commands/media');
const GroupCommands = require('./commands/group');

class DiabloBot {
    constructor() {
        this.client = new Client({
            authStrategy: new LocalAuth({
                clientId: "diablo-bot",
                dataPath: './sessions'
            }),
            puppeteer: {
                headless: true,
                args: ['--no-sandbox', '--disable-setuid-sandbox']
            }
        });
        
        this.commands = {};
        this.botName = "D ¡ A B L O";
        this.adminNumber = "50936535649@c.us";
        this.setupHandlers();
    }
    
    // FONCTION POUR LA PHOTO DE PROFIL
    async setBotProfile() {
        try {
            if (fs.existsSync('./profile.png')) {
                const media = MessageMedia.fromFilePath('./profile.png');
                await this.client.setProfilePicture(media);
                console.log('📸 Photo de profil définie!');
            } else {
                console.log('ℹ️  profile.png non trouvé - Ajoute une photo plus tard');
            }
        } catch (error) {
            console.log('⚠️  Erreur photo de profil:', error.message);
        }
    }
    
    setupHandlers() {
        // Initialiser les commandes
        this.commands.fun = new FunCommands(this.client, this.botName);
        this.commands.utility = new UtilityCommands(this.client, this.botName);
        this.commands.games = new GameCommands(this.client, this.botName);
        this.commands.admin = new AdminCommands(this.client, this.botName, this.adminNumber);
        this.commands.media = new MediaCommands(this.client, this.botName);
        this.commands.group = new GroupCommands(this.client, this.botName);
        
        this.setupEvents();
    }
    
    setupEvents() {
        this.client.on('qr', (qr) => {
            console.log(`🔥 ${this.botName} - SCANNEZ LE QR CODE:`);
            qrcode.generate(qr, { small: true });
        });
        
        this.client.on('ready', async () => {
            console.log(`🔥 ${this.botName} BOT CONNECTÉ!`);
            console.log('👹 Prêt à servir les commandes...');
            await this.setBotProfile();
        });
        
        this.client.on('message', async (message) => {
            await this.handleMessage(message);
        });
        
        this.client.on('disconnected', (reason) => {
            console.log(`❌ ${this.botName} déconnecté:`, reason);
        });
        
        this.client.on('auth_failure', (error) => {
            console.log(`❌ ${this.botName} erreur d'authentification:`, error);
        });
    }
    
    async handleMessage(message) {
        const body = message.body.toLowerCase().trim();
        
        // Ignorer les messages sans commande
        if (!body.startsWith('!')) return;
        
        const args = body.slice(1).split(' ');
        const command = args[0];
        const params = args.slice(1);
        
        console.log(`🔥 ${this.botName} - Commande: ${command}`);
        
        try {
            // Essayer chaque catégorie de commandes
            let handled = false;
            for (const category in this.commands) {
                if (this.commands[category].handleCommand) {
                    handled = await this.commands[category].handleCommand(command, params, message);
                    if (handled) break;
                }
            }
            
            if (!handled) {
                await message.reply(`😈 ${this.botName} - Commande inconnue. Tape !help`);
            }
        } catch (error) {
            console.error('💥 Erreur:', error);
            await message.reply(`👹 ${this.botName} - Erreur avec cette commande`);
        }
    }
    
    start() {
        this.client.initialize();
    }
}

// Démarrer le bot
console.log('🔥 DÉMARRAGE DE D ¡ A B L O BOT...');
console.log('👹 Initialisation des pouvoirs démoniaques...');
console.log('📱 Préparez-vous à scanner le QR Code...');

const bot = new DiabloBot();
bot.start();

// Gestion propre de l'arrêt
process.on('SIGINT', async () => {
    console.log(`\n🛑 ${bot.botName} - Arrêt en cours...`);
    await bot.client.destroy();
    console.log('✅ Bot arrêté proprement');
    process.exit(0);
});

process.on('uncaughtException', (error) => {
    console.log('💥 Erreur non gérée:', error);
});

process.on('unhandledRejection', (reason, promise) => {
    console.log('💥 Promise rejetée:', reason);
});