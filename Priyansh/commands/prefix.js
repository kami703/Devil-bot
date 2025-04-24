/**
* @author Robin
* @warn Do not edit code or edit credits
* @Dont Change This Credits Otherwisw Your Bot Lol
*/
module.exports.config = {
  name: "prefix",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "⟬ 𝐆A͜͡𝐍𝐆𝐒𝐓E͜͡𝐑 ⟭⸙⟬ دیـﹻ۬ﹻۧ۬ﹻٰ۬ﹻٰ۬ﹻۧ۬ﹻ۬ﹻـول ⟭",
  description: "Dont Change This Credits Otherwisw Your Bot Lol",
  commandCategory: "For admin",
  usages: "",
  cooldowns: 5,
};

module.exports.handleEvent = async ({ event, api, Threads }) => {
  var { threadID, messageID, body, senderID } = event;
  //if (senderID == global.data.botID) return;
  if ((this.config.credits) != "Robin") { return api.sendMessage(`Changed credits!`, threadID, messageID)}
  function out(data) {
    api.sendMessage(data, threadID, messageID)
  }
  var dataThread = (await Threads.getData(threadID));
  var data = dataThread.data; 
  const threadSetting = global.data.threadData.get(parseInt(threadID)) || {};

  var arr = ["prefix"];
  arr.forEach(i => {
    let str = i[0].toUpperCase() + i.slice(1);
    if (body === i.toUpperCase() | body === i | str === body) {
const prefix = threadSetting.PREFIX || global.config.PREFIX;
      if (data.PREFIX == null) {
        return out(`️️️️️️️️️️️️️️️️️️️️️️️️️🐼❛| 𝐁𝐀𝐁𝐔 𝐘𝐄 𝐏𝐑𝐄𝐅𝐈𝐗 ➥《 #{prefix} 》 𝐔𝐒𝐄 𝐊𝐑𝐎 𝐂𝐌𝐍𝐃 𝐌𝐄𝐈𝐍 |❜🎀`)
      }
      else return out(`️️️️️️️️️️️️️️️️️️️️️️️️️𝗠𝗘𝗥𝗬 𝗝𝗔𝗡 𝗬𝗘 𝗣𝗥𝗘𝗙𝗜𝗫 𝗠𝗘𝗥𝗬 𝗕𝗢𝗧 𝗞𝗘 𝗛𝗔𝗜 ➥`    # data.PREFIX )
    }

  });
};

module.exports.run = async({ event, api }) => {
    return api.sendMessage(`️️️️️️️️️️️️️️️️️️️️️️️️️𝗠𝗬 𝗣𝗥𝗘𝗙𝗜𝗫 ➥《 #{global.config.PREFIX} 》`, event.threadID)
}
