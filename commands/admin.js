class AdminCommands {
    constructor(client, botName, adminNumber) {
        this.client = client;
        this.botName = botName;
        this.admins = [adminNumber];
        this.commands = {
            'ban': this.banUser.bind(this),
            'unban': this.unbanUser.bind(this),
            'kick': this.kickUser.bind(this),
            'mute': this.muteUser.bind(this),
            'unmute': this.unmuteUser.bind(this),
            'promote': this.promoteUser.bind(this),
            'demote': this.demoteUser.bind(this),
            'add': this.addUser.bind(this),
            'settings': this.groupSettings.bind(this),
            'info': this.groupInfo.bind(this),
            'stats': this.botStats.bind(this),
            'broadcast': this.broadcast.bind(this),
            'backup': this.backupData.bind(this),
            'restore': this.restoreData.bind(this),
            'eval': this.evalCode.bind(this),
            'exec': this.executeCmd.bind(this),
            'restart': this.restartBot.bind(this),
            'shutdown': this.shutdownBot.bind(this),
            'logs': this.showLogs.bind(this),
            'clean': this.cleanChat.bind(this),
            'warn': this.warnUser.bind(this),
            'warnings': this.checkWarnings.bind(this),
            'reset': this.resetUser.bind(this),
            'maintenance': this.maintenanceMode.bind(this),
            'update': this.updateBot.bind(this)
        };
    }
    
    isAdmin(message) {
        const sender = message.from;
        return this.admins.includes(sender);
    }
    
    async handleCommand(command, params, message) {
        if (!this.isAdmin(message)) {
            await message.reply(`❌ ${this.botName} - Commande réservée aux administrateurs`);
            return true;
        }
        
        if (this.commands[command]) {
            await this.commands[command](params, message);
            return true;
        }
        return false;
    }
    
    async banUser(params, message) {
        if (message.hasQuotedMsg) {
            const quoted = await message.getQuotedMessage();
            const target = quoted.author || quoted.from;
            await message.reply(`🔨 ${this.botName} - Utilisateur banni: ${target}`);
        } else {
            await message.reply(`❌ ${this.botName} - Réponds à un message pour bannir`);
        }
    }
    
    async botStats(params, message) {
        const chat = await message.getChat();
        const stats = `
📊 *${this.botName} - STATISTIQUES:*

• Uptime: ${process.uptime().toFixed(0)}s
• Mémoire: ${(process.memoryUsage().rss / 1024 / 1024).toFixed(2)}MB
• Groupes: ${chat.isGroup ? '1' : '0'}
• Commandes: 150 disponibles
• Admin: +50936535649
• Statut: 👹 Actif
        `;
        await message.reply(stats);
    }
    
    async broadcast(params, message) {
        const broadcastMsg = params.join(' ');
        if (!broadcastMsg) {
            await message.reply(`📢 ${this.botName} Usage: !broadcast [message]`);
            return;
        }
        
        const chats = await this.client.getChats();
        let sentCount = 0;
        
        for (let chat of chats) {
            if (chat.isGroup) {
                try {
                    await chat.sendMessage(`📢 *${this.botName} - Broadcast:*\n${broadcastMsg}`);
                    sentCount++;
                } catch (error) {
                    console.log(`Erreur envoi à ${chat.name}`);
                }
            }
        }
        await message.reply(`✅ ${this.botName} - Broadcast envoyé à ${sentCount} groupes`);
    }
    
    async restartBot(params, message) {
        await message.reply(`🔄 ${this.botName} - Redémarrage...`);
        process.exit(0);
    }
    
    async shutdownBot(params, message) {
        await message.reply(`⏹️ ${this.botName} - Arrêt du bot...`);
        process.exit(1);
    }
    
    async groupInfo(params, message) {
        const chat = await message.getChat();
        if (!chat.isGroup) {
            await message.reply(`❌ ${this.botName} - Cette commande fonctionne seulement dans les groupes`);
            return;
        }
        
        const info = `
👥 *${this.botName} - INFO GROUPE:*

• Nom: ${chat.name}
• Description: ${chat.description || 'Aucune'}
• Membres: ${chat.participants.length}
• Admins: ${chat.participants.filter(p => p.isAdmin).length}
• Créé le: ${chat.createdAt?.toString() || 'Inconnu'}
        `;
        await message.reply(info);
    }
    
    async cleanChat(params, message) {
        await message.reply(`🧹 ${this.botName} - Nettoyage du chat...`);
        // Implémenter la logique de nettoyage
    }
    
    async warnUser(params, message) {
        if (message.hasQuotedMsg) {
            const quoted = await message.getQuotedMessage();
            const target = quoted.author || quoted.from;
            const reason = params.join(' ') || 'Aucune raison spécifiée';
            await message.reply(`⚠️ ${this.botName} - Avertissement à ${target}:\nRaison: ${reason}`);
        } else {
            await message.reply(`❌ ${this.botName} - Réponds à un message pour avertir`);
        }
    }
}

module.exports = AdminCommands;