class FunCommands {
    constructor(client, botName) {
        this.client = client;
        this.botName = botName;
        this.commands = {
            'blague': this.joke.bind(this),
            'dice': this.dice.bind(this),
            'coin': this.coinFlip.bind(this),
            '8ball': this.eightBall.bind(this),
            'love': this.loveCalculator.bind(this),
            'hug': this.hug.bind(this),
            'kiss': this.kiss.bind(this),
            'meme': this.meme.bind(this),
            'fact': this.randomFact.bind(this),
            'quote': this.quote.bind(this),
            'roast': this.roast.bind(this),
            'compliment': this.compliment.bind(this),
            'trivia': this.trivia.bind(this),
            'riddle': this.riddle.bind(this),
            'chuck': this.chuckNorris.bind(this),
            'catfact': this.catFact.bind(this),
            'dogfact': this.dogFact.bind(this),
            'ship': this.ship.bind(this),
            'f': this.payRespects.bind(this),
            'ascii': this.asciiArt.bind(this),
            'fortune': this.fortune.bind(this),
            'devine': this.guess.bind(this),
            'quiz': this.quiz.bind(this),
            'joke': this.englishJoke.bind(this),
            'roastme': this.roastMe.bind(this)
        };
    }
    
    async handleCommand(command, params, message) {
        if (this.commands[command]) {
            await this.commands[command](params, message);
            return true;
        }
        return false;
    }
    
    async joke(params, message) {
        const jokes = [
            "👹 Pourquoi les démons n'utilisent-ils pas Internet ? Parce qu'ils ont déjà l'enfer en réseau !",
            "😈 Que dit un diable à l'autre ? On se voit en enfer !",
            "🔥 Pourquoi D ¡ A B L O est-il bon en maths ? Parce qu'il connaît tous les angles !",
            "💀 Comment les squelettes appellent-ils leurs amis ? Au télé-os !",
            "👻 Pourquoi les fantômes sont-ils de mauvais menteurs ? Parce qu'on voit toujours through !"
        ];
        const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
        await message.reply(`😂 ${this.botName} Blague:\n${randomJoke}`);
    }
    
    async dice(params, message) {
        const roll = Math.floor(Math.random() * 6) + 1;
        await message.reply(`🎲 ${this.botName} Dé satanique: ${roll}`);
    }
    
    async coinFlip(params, message) {
        const result = Math.random() > 0.5 ? 'Tête de démon' : 'Queue de diable';
        await message.reply(`🪙 ${this.botName} Pièce infernale: ${result}`);
    }
    
    async eightBall(params, message) {
        const responses = [
            "👹 Oui, les démons l'ont décidé",
            "🔥 Certainement, par Satan lui-même", 
            "😈 Mes sources infernales confirment",
            "💀 Les esprits disent oui",
            "👻 Demande aux forces obscures plus tard",
            "⚡ Mieux vaut ne pas savoir maintenant",
            "🔮 L'avenir est trop sombre pour voir",
            "🎲 Concentre ton énergie et redemande",
            "❌ Les enfers refusent",
            "🚫 L'oracle dit non",
            "💔 Absolument pas",
            "🌑 Les présages sont mauvais"
        ];
        const response = responses[Math.floor(Math.random() * responses.length)];
        await message.reply(`🎱 ${this.botName} Boule Magique Infernal:\n${response}`);
    }
    
    async loveCalculator(params, message) {
        if (params.length < 2) {
            await message.reply(`💝 ${this.botName} Usage: !love [nom1] [nom2]`);
            return;
        }
        const love = Math.floor(Math.random() * 101);
        let emoji = '💔';
        if (love > 80) emoji = '❤️‍🔥';
        else if (love > 60) emoji = '💝';
        else if (love > 40) emoji = '💘';
        
        await message.reply(`💝 ${this.botName} Calculateur d'Amour:\n${params[0]} ❤️ ${params[1]} = ${love}% ${emoji}`);
    }
    
    async hug(params, message) {
        const target = params[0] || 'tout le monde';
        const user = message.from.split('@')[0];
        await message.reply(`🤗 ${this.botName}: ${user} fait un câlin démoniaque à ${target}!`);
    }
    
    async kiss(params, message) {
        const target = params[0] || 'tout le monde';
        const user = message.from.split('@')[0];
        await message.reply(`💋 ${this.botName}: ${user} envoie un baiser infernal à ${target}!`);
    }
    
    async roast(params, message) {
        const roasts = [
            "Ton QI est plus bas que la température en Antarctique! ❄️",
            "Tu es si lent que ton ombre te dépasse! 🐌",
            "Si la bêtise était du gaz, tu serais une usine! 🏭",
            "Tu brilles par ton absence d'intelligence! 💡",
            "Même Google ne sait pas quoi faire de toi! 🔍"
        ];
        const roast = roasts[Math.floor(Math.random() * roasts.length)];
        await message.reply(`🔥 ${this.botName} Roast:\n${roast}`);
    }
    
    async roastMe(params, message) {
        const user = message.from.split('@')[0];
        const roasts = [
            `À toi ${user}, même les miroirs se cassent! 🪞`,
            `${user}, tu es la preuve que l'évolution peut reculer! 🐒`,
            `Si la connerie était un sport ${user}, tu serais champion! 🏆`,
            `${user}, ton cerveau a plus de trous qu'un fromage! 🧀`,
            `${user}, même D ¡ A B L O a pitié de toi! 😈`
        ];
        const roast = roasts[Math.floor(Math.random() * roasts.length)];
        await message.reply(`🔥 ${this.botName} Roast:\n${roast}`);
    }
    
    async randomFact(params, message) {
        const facts = [
            "🔥 Les démons préfèrent le café noir sans sucre",
            "😈 L'enfer a le WiFi le plus rapide de l'univers",
            "👹 Satan utilise un MacBook Pro",
            "💀 Les fantômes détestent les aspirateurs",
            "👻 Les vampires sont allergiques à l'ail... et aux factures"
        ];
        const fact = facts[Math.floor(Math.random() * facts.length)];
        await message.reply(`📚 ${this.botName} Fait Diabolique:\n${fact}`);
    }
    
    async quote(params, message) {
        const quotes = [
            "👹 'Le bien et le mal sont deux côtés de la même pièce' - D ¡ A B L O",
            "😈 'Même les démons ont des sentiments' - Satan",
            "🔥 'L'enfer c'est les autres... et le mauvais WiFi' - D ¡ A B L O",
            "💀 'La mort est une libération, les impôts sont l'enfer' - Un démon fiscal",
            "👻 'Pour être un bon fantôme, il faut être transparent' - Esprit Facétieux"
        ];
        const quote = quotes[Math.floor(Math.random() * quotes.length)];
        await message.reply(`💬 ${this.botName} Citation:\n${quote}`);
    }
    
    async trivia(params, message) {
        const questions = [
            "❓ Combien de cœurs a un poulpe ? Réponse: 3",
            "❓ Quelle est la capitale de l'Australie ? Réponse: Canberra",
            "❓ Quel animal peut voir dans l'infrarouge ? Réponse: Le serpent",
            "❓ Combien d'os dans le corps humain ? Réponse: 206",
            "❓ Quelle planète a les anneaux ? Réponse: Saturne"
        ];
        const question = questions[Math.floor(Math.random() * questions.length)];
        await message.reply(`🎯 ${this.botName} Trivia:\n${question}`);
    }
    
    async chuckNorris(params, message) {
        const facts = [
            "💪 Chuck Norris a déjà compté jusqu'à l'infini... deux fois!",
            "🔥 Chuck Norris peut gagner une partie de pierre-feuille-ciseaux en jouant pierre!",
            "😈 Chuck Norris fait pleurer les oignons!",
            "👹 La mort suit Chuck Norris!",
            "💀 Chuck Norris peut claquer une porte tournante!"
        ];
        const fact = facts[Math.floor(Math.random() * facts.length)];
        await message.reply(`💪 ${this.botName} Chuck Norris:\n${fact}`);
    }
    
    async catFact(params, message) {
        const facts = [
            "🐱 Les chats ont 32 muscles dans chaque oreille",
            "🐾 Les chats peuvent faire 100 sons différents",
            "😺 Les chats dorment 70% de leur vie",
            "🐈 Les chats voient dans l'obscurité 6x mieux que nous",
            "👑 En Égypte ancienne, tuer un chat était puni de mort"
        ];
        const fact = facts[Math.floor(Math.random() * facts.length)];
        await message.reply(`🐱 ${this.botName} Cat Fact:\n${fact}`);
    }
    
    async dogFact(params, message) {
        const facts = [
            "🐶 L'odorat du chien est 10000x plus sensible",
            "🐕 Les chiens comprennent 250 mots et gestes",
            "🏃‍♂️ Le lévrier est le chien le plus rapide (72 km/h)",
            "👃 Les chiens sentent les maladies comme le cancer",
            "🎾 Les chiens rêvent comme les humains"
        ];
        const fact = facts[Math.floor(Math.random() * facts.length)];
        await message.reply(`🐶 ${this.botName} Dog Fact:\n${fact}`);
    }
    
    async ship(params, message) {
        if (params.length < 2) {
            await message.reply(`💑 ${this.botName} Usage: !ship [nom1] [nom2]`);
            return;
        }
        const shipPercent = Math.floor(Math.random() * 101);
        let status = '';
        
        if (shipPercent > 90) status = 'ÂME SŒUR 💖';
        else if (shipPercent > 70) status = 'COUPLE PARFAIT 💕';
        else if (shipPercent > 50) status = 'BON MATCH 💘';
        else if (shipPercent > 30) status = 'POTENTIEL AMITIÉ 💛';
        else status = 'MAUVAIS MATCH 💔';
        
        await message.reply(`💑 ${this.botName} Ship:\n${params[0]} + ${params[1]} = ${shipPercent}%\n${status}`);
    }
    
    async payRespects(params, message) {
        await message.reply(`🕯️ ${this.botName}:\n*${message.from.split('@')[0]} paye ses respects*\nF`);
    }
    
    async asciiArt(params, message) {
        const arts = [
            `
👹 D ¡ A B L O
    \\\\
     \\\\_
     .-(')
    O O   )
    \\  \\_/
     \`~~~\`
            `,
            `
🔥 BOT ACTIF
    .-----.
   / .---. \\
   | |???| |
   | |???| |
   | |???| |
   | '---'o|
   |       |
   |       |
   |       |
   \`------~'
            `
        ];
        const art = arts[Math.floor(Math.random() * arts.length)];
        await message.reply(`🎨 ${this.botName} ASCII Art:\n${art}`);
    }
    
    // ... autres commandes fun
}

module.exports = FunCommands;