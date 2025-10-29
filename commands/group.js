class GroupCommands {
    constructor(client, botName) {
        this.client = client;
        this.botName = botName;
        this.commands = {
            'link': this.groupLink.bind(this),
            'invite': this.generateInvite.bind(this),
            'rules': this.groupRules.bind(this),
            'welcome': this.setWelcome.bind(this),
            'goodbye': this.setGoodbye.bind(this),
            'desc': this.setDescription.bind(this),
            'subject': this.setSubject.bind(this),
            'promote': this.promoteMember.bind(this),
            'demote': this.demoteMember.bind(this),
            'list': this.memberList.bind(this),
            'info': this.memberInfo.bind(this),
            'tagall': this.mentionAll.bind(this),
            'admins': this.listAdmins.bind(this),
            'lock': this.lockGroup.bind(this),
            'unlock': this.unlockGroup.bind(this),
            'nsfw': this.toggleNSFW.bind(this),
            'antilink': this.antiLink.bind(this),
            'antibot': this.antiBot.bind(this),
            'report': this.reportUser.bind(this),
            'staff': this.staffList.bind(this),
            'cooldown': this.setCooldown.bind(this),
            'level': this.checkLevel.bind(this),
            'rank': this.userRank.bind(this),
            'leaderboard': this.leaderboard.bind(this),
            'events': this.groupEvents.bind(this)
        };
    }
    
    async handleCommand(command, params, message) {
        const chat = await message.getChat();
        if (!chat.isGroup) {
            await message.reply(`❌ ${this.botName} - Cette commande fonctionne seulement dans les groupes`);
            return true;
        }
        
        if (this.commands[command]) {
            await this.commands[command](params, message, chat);
            return true;
        }
        return false;
    }
    
    async groupLink(params, message, chat) {
        try {
            const inviteCode = await chat.getInviteCode();
            const inviteLink = `https://chat.whatsapp.com/${inviteCode}`;
            await message.reply(`🔗 ${this.botName} - Lien d'invitation:\n${inviteLink}`);
        } catch (error) {
            await message.reply(`❌ ${this.botName} - Impossible de générer le lien`);
        }
    }
    
    async groupRules(params, message, chat) {
        const rules = `
📜 *${this.botName} - RÈGLES DU GROUPE:*

1. Respectez tous les membres
2. Pas de spam ou flood
3. Pas de contenu NSFW
4. Pas de publicité non sollicitée  
5. Gardez les discussions pertinentes
6. Pas de liens suspects
7. Respectez les administrateurs

⚠️ Les contrevenants seront avertis/mute/bannis
        `;
        await message.reply(rules);
    }
    
    async mentionAll(params, message, chat) {
        let text = params.join(' ') || 'Message important de D ¡ A B L O! 👹';
        let mentions = [];
        
        for (let participant of chat.participants) {
            mentions.push(participant.id._serialized);
        }
        
        await chat.sendMessage(`@everyone\n${text}`, { mentions });
    }
    
    async memberList(params, message, chat) {
        let memberList = `👥 *${this.botName} - LISTE DES MEMBRES:*\n\n`;
        let count = 1;
        
        for (let participant of chat.participants) {
            const contact = await this.client.getContactById(participant.id._serialized);
            const name = contact.name || contact.pushname || 'Inconnu';
            const role = participant.isAdmin ? '👑 Admin' : '👤 Membre';
            memberList += `${count}. ${name} - ${role}\n`;
            count++;
        }
        
        await message.reply(memberList);
    }
    
    async listAdmins(params, message, chat) {
        let adminList = `👑 *${this.botName} - ADMINISTRATEURS:*\n\n`;
        let count = 1;
        
        for (let participant of chat.participants) {
            if (participant.isAdmin) {
                const contact = await this.client.getContactById(participant.id._serialized);
                const name = contact.name || contact.pushname || 'Inconnu';
                adminList += `${count}. ${name}\n`;
                count++;
            }
        }
        
        await message.reply(adminList);
    }
    
    async lockGroup(params, message, chat) {
        await message.reply(`🔒 ${this.botName} - Groupe verrouillé\n(Seuls les admins peuvent envoyer des messages)`);
    }
    
    async unlockGroup(params, message, chat) {
        await message.reply(`🔓 ${this.botName} - Groupe déverrouillé\n(Tous les membres peuvent envoyer des messages)`);
    }
    
    async leaderboard(params, message, chat) {
        const leaderboard = `
🏆 *${this.botName} - CLASSEMENT:*

🥇 Membre1 - 1500 points
🥈 Membre2 - 1200 points  
🥉 Membre3 - 900 points
4. Membre4 - 750 points
5. Membre5 - 600 points

*Continue à participer pour monter!*
        `;
        await message.reply(leaderboard);
    }
}

module.exports = GroupCommands;