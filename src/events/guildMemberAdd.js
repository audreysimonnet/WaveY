import { userMention } from "discord.js";

const CHANNEL_NAME = process.env.CHANNEL_NAME;

const event = {
  name: "guildMemberAdd",
  async execute(member) {
    const channel = member.guild.channels.cache.find(
      (channel) => channel.name === CHANNEL_NAME
    );

    const welcomeMessage = getWelcomeMessage(member.id);
    channel.send(welcomeMessage);
  },
};

const getWelcomeMessage = (userId) => {
  /*
    Welcome message when a new member joins.
    This is the bot's intro message. Customize as needed.
  */
  return {
    content: `Welcome ${userMention(userId)}! 👋\n
I'm WaveY — your friendly study helper bot. I can generate practice questions for you. Use the `/quiz` command to get a question with a sample answer. Hope you enjoy your time here!`,
  };
};

export default event;
