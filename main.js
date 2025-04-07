const fs = require('fs');
const { Client, GatewayIntentBits, WebhookClient, MessageEmbed } = require('discord.js');
const uptime = require("moment");
const chalk = require("chalk");
require("moment-duration-format");
const util = require('util');
const origConsoleLog = console.log;

//process.env.NODE_OPTIONS = "--max-old-space-size=3072"

console.log = function () {
    const now = new Date();
    const options = {
        timeZone: 'Europe/Istanbul',
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    };
    const formattedDate = chalk.rgb(255, 255, 255)('[' + now.toLocaleString('tr-TR', options) + ']');
    const args = Array.from(arguments);
    args.unshift(formattedDate);
    origConsoleLog.apply(console, args);


    const log = args.join(' ');
    fs.appendFile('logs.txt', log + '\n', (err) => {
        if (err) throw err;
    });

};

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMembers,
    ],
});

client.on("ready", () => {
    console.log(chalk.rgb(230, 184, 0)("WCK <> ") + chalk.white("Eternity Automatic Delivery Bot Login Process ") + chalk.green("+ "));
    setInterval(function () {
        var liste = ['We love ❤️ Eternity', '💻 Development by "wicker"', '❤️ Eternity © 2023'];
        var random = Math.floor(Math.random() * liste.length);
        client.user.setActivity(liste[random]);
    }, 3 * 1000);
});

// FRESH unclaimedtoken

const unclaimedtokencodes = fs.readFileSync('kodlar/unclaimed.txt', 'utf-8').split('\r\n').filter(Boolean);
const unclaimedtokenproducts = fs.readFileSync('stoklar/unclaimed.txt', 'utf-8').split('\r\n').filter(Boolean);

const masstokencodes = fs.readFileSync('kodlar/mass.txt', 'utf-8').split('\r\n').filter(Boolean);
const masstokenproducts = fs.readFileSync('stoklar/mass.txt', 'utf-8').split('\r\n').filter(Boolean);

const nitrotokencodes = fs.readFileSync('kodlar/nitro.txt', 'utf-8').split('\r\n').filter(Boolean);
const nitrotokenproducts = fs.readFileSync('stoklar/nitro.txt', 'utf-8').split('\r\n').filter(Boolean);

const mailtokencodes = fs.readFileSync('kodlar/mail.txt', 'utf-8').split('\r\n').filter(Boolean);
const mailtokenproducts = fs.readFileSync('stoklar/mail.txt', 'utf-8').split('\r\n').filter(Boolean);

const accountsixtokencodes = fs.readFileSync('kodlar/2016acc.txt', 'utf-8').split('\r\n').filter(Boolean);
const accountsixtokenproducts = fs.readFileSync('stoklar/2016acc.txt', 'utf-8').split('\r\n').filter(Boolean);

const accountseventokencodes = fs.readFileSync('kodlar/2017acc.txt', 'utf-8').split('\r\n').filter(Boolean);
const accountseventokenproducts = fs.readFileSync('stoklar/2017acc.txt', 'utf-8').split('\r\n').filter(Boolean);

const accounteighttokencodes = fs.readFileSync('kodlar/2018acc.txt', 'utf-8').split('\r\n').filter(Boolean);
const accounteighttokenproducts = fs.readFileSync('stoklar/2018acc.txt', 'utf-8').split('\r\n').filter(Boolean);

const accountninetokencodes = fs.readFileSync('kodlar/2019acc.txt', 'utf-8').split('\r\n').filter(Boolean);
const accountninetokenproducts = fs.readFileSync('stoklar/2019acc.txt', 'utf-8').split('\r\n').filter(Boolean);

const accounttwentytokencodes = fs.readFileSync('kodlar/2020acc.txt', 'utf-8').split('\r\n').filter(Boolean);
const accounttwentytokenproducts = fs.readFileSync('stoklar/2020acc.txt', 'utf-8').split('\r\n').filter(Boolean);

const accountowocodes = fs.readFileSync('kodlar/owoacc.txt', 'utf-8').split('\r\n').filter(Boolean);
const accountowoproducts = fs.readFileSync('stoklar/owoacc.txt', 'utf-8').split('\r\n').filter(Boolean);

const steamoyuncodes = fs.readFileSync('kodlar/steamgamecodes.txt', 'utf-8').split('\r\n').filter(Boolean);
const steamoyunproducts = fs.readFileSync('stoklar/steamgames.txt', 'utf-8').split('\r\n').filter(Boolean);



const owocodes = fs.readFileSync('owocodes.txt', 'utf-8').split('\r\n').filter(Boolean);

let teslim_alma = false;
let owostokkontrol = false;

client.on("messageCreate", async message => {

    if (message.channel.id === "1165759342432235620") {



        // prefix 
        if (message.content.startsWith("Eternity-")) {
            console.log(chalk.rgb(230, 184, 0)("WCK <> ") + chalk.white(`Kullanılmaya Çalışılan Kod: `) + chalk.green(`${message.content}`));
        }

        let genelchat = client.channels.cache.get("1165759342432235620");

        async function channelsettings() {

            console.log(chalk.rgb(230, 184, 0)("WCK <> ") + chalk.white(`Channel settings are complete`) + chalk.green(' +'));

            deletefonksiyonu();

            setTimeout(() => {

                const ticketinfo = {
                    title: 'Delivery System - Eternity Shop',
                    description: '📦 Ürününü teslim almak için **w!teslimal** yazabilirsiniz.\n\n🚀 Herhangi bir sorunda <#1165708069968298135> kanalına başvurabilirsin.\n\n🌟 Rehber Videosu: \n\n**https://www.youtube.com/watch?v=emaMPH2YmRA&ab_channel=Wîcker**\n\n❌ Lütfen özel mesajlarınız açıkken teslim alınız.',
                    color: 0xCC7A00,
                    footer: {
                        text: 'Eternity © 2023 - Son Teslimat'
                    },
                    timestamp: new Date()
                };

                let kanal = message.channel;

                client.channels.cache.get(kanal.id).send({ embeds: [ticketinfo] });

            }, 5000);

        }

        async function deletefonksiyonu() {
            await message.channel.bulkDelete(100, true);
        }

        if (message.content === "w!teslimal") {
            if (teslim_alma === true) { // kullanıcı zaten teslim alma işlemi yapıyorsa, kullanıcıyı engelle
                message.channel.send("https://media.discordapp.net/attachments/1158071651464916992/1158081022336974898/wrong-1.png?ex=651af27f&is=6519a0ff&hm=2e646957689b1781d20c5622d086b53651597cdba2a2da26956cd3b2630cc9e0&="); // şuanda bir teslim alma işlemi zaten var
                return;
            }
            teslim_alma = true;
            console.log(chalk.rgb(230, 184, 0)("WCK <> ") + chalk.white(`Used w!teslimal command`) + chalk.green(' +'));
            message.channel.send("<:eternityok:1166847271736967329> *Hangi ürünü teslim almak istiyorsun?*\n\n*<:eternityright:1166847271736967329>Kategoriler:*\n\n<:eternitytab:1166847433167347743>** unclaimed-token**\n<:eternitytab:1166847433167347743>** mail-token**\n<:eternitytab:1166847433167347743>** nitro-token**\n<:eternitytab:1166847433167347743>** mass-token**\n<:eternitytab:1166847433167347743>** 2016-hesap**\n<:eternitytab:1166847433167347743>** 2017-hesap**\n<:eternitytab:1166847433167347743>** 2018-hesap**\n<:eternitytab:1166847433167347743>** 2019-hesap**\n<:eternitytab:1166847433167347743>** 2020-hesap**\n<:eternitytab:1166847433167347743>** owo-hesap**\n<:eternitytab:1166847433167347743>** steam-oyun**"); // hangi ürünü teslim almak istiyorsun?
            const filter = (response) => {
                return ['unclaimed-token', 'mail-token', 'nitro-token', 'mass-token', "2016-hesap", "2017-hesap", "2018-hesap", "2019-hesap", "2020-hesap", "owo-hesap", 'owo', "steam-oyun"].includes(response.content.toLowerCase()) && response.author.id === message.author.id;
            };

            const collector = message.channel.createMessageCollector({ filter, time: 15000, max: 1 });
            collector.on('collect', (m) => {
                if (m.content === 'unclaimed-token') {
                    message.channel.send("<:eternityok:1166847271736967329> Unclaimed token öğesini almak için sana teslim edilen ürün kodunu yazmalısın.\n**।।।।** **Ürün Kodu Örneği:** `Eternity-LJGJGP-YAMJDV-9R2121-NGA5DJ-D3679Q-LDU80C`");

                    const unclaimedtokencollector = message.channel.createMessageCollector({ filter: (response) => response.author.id === message.author.id, time: 15000, max: 1 });

                    unclaimedtokencollector.on('collect', (unclaimedtokencode) => {
                        if (unclaimedtokencodes.includes(unclaimedtokencode.content)) {
                            console.log(chalk.rgb(230, 184, 0)("WCK <> ") + chalk.white(`Unclaimed-Token Kodu doğrulama işlemi`) + chalk.green(' +'));
                            message.channel.send("<:eternitytick:1166847385423581304> **Ürün kodunu başarıyla doğruladım.** *Ürünün özel mesaj kutuna gönderildi.*");
                            channelsettings();

                            // kullanılan kodu silme
                            const index = unclaimedtokencodes.indexOf(unclaimedtokencode.content);
                            if (index > -1) {
                                unclaimedtokencodes.splice(index, 1);
                                fs.writeFileSync('kodlar/unclaimed.txt', unclaimedtokencodes.join('\r\n'));
                                console.log(chalk.rgb(230, 184, 0)("WCK <> ") + chalk.white(`Unclaimed-Token kodunu kaldırma işlemi`) + chalk.green(' +'));
                            }

                            // hiç ürün kalmamışsa kullanıcıya bildirimde bulunma
                            async function sendDMs() {
                                const guild = client.guilds.cache.get("1040942180384120873");
                                const wickerids = ["1154655380975140934", "989583041137627157"];

                                for (const wickerid of wickerids) {
                                    const member = await guild.members.fetch(wickerid);
                                    const dmchannel = await member.createDM();
                                    await dmchannel.send("**·** Unclaimed-Token ürününde hiç stok kalmamış bu yüzden ürün teslim edilemedi, acilen bekleniyorsunuz.");
                                    return;
                                }
                            }

                            if (unclaimedtokenproducts.length === 0) {
                                message.channel.send("**·** Üzgünüm stokta hiç ürün kalmamış, yetkililere gereken bildirimler yapıldı.");
                                sendDMs();
                            }

                            // ürün seçme
                            const unclaimedtokenselectedProductIndex = Math.floor(Math.random() * unclaimedtokenproducts.length);
                            const unclaimedtokenselectedProduct = unclaimedtokenproducts[unclaimedtokenselectedProductIndex];

                            // seçilen ürünü silme
                            unclaimedtokenproducts.splice(unclaimedtokenselectedProductIndex, 1);
                            fs.writeFileSync('stoklar/unclaimed.txt', unclaimedtokenproducts.join('\r\n'));
                            // Kullanıcıya özel mesaj gönderme
                            const giveproductmsg = {
                                title: 'Merhaba, satın alımın için teşekkür ederiz! :heart:',
                                description: `**Ürün:** ${unclaimedtokenselectedProduct}`,
                                image: {
                                    url: 'https://media.discordapp.net/attachments/1158071651464916992/1158086695892295841/product-1.png?ex=651af7c8&is=6519a648&hm=ffadfeaf162faaff46ba8174765278ec458f375b32e538652f0475d0419a7a80&='
                                }
                            };
                            unclaimedtokencode.author.send({ embeds: [giveproductmsg] })
                                .then(() => {
                                    console.log(chalk.white("Kullanıcının DM'si gönderildi.") + chalk.green(`${message.author.id} , ${message.author.username}`));
                                    console.log(`Gönderilen Ürün: ` + unclaimedtokenselectedProduct);
                                })
                                .catch(error => {
                                    console.error('Özel mesaj gönderilirken hata oluştu:', error);
                                    setTimeout(() => {
                                        genelchat.send("**·** " + `<@${message.author.id}>` + " Özel mesajların kapalı gözüküyor, yetkililerimize ulaşıp yeni bir kod alabilirsin.");
                                    }, 5000);
                                    console.log(`Kullanıcının DM'si kapalı. ${message.author.id} , ${message.author.username}`);
                                    console.log("Gönderilemeyen Ürün: " + unclaimedtokenselectedProduct);
                                });


                            // teslim alma değerini değiştirme
                            teslim_alma = false;
                        } else {
                            message.channel.send("https://media.discordapp.net/attachments/1158071651464916992/1158084358020808876/wrong-2.png?ex=651af59b&is=6519a41b&hm=5108ba62a1aeaf193968ee3489466aa9069444a1a7eefa25c208e01e89f8ba02&=");
                            channelsettings();
                            teslim_alma = false;
                        }
                    });

                    unclaimedtokencollector.on('end', (collected) => {
                        if (collected.size === 0) {
                            message.channel.send('**·** Ürün teslim alma isteğin zaman aşımına uğradı.');
                            channelsettings();
                            teslim_alma = false; v
                        }
                    });

                }

                else if (m.content === 'mass-token') {
                    message.channel.send("<:eternityok:1166847271736967329> mass token öğesini almak için sana teslim edilen ürün kodunu yazmalısın.\n**।।।।** **Ürün Kodu Örneği:** `Eternity-LJGJGP-YAMJDV-9R2121-NGA5DJ-D3679Q-LDU80C`");

                    const masstokencollector = message.channel.createMessageCollector({ filter: (response) => response.author.id === message.author.id, time: 15000, max: 1 });

                    masstokencollector.on('collect', (masstokencode) => {
                        if (masstokencodes.includes(masstokencode.content)) {
                            console.log(chalk.rgb(230, 184, 0)("WCK <> ") + chalk.white(`Mass-Token Kodu doğrulama işlemi`) + chalk.green(' +'));
                            message.channel.send("<:eternitytick:1166847385423581304> **Ürün kodunu başarıyla doğruladım.** *Ürünün özel mesaj kutuna gönderildi.*");
                            channelsettings();

                            // kullanılan kodu silme
                            const index = masstokencodes.indexOf(masstokencode.content);
                            if (index > -1) {
                                masstokencodes.splice(index, 1);
                                fs.writeFileSync('kodlar/mass.txt', masstokencodes.join('\r\n'));
                                console.log(chalk.rgb(230, 184, 0)("WCK <> ") + chalk.white(`Mass-Token kodunu kaldırma işlemi`) + chalk.green(' +'));
                            }

                            // hiç ürün kalmamışsa kullanıcıya bildirimde bulunma
                            async function sendDMs() {
                                const guild = client.guilds.cache.get("1040942180384120873");
                                const wickerids = ["1154655380975140934", "989583041137627157"];

                                for (const wickerid of wickerids) {
                                    const member = await guild.members.fetch(wickerid);
                                    const dmchannel = await member.createDM();
                                    await dmchannel.send("**·** Mass-Token ürününde hiç stok kalmamış bu yüzden ürün teslim edilemedi, acilen bekleniyorsunuz.");
                                    return;
                                }
                            }

                            if (masstokenproducts.length === 0) {
                                message.channel.send("**·** Üzgünüm stokta hiç ürün kalmamış, yetkililere gereken bildirimler yapıldı.");
                                sendDMs();
                            }

                            // ürün seçme
                            const masstokenselectedProductIndex = Math.floor(Math.random() * masstokenproducts.length);
                            const masstokenselectedProduct = masstokenproducts[masstokenselectedProductIndex];

                            // seçilen ürünü silme
                            masstokenproducts.splice(masstokenselectedProductIndex, 1);
                            fs.writeFileSync('stoklar/mass.txt', masstokenproducts.join('\r\n'));
                            // Kullanıcıya özel mesaj gönderme
                            const giveproductmsg = {
                                title: 'Merhaba, satın alımın için teşekkür ederiz! :heart:',
                                description: `**Ürün:** ${masstokenselectedProduct} \n Ücretsiz Token Checker | https://github.com/wickercgr/discord-token-checker-2024`,
                                image: {
                                    url: 'https://media.discordapp.net/attachments/1158071651464916992/1158086695892295841/product-1.png?ex=651af7c8&is=6519a648&hm=ffadfeaf162faaff46ba8174765278ec458f375b32e538652f0475d0419a7a80&='
                                }
                            };
                            masstokencode.author.send({ embeds: [giveproductmsg] })
                                .then(() => {
                                    console.log(chalk.white("Kullanıcının DM'si gönderildi.") + chalk.green(`${message.author.id} , ${message.author.username}`));
                                    console.log(`Gönderilen Ürün: ` + masstokenselectedProduct);
                                })
                                .catch(error => {
                                    console.error('Özel mesaj gönderilirken hata oluştu:', error);
                                    setTimeout(() => {
                                        genelchat.send("**·** " + `<@${message.author.id}>` + " Özel mesajların kapalı gözüküyor, yetkililerimize ulaşıp yeni bir kod alabilirsin.");
                                    }, 5000);
                                    console.log(`Kullanıcının DM'si kapalı. ${message.author.id} , ${message.author.username}`);
                                    console.log("Gönderilemeyen Ürün: " + masstokenselectedProduct);
                                });


                            // teslim alma değerini değiştirme
                            teslim_alma = false;
                        } else {
                            message.channel.send("https://media.discordapp.net/attachments/1158071651464916992/1158084358020808876/wrong-2.png?ex=651af59b&is=6519a41b&hm=5108ba62a1aeaf193968ee3489466aa9069444a1a7eefa25c208e01e89f8ba02&=");
                            channelsettings();
                            teslim_alma = false;
                        }
                    });

                    masstokencollector.on('end', (collected) => {
                        if (collected.size === 0) {
                            message.channel.send('**·** Ürün teslim alma isteğin zaman aşımına uğradı.');
                            channelsettings();
                            teslim_alma = false;
                        }
                    });

                }

                else if (m.content === 'nitro-token') {
                    message.channel.send("<:eternityok:1166847271736967329> nitro token öğesini almak için sana teslim edilen ürün kodunu yazmalısın.\n**।।।।** **Ürün Kodu Örneği:** `Eternity-LJGJGP-YAMJDV-9R2121-NGA5DJ-D3679Q-LDU80C`");

                    const nitrotokencollector = message.channel.createMessageCollector({ filter: (response) => response.author.id === message.author.id, time: 15000, max: 1 });

                    nitrotokencollector.on('collect', (nitrotokencode) => {
                        if (nitrotokencodes.includes(nitrotokencode.content)) {
                            console.log(chalk.rgb(230, 184, 0)("WCK <> ") + chalk.white(`nitro-Token Kodu doğrulama işlemi`) + chalk.green(' +'));
                            message.channel.send("<:eternitytick:1166847385423581304> **Ürün kodunu başarıyla doğruladım.** *Ürünün özel mesaj kutuna gönderildi.*");
                            channelsettings();

                            // kullanılan kodu silme
                            const index = nitrotokencodes.indexOf(nitrotokencode.content);
                            if (index > -1) {
                                nitrotokencodes.splice(index, 1);
                                fs.writeFileSync('kodlar/nitro.txt', nitrotokencodes.join('\r\n'));
                                console.log(chalk.rgb(230, 184, 0)("WCK <> ") + chalk.white(`nitro-Token kodunu kaldırma işlemi`) + chalk.green(' +'));
                            }

                            // hiç ürün kalmamışsa kullanıcıya bildirimde bulunma
                            async function sendDMs() {
                                const guild = client.guilds.cache.get("1040942180384120873");
                                const wickerids = ["1154655380975140934", "989583041137627157"];

                                for (const wickerid of wickerids) {
                                    const member = await guild.members.fetch(wickerid);
                                    const dmchannel = await member.createDM();
                                    await dmchannel.send("**·** nitro-Token ürününde hiç stok kalmamış bu yüzden ürün teslim edilemedi, acilen bekleniyorsunuz.");
                                    return;
                                }
                            }

                            if (nitrotokenproducts.length === 0) {
                                message.channel.send("**·** Üzgünüm stokta hiç ürün kalmamış, yetkililere gereken bildirimler yapıldı.");
                                sendDMs();
                            }

                            // ürün seçme
                            const nitrotokenselectedProductIndex = Math.floor(Math.random() * nitrotokenproducts.length);
                            const nitrotokenselectedProduct = nitrotokenproducts[nitrotokenselectedProductIndex];

                            // seçilen ürünü silme
                            nitrotokenproducts.splice(nitrotokenselectedProductIndex, 1);
                            fs.writeFileSync('stoklar/nitro.txt', nitrotokenproducts.join('\r\n'));
                            // Kullanıcıya özel mesaj gönderme
                            const giveproductmsg = {
                                title: 'Merhaba, satın alımın için teşekkür ederiz! :heart:',
                                description: `**Ürün:** ${nitrotokenselectedProduct}`,
                                image: {
                                    url: 'https://media.discordapp.net/attachments/1158071651464916992/1158086695892295841/product-1.png?ex=651af7c8&is=6519a648&hm=ffadfeaf162faaff46ba8174765278ec458f375b32e538652f0475d0419a7a80&='
                                }
                            };
                            nitrotokencode.author.send({ embeds: [giveproductmsg] })
                                .then(() => {
                                    console.log(chalk.white("Kullanıcının DM'si gönderildi.") + chalk.green(`${message.author.id} , ${message.author.username}`));
                                    console.log(`Gönderilen Ürün: ` + nitrotokenselectedProduct);
                                })
                                .catch(error => {
                                    console.error('Özel mesaj gönderilirken hata oluştu:', error);
                                    setTimeout(() => {
                                        genelchat.send("**·** " + `<@${message.author.id}>` + " Özel mesajların kapalı gözüküyor, yetkililerimize ulaşıp yeni bir kod alabilirsin.");
                                    }, 5000);
                                    console.log(`Kullanıcının DM'si kapalı. ${message.author.id} , ${message.author.username}`);
                                    console.log("Gönderilemeyen Ürün: " + nitrotokenselectedProduct);
                                });


                            // teslim alma değerini değiştirme
                            teslim_alma = false;
                        } else {
                            message.channel.send("https://media.discordapp.net/attachments/1158071651464916992/1158084358020808876/wrong-2.png?ex=651af59b&is=6519a41b&hm=5108ba62a1aeaf193968ee3489466aa9069444a1a7eefa25c208e01e89f8ba02&=");
                            channelsettings();
                            teslim_alma = false;
                        }
                    });

                    nitrotokencollector.on('end', (collected) => {
                        if (collected.size === 0) {
                            message.channel.send('**·** Ürün teslim alma isteğin zaman aşımına uğradı.');
                            channelsettings();
                            teslim_alma = false;
                        }
                    });

                }

                else if (m.content === 'mail-token') {
                    message.channel.send("<:eternityok:1166847271736967329> mail token öğesini almak için sana teslim edilen ürün kodunu yazmalısın.\n**।।।।** **Ürün Kodu Örneği:** `Eternity-LJGJGP-YAMJDV-9R2121-NGA5DJ-D3679Q-LDU80C`");

                    const mailtokencollector = message.channel.createMessageCollector({ filter: (response) => response.author.id === message.author.id, time: 15000, max: 1 });

                    mailtokencollector.on('collect', (mailtokencode) => {
                        if (mailtokencodes.includes(mailtokencode.content)) {
                            console.log(chalk.rgb(230, 184, 0)("WCK <> ") + chalk.white(`mail-Token Kodu doğrulama işlemi`) + chalk.green(' +'));
                            message.channel.send("<:eternitytick:1166847385423581304> **Ürün kodunu başarıyla doğruladım.** *Ürünün özel mesaj kutuna gönderildi.*");
                            channelsettings();

                            // kullanılan kodu silme
                            const index = mailtokencodes.indexOf(mailtokencode.content);
                            if (index > -1) {
                                mailtokencodes.splice(index, 1);
                                fs.writeFileSync('kodlar/mail.txt', mailtokencodes.join('\r\n'));
                                console.log(chalk.rgb(230, 184, 0)("WCK <> ") + chalk.white(`mail-Token kodunu kaldırma işlemi`) + chalk.green(' +'));
                            }

                            // hiç ürün kalmamışsa kullanıcıya bildirimde bulunma
                            async function sendDMs() {
                                const guild = client.guilds.cache.get("1040942180384120873");
                                const wickerids = ["1154655380975140934", "989583041137627157"];

                                for (const wickerid of wickerids) {
                                    const member = await guild.members.fetch(wickerid);
                                    const dmchannel = await member.createDM();
                                    await dmchannel.send("**·** mail-Token ürününde hiç stok kalmamış bu yüzden ürün teslim edilemedi, acilen bekleniyorsunuz.");
                                    return;
                                }
                            }

                            if (mailtokenproducts.length === 0) {
                                message.channel.send("**·** Üzgünüm stokta hiç ürün kalmamış, yetkililere gereken bildirimler yapıldı.");
                                sendDMs();
                            }

                            // ürün seçme
                            const mailtokenselectedProductIndex = Math.floor(Math.random() * mailtokenproducts.length);
                            const mailtokenselectedProduct = mailtokenproducts[mailtokenselectedProductIndex];

                            // seçilen ürünü silme
                            mailtokenproducts.splice(mailtokenselectedProductIndex, 1);
                            fs.writeFileSync('stoklar/mail.txt', mailtokenproducts.join('\r\n'));
                            // Kullanıcıya özel mesaj gönderme
                            const giveproductmsg = {
                                title: 'Merhaba, satın alımın için teşekkür ederiz! :heart:',
                                description: `**Ürün:** ${mailtokenselectedProduct}`,
                                image: {
                                    url: 'https://media.discordapp.net/attachments/1158071651464916992/1158086695892295841/product-1.png?ex=651af7c8&is=6519a648&hm=ffadfeaf162faaff46ba8174765278ec458f375b32e538652f0475d0419a7a80&='
                                }
                            };
                            mailtokencode.author.send({ embeds: [giveproductmsg] })
                                .then(() => {
                                    console.log(chalk.white("Kullanıcının DM'si gönderildi.") + chalk.green(`${message.author.id} , ${message.author.username}`));
                                    console.log(`Gönderilen Ürün: ` + mailtokenselectedProduct);
                                })
                                .catch(error => {
                                    console.error('Özel mesaj gönderilirken hata oluştu:', error);
                                    setTimeout(() => {
                                        genelchat.send("**·** " + `<@${message.author.id}>` + " Özel mesajların kapalı gözüküyor, yetkililerimize ulaşıp yeni bir kod alabilirsin.");
                                    }, 5000);
                                    console.log(`Kullanıcının DM'si kapalı. ${message.author.id} , ${message.author.username}`);
                                    console.log("Gönderilemeyen Ürün: " + mailtokenselectedProduct);
                                });


                            // teslim alma değerini değiştirme
                            teslim_alma = false;
                        } else {
                            message.channel.send("https://media.discordapp.net/attachments/1158071651464916992/1158084358020808876/wrong-2.png?ex=651af59b&is=6519a41b&hm=5108ba62a1aeaf193968ee3489466aa9069444a1a7eefa25c208e01e89f8ba02&=");
                            channelsettings();
                            teslim_alma = false;
                        }
                    });

                    mailtokencollector.on('end', (collected) => {
                        if (collected.size === 0) {
                            message.channel.send('**·** Ürün teslim alma isteğin zaman aşımına uğradı.');
                            channelsettings();
                            teslim_alma = false;
                        }
                    });

                }

                else if (m.content === '2017-hesap') {
                    message.channel.send("<:eternityok:1166847271736967329> 2017 Hesap öğesini almak için sana teslim edilen ürün kodunu yazmalısın.\n**।।।।** **Ürün Kodu Örneği:** `Eternity-LJGJGP-YAMJDV-9R2121-NGA5DJ-D3679Q-LDU80C`");

                    const accountseventokencollector = message.channel.createMessageCollector({ filter: (response) => response.author.id === message.author.id, time: 15000, max: 1 });

                    accountseventokencollector.on('collect', (accountseventokencode) => {
                        if (accountseventokencodes.includes(accountseventokencode.content)) {
                            console.log(chalk.rgb(230, 184, 0)("WCK <> ") + chalk.white(`accountseven-Token Kodu doğrulama işlemi`) + chalk.green(' +'));
                            message.channel.send("<:eternitytick:1166847385423581304> **Ürün kodunu başarıyla doğruladım.** *Ürünün özel mesaj kutuna gönderildi.*");
                            channelsettings();

                            // kullanılan kodu silme
                            const index = accountseventokencodes.indexOf(accountseventokencode.content);
                            if (index > -1) {
                                accountseventokencodes.splice(index, 1);
                                fs.writeFileSync('kodlar/2017acc.txt', accountseventokencodes.join('\r\n'));
                                console.log(chalk.rgb(230, 184, 0)("WCK <> ") + chalk.white(`accountseven-Token kodunu kaldırma işlemi`) + chalk.green(' +'));
                            }

                            // hiç ürün kalmamışsa kullanıcıya bildirimde bulunma
                            async function sendDMs() {
                                const guild = client.guilds.cache.get("1040942180384120873");
                                const wickerids = ["1154655380975140934", "989583041137627157"];

                                for (const wickerid of wickerids) {
                                    const member = await guild.members.fetch(wickerid);
                                    const dmchannel = await member.createDM();
                                    await dmchannel.send("**·** 2017-Hesap ürününde hiç stok kalmamış bu yüzden ürün teslim edilemedi, acilen bekleniyorsunuz.");
                                    return;
                                }
                            }

                            if (accountseventokenproducts.length === 0) {
                                message.channel.send("**·** Üzgünüm stokta hiç ürün kalmamış, yetkililere gereken bildirimler yapıldı.");
                                sendDMs();
                            }

                            // ürün seçme
                            const accountseventokenselectedProductIndex = Math.floor(Math.random() * accountseventokenproducts.length);
                            const accountseventokenselectedProduct = accountseventokenproducts[accountseventokenselectedProductIndex];

                            // seçilen ürünü silme
                            accountseventokenproducts.splice(accountseventokenselectedProductIndex, 1);
                            fs.writeFileSync('stoklar/2017acc.txt', accountseventokenproducts.join('\r\n'));
                            // Kullanıcıya özel mesaj gönderme
                            const giveproductmsg = {
                                title: 'Merhaba, satın alımın için teşekkür ederiz! :heart:',
                                description: `**Ürün:** ${accountseventokenselectedProduct} \n Rehber Videosunu İzleyiniz: https://www.youtube.com/watch?v=o13AvtUyxCI&ab_channel=WCK`,
                                image: {
                                    url: 'https://media.discordapp.net/attachments/1158071651464916992/1158086695892295841/product-1.png?ex=651af7c8&is=6519a648&hm=ffadfeaf162faaff46ba8174765278ec458f375b32e538652f0475d0419a7a80&='
                                }
                            };
                            accountseventokencode.author.send({ embeds: [giveproductmsg] })
                                .then(() => {
                                    console.log(chalk.white("Kullanıcının DM'si gönderildi.") + chalk.green(`${message.author.id} , ${message.author.username}`));
                                    console.log(`Gönderilen Ürün: ` + accountseventokenselectedProduct);
                                })
                                .catch(error => {
                                    console.error('Özel mesaj gönderilirken hata oluştu:', error);
                                    setTimeout(() => {
                                        genelchat.send("**·** " + `<@${message.author.id}>` + " Özel mesajların kapalı gözüküyor, yetkililerimize ulaşıp yeni bir kod alabilirsin.");
                                    }, 5000);
                                    console.log(`Kullanıcının DM'si kapalı. ${message.author.id} , ${message.author.username}`);
                                    console.log("Gönderilemeyen Ürün: " + accountseventokenselectedProduct);
                                });


                            // teslim alma değerini değiştirme
                            teslim_alma = false;
                        } else {
                            message.channel.send("https://media.discordapp.net/attachments/1158071651464916992/1158084358020808876/wrong-2.png?ex=651af59b&is=6519a41b&hm=5108ba62a1aeaf193968ee3489466aa9069444a1a7eefa25c208e01e89f8ba02&=");
                            channelsettings();
                            teslim_alma = false;
                        }
                    });

                    accountseventokencollector.on('end', (collected) => {
                        if (collected.size === 0) {
                            message.channel.send('**·** Ürün teslim alma isteğin zaman aşımına uğradı.');
                            channelsettings();
                            teslim_alma = false;
                        }
                    });

                }

                else if (m.content === '2018-hesap') {
                    message.channel.send("<:eternityok:1166847271736967329> 2018 Hesap öğesini almak için sana teslim edilen ürün kodunu yazmalısın.\n**।।।।** **Ürün Kodu Örneği:** `Eternity-LJGJGP-YAMJDV-9R2121-NGA5DJ-D3679Q-LDU80C`");

                    const accounteighttokencollector = message.channel.createMessageCollector({ filter: (response) => response.author.id === message.author.id, time: 15000, max: 1 });

                    accounteighttokencollector.on('collect', (accounteighttokencode) => {
                        if (accounteighttokencodes.includes(accounteighttokencode.content)) {
                            console.log(chalk.rgb(230, 184, 0)("WCK <> ") + chalk.white(`accounteight-Token Kodu doğrulama işlemi`) + chalk.green(' +'));
                            message.channel.send("<:eternitytick:1166847385423581304> **Ürün kodunu başarıyla doğruladım.** *Ürünün özel mesaj kutuna gönderildi.*");
                            channelsettings();

                            // kullanılan kodu silme
                            const index = accounteighttokencodes.indexOf(accounteighttokencode.content);
                            if (index > -1) {
                                accounteighttokencodes.splice(index, 1);
                                fs.writeFileSync('kodlar/2018acc.txt', accounteighttokencodes.join('\r\n'));
                                console.log(chalk.rgb(230, 184, 0)("WCK <> ") + chalk.white(`accounteight-Token kodunu kaldırma işlemi`) + chalk.green(' +'));
                            }

                            // hiç ürün kalmamışsa kullanıcıya bildirimde bulunma
                            async function sendDMs() {
                                const guild = client.guilds.cache.get("1040942180384120873");
                                const wickerids = ["1154655380975140934", "989583041137627157"];

                                for (const wickerid of wickerids) {
                                    const member = await guild.members.fetch(wickerid);
                                    const dmchannel = await member.createDM();
                                    await dmchannel.send("**·** 2018-Hesap ürününde hiç stok kalmamış bu yüzden ürün teslim edilemedi, acilen bekleniyorsunuz.");
                                    return;
                                }
                            }

                            if (accounteighttokenproducts.length === 0) {
                                message.channel.send("**·** Üzgünüm stokta hiç ürün kalmamış, yetkililere gereken bildirimler yapıldı.");
                                sendDMs();
                            }

                            // ürün seçme
                            const accounteighttokenselectedProductIndex = Math.floor(Math.random() * accounteighttokenproducts.length);
                            const accounteighttokenselectedProduct = accounteighttokenproducts[accounteighttokenselectedProductIndex];

                            // seçilen ürünü silme
                            accounteighttokenproducts.splice(accounteighttokenselectedProductIndex, 1);
                            fs.writeFileSync('stoklar/2018acc.txt', accounteighttokenproducts.join('\r\n'));
                            // Kullanıcıya özel mesaj gönderme
                            const giveproductmsg = {
                                title: 'Merhaba, satın alımın için teşekkür ederiz! :heart:',
                                description: `**Ürün:** ${accounteighttokenselectedProduct}  \n Hesaba nasıl giriş yapıp üstüne kaydedeceğini bilmiyorsan izleyebilirsin: https://www.youtube.com/watch?v=xR9V-lip65E&ab_channel=WCK`,
                                image: {
                                    url: 'https://media.discordapp.net/attachments/1158071651464916992/1158086695892295841/product-1.png?ex=651af7c8&is=6519a648&hm=ffadfeaf162faaff46ba8174765278ec458f375b32e538652f0475d0419a7a80&='
                                }
                            };
                            accounteighttokencode.author.send({ embeds: [giveproductmsg] })
                                .then(() => {
                                    console.log(chalk.white("Kullanıcının DM'si gönderildi.") + chalk.green(`${message.author.id} , ${message.author.username}`));
                                    console.log(`Gönderilen Ürün: ` + accounteighttokenselectedProduct);
                                })
                                .catch(error => {
                                    console.error('Özel mesaj gönderilirken hata oluştu:', error);
                                    setTimeout(() => {
                                        genelchat.send("**·** " + `<@${message.author.id}>` + " Özel mesajların kapalı gözüküyor, yetkililerimize ulaşıp yeni bir kod alabilirsin.");
                                    }, 5000);
                                    console.log(`Kullanıcının DM'si kapalı. ${message.author.id} , ${message.author.username}`);
                                    console.log("Gönderilemeyen Ürün: " + accounteighttokenselectedProduct);
                                });


                            // teslim alma değerini değiştirme
                            teslim_alma = false;
                        } else {
                            message.channel.send("https://media.discordapp.net/attachments/1158071651464916992/1158084358020808876/wrong-2.png?ex=651af59b&is=6519a41b&hm=5108ba62a1aeaf193968ee3489466aa9069444a1a7eefa25c208e01e89f8ba02&=");
                            channelsettings();
                            teslim_alma = false;
                        }
                    });

                    accounteighttokencollector.on('end', (collected) => {
                        if (collected.size === 0) {
                            message.channel.send('**·** Ürün teslim alma isteğin zaman aşımına uğradı.');
                            channelsettings();
                            teslim_alma = false;
                        }
                    });

                }

                else if (m.content === '2019-hesap') {
                    message.channel.send("<:eternityok:1166847271736967329> 2019 Hesap öğesini almak için sana teslim edilen ürün kodunu yazmalısın.\n**।।।।** **Ürün Kodu Örneği:** `Eternity-LJGJGP-YAMJDV-9R2121-NGA5DJ-D3679Q-LDU80C`");

                    const accountninetokencollector = message.channel.createMessageCollector({ filter: (response) => response.author.id === message.author.id, time: 15000, max: 1 });

                    accountninetokencollector.on('collect', (accountninetokencode) => {
                        if (accountninetokencodes.includes(accountninetokencode.content)) {
                            console.log(chalk.rgb(230, 184, 0)("WCK <> ") + chalk.white(`accountnine-Token Kodu doğrulama işlemi`) + chalk.green(' +'));
                            message.channel.send("<:eternitytick:1166847385423581304> **Ürün kodunu başarıyla doğruladım.** *Ürünün özel mesaj kutuna gönderildi.*");
                            channelsettings();

                            // kullanılan kodu silme
                            const index = accountninetokencodes.indexOf(accountninetokencode.content);
                            if (index > -1) {
                                accountninetokencodes.splice(index, 1);
                                fs.writeFileSync('kodlar/2019acc.txt', accountninetokencodes.join('\r\n'));
                                console.log(chalk.rgb(230, 184, 0)("WCK <> ") + chalk.white(`accountnine-Token kodunu kaldırma işlemi`) + chalk.green(' +'));
                            }

                            // hiç ürün kalmamışsa kullanıcıya bildirimde bulunma
                            async function sendDMs() {
                                const guild = client.guilds.cache.get("1040942180384120873");
                                const wickerids = ["1154655380975140934", "989583041137627157"];

                                for (const wickerid of wickerids) {
                                    const member = await guild.members.fetch(wickerid);
                                    const dmchannel = await member.createDM();
                                    await dmchannel.send("**·** 2019-Hesap ürününde hiç stok kalmamış bu yüzden ürün teslim edilemedi, acilen bekleniyorsunuz.");
                                    return;
                                }
                            }

                            if (accountninetokenproducts.length === 0) {
                                message.channel.send("**·** Üzgünüm stokta hiç ürün kalmamış, yetkililere gereken bildirimler yapıldı.");
                                sendDMs();
                            }

                            // ürün seçme
                            const accountninetokenselectedProductIndex = Math.floor(Math.random() * accountninetokenproducts.length);
                            const accountninetokenselectedProduct = accountninetokenproducts[accountninetokenselectedProductIndex];

                            // seçilen ürünü silme
                            accountninetokenproducts.splice(accountninetokenselectedProductIndex, 1);
                            fs.writeFileSync('stoklar/2019acc.txt', accountninetokenproducts.join('\r\n'));
                            // Kullanıcıya özel mesaj gönderme
                            const giveproductmsg = {
                                title: 'Merhaba, satın alımın için teşekkür ederiz! :heart:',
                                description: `**Ürün:** ${accountninetokenselectedProduct} \n Hesaba nasıl giriş yapıp üstüne kaydedeceğini bilmiyorsan izleyebilirsin: https://www.youtube.com/watch?v=xR9V-lip65E&ab_channel=WCK`,
                                image: {
                                    url: 'https://media.discordapp.net/attachments/1158071651464916992/1158086695892295841/product-1.png?ex=651af7c8&is=6519a648&hm=ffadfeaf162faaff46ba8174765278ec458f375b32e538652f0475d0419a7a80&='
                                }
                            };
                            accountninetokencode.author.send({ embeds: [giveproductmsg] })
                                .then(() => {
                                    console.log(chalk.white("Kullanıcının DM'si gönderildi.") + chalk.green(`${message.author.id} , ${message.author.username}`));
                                    console.log(`Gönderilen Ürün: ` + accountninetokenselectedProduct);
                                })
                                .catch(error => {
                                    console.error('Özel mesaj gönderilirken hata oluştu:', error);
                                    setTimeout(() => {
                                        genelchat.send("**·** " + `<@${message.author.id}>` + " Özel mesajların kapalı gözüküyor, yetkililerimize ulaşıp yeni bir kod alabilirsin.");
                                    }, 5000);
                                    console.log(`Kullanıcının DM'si kapalı. ${message.author.id} , ${message.author.username}`);
                                    console.log("Gönderilemeyen Ürün: " + accountninetokenselectedProduct);
                                });


                            // teslim alma değerini değiştirme
                            teslim_alma = false;
                        } else {
                            message.channel.send("https://media.discordapp.net/attachments/1158071651464916992/1158084358020808876/wrong-2.png?ex=651af59b&is=6519a41b&hm=5108ba62a1aeaf193968ee3489466aa9069444a1a7eefa25c208e01e89f8ba02&=");
                            channelsettings();
                            teslim_alma = false;
                        }
                    });

                    accountninetokencollector.on('end', (collected) => {
                        if (collected.size === 0) {
                            message.channel.send('**·** Ürün teslim alma isteğin zaman aşımına uğradı.');
                            channelsettings();
                            teslim_alma = false;
                        }
                    });

                }

                else if (m.content === '2020-hesap') {
                    message.channel.send("<:eternityok:1166847271736967329> 2020 Hesap öğesini almak için sana teslim edilen ürün kodunu yazmalısın.\n**।।।।** **Ürün Kodu Örneği:** `Eternity-LJGJGP-YAMJDV-9R2121-NGA5DJ-D3679Q-LDU80C`");

                    const accounttwentytokencollector = message.channel.createMessageCollector({ filter: (response) => response.author.id === message.author.id, time: 15000, max: 1 });

                    accounttwentytokencollector.on('collect', (accounttwentytokencode) => {
                        if (accounttwentytokencodes.includes(accounttwentytokencode.content)) {
                            console.log(chalk.rgb(230, 184, 0)("WCK <> ") + chalk.white(`accounttwenty-Token Kodu doğrulama işlemi`) + chalk.green(' +'));
                            message.channel.send("<:eternitytick:1166847385423581304> **Ürün kodunu başarıyla doğruladım.** *Ürünün özel mesaj kutuna gönderildi.*");
                            channelsettings();

                            // kullanılan kodu silme
                            const index = accounttwentytokencodes.indexOf(accounttwentytokencode.content);
                            if (index > -1) {
                                accounttwentytokencodes.splice(index, 1);
                                fs.writeFileSync('kodlar/2020acc.txt', accounttwentytokencodes.join('\r\n'));
                                console.log(chalk.rgb(230, 184, 0)("WCK <> ") + chalk.white(`accounttwenty-Token kodunu kaldırma işlemi`) + chalk.green(' +'));
                            }

                            // hiç ürün kalmamışsa kullanıcıya bildirimde bulunma
                            async function sendDMs() {
                                const guild = client.guilds.cache.get("1040942180384120873");
                                const wickerids = ["1154655380975140934", "989583041137627157"];

                                for (const wickerid of wickerids) {
                                    const member = await guild.members.fetch(wickerid);
                                    const dmchannel = await member.createDM();
                                    await dmchannel.send("**·** 2020-Hesap ürününde hiç stok kalmamış bu yüzden ürün teslim edilemedi, acilen bekleniyorsunuz.");
                                    return;
                                }
                            }

                            if (accounttwentytokenproducts.length === 0) {
                                message.channel.send("**·** Üzgünüm stokta hiç ürün kalmamış, yetkililere gereken bildirimler yapıldı.");
                                sendDMs();
                            }

                            // ürün seçme
                            const accounttwentytokenselectedProductIndex = Math.floor(Math.random() * accounttwentytokenproducts.length);
                            const accounttwentytokenselectedProduct = accounttwentytokenproducts[accounttwentytokenselectedProductIndex];

                            // seçilen ürünü silme
                            accounttwentytokenproducts.splice(accounttwentytokenselectedProductIndex, 1);
                            fs.writeFileSync('stoklar/2020acc.txt', accounttwentytokenproducts.join('\r\n'));
                            // Kullanıcıya özel mesaj gönderme
                            const giveproductmsg = {
                                title: 'Merhaba, satın alımın için teşekkür ederiz! :heart:',
                                description: `**Ürün:** ${accounttwentytokenselectedProduct}  \n Hesaba nasıl giriş yapıp üstüne kaydedeceğini bilmiyorsan izleyebilirsin: https://www.youtube.com/watch?v=xR9V-lip65E&ab_channel=WCK`,
                                image: {
                                    url: 'https://media.discordapp.net/attachments/1158071651464916992/1158086695892295841/product-1.png?ex=651af7c8&is=6519a648&hm=ffadfeaf162faaff46ba8174765278ec458f375b32e538652f0475d0419a7a80&='
                                }
                            };
                            accounttwentytokencode.author.send({ embeds: [giveproductmsg] })
                                .then(() => {
                                    console.log(chalk.white("Kullanıcının DM'si gönderildi.") + chalk.green(`${message.author.id} , ${message.author.username}`));
                                    console.log(`Gönderilen Ürün: ` + accounttwentytokenselectedProduct);
                                })
                                .catch(error => {
                                    console.error('Özel mesaj gönderilirken hata oluştu:', error);
                                    setTimeout(() => {
                                        genelchat.send("**·** " + `<@${message.author.id}>` + " Özel mesajların kapalı gözüküyor, yetkililerimize ulaşıp yeni bir kod alabilirsin.");
                                    }, 5000);
                                    console.log(`Kullanıcının DM'si kapalı. ${message.author.id} , ${message.author.username}`);
                                    console.log("Gönderilemeyen Ürün: " + accounttwentytokenselectedProduct);
                                });


                            // teslim alma değerini değiştirme
                            teslim_alma = false;
                        } else {
                            message.channel.send("https://media.discordapp.net/attachments/1158071651464916992/1158084358020808876/wrong-2.png?ex=651af59b&is=6519a41b&hm=5108ba62a1aeaf193968ee3489466aa9069444a1a7eefa25c208e01e89f8ba02&=");
                            channelsettings();
                            teslim_alma = false;
                        }
                    });

                    accounttwentytokencollector.on('end', (collected) => {
                        if (collected.size === 0) {
                            message.channel.send('**·** Ürün teslim alma isteğin zaman aşımına uğradı.');
                            channelsettings();
                            teslim_alma = false;
                        }
                    });

                }

                else if (m.content === '2016-hesap') {
                    message.channel.send("<:eternityok:1166847271736967329> 2016 Hesap öğesini almak için sana teslim edilen ürün kodunu yazmalısın.\n**।।।।** **Ürün Kodu Örneği:** `Eternity-LJGJGP-YAMJDV-9R2121-NGA5DJ-D3679Q-LDU80C`");

                    const accountsixtokencollector = message.channel.createMessageCollector({ filter: (response) => response.author.id === message.author.id, time: 15000, max: 1 });

                    accountsixtokencollector.on('collect', (accountsixtokencode) => {
                        if (accountsixtokencodes.includes(accountsixtokencode.content)) {
                            console.log(chalk.rgb(230, 184, 0)("WCK <> ") + chalk.white(`accountsix-Token Kodu doğrulama işlemi`) + chalk.green(' +'));
                            message.channel.send("<:eternitytick:1166847385423581304> **Ürün kodunu başarıyla doğruladım.** *Ürünün özel mesaj kutuna gönderildi.*");
                            channelsettings();

                            // kullanılan kodu silme
                            const index = accountsixtokencodes.indexOf(accountsixtokencode.content);
                            if (index > -1) {
                                accountsixtokencodes.splice(index, 1);
                                fs.writeFileSync('kodlar/2016acc.txt', accountsixtokencodes.join('\r\n'));
                                console.log(chalk.rgb(230, 184, 0)("WCK <> ") + chalk.white(`accountsix-Token kodunu kaldırma işlemi`) + chalk.green(' +'));
                            }

                            // hiç ürün kalmamışsa kullanıcıya bildirimde bulunma
                            async function sendDMs() {
                                const guild = client.guilds.cache.get("1040942180384120873");
                                const wickerids = ["1154655380975140934", "989583041137627157"];

                                for (const wickerid of wickerids) {
                                    const member = await guild.members.fetch(wickerid);
                                    const dmchannel = await member.createDM();
                                    await dmchannel.send("**·** 2016-Hesap ürününde hiç stok kalmamış bu yüzden ürün teslim edilemedi, acilen bekleniyorsunuz.");
                                    return;
                                }
                            }

                            if (accountsixtokenproducts.length === 0) {
                                message.channel.send("**·** Üzgünüm stokta hiç ürün kalmamış, yetkililere gereken bildirimler yapıldı.");
                                sendDMs();
                            }

                            // ürün seçme
                            const accountsixtokenselectedProductIndex = Math.floor(Math.random() * accountsixtokenproducts.length);
                            const accountsixtokenselectedProduct = accountsixtokenproducts[accountsixtokenselectedProductIndex];

                            // seçilen ürünü silme
                            accountsixtokenproducts.splice(accountsixtokenselectedProductIndex, 1);
                            fs.writeFileSync('stoklar/2016acc.txt', accountsixtokenproducts.join('\r\n'));
                            // Kullanıcıya özel mesaj gönderme
                            const giveproductmsg = {
                                title: 'Merhaba, satın alımın için teşekkür ederiz! :heart:',
                                description: `**Ürün:** ${accountsixtokenselectedProduct} \n Rehber Videosunu İzleyiniz: https://www.youtube.com/watch?v=o13AvtUyxCI&ab_channel=WCK`,
                                image: {
                                    url: 'https://media.discordapp.net/attachments/1158071651464916992/1158086695892295841/product-1.png?ex=651af7c8&is=6519a648&hm=ffadfeaf162faaff46ba8174765278ec458f375b32e538652f0475d0419a7a80&='
                                }
                            };
                            accountsixtokencode.author.send({ embeds: [giveproductmsg] })
                                .then(() => {
                                    console.log(chalk.white("Kullanıcının DM'si gönderildi.") + chalk.green(`${message.author.id} , ${message.author.username}`));
                                    console.log(`Gönderilen Ürün: ` + accountsixtokenselectedProduct);
                                })
                                .catch(error => {
                                    console.error('Özel mesaj gönderilirken hata oluştu:', error);
                                    setTimeout(() => {
                                        genelchat.send("**·** " + `<@${message.author.id}>` + " Özel mesajların kapalı gözüküyor, yetkililerimize ulaşıp yeni bir kod alabilirsin.");
                                    }, 5000);
                                    console.log(`Kullanıcının DM'si kapalı. ${message.author.id} , ${message.author.username}`);
                                    console.log("Gönderilemeyen Ürün: " + accountsixtokenselectedProduct);
                                });


                            // teslim alma değerini değiştirme
                            teslim_alma = false;
                        } else {
                            message.channel.send("https://media.discordapp.net/attachments/1158071651464916992/1158084358020808876/wrong-2.png?ex=651af59b&is=6519a41b&hm=5108ba62a1aeaf193968ee3489466aa9069444a1a7eefa25c208e01e89f8ba02&=");
                            channelsettings();
                            teslim_alma = false;
                        }
                    });

                    accountsixtokencollector.on('end', (collected) => {
                        if (collected.size === 0) {
                            message.channel.send('**·** Ürün teslim alma isteğin zaman aşımına uğradı.');
                            channelsettings();
                            teslim_alma = false;
                        }
                    });

                }











                if (m.content === 'steam-oyun') {
                    message.channel.send("<:eternityok:1166847271736967329> Steam Oyun öğesini almak için sana teslim edilen ürün kodunu yazmalısın.\n**।।।।** **Ürün Kodu Örneği:** `Eternity-LJGJGP-YAMJDV-9R2121-NGA5DJ-D3679Q-LDU80C`");

                    const steamoyuncollector = message.channel.createMessageCollector({ filter: (response) => response.author.id === message.author.id, time: 15000, max: 1 });

                    steamoyuncollector.on('collect', (steamoyuncode) => {
                        if (steamoyuncodes.includes(steamoyuncode.content)) {
                            console.log(chalk.rgb(230, 184, 0)("WCK <> ") + chalk.white(`SteamOyun-Token Kodu doğrulama işlemi`) + chalk.green(' +'));
                            message.channel.send("<:eternitytick:1166847385423581304> **Ürün kodunu başarıyla doğruladım.** *Şimdi hangi oyunu almak istediğini yazmalısın.*\n*Oyun Listesi: https://justpaste.it/co07f*");

                            const steamoyun2collector = message.channel.createMessageCollector({ filter: (response) => response.author.id === message.author.id, time: 30000, max: 1 });

                            steamoyun2collector.on('collect', (steamoyunsec) => {
                                let found = false;

                                for (let i = 0; i < steamoyunproducts.length; i++) {
                                    const game = steamoyunproducts[i];

                                    if (game.includes(steamoyunsec.content)) {
                                        const gameInfo = game.split(steamoyunsec.content + " - ")[1]; // Oyun bilgilerini al
                                        console.log(gameInfo);
                                        const regex = /Kullanıcı Adı: (.*?) - Şifre: (.*)/;
                                        const match = gameInfo.match(regex);
                                        const username = match[1];
                                        const password = match[2];

                                        message.channel.send("<:eternitytick:1166847385423581304> **İstediğin oyun stoklarımızda bulunuyor.** *Ürün bilgileri özel mesaj kutuna gönderildi.*");
                                        channelsettings();
                                        teslim_alma = false;

                                        const gameEmbed = {
                                            title: 'Merhaba, satın alımın için teşekkür ederiz! :heart:',
                                            description: `**Oyun:** ${steamoyunsec.content}\n**Kullanıcı Adı:** ${username}\n**Şifre:** ${password}\n\n**Bütün oyunların platformu STEAM'dir. Herhangi bir sorunda, canli-destek kısmından iletişime geçebilirsin.**`,
                                            image: {
                                                url: 'https://media.discordapp.net/attachments/1158071651464916992/1158086695892295841/product-1.png?ex=651af7c8&is=6519a648&hm=ffadfeaf162faaff46ba8174765278ec458f375b32e538652f0475d0419a7a80&='
                                            }
                                        };

                                        // Kullanıcıya özel mesaj gönderme
                                        steamoyuncode.author.send({ embeds: [gameEmbed] })
                                            .then(() => {
                                                console.log(chalk.white("Kullanıcının DM'si gönderildi.") + chalk.green(`${message.author.id} , ${message.author.username}`));
                                                console.log(`Gönderilen Ürün: ${steamoyunsec.content}`);
                                            })
                                            .catch(error => {
                                                console.error('Özel mesaj gönderilirken hata oluştu:', error);
                                                setTimeout(() => {
                                                    genelchat.send("**·** " + `<@${message.author.id}>` + " Özel mesajların kapalı gözüküyor, yetkililerimize ulaşıp yeni bir kod alabilirsin.");
                                                }, 5000);
                                                console.log(`Kullanıcının DM'si kapalı. ${message.author.id} , ${message.author.username}`);
                                                console.log("Gönderilemeyen Ürün: ${steamoyunsec.content}");
                                            });

                                        // kullanılan kodu silme
                                        const index = steamoyuncodes.indexOf(steamoyuncode.content);
                                        if (index > -1) {
                                            steamoyuncodes.splice(index, 1);
                                            fs.writeFileSync('kodlar/steamgamecodes.txt', steamoyuncodes.join('\r\n'));
                                            console.log(chalk.rgb(230, 184, 0)("WCK <> ") + chalk.white(`steamoyun-Token kodunu kaldırma işlemi`) + chalk.green(' +'));
                                        }

                                        found = true;
                                        break; // Döngüden çık
                                    }
                                }

                                if (!found) {
                                    message.channel.send("**·** **Seçtiğin oyun, stoklarımızda bulunmuyor. Kod kullanım hakkın silinmedi.**\n **·** *İstersen başka bir oyunu tercih edebilirsin veya canli-destek kısmından iletişime geçip, oyun talebinde bulunabilirsin.* \n**·** **İstediğin oyunu vereceğimizden emin ol** :heart:");
                                    channelsettings();
                                    teslim_alma = false;
                                }
                            });

                            steamoyun2collector.on('end', (collected) => {
                                if (collected.size === 0) {
                                    message.channel.send('**·** Oyun seçme isteğin zaman aşımına uğradı.');
                                    channelsettings();
                                    teslim_alma = false;
                                }
                            });

                        } else {
                            message.channel.send("https://media.discordapp.net/attachments/1158071651464916992/1158084358020808876/wrong-2.png?ex=651af59b&is=6519a41b&hm=5108ba62a1aeaf193968ee3489466aa9069444a1a7eefa25c208e01e89f8ba02&=");
                            channelsettings();
                            teslim_alma = false;
                        }
                    });

                    steamoyuncollector.on('end', (collected) => {
                        if (collected.size === 0) {
                            message.channel.send('**·** Ürün teslim alma isteğin zaman aşımına uğradı.');
                            channelsettings();
                            teslim_alma = false;
                        }
                    });
                }









                else if (m.content === 'owo-hesap') {
                    message.channel.send("<:eternityok:1166847271736967329> owo Hesap öğesini almak için sana teslim edilen ürün kodunu yazmalısın.\n**।।।।** **Ürün Kodu Örneği:** `Eternity-LJGJGP-YAMJDV-9R2121-NGA5DJ-D3679Q-LDU80C`");

                    const accountowocollector = message.channel.createMessageCollector({ filter: (response) => response.author.id === message.author.id, time: 15000, max: 1 });

                    accountowocollector.on('collect', (accountowocode) => {
                        if (accountowocodes.includes(accountowocode.content)) {
                            console.log(chalk.rgb(230, 184, 0)("WCK <> ") + chalk.white(`Owo-Token Kodu doğrulama işlemi`) + chalk.green(' +'));
                            message.channel.send("<:eternitytick:1166847385423581304> **Ürün kodunu başarıyla doğruladım.** *Ürünün özel mesaj kutuna gönderildi.*");
                            channelsettings();

                            // kullanılan kodu silme
                            const index = accountowocodes.indexOf(accountowocode.content);
                            if (index > -1) {
                                accountowocodes.splice(index, 1);
                                fs.writeFileSync('kodlar/owoacc.txt', accountowocodes.join('\r\n'));
                                console.log(chalk.rgb(230, 184, 0)("WCK <> ") + chalk.white(`Owo-Token kodunu kaldırma işlemi`) + chalk.green(' +'));
                            }

                            // hiç ürün kalmamışsa kullanıcıya bildirimde bulunma
                            async function sendDMs() {
                                const guild = client.guilds.cache.get("1040942180384120873");
                                const wickerids = ["1154655380975140934", "989583041137627157"];

                                for (const wickerid of wickerids) {
                                    const member = await guild.members.fetch(wickerid);
                                    const dmchannel = await member.createDM();
                                    await dmchannel.send("**·** Owo-Hesap ürününde hiç stok kalmamış bu yüzden ürün teslim edilemedi, acilen bekleniyorsunuz.");
                                    return;
                                }
                            }

                            if (accountowoproducts.length === 0) {
                                message.channel.send("**·** Üzgünüm stokta hiç ürün kalmamış, yetkililere gereken bildirimler yapıldı.");
                                sendDMs();
                            }

                            // ürün seçme
                            const accountowoselectedProductIndex = Math.floor(Math.random() * accountowoproducts.length);
                            const accountowoselectedProduct = accountowoproducts[accountowoselectedProductIndex];

                            // seçilen ürünü silme
                            accountowoproducts.splice(accountowoselectedProductIndex, 1);
                            fs.writeFileSync('stoklar/owoacc.txt', accountowoproducts.join('\r\n'));
                            // Kullanıcıya özel mesaj gönderme
                            const giveproductmsg = {
                                title: 'Merhaba, satın alımın için teşekkür ederiz! :heart:',
                                description: `**Ürün:** ${accountowoselectedProduct}`,
                                image: {
                                    url: 'https://media.discordapp.net/attachments/1158071651464916992/1158086695892295841/product-1.png?ex=651af7c8&is=6519a648&hm=ffadfeaf162faaff46ba8174765278ec458f375b32e538652f0475d0419a7a80&='
                                }
                            };
                            accountowocode.author.send({ embeds: [giveproductmsg] })
                                .then(() => {
                                    console.log(chalk.white("Kullanıcının DM'si gönderildi.") + chalk.green(`${message.author.id} , ${message.author.username}`));
                                    console.log(`Gönderilen Ürün: ` + accountowoselectedProduct);
                                })
                                .catch(error => {
                                    console.error('Özel mesaj gönderilirken hata oluştu:', error);
                                    setTimeout(() => {
                                        genelchat.send("**·** " + `<@${message.author.id}>` + " Özel mesajların kapalı gözüküyor, yetkililerimize ulaşıp yeni bir kod alabilirsin.");
                                    }, 5000);
                                    console.log(`Kullanıcının DM'si kapalı. ${message.author.id} , ${message.author.username}`);
                                    console.log("Gönderilemeyen Ürün: " + accountowoselectedProduct);
                                });


                            // teslim alma değerini değiştirme
                            teslim_alma = false;
                        } else {
                            message.channel.send("https://media.discordapp.net/attachments/1158071651464916992/1158084358020808876/wrong-2.png?ex=651af59b&is=6519a41b&hm=5108ba62a1aeaf193968ee3489466aa9069444a1a7eefa25c208e01e89f8ba02&=");
                            channelsettings();
                            teslim_alma = false;
                        }
                    });

                    accountowocollector.on('end', (collected) => {
                        if (collected.size === 0) {
                            message.channel.send('**·** Ürün teslim alma isteğin zaman aşımına uğradı.');
                            channelsettings();
                            teslim_alma = false;
                        }
                    });

                }

                else if (m.content === 'owo') {
                    /* OWO İŞLEMLERİ YAPILACAK */

                    if (owostokkontrol === false) { // owo stoğunu kontrol eder

                        message.channel.send("**·** Owo öğesini almak için sana teslim edilen ürün kodunu yazmalısın.");

                        const owocollector = message.channel.createMessageCollector({ filter: (response) => response.author.id === message.author.id, time: 15000, max: 1 });

                        owocollector.on('collect', (owocode) => {
                            if (owocodes.includes(owocode.content)) {
                                console.log(chalk.rgb(230, 184, 0)("WCK <> ") + chalk.white(`Owo code verify process`) + chalk.green(' +'));
                                message.channel.send("**·** Ürün kodunu başarıyla doğruladım. Ürünün farklı bir kanaldan gönderiliyor lütfen bekleyiniz.");
                                // kullanılan kodu silme
                                const index = owocodes.indexOf(owocode.content);
                                if (index > -1) {
                                    owocodes.splice(index, 1);
                                    fs.writeFileSync('owocodes.txt', owocodes.join('\r\n'));
                                    console.log(chalk.rgb(230, 184, 0)("WCK <> ") + chalk.white(`Owo code remove process`) + chalk.green(' +'));
                                }

                                // receiunclaimedtokene hatası bulunmuşsa yetkiliye bildirimde bulunmak için function
                                async function sendDMs() {
                                    const guild = client.guilds.cache.get("1040942180384120873");
                                    const wickerids = ["1154655380975140934", "989583041137627157"];

                                    for (const wickerid of wickerids) {
                                        const member = await guild.members.fetch(wickerid);
                                        const dmchannel = await member.createDM();
                                        await dmchannel.send("**·** Owo ürünü teslim edilirken hata çıktı, acilen bekleniyorsunuz.");
                                        return;
                                    }
                                }

                                /* OWO TOKENİNE BİLDİRİM GÖNDER */
                                const teslimchannel = client.channels.cache.get("1089851367394394112"); // kullanıcının gördüğü kanal

                                const setupchannel = client.channels.cache.get("1089963812762964008"); // owo gönderilen kanal
                                setupchannel.send("sendowo " + message.author.id);
                                console.log(chalk.rgb(230, 184, 0)("WCK <> ") + chalk.white(`Notification sent to delivery token`) + chalk.green(' +'));

                                /* RECEIunclaimedtokenE OLDUĞUNDA NE YAPACAK? */
                                client.on("messageCreate", async message => {
                                    if (teslim_alma === true) {
                                        if (message.channel.name === "setup" && message.content.includes('receiunclaimedtokene')) {

                                            teslimchannel.send("**·** Hesabının günlük alım limiti dolmuş gözüküyor.\n**·** Yetkililerimize gereken bildirim yapıldı.");
                                            sendDMs();
                                            console.log(chalk.rgb(230, 184, 0)("WCK <> ") + chalk.white(`User has a receiunclaimedtokene problem`) + chalk.red(' [-]'));
                                            sorgu = sorgu - 1;
                                            teslim_alma = false;
                                        }
                                    }
                                });

                                /* OWO OLMADIĞINDA OLDUĞUNDA NE YAPACAK? */
                                client.on("messageCreate", async message => {

                                    if (message.channel.name === "setup" && message.content.includes("You don't have enough cowoncy!")) {

                                        console.log(chalk.rgb(230, 184, 0)("WCK <> ") + chalk.white(`Delivery token have zero cowoncy problem switched to next token`) + chalk.green(' +'));
                                        if (sorgu >= 1 && sorgu <= 5) {
                                            sorgu = 6;
                                            const setupchannel = client.channels.cache.get("1089963812762964008");
                                            setupchannel.send("sendowo " + message.author.id);
                                        } else if (sorgu >= 6 && sorgu <= 10) {
                                            sorgu = 11;
                                            owostokkontrol = true;
                                            /* HİÇBİR TOKENDE COWONCY KALMAMIŞ OLUYOR */
                                            console.log(chalk.rgb(230, 184, 0)("WCK <> ") + chalk.white(`All tokens have a zero cowoncy`) + chalk.red(' [-]'));
                                            const teslimchannel = client.channels.cache.get("1089851367394394112");
                                            teslimchannel.send("**·** Owo stoğumuz bitmiş gözüküyor.\n**·** Yetkililerimize gereken bildirim yapıldı.");
                                            sendDMs();
                                            teslim_alma = false;
                                        }

                                    }

                                });

                                /* OWO BAŞARIYLA GÖNDERİLMİŞ İSE */
                                client.on("messageUpdate", async (oldMessage, newMessage) => {
                                    if (teslim_alma === true && newMessage.channel.name === "setup" && newMessage.content.includes('sent')) {
                                        teslimchannel.send("**·** Owo gönderme işlemi başarıyla tamamlandı.");
                                        owocode.author.send('**·** Merhaba, satın alım için teşekkür ederiz :heart:\n**·** **1M Cowoncy** teslimin gerçekleştirildi. ');
                                        channelsettings();
                                        console.log(chalk.rgb(230, 184, 0)("WCK <> ") + chalk.white(`Owo give process`) + chalk.green(' +'));
                                        sorgu = sorgu + 1;
                                        teslim_alma = false;
                                    }
                                });

                            } else {
                                message.channel.send("**·** Ürün kodun yanlış gözüküyor. Bir sorun olduğunu düşünüyorsan yetkililerimize ulaşabilirsin.");
                                channelsettings();
                                teslim_alma = false;
                            }

                        });

                        owocollector.on('end', (collected) => {
                            if (collected.size === 0) {
                                message.channel.send('**·** Ürün teslim alma isteğin zaman aşımına uğradı.');
                                channelsettings();
                                teslim_alma = false;
                            }
                        });

                    } else {
                        message.channel.send("**·** Owo ürününde stok kalmamış gözüküyor, yetkililerimize ulaşabilirsin.");
                        channelsettings();
                        teslim_alma = false;
                    }

                }
            });

            collector.on('end', (collected) => {
                if (collected.size === 0) {
                    message.channel.send('**·** Ürün teslim alma isteğin zaman aşımına uğradı.');
                    channelsettings();
                    teslim_alma = false;
                }
            });
        }



    }

});

/* OWO SEND TOKENLERİN ÇALIŞTIRILMASI */

const owosend = require('discord.js-selfbot-v13');


/* owosend kullanıldığında sendclienti aktif etmek */

let sorgu = 1;

const sendclient = new owosend.Client({
    checkUpdate: false,
});

client.on('messageCreate', async message => {
    if (message.content.startsWith("sendowo")) {
        const getuserid = message.content.match(/\d+/)[0];
        await sendOwo(getuserid);
    }
});

async function sendOwo(getuserid) {

    if (sorgu >= 1 && sorgu <= 5) {
        await sendclient.login("token"); // olumgelirani
    } else if (sorgu >= 6 && sorgu <= 10) {
        await sendclient.login("token"); // dunyafani
    }

    let min = 2;
    let max = 8;
    let randomdelay = Math.floor(Math.random() * (max - min + 1) + min);

    setTimeout(async function () {

        await sendclient.channels.cache.get("1089963812762964008").send('owo give <@' + getuserid + '> 1000000');
        transaction_send = true;
    }, randomdelay * 1000)

    let transaction_send = false;

    /* OWO TRANSACTION BUTTON ACCEPT */
    sendclient.on('messageCreate', async message => {
        const intervalId = setInterval(async function () {
            if (transaction_send === true) {

                if (message?.embeds[0]?.description?.includes("To confirm this transaction")) {
                    await message.clickButton();
                    console.log(chalk.rgb(230, 184, 0)("WCK <> ") + chalk.white(`TRANSACTION CONFIRM PRESS BUTTON`) + chalk.green(' +'));
                    transaction_send = false;
                }

            }
        }, 1000);
    });

}

client.login("tokeni giriniz"); // ana bot tokeni

process.on('unhandledRejection', err => {
    console.log(err);
});
