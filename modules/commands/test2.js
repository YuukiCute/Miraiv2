const fs = require("fs");
module.exports.config = {
	name: "test2",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "NguyenAn", 
	description: "noprefix",
	commandCategory: "System",
	usages: "",
    cooldowns: 5, 
};

module.exports.handleEvent = async ({ event, api, Currencies,Users, args, utils }) => {
function out(data) {
	api.sendMessage(data, threadID, event.messageID, event.threadsID)
}
var dataThread = (await Threads.getData(threadID));
var data = dataThread.data;

var arr = ["prefix", "dấu lệnh", "daulenh"];
arr.forEach(i => {
	let str = i[0].toUpperCase() + i.slice(1);
	if (body === i.toUpperCase() | body === i | str === body) {
		if(data.PREFIX == null) {
			return out('Nhóm chưa set prefix cho bot')
		}
		else return out('prefix là: ' + data.PREFIX)
	}
})
};


module.exports.run = async ({ event, api, Currencies, args, utils }) => {






	}