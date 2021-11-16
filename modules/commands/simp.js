const fs = require("fs");
module.exports.config = {
name: "simp",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "CHIP2502",
	description: "simp",
	commandCategory: "Không cần dấu lệnh",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.handleEvent = function({ api, event }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("simp")==0 || (event.body.indexOf("Simp")==0)) {
		var msg = {
				body: "But I Love U ❤️",
				attachment: fs.createReadStream(__dirname + `/noprefix/video-1629511636.mp4`)
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}