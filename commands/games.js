class GameCommands {
    constructor(client, botName) {
        this.client = client;
        this.botName = botName;
        this.games = new Map();
        this.commands = {
            'rps': this.rockPaperScissors.bind(this),
            'number': this.guessNumber.bind(this),
            'slot': this.slotMachine.bind(this),
            'dicegame': this.diceGame.bind(this),
            'hangman': this.hangman.bind(this),
            'blackjack': this.blackjack.bind(this),
            'russian': this.russianRoulette.bind(this),
            'chess': this.chess.bind(this),
            'quiz': this.startQuiz.bind(this),
            'tictactoe': this.ticTacToe.bind(this),
            'wordle': this.wordle.bind(this),
            'bingo': this.bingo.bind(this),
            'poker': this.poker.bind(this),
            'memory': this.memoryGame.bind(this),
            'sudoku': this.sudoku.bind(this),
            'crossword': this.crossword.bind(this),
            'lotto': this.lottery.bind(this),
            'race': this.carRace.bind(this),
            'fight': this.fightGame.bind(this),
            'rpg': this.rpgGame.bind(this),
            'bet': this.betting.bind(this),
            'spin': this.spinWheel.bind(this),
            'mine': this.minesweeper.bind(this),
            'snake': this.snakeGame.bind(this),
            'trivia': this.triviaGame.bind(this)
        };
    }
    
    async handleCommand(command, params, message) {
        if (this.commands[command]) {
            await this.commands[command](params, message);
            return true;
        }
        return false;
    }
    
    async rockPaperScissors(params, message) {
        const choices = ['pierre', 'feuille', 'ciseaux'];
        const userChoice = params[0]?.toLowerCase();
        
        if (!choices.includes(userChoice)) {
            await message.reply(`🎮 ${this.botName} Usage: !rps [pierre|feuille|ciseaux]`);
            return;
        }
        
        const botChoice = choices[Math.floor(Math.random() * 3)];
        let result;
        
        if (userChoice === botChoice) {
            result = 'Égalité! 🤝';
        } else if (
            (userChoice === 'pierre' && botChoice === 'ciseaux') ||
            (userChoice === 'feuille' && botChoice === 'pierre') ||
            (userChoice === 'ciseaux' && botChoice === 'feuille')
        ) {
            result = 'Tu as gagné! 🎉';
        } else {
            result = `${this.botName} a gagné! 😎`;
        }
        
        await message.reply(`🎮 ${this.botName} Pierre-Feuille-Ciseaux:\nToi: ${userChoice}\nBot: ${botChoice}\n\n${result}`);
    }
    
    async guessNumber(params, message) {
        const number = Math.floor(Math.random() * 100) + 1;
        const gameId = message.from;
        
        this.games.set(gameId, {
            type: 'number',
            target: number,
            attempts: 0,
            maxAttempts: 7
        });
        
        await message.reply(`🔢 ${this.botName} Je pense à un nombre entre 1 et 100.\nDevine avec !number [ton chiffre]`);
    }
    
    async slotMachine(params, message) {
        const symbols = ['🍒', '🍋', '🍊', '🍇', '🔔', '💎', '7️⃣'];
        const reels = [
            symbols[Math.floor(Math.random() * symbols.length)],
            symbols[Math.floor(Math.random() * symbols.length)],
            symbols[Math.floor(Math.random() * symbols.length)]
        ];
        
        let result = `🎰 ${this.botName} Machine à sous:\n| ${reels[0]} | ${reels[1]} | ${reels[2]} |\n`;
        
        if (reels[0] === reels[1] && reels[1] === reels[2]) {
            result += '🎉 JACKPOT! Triple symbole!';
        } else if (reels[0] === reels[1] || reels[1] === reels[2]) {
            result += '👍 Double! Pas mal!';
        } else {
            result += '😢 Pas de gain cette fois...';
        }
        
        await message.reply(result);
    }
    
    async diceGame(params, message) {
        const userRoll = Math.floor(Math.random() * 6) + 1;
        const botRoll = Math.floor(Math.random() * 6) + 1;
        
        let result;
        if (userRoll > botRoll) {
            result = 'Tu as gagné! 🎉';
        } else if (userRoll < botRoll) {
            result = `${this.botName} a gagné! 😈`;
        } else {
            result = 'Égalité! 🤝';
        }
        
        await message.reply(`🎲 ${this.botName} Jeu de dés:\nToi: ${userRoll} vs Bot: ${botRoll}\n\n${result}`);
    }
    
    async hangman(params, message) {
        const words = ['programmation', 'javascript', 'whatsapp', 'demon', 'diablo', 'enfer', 'satan', 'magie'];
        const word = words[Math.floor(Math.random() * words.length)];
        const gameId = message.from;
        
        this.games.set(gameId, {
            type: 'hangman',
            word: word,
            guessed: [],
            attempts: 6,
            maxAttempts: 6
        });
        
        await this.displayHangman(gameId, message);
    }
    
    async displayHangman(gameId, message) {
        const game = this.games.get(gameId);
        let display = '';
        
        for (const letter of game.word) {
            if (game.guessed.includes(letter)) {
                display += letter + ' ';
            } else {
                display += '_ ';
            }
        }
        
        const hangmanArt = this.getHangmanArt(game.attempts);
        
        await message.reply(`🎯 ${this.botName} Pendu:\n${hangmanArt}\n\nMot: ${display}\nEssais: ${game.attempts}/6\nLettres: ${game.guessed.join(', ') || 'Aucune'}`);
    }
    
    getHangmanArt(attempts) {
        const arts = [
            `
  -----
  |   |
      |
      |
      |
      |
---------
            `,
            `
  -----
  |   |
  O   |
      |
      |
      |
---------
            `,
            `
  -----
  |   |
  O   |
  |   |
      |
      |
---------
            `,
            `
  -----
  |   |
  O   |
 /|   |
      |
      |
---------
            `,
            `
  -----
  |   |
  O   |
 /|\\  |
      |
      |
---------
            `,
            `
  -----
  |   |
  O   |
 /|\\  |
 /    |
      |
---------
            `,
            `
  -----
  |   |
  O   |
 /|\\  |
 / \\  |
      |
---------
            `
        ];
        return arts[6 - attempts];
    }
    
    async blackjack(params, message) {
        await message.reply(`🃏 ${this.botName} Blackjack:\n(Fonction à développer)`);
    }
    
    async russianRoulette(params, message) {
        const chambers = 6;
        const bullet = Math.floor(Math.random() * chambers);
        const spin = Math.floor(Math.random() * chambers);
        
        if (spin === bullet) {
            await message.reply(`🔫 ${this.botName} Roulette Russe:\n💥 BOOM! Tu as perdu!`);
        } else {
            await message.reply(`🔫 ${this.botName} Roulette Russe:\n✅ Clic... Tu as survécu!`);
        }
    }
    
    async lottery(params, message) {
        const numbers = [];
        for (let i = 0; i < 6; i++) {
            numbers.push(Math.floor(Math.random() * 49) + 1);
        }
        await message.reply(`🎫 ${this.botName} Loto:\nTes numéros: ${numbers.join(', ')}`);
    }
    
    async spinWheel(params, message) {
        const options = ['Gagné! 🎉', 'Perdu! 😢', 'Essaie encore! 🔄', 'Jackpot! 💰', 'Presque! ⭐'];
        const result = options[Math.floor(Math.random() * options.length)];
        await message.reply(`🎡 ${this.botName} Roue de la Fortune:\n${result}`);
    }
}

module.exports = GameCommands;