module.exports.config = {
	name: "bio",
	version: "1.0.0",
	hasPermssion: 2,
	credits: "shahnawaz siddiqui",
	description: "Change bot's bio",
	commandCategory: "admin",
	usages: "bio [Name Shahnawaz Ago19 Class12 Hacker]",
  cooldowns: 5
  
}
  
  module.exports.run = async ({ api, event, global, args, permssion, utils, client, Users }) => {
    api.changeBio(args.join(" "), (e) => {
      if(e) api.sendMessage("an error occurred" + e, event.threadID); return api.sendMessage("Has changed the biography of the bot into: \n"+args.join(" "), event.threadID, event.messgaeID)
    }
    )
  }
