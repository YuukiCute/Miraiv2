module.exports.config = {
	name: "getlink",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Mirai Team",
	description: "Lấy url download từ video, audio được gửi từ nhóm",
	commandCategory: "other",
	usages: "getLink",
	cooldowns: 5,
};

module.exports.run = async ({ api, event }) => {
let { messageReply, threadID } = event;
	if (event.type !== "message_reply") return api.sendMessage("❌ Bạn phải reply một audio, video, ảnh nào đó", event.threadID, event.messageID);
	if (!event.messageReply.attachments || event.messageReply.attachments.length == 0) return api.sendMessage("❌ Bạn phải reply một audio, video, ảnh nào đó", event.threadID, event.messageID);
	var shortLink = await global.nodemodule["tinyurl"].shorten(messageReply.attachments[0].url);
	return api.sendMessage(shortLink, event.threadID, event.messageID);
}