class MediaCommands {
    constructor(client, botName) {
        this.client = client;
        this.botName = botName;
        this.commands = {
            'sticker': this.createSticker.bind(this),
            'crop': this.cropImage.bind(this),
            'filter': this.applyFilter.bind(this),
            'yt': this.youtubeDownload.bind(this),
            'spotify': this.spotifyInfo.bind(this),
            'tt': this.tiktokDownload.bind(this),
            'ig': this.instagramDownload.bind(this),
            'fb': this.facebookDownload.bind(this),
            'twitter': this.twitterDownload.bind(this),
            'song': this.searchSong.bind(this),
            'lyrics': this.getLyrics.bind(this),
            'movie': this.movieInfo.bind(this),
            'anime': this.animeInfo.bind(this),
            'manga': this.mangaInfo.bind(this),
            'wallpaper': this.getWallpaper.bind(this),
            'gif': this.searchGif.bind(this),
            'meme': this.createMeme.bind(this),
            'ocr': this.textRecognition.bind(this),
            'qrread': this.readQR.bind(this),
            'audio': this.audioExtract.bind(this),
            'video': this.videoInfo.bind(this),
            'compress': this.compressMedia.bind(this),
            'rotate': this.rotateImage.bind(this),
            'blur': this.blurImage.bind(this),
            'brightness': this.adjustBrightness.bind(this)
        };
    }
    
    async handleCommand(command, params, message) {
        if (this.commands[command]) {
            await this.commands[command](params, message);
            return true;
        }
        return false;
    }
    
    async createSticker(params, message) {
        if (message.hasMedia) {
            try {
                const media = await message.downloadMedia();
                if (media) {
                    await message.reply(media, null, { sendMediaAsSticker: true });
                    await message.reply(`✅ ${this.botName} - Sticker créé!`);
                }
            } catch (error) {
                await message.reply(`❌ ${this.botName} - Erreur création sticker`);
            }
        } else if (message.hasQuotedMsg) {
            const quoted = await message.getQuotedMessage();
            if (quoted.hasMedia) {
                try {
                    const media = await quoted.downloadMedia();
                    await message.reply(media, null, { sendMediaAsSticker: true });
                    await message.reply(`✅ ${this.botName} - Sticker créé!`);
                } catch (error) {
                    await message.reply(`❌ ${this.botName} - Erreur création sticker`);
                }
            }
        } else {
            await message.reply(`❌ ${this.botName} - Envoie ou réponds à une image/vidéo`);
        }
    }
    
    async searchSong(params, message) {
        const query = params.join(' ');
        if (!query) {
            await message.reply(`🎵 ${this.botName} Usage: !song [nom de la chanson]`);
            return;
        }
        await message.reply(`🎵 ${this.botName} Recherche: ${query}\n(API à configurer)`);
    }
    
    async getLyrics(params, message) {
        const query = params.join(' ');
        if (!query) {
            await message.reply(`📝 ${this.botName} Usage: !lyrics [nom de la chanson]`);
            return;
        }
        await message.reply(`📝 ${this.botName} Paroles pour: ${query}\n(API à configurer)`);
    }
    
    async searchGif(params, message) {
        const query = params.join(' ');
        if (!query) {
            await message.reply(`🎬 ${this.botName} Usage: !gif [recherche]`);
            return;
        }
        await message.reply(`🎬 ${this.botName} GIF: ${query}\n(API à configurer)`);
    }
    
    async youtubeDownload(params, message) {
        const url = params[0];
        if (!url) {
            await message.reply(`📹 ${this.botName} Usage: !yt [url youtube]`);
            return;
        }
        await message.reply(`📹 ${this.botName} Téléchargement: ${url}\n(Fonction à implémenter)`);
    }
    
    async tiktokDownload(params, message) {
        const url = params[0];
        if (!url) {
            await message.reply(`📱 ${this.botName} Usage: !tt [url tiktok]`);
            return;
        }
        await message.reply(`📱 ${this.botName} Téléchargement: ${url}\n(Fonction à implémenter)`);
    }
}

module.exports = MediaCommands;