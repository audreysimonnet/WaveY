import { userMention } from "discord.js";

const CHANNEL_NAME = process.env.CHANNEL_NAME;

const event = {
  name: "guildMemberAdd",
  async execute(member) {
    const channel = member.guild.channels.cache.find(
      (channel) => channel.name === CHANNEL_NAME
    );


    /*
      TODO: Change getWelcomeMessage to getWelcomeMessageWithMeme to send a meme to welcome your user.
    */
    const welcomeMessage = await getWelcomeMessageWithMeme(member.id);

    channel.send(welcomeMessage);
  },
};

const getWelcomeMessage = (userId) => {
  /*
    Welcome message when a new member joins.
    This is the bot's intro message. Customize as needed.
  */
  return {

    content: `Welcome ${userMention(userId)},
    to the WaveY Trivia Bot server! To play the game
    you will be given trivia questions and four answers
    to choose from. I will then tell you if you are wrong or right.
    For help type '/' to see my commands. Have fun!

  `,

  };
};

export default event;
