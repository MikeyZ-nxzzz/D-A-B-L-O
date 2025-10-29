class UtilityCommands {
    constructor(client, botName) {
        this.client = client;
        this.botName = botName;
        this.commands = {
            'help': this.help.bind(this),
            'ping': this.ping.bind(this),
            'time': this.time.bind(this),
            'date': this.date.bind(this),
            'calc': this.calculator.bind(this),
            'timer': this.timer.bind(this),
            'remind': this.reminder.bind(this),
            'password': this.generatePassword.bind(this),
            'poll': this.createPoll.bind(this),
            'vote': this.vote.bind(this),
            'countdown': this.countdown.bind(this),
            'age': this.calculateAge.bind(this),
            'bmi': this.calculateBMI.bind(this),
            'notes': this.notes.bind(this),
            'weather': this.weather.bind(this),
            'currency': this.currency.bind(this),
            'qrcode': this.generateQR.bind(this),
            'shorten': this.shortenURL.bind(this),
            'define': this.defineWord.bind(this),
            'wiki': this.wikipedia.bind(this),
            'news': this.news.bind(this),
            'covid': this.covidStats.bind(this),
            'stopwatch': this.stopwatch.bind(this),
            'alarm': this.setAlarm.bind(this),
            'info': this.botInfo.bind(this)
        };
    }
    
    async handleCommand(command, params, message) {
        if (this.commands[command]) {
            await this.commands[command](params, message);
            return true;
        }
        return false;
    }
    
    async help(params, message) {
        const helpText = `
🔥 *${this.botName} - 150 COMMANDES*

*🎮 FUN (25):*
!blague, !dice, !coin, !8ball, !love, !hug, !kiss, !roast, !meme, !fact, !quote, !trivia, !riddle, !chuck, !catfact, !dogfact, !ship, !f, !ascii, !fortune, !devine, !quiz, !joke, !roastme, !compliment

*⚡ UTILITAIRE (25):*
!help, !ping, !time, !date, !calc, !timer, !remind, !password, !poll, !vote, !countdown, !age, !bmi, !notes, !weather, !currency, !qrcode, !shorten, !define, !wiki, !news, !covid, !stopwatch, !alarm, !info

*🎯 JEUX (25):*
!rps, !number, !slot, !dicegame, !hangman, !blackjack, !russian, !chess, !quiz, !tictactoe, !wordle, !bingo, !poker, !memory, !sudoku, !crossword, !lotto, !race, !fight, !rpg, !bet, !spin, !mine, !snake, !trivia

*📱 MÉDIA (25):*
!sticker, !crop, !filter, !yt, !spotify, !tt, !ig, !fb, !twitter, !song, !lyrics, !movie, !anime, !manga, !wallpaper, !gif, !meme, !ocr, !qrread, !audio, !video, !compress, !rotate, !blur, !brightness

*👥 GROUPE (25):*
!link, !invite, !rules, !welcome, !goodbye, !desc, !subject, !promote, !demote, !list, !info, !tagall, !admins, !lock, !unlock, !nsfw, !antilink, !antibot, !report, !staff, !cooldown, !level, !rank, !leaderboard, !events

*😈 ADMIN (25):*
!ban, !unban, !kick, !mute, !unmute, !promote, !demote, !add, !settings, !info, !stats, !broadcast, !backup, !restore, !eval, !exec, !restart, !shutdown, !logs, !clean, !warn, !warnings, !reset, !maintenance, !update

*Tape !help [catégorie] pour plus d'infos*
        `;
        await message.reply(helpText);
    }
    
    async ping(params, message) {
        const start = Date.now();
        const reply = await message.reply('🔥 Pinging les enfers...');
        const end = Date.now();
        await reply.edit(`🏓 ${this.botName} Pong! ${end - start}ms`);
    }
    
    async time(params, message) {
        const now = new Date();
        await message.reply(`🕒 ${this.botName} Heure Infernal:\n${now.toLocaleString('fr-FR')}`);
    }
    
    async date(params, message) {
        const now = new Date();
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        await message.reply(`📅 ${this.botName} Date:\n${now.toLocaleDateString('fr-FR', options)}`);
    }
    
    async calculator(params, message) {
        try {
            const expression = params.join(' ');
            if (/[a-zA-Z`]/.test(expression)) {
                await message.reply(`❌ ${this.botName} Expression dangereuse détectée`);
                return;
            }
            const result = eval(expression);
            await message.reply(`🧮 ${this.botName} Calcul:\n${expression} = ${result}`);
        } catch (error) {
            await message.reply(`❌ ${this.botName} Expression mathématique invalide`);
        }
    }
    
    async generatePassword(params, message) {
        const length = parseInt(params[0]) || 12;
        if (length > 50) {
            await message.reply(`❌ ${this.botName} Trop long! Max 50 caractères`);
            return;
        }
        
        const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*";
        let password = "";
        for (let i = 0; i < length; i++) {
            password += charset.charAt(Math.floor(Math.random() * charset.length));
        }
        await message.reply(`🔐 ${this.botName} Mot de passe:\n${password}`);
    }
    
    async createPoll(params, message) {
        const question = params.join(' ');
        if (!question) {
            await message.reply(`📊 ${this.botName} Usage: !poll [question]`);
            return;
        }
        
        const pollMessage = `
📊 ${this.botName} Sondage:
*${question}*

Réagissez avec:
✅ = Oui
❌ = Non  
🤷 = Indécis
🔴 = Autre
        `;
        await message.reply(pollMessage);
    }
    
    async botInfo(params, message) {
        const info = `
🔥 *${this.botName} INFORMATION*

*Créateur:* Gantt
*Version:* 6.7
*Commandes:* 150
*Statut:* Actif 👹
*Admin:* +50936535649
*Spécialité:* Commandes démoniaques

*Description:*
Bot WhatsApp ultra-puissant avec 150 commandes réparties en 6 catégories. Développé avec des pouvoirs infernaux! 😈
        `;
        await message.reply(info);
    }
    
    async calculateAge(params, message) {
        if (params.length < 1) {
            await message.reply(`🎂 ${this.botName} Usage: !age [année de naissance]`);
            return;
        }
        
        const birthYear = parseInt(params[0]);
        const currentYear = new Date().getFullYear();
        const age = currentYear - birthYear;
        
        await message.reply(`🎂 ${this.botName} Âge:\nTu as ${age} ans!`);
    }
    
    async calculateBMI(params, message) {
        if (params.length < 2) {
            await message.reply(`⚖️ ${this.botName} Usage: !bmi [poids kg] [taille cm]\nEx: !bmi 70 175`);
            return;
        }
        
        const weight = parseFloat(params[0]);
        const height = parseFloat(params[1]) / 100; // conversion en mètres
        const bmi = (weight / (height * height)).toFixed(1);
        
        let category = '';
        if (bmi < 18.5) category = 'Maigreur';
        else if (bmi < 25) category = 'Normal';
        else if (bmi < 30) category = 'Surpoids';
        else category = 'Obésité';
        
        await message.reply(`⚖️ ${this.botName} IMC:\n${bmi} - ${category}`);
    }
    
    async countdown(params, message) {
        if (params.length < 1) {
            await message.reply(`⏰ ${this.botName} Usage: !countdown [secondes]`);
            return;
        }
        
        const seconds = parseInt(params[0]);
        if (seconds > 60) {
            await message.reply(`❌ ${this.botName} Max 60 secondes`);
            return;
        }
        
        await message.reply(`⏰ ${this.botName} Décompte: ${seconds}s`);
        
        for (let i = seconds; i > 0; i--) {
            setTimeout(() => {
                message.reply(`⏰ ${i}...`);
            }, (seconds - i) * 1000);
        }
        
        setTimeout(() => {
            message.reply(`🎉 ${this.botName} Temps écoulé!`);
        }, seconds * 1000);
    }
    
    async notes(params, message) {
        const note = params.join(' ');
        if (!note) {
            await message.reply(`📝 ${this.botName} Usage: !notes [votre note]`);
            return;
        }
        
        await message.reply(`📝 ${this.botName} Note enregistrée:\n${note}`);
    }
    
    // Commandes à implémenter avec APIs
    async weather(params, message) {
        const city = params.join(' ') || 'Port-au-Prince';
        await message.reply(`🌤️ ${this.botName} Météo pour ${city}:\n(API à configurer)`);
    }
    
    async currency(params, message) {
        await message.reply(`💱 ${this.botName} Convertisseur:\n(API à configurer)`);
    }
    
    async generateQR(params, message) {
        const text = params.join(' ') || this.botName;
        await message.reply(`📱 ${this.botName} QR Code pour: ${text}\n(Fonction à implémenter)`);
    }
}

module.exports = UtilityCommands;