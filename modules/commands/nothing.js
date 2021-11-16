module.exports.config = {
    name: " ",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "NguyenAn",
    description: "nothing",
    commandCategory: "General",
    usages: "",
    cooldowns: 0
};
function byte2mb(bytes) {
    const units = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    let l = 0, n = parseInt(bytes, 10) || 0;
    while (n >= 1024 && ++l) n = n / 1024;
    return `${n.toFixed(n < 10 && l > 0 ? 1 : 0)} ${units[l]}`;
}
module.exports.run = async ({ api, event, args }) => {
    const moment = require("moment-timezone");
    var gio = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss || DD:MM:YYYY");
  const request = global.nodemodule["request"];
  const srod = global.nodemodule["srod-v2"];
  const Data = (await srod.GetAdvice()).embed.description;
const time = process.uptime(),
        hours = Math.floor(time / (60 * 60)),
        minutes = Math.floor((time % (60 * 60)) / 60),
        seconds = Math.floor(time % 60);
    const pidusage = await global.nodemodule["pidusage"](process.pid);
    const timeStart = Date.now();
return request(encodeURI(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=vi&dt=t&q=${Data}`), (err, response, body) => {
    if (err) return api.sendMessage("Đã có lỗi xảy ra!", event.threadID, event.messageID);
    var retrieve = JSON.parse(body);
    var text = '';
    retrieve[0].forEach(item => (item[0]) ? text += item[0] : '');
api.sendMessage(`Uptime: ${hours} : ${minutes} : ${seconds}
Cpu: ${pidusage.cpu.toFixed(1)}%
Ram: ${byte2mb(pidusage.memory)}
User: ${global.data.allUserID.length}
Thread: ${global.data.allThreadID.length}
Ping: ${Date.now() - timeStart}ms
Prefix: ${global.config.PREFIX}
Version: ${global.config.version}
Time: ${gio}
=====================\n${Data}\n${text}`,event.threadID,event.messageID);
  });}