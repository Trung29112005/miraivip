module.exports.config = {
    name: "chuyentien",
    version: "1.0.1",
    hasPermssion: 0,
    credits: "Dũng UwU",
    description: "Chuyển tiền của bản thân cho ai đó",
    commandCategory: "Economy",
    usages: "pay @tag coins",
    cooldowns: 5,
     };

module.exports.run = async ({ event, api, Currencies, args }) => {
let { threadID, messageID, senderID } = event;
const mention = Object.keys(event.mentions)[0];
let name = event.mentions[mention].split(" ").length
if(!mention) return api.sendMessage('Vui lòng tag người muốn chuyển tiền cho!',threadID,messageID);
else {
	if(!isNaN(args[0+ name])) {
		const coins = parseInt(args[0+ name]);
		let balance = (await Currencies.getData(senderID)).money;
        if (coins <= 0) return api.sendMessage('Số tiền bạn muốn chuyển không hợp lệ',threadID,messageID);
		if (coins > balance) return api.sendMessage('Số tiền bạn muốn chuyển lớn hơn số tiền bạn hiện có!',threadID,messageID);
		else {
        return api.sendMessage({ body: 'Đã phang vào mặt ' + event.mentions[mention].replace(/@/g, "") + ` ${args[0+ name]} coins`}, threadID, async () => {
            await Currencies.increaseMoney(mention, coins);
                  Currencies.decreaseMoney(senderID, coins)
            }, messageID);
		}
	} else return api.sendMessage('Vui lòng nhập số coins muốn chuyển',threadID,messageID);
}
}