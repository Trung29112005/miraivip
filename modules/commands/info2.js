module.exports.config = {
    name: "info2",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "D-Jukie",
    description: "Xem thông tin của người dùng facebook",
    commandCategory: "Nhóm",
    usages: "[reply/tag/id]",
    cooldowns: 3
    
};
module.exports.run = async({api,event,args}) => {
    const fs = global.nodemodule["fs-extra"];
    const request = global.nodemodule["request"];
    const axios = global.nodemodule['axios'];  

    if(!args[0]){
    if(event.type == "message_reply") { uid = event.messageReply.senderID }
    else uid = event.senderID;
   const res = await axios.get(`https://graph.facebook.com/${uid}?fields=name,email,about,birthday,gender,hometown,link,location,quotes,relationship_status,significant_other,username,subscribers.limite(0)&access_token=EAAGNO4a7r2wBAHYdjhB2er29jLZBQXePWa0GThNiCkRp0CWbe1qXmjyYcueZCcFIKuLKZAupNzjbPES5IkHrSZBXDm60MZACLmOqF1a53Wpv8kTApDHk8Q6VZARV6qM0duomIdvGxjJZC3vofb1n3eHd1qLyZCXoS5NPTh5XVqMFW61GMlicHb2fOM9UeVGqRzUZD`);  
    var gender = res.data.gender == 'male' ? "Nam" : res.data.gender == 'female' ? "Nữ" : "Không công khai";
    var birthday = res.data.birthday ? `${res.data.birthday}` : "...";
    var love = res.data.LeAnhTruong_User_Love ? `${res.data.LeAnhTruong_User_Love}` : "Độc Thân"
    var location = res.data.location ? `${res.data.location}` : "..."
	var hometown = res.data.hometown ? `${res.data.hometown}` : "Không công khai"
    var url_profile = res.data.url_profile  ? `${res.data.url_profile}` : `${url_profile}`
    var callback = () => api.sendMessage({body:`👤Tên: ${res.data.fullname}\n🔎UID: ${uid}\n👀Follow: ${res.data.follow_user}\n👭 Giới tính: ${gender}\n🎉 Sinh Nhật: ${birthday}\n💌 Mối quan hệ: ${love}\n🏡 Sống tại: ${location}\n🌏Đến từ: ${hometown}\n📌URL cá nhân: ${url_profile}`,
        attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID,
        () => fs.unlinkSync(__dirname + "/cache/1.png"),event.messageID); 
    return request(encodeURI(`http://le31.glitch.me/fb/avt?q=${uid}`)).pipe(fs.createWriteStream(__dirname+'/cache/1.png')).on('close',
        () => callback());
   }

    else {
    if (args.join().indexOf('@') !== -1){
    var mentions = Object.keys(event.mentions)
    const res = await axios.get(`https://graph.facebook.com/${mentions}?fields=name,email,about,birthday,gender,hometown,link,location,quotes,relationship_status,significant_other,username,subscribers.limite(0)&access_token=EAAGNO4a7r2wBAHYdjhB2er29jLZBQXePWa0GThNiCkRp0CWbe1qXmjyYcueZCcFIKuLKZAupNzjbPES5IkHrSZBXDm60MZACLmOqF1a53Wpv8kTApDHk8Q6VZARV6qM0duomIdvGxjJZC3vofb1n3eHd1qLyZCXoS5NPTh5XVqMFW61GMlicHb2fOM9UeVGqRzUZD`);  
    var gender = res.data.gender == 'male' ? "Nam" : res.data.gender == 'female' ? "Nữ" : "Không công khai";
    var birthday = res.data.birthday ? `${res.data.birthday}` : "...";
     var love = res.data.LeAnhTruong_User_Love ? `${res.data.LeAnhTruong_User_Love}` : "Độc Thân"
    var location = res.data.location ? `${res.data.location}` : "..."
	var hometown = res.data.hometown ? `${res.data.hometown}` : "Không công khai"
    var url_profile = res.data.url_profile  ? `${res.data.url_profile}` : `${url_profile}`
    var callback = () => api.sendMessage({body:`👤Tên: ${res.data.fullname}\n🔎UID: ${uid}\n👀Follow: ${res.data.follow_user}\n👭 Giới tính: ${gender}\n🎉 Sinh Nhật: ${birthday}\n💌 Mối quan hệ: ${love}\n🏡 Sống tại: ${location}\n🌏Đến từ: ${hometown}\n📌URL cá nhân: ${url_profile}`,
        attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID,
        () => fs.unlinkSync(__dirname + "/cache/1.png"),event.messageID); 
    return request(encodeURI(`http://le31.glitch.me/fb/avt?q=${mentions}`)).pipe(fs.createWriteStream(__dirname+'/cache/1.png')).on('close',
        () => callback());
    }
    else {
    const res = await axios.get(`https://graph.facebook.com/${args[0]}?fields=name,email,about,birthday,gender,hometown,link,location,quotes,relationship_status,significant_other,username,subscribers.limite(0)&access_token=EAAGNO4a7r2wBAHYdjhB2er29jLZBQXePWa0GThNiCkRp0CWbe1qXmjyYcueZCcFIKuLKZAupNzjbPES5IkHrSZBXDm60MZACLmOqF1a53Wpv8kTApDHk8Q6VZARV6qM0duomIdvGxjJZC3vofb1n3eHd1qLyZCXoS5NPTh5XVqMFW61GMlicHb2fOM9UeVGqRzUZD`);  
    var gender = res.data.gender == 'male' ? "Nam" : res.data.gender == 'female' ? "Nữ" : "Không công khai";
    var birthday = res.data.birthday ? `${res.data.birthday}` : "...";
     var love = res.data.relationship_status ? `${res.data.relationship_status}` : "Độc Thân"
    var location = res.data.location ? `${res.data.location}` : "..."
	var hometown = res.data.hometown ? `${res.data.hometown}` : "Không công khai"
    var url_profile = res.data.url_profile  ? `${res.data.url_profile}` : `${url_profile}`
     var callback = () => api.sendMessage({body:`👤Tên: ${res.data.name}\n🔎UID: ${uid}\n👀Follow: ${res.data.summary.total_count}\n👭 Giới tính: ${gender}\n🎉 Sinh Nhật: ${birthday}\n💌 Mối quan hệ: ${love}\n🏡 Sống tại: ${location}\n🌏Đến từ: ${hometown}\n📌URL cá nhân: ${url_profile}`,
        attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID,
        () => fs.unlinkSync(__dirname + "/cache/1.png"),event.messageID); 
    return request(encodeURI(`http://le31.glitch.me/fb/avt?q=${args[0]}`)).pipe(fs.createWriteStream(__dirname+'/cache/1.png')).on('close',
        () => callback());
    }
  }
}