const Discord = module.require("discord.js");

module.exports = {
    name: "lock",
    category: "moderation",
    description: "Locks a Channel",
    guildOnly: true,

        execute: async (client, message, args) => {
            if (message.member.hasPermission('MANAGE_SERVER', 'MANAGE_CHANNELS') && message.member.roles.cache.has(roles.admin)) {
                return message.channel.send("You don't have enough Permissions")
            }
            message.channel.overwritePermissions([
                {
                    id: message.guild.id,
                    deny: ['SEND_MESSAGES'],
                },
            ]);
            const embed = new Discord.MessageEmbed()
                .setTitle("Channel Updates")
                .setDescription(`ðŸ”’ ${message.channel} has been Locked`)
                .setColor("RANDOM");
            await message.channel.send(embed);
            message.delete();
        }
    }