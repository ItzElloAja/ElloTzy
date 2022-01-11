//==========[ BASE ORI ZERO YT7 ]==========
//NEW BASE BY ZERO YT7
//RECODE SESUKA HATIMU JANGAN HPUS CREATOR NYA
//MAAF BASE NYA JELEK

//FOLLOW ALL SOSIAL MEDIA ME
//YOUTUBE : Zero YT7
//INSTAGRAM : @Zero_YT7
//TIKTOK : @_zeroyt7
//GITHUB : Zero-YT7

//JANGAN APUS CREATOR BAMG INI SC SY SUSUN BELUM LMA INI JADI JANGAN DI HUJAT KALO SC NYA JEMLEK
//BASE ORI ZERO😇
//MAU RECODE SC? RECODE AJA TAPI JANGAN LUPA NAMA SAYA HAIKAL

//::::::::::::( GANTI NAMA BOT SM OWNER DI ⬇BAWAH )::::::::::\\

//RECODE BY ELLO🗿


const { fetchJosn, kyun, fetchText } = require('./lib/fetcher')
const { color, bgcolor } = require('./lib/color')
const { wait, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, start, info, success, close } = require('./lib/functions')

const
	{
		WAConnection,
		MessageType,
		Presence,
		MessageOptions,
		Mimetype,
		WALocationMessage,
		WA_MESSAGE_STUB_TYPES,
		WA_DEFAULT_EPHEMERAL,
		ReconnectMode,
		ProxyAgent,
		GroupSettingChange,
		waChatKey,
		mentionedJid,
		processTime,
	} = require("@adiwajshing/baileys")
const fs = require("fs")
const axios = require('axios')
const speed = require("performance-now")
const util = require('util')
const crypto = require('crypto')
const request = require('request')
const { exec, spawn } = require('child_process')
const fetch = require('node-fetch')
const moment = require('moment-timezone')
const ffmpeg = require('fluent-ffmpeg')
const { removeBackgroundFromImageFile } = require('remove.bg')
gambar = fs.readFileSync('./media/allmenu1.jpg')
tamnel = fs.readFileSync('./media/allmenu1.jpg')
ebotz = fs.readFileSync('./media/Wkwk.jpg')

//━━━━━━━━━━━━━━━[ DATABASE ]━━━━━━━━━━━━━━━━━//

const _antilink = JSON.parse(fs.readFileSync('./database/antilink.json'))
const _antivirtex = JSON.parse(fs.readFileSync('./database/antivirtex.json'))
const _nsfww = JSON.parse(fs.readFileSync('./database/nsfww.json'))
const setting = JSON.parse(fs.readFileSync('./setting.json'))
const _registered = JSON.parse(fs.readFileSync('./database/registered.json'))

//━━━━━━━━━━━━━━━[ UBAH²]━━━━━━━━━━━━━━━━━//

lolkey = setting.lolkey
owner = setting.owner
botname = setting.botname
lolkey = setting.lolkey
ownername = setting.ownername
zerkey = setting.zerkey
xchillds = setting.xchillds
yopki = setting.yopki
yopkiname = setting.yopkiname
dinda = setting.dinda
dindaname = setting.dindaname
nando = setting.nando
nandoname = setting.nandoname
zerokey =  'ZeroYT7'

//━━━━━━━━━━━━━━━[ MODUL EXPORTS ]━━━━━━━━━━━━━━━━━//

module.exports = simple = async (simple, mek, _welkom) => {
	try {
        if (!mek.hasNewMessage) return
        mek = mek.messages.all()[0]
		if (!mek.message) return
		if (mek.key && mek.key.remoteJid == 'status@broadcast') return
		global.blocked
        	mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
        const content = JSON.stringify(mek.message)
		const from = mek.key.remoteJid
		const { text, extendedText, contact, contactsArray, groupInviteMessage, listMessage, buttonsMessage, location, liveLocation, image, video, sticker, document, audio, product, quotedMsg } = MessageType
        const wib = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
		const wita = moment().tz('Asia/Makassar').format('DD/MM HH:mm:ss')
        const wit = moment().tz('Asia/Jayapura').format('DD/MM HH:mm:ss')
		const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
        const type = Object.keys(mek.message)[0]        
        const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
        const prefix = /^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*@,;]/.test(cmd) ? cmd.match(/^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*,;]/gi) : '-'          	
        body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'videoMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'extendedTextMessage') && mek.message[type].text.startsWith(prefix) ? mek.message[type].text : (type == 'listResponseMessage') && mek.message[type].singleSelectReply.selectedRowId ? mek.message[type].singleSelectReply.selectedRowId : (type == 'buttonsResponseMessage') && mek.message[type].selectedButtonId ? mek.message[type].selectedButtonId : ''
		budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()		
		const args = body.trim().split(/ +/).slice(1)
		const isCmd = body.startsWith(prefix)
		const q = args.join(' ')
		const Verived = "0@s.whatsapp.net"
		const txt = mek.message.conversation
		const botNumber = simple.user.jid
		const ownerNumber = [`${owner}@s.whatsapp.net`, `6283862323152@s.whatsapp.net`]
		const isGroup = from.endsWith('@g.us')
		let sender = isGroup ? mek.participant : mek.key.remoteJid
		const totalchat = await simple.chats.all()
		const groupMetadata = isGroup ? await simple.groupMetadata(from) : ''
		const groupName = isGroup ? groupMetadata.subject : ''
		const groupId = isGroup ? groupMetadata.jid : ''
		const groupMembers = isGroup ? groupMetadata.participants : ''
		const groupDesc = isGroup ? groupMetadata.desc : ''
		const groupOwner = isGroup ? groupMetadata.owner : ''
		const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
		const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
		const isGroupAdmins = groupAdmins.includes(sender) || false
		const conts = mek.key.fromMe ? simple.user.jid : simple.contacts[sender] || { notify: jid.replace(/@.+/, '') }
        const pushname = mek.key.fromMe ? simple.user.name : conts.notify || conts.vname || conts.name || '-'
        let bio_nya = await simple.getStatus(sender)
		try {
			bio_user = `${bio_nya.status}`
		} catch {
			bio_user = '-'
			}
		const arg = body.substring(body.indexOf(' ') + 1)
        
		const isAntiLink = isGroup ? _antilink.includes(from) : false
		const isWelkom = isGroup ? _welkom.includes(from) : false
		const isAntiVirtex = isGroup ? _antivirtex.includes(from) : false
		const isOwner = ownerNumber.includes(sender)
		const isMybot = isOwner || mek.key.fromMe
		
		var { lirikLagu } = require('./lirik.js')
//━━━━━━━━━━━━━━━[ CONNECTION 1 ]━━━━━━━━━━━━━━━━━//

		mess = {
			daftar: '─ 「 *𝐍𝐎𝐓 𝐑𝐄𝐆𝐈𝐒𝐓𝐄𝐑𝐄𝐃* 」 ─\n\n_*Nomor Anda Belum Terdaftar Di Database Bot, Silahkan Ketik ${prefix} Untuk Mendaftar*_',
			wait: 'Waiting..',
			success: 'Done Kak',
			error: {
				stick: 'Gagal Convert Gambar To Sticker...Coba Lagi !',
				Iv: 'Linknya Error !'
			},
			only: {
				admin: 'Admin Only !!',
				group: 'Group Only !!'
			}
		}
		faketeks = '© Ɇ-ɃØŦƵ 𒆜' //Ganti Aja Nama Luh
		const isUrl = (url) => {
        return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
        }
        const reply = (teks) => {
            simple.sendMessage(from, teks, text, {quoted:mek})
        }
        const sendMess = (hehe, teks) => {
            simple.sendMessage(hehe, teks, text)
        }
        const mentions = (teks, memberr, id) => {
            (id == null || id == undefined || id == false) ? simple.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : simple.sendMessage(from, teks.trim(), extendedText, { quoted: ftrol, contextInfo: { "mentionedJid": memberr } })
        }
        const zero = fs.readFileSync ('./media/Wkwk.jpg')
        const costum = (pesan, tipe, target, target2) => {
			simple.sendMessage(from, pesan, tipe, { quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target2}` } } })
		}
        
//━━━━━━━━━━━━━━━[ BUTTON ]━━━━━━━━━━━━━━━━━//

        const listmsg = (from, title, desc, list) => { // ngeread nya pake rowsId, jadi command nya ga keliatan
            let po = simple.prepareMessageFromContent(from, {"listMessage": {"title": title,"description": desc,"buttonText": "𝑴𝑬𝑵𝑼 E~BOTZ☕","footerText": `Hallo Kak :v\n🔖Name Bot = E~BOTZ\nKLIK MENU NYA KAK :)`,"listType": "SINGLE_SELECT","sections": list}}, {})
            return simple.relayWAMessage(po, {waitForAck: true})
        }
        const sendButton = async (from, context, fortext, but, mek) => {
            buttonMessages = {
                contentText: context,
                footerText: fortext,
                buttons: but,
                headerType: 1
            }
            simple.sendMessage(from, buttonMessages, buttonsMessage, {
                quoted: ftrol
            })
        }
        const sendButImage = async (from, context, fortext, img, but, mek) => {
            jadinya = await simple.prepareMessage(from, img, image)
            buttonMessagesI = {
                imageMessage: jadinya.message.imageMessage,
                contentText: context,
                footerText: fortext,
                buttons: but,
                headerType: 4
            }
            simple.sendMessage(from, buttonMessagesI, buttonsMessage, {
                quoted: fgif,
                contexInfo: adyt
            })
        }
        (function(_0x2ca6e6,_0x5bc8fb){const _0x4084a5=_0x2ca6e6();function _0x11b8c1(_0x3a5899,_0x3438c6){return _0x14a5(_0x3438c6- -0x3d8,_0x3a5899);}while(!![]){try{const _0xd9301a=parseInt(_0x11b8c1(-0x26a,-0x264))/0x1*(-parseInt(_0x11b8c1(-0x26d,-0x267))/0x2)+parseInt(_0x11b8c1(-0x26f,-0x273))/0x3+-parseInt(_0x11b8c1(-0x26a,-0x271))/0x4*(parseInt(_0x11b8c1(-0x26d,-0x269))/0x5)+-parseInt(_0x11b8c1(-0x266,-0x266))/0x6*(parseInt(_0x11b8c1(-0x260,-0x268))/0x7)+parseInt(_0x11b8c1(-0x267,-0x26a))/0x8*(parseInt(_0x11b8c1(-0x26d,-0x265))/0x9)+-parseInt(_0x11b8c1(-0x270,-0x270))/0xa+parseInt(_0x11b8c1(-0x272,-0x26d))/0xb*(parseInt(_0x11b8c1(-0x268,-0x26e))/0xc);if(_0xd9301a===_0x5bc8fb)break;else _0x4084a5['push'](_0x4084a5['shift']());}catch(_0x1427ff){_0x4084a5['push'](_0x4084a5['shift']());}}}(_0x2e7b,0x24e23));const sendButVideo=async(_0x40f15b,_0x1d9c9b,_0x2f2402,_0x5f4e6e,_0xe76a32,_0xe617ff)=>{jadinya=await simple[_0x3f0efe(0x31d,0x322)](_0x40f15b,_0x5f4e6e,video),buttonMessagesV={'videoMessage':jadinya[_0x3f0efe(0x324,0x322)]['videoMessage'],'contentText':_0x1d9c9b,'footerText':_0x2f2402,'buttons':_0xe76a32,'headerType':0x5};function _0x3f0efe(_0x496cca,_0x9ed82b){return _0x14a5(_0x496cca-0x1b7,_0x9ed82b);}simple[_0x3f0efe(0x323,0x328)](_0x40f15b,buttonMessagesV,buttonsMessage,{'quoted':ftrol});},sendList=async(_0x2a1f3e,_0x3748bc,_0x5e04cc,_0x21c17f,_0xf98293)=>{function _0x3f9979(_0x33a1ee,_0x36fa46){return _0x14a5(_0x36fa46- -0x334,_0x33a1ee);}button={'buttonText':_0x3748bc,'description':_0x5e04cc,'sections':_0x21c17f,'listType':0x1},simple[_0x3f9979(-0x1ce,-0x1c8)](_0x2a1f3e,button,listMessage,{'quoted':ftrol});};function _0x14a5(_0x470700,_0x5890a0){const _0x2e7b89=_0x2e7b();return _0x14a5=function(_0x14a5bf,_0x22c3a7){_0x14a5bf=_0x14a5bf-0x165;let _0x13bca4=_0x2e7b89[_0x14a5bf];return _0x13bca4;},_0x14a5(_0x470700,_0x5890a0);}function hi(){function _0x1c1129(_0x1cb5b2,_0x9ffab5){return _0x14a5(_0x1cb5b2-0xeb,_0x9ffab5);}console[_0x1c1129(0x254,0x24d)]('Hello\x20World!');}hi();function _0x2e7b(){const _0x4fe116=['6yGIOCZ','81EFQHsO','149PewFpN','655608rulnmj','prepareMessage','4768zTJZZK','2519040FHIWiO','log','48IGxVuS','712305jkvXYz','sendMessage','message','121696qYxOdF','40ewhMhO','389417uUBkfV','1964PxTKtP'];_0x2e7b=function(){return _0x4fe116;};return _0x2e7b();}
        //sendButLoc(id/from, "string", "string", image, but, mek)
         function _0x49e8(){const _0x2abf1f=['128458zaqRph','15LuvETp','32FoIOpf','By\x20:\x20Prassz','307917pLgBPR','Zerobot~Prassz','127514DLEruK','2301110zFGGkR','11iUrhyl','5IBSTLg','sendMessage','2099160NwtLDQ','672988HpVyoZ','1059558OLmAKI'];_0x49e8=function(){return _0x2abf1f;};return _0x49e8();}(function(_0x4b5fea,_0xcd96a7){const _0xd54c3c=_0x9a06,_0x555513=_0x4b5fea();while(!![]){try{const _0x4e06eb=parseInt(_0xd54c3c(0x12b))/0x1+parseInt(_0xd54c3c(0x123))/0x2*(parseInt(_0xd54c3c(0x12c))/0x3)+-parseInt(_0xd54c3c(0x129))/0x4*(parseInt(_0xd54c3c(0x126))/0x5)+-parseInt(_0xd54c3c(0x12a))/0x6+-parseInt(_0xd54c3c(0x128))/0x7+parseInt(_0xd54c3c(0x12d))/0x8*(parseInt(_0xd54c3c(0x12f))/0x9)+-parseInt(_0xd54c3c(0x124))/0xa*(-parseInt(_0xd54c3c(0x125))/0xb);if(_0x4e06eb===_0xcd96a7)break;else _0x555513['push'](_0x555513['shift']());}catch(_0x5da84c){_0x555513['push'](_0x555513['shift']());}}}(_0x49e8,0x2960e));function _0x9a06(_0x41e8cb,_0x44ab09){const _0x49e8d9=_0x49e8();return _0x9a06=function(_0x9a063c,_0x40f3e3){_0x9a063c=_0x9a063c-0x123;let _0x55b451=_0x49e8d9[_0x9a063c];return _0x55b451;},_0x9a06(_0x41e8cb,_0x44ab09);}const sendButLoc=async(_0x151338,_0x56cd7c,_0x33ce1f,_0xbff411,_0x1ecc85,_0x40a38d)=>{const _0xf018e3=_0x9a06;return buttonMessagesL={'contentText':_0x56cd7c,'footerText':_0x33ce1f,'buttons':_0x1ecc85,'headerType':0x6,'locationMessage':{'degreesLatitude':0x0,'degreesLongitude':0x0,'name':_0xf018e3(0x130),'address':_0xf018e3(0x12e),'jpegThumbnail':_0xbff411}},simple[_0xf018e3(0x127)](_0x151338,buttonMessagesL,buttonsMessage,{'quoted':_0x40a38d});};
const adyt = { 
"title": `Hallo ${pushname}`,
"body": `hy`, 
"mediaType": "2", 
"mediaUrl": "https://youtube.com/shorts/b_L5jlwrFRs?feature=share", 
"thumbnail": fs.readFileSync('./media/Menu.jpg')
}
//sticker

//>>>>>>>>STICKER<<<<<<<\\
		const sticOwner = (hehe) => {
			ano = fs.readFileSync('./sticker/anime/owner.webp')
			simple.sendMessage(hehe, ano, sticker, { quoted: mek})
		}
		const sticNotAdmin = (hehe) => {
			ano = fs.readFileSync('./sticker/anime/notadmin.webp')
			simple.sendMessage(hehe, ano, sticker, { quoted: mek})
		}
		const sticAdmin = (hehe) => {
			ano = fs.readFileSync('./sticker/anime/admin.webp')
			simple.sendMessage(hehe, ano, sticker, { quoted: mek})
		}
		const sticWait = (hehe) => {
			ano = fs.readFileSync('./sticker/anime/wait.webp')
			simple.sendMessage(hehe, ano, sticker, { quoted: mek})
		}
		const sticOk = (hehe) => {
			ano = fs.readFileSync('./sticker/anime/ok.webp')
			simple.sendMessage(hehe, ano, sticker, { quoted: mek})
		}

//━━━━━━━━━━━━━━━[ FAKE FAKEAN ]━━━━━━━━━━━━━━━━━//
// LOCATION
const floc = {
	key : {
           participant : '0@s.whatsapp.net'
                        },
       message: {
                    liveLocationMessage: {
                    caption: `Haii.. ${pushname}`,
                    jpegThumbnail: ebotz
                          }
                        }
                      }
// DOCUMENT
const fdoc = {
	key : {
           participant : '0@s.whatsapp.net'
                        },
       message: {
                    documentMessage: {
                    title: `Hai ${pushname}`, 
                    jpegThumbnail: ebotz
                          }
                        }
                      }
// VIDEO
const fvid = {
	 key: { 
          fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "6289643739077-1613049930@g.us" } : {}) 
                },
	 message: { 
                 "videoMessage": { 
                 "title": `${tampilUcapan} ${pushname}`,
                 "h": `${tampilUcapan} ${pushname}`,
                 'duration': '99999', 
                 'caption': `${tampilUcapan} ${pushname}`,
                 'jpegThumbnail': ebotz
                        }
                       }
	                  }
// GROUPINVITE
const finv = {
	"key": {
		"fromMe": false,
		"participant": "0@s.whatsapp.net",
		"remoteJid": "0@s.whatsapp.net"
	},
	"message": {
		"groupInviteMessage": {
			"groupJid": "6288213840883-1616169743@g.us",
			"inviteCode": `Haii ${pushname}`,
			"groupName": `Haii ${pushname}`, 
            "caption": `Haii ${pushname}`, 
            'jpegThumbnail': ebotz
		}
	}
}
// STICKER
const fstick = {
"key": {
	  "participant": `0@s.whatsapp.net`,
      "remoteJid": "6289643739077-1613049930@g.us",
      "fromMe": false,
      "id": "3B64558B07848BD81108C1D14712018E"
    },
    "message": {
      "stickerMessage": {
        "fileSha256": "uZiOJzqOvrOo2WGjnMKgX2MMQMyasT+ZDgqUczpIBmY=",
		"pngThumbnail": ebotz,
	 "mimetype": "image/webp",
        "height": 64,
        "width": 64,
        "directPath": "/v/t62.15575-24/56110107_763365384384977_5720135628188301198_n.enc?oh=450f8f684b06f0ba2dbc9779e5f06774&oe=605B81EE",
        "fileLength": "60206",
        "firstFrameLength": 3626,
        "isAnimated": false
      }
    },
    "messageTimestamp": "1614070775",
    "status": "PENDING"
  }
// GIF
const fgi = {
	 key: { 
         fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "6289643739077-1613049930@g.us" } : {}) 
                },
	 message: { 
                 "videoMessage": { 
                 "title": `${tampilUcapan} ${pushname}`,
                 "h": `${tampilUcapan} ${pushname}`,
                 'duration': '99999', 
                 'gifPlayback': 'true', 
                 'caption': `${tampilUcapan} ${pushname}`,
                 'jpegThumbnail': ebotz
                        }
                       }
	                  } 
// TEXT WITH THUMBNAIL
const ftex = {
	 key: { 
          fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "6289643739077-1613049930@g.us" } : {}) 
                },
	 message: { 
		"extendedTextMessage": {
                 "text": `${tampilUcapan} ${pushname}`,
                 "title": `${tampilUcapan} ${pushname}`,
                 'jpegThumbnail': ebotz
                        }
	                  } 
                     }
// VN
const fvoc = {
	 key: { 
          fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "6289643739077-1613049930@g.us" } : {}) 
                },
	 message: { 
		"audioMessage": {
                 "mimetype":"audio/ogg; codecs=opus",
                 "seconds": "99999",
                 "ptt": "true"
                        }
	                  } 
                     }
        const fakestatus = (teks) => {
            simple.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": faketeks,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": fs.readFileSync('./media/Menu.jpg'),
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    }
                }
            })
        }
        simple.chatRead(from, "read")
        const fakegroup = (teks) => {
            simple.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289523258649-1604595598@g.us" } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": faketeks,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": fs.readFileSync('./media/Menu.jpg'),
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    }
                }
            })
        }
        const ftrol = {
	key : {
                          participant : '0@s.whatsapp.net'
                        },
       message: {
                    orderMessage: {
                            itemCount: 2022,
                            status: 1,
                            surface : 1,
                            message: `Hai ${pushname}`,  //Ganti Aja Nama Luh
                            orderTitle: `ciptaan : HAIKALGANZZ 📎`,
                            thumbnail: zero, //Gambarnye
                            sellerJid: '0@s.whatsapp.net' 
                          }
                        }
                      }
        const fakeitem = (teks) => {
           simple.sendMessage(from, teks, text, {
                   quoted: {
                           key:{
                           fromMe:false,
                           participant:`0@s.whatsapp.net`, ...(from ? {
                           remoteJid :"6289523258649-1604595598@g.us" }: {})
                           },message:{"orderMessage":{"orderId":"174238614569481","thumbnail":fs.readFileSync("./media/Menu.jpg"),"itemCount":2022,"status":"INQUIRY","surface":"CATALOG","message": `ciptaan : Haikal gans 📎`,"token":"AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="}}},
                           contextInfo: {"forwardingScore":999,"isForwarded":true}, sendEphemeral: true})}
  
//fakegif
const fgif = {
	 key: { 
         fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "6289643739077-1613049930@g.us" } : {}) 
                },
	 message: { 
                 "videoMessage": { 
                 "title": `Ɇ-ɃØŦƵ 𒆜 Terverifikasi🕊️`,
                 "h": `🕊️👋`,
                 'duration': '99999', 
                 'gifPlayback': 'true', 
                 'caption': `Ɇ-ɃØŦƵ 𒆜 Terverifikasi🕊️`,
                 'jpegThumbnail': tamnel
                        }
                       }
	                  } 
	//fakegif1
const fgif1 = {
	 key: { 
         fromMe: false,
	      participant: `0@s.whatsapp.net`, ...(from ? 
	 { remoteJid: "6289643739077-1613049930@g.us" } : {}) 
                },
	 message: { 
                 "videoMessage": { 
                 "title": `Ɇ-ɃØŦƵ 𒆜 Terverifikasi🕊️`,
                 "h": `🕊️👋`,
                 'duration': '99999', 
                 'gifPlayback': 'true', 
                 'caption': `Ɇ-ɃØŦƵ 𒆜 Terverifikasi🕊️`,
                 'jpegThumbnail': ebotz
                        }
                       }
	                  } 
       
//━━━━━━━━━━━━━━━[ CONNECTION 2 ]━━━━━━━━━━━━━━━━━//

        const sendStickerFromUrl = async(to, url) => {
                var names = Date.now() / 10000;
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, './stik' + names + '.png', async function () {
                    console.log('selesai');
                    let filess = './stik' + names + '.png'
                    let asw = './stik' + names + '.webp'
                    exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
                        let media = fs.readFileSync(asw)
                        simple.sendMessage(to, media, MessageType.sticker,{quoted:mek})
                        fs.unlinkSync(filess)
                        fs.unlinkSync(asw)
                    });
                });
            }
        const sendMediaURL = async(to, url, text="", mids=[]) =>{
                if(mids.length > 0){
                    text = normalizeMention(to, text, mids)
                }
                const fn = Date.now() / 10000;
                const filename = fn.toString()
                let mime = ""
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        mime = res.headers['content-type']
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, filename, async function () {
                    console.log('done');
                    let media = fs.readFileSync(filename)
                    let type = mime.split("/")[0]+"Message"
                    if(mime === "image/gif"){
                        type = MessageType.video
                        mime = Mimetype.gif
                    }
                    if(mime.split("/")[0] === "audio"){
                        mime = Mimetype.mp4Audio
                    }
                    simple.sendMessage(to, media, type, { quoted: ftrol, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
                    
                    fs.unlinkSync(filename)
                });
            }   
            if (budy.includes("https://chat.whatsapp.com/")) {
if (!isGroup) return
if (!isAntiLink) return
if (isGroupAdmins) return
var kic = `${sender.split("@")[0]}@s.whatsapp.net`
reply(` *「 GROUP LINK DETECTOR 」*\nKamu mengirimkan link grup chat, maaf kamu di kick dari grup :(`)
setTimeout(() => {
simple.groupRemove(from, [kic]).catch((e) => { reply(`BOT HARUS JADI ADMIN`) })
}, 0)
}

		if (budy.length > 3500) {
if (!isGroup) return
if (!isAntiVirtex) return
if (isGroupAdmins) return
reply('Tandai telah dibaca\n'.repeat(300))
reply(`「 *VIRTEX DETECTOR* 」\n\nKamu mengirimkan virtex, maaf kamu di kick dari group :(`)
console.log(color('[KICK]', 'red'), color('Received a virus text!', 'yellow'))
simple.groupRemove(from, [sender])
}     
//━━━━━━━━━━━━━━━[ JAM ]━━━━━━━━━━━━━━━━━//

	let runtime = function (seconds) {
  seconds = Number(seconds);
  var d = Math.floor(seconds / (3600 * 24));
  var h = Math.floor((seconds % (3600 * 24)) / 3600);
  var m = Math.floor((seconds % 3600) / 60);
  var s = Math.floor(seconds % 60);
  var dDisplay = d > 0 ? d + (d == 1 ? " hari, " : " Hari, ") : "";
  var hDisplay = h > 0 ? h + (h == 1 ? " jam, " : " Jam, ") : "";
  var mDisplay = m > 0 ? m + (m == 1 ? " menit, " : " Menit, ") : "";
  var sDisplay = s > 0 ? s + (s == 1 ? " detik" : " Detik") : "";
  return dDisplay + hDisplay + mDisplay + sDisplay;
};
var ase = new Date();
                        var jamss = ase.getHours();
                         switch(jamss){
                case 0: jamss = "Jangan gadang kak😁"; break;
                case 1: jamss = "Jangan gadang kak😁"; break;
                case 2: jamss = "Jangan gadang kak😁"; break;
                case 3: jamss = "Jangan gadang kak😁"; break;
                case 4: jamss = "Pagi 🌄 Jangan lupa sholat Subuh kak😇"; break;
                case 5: jamss = "Selamat pagi🌅"; break;
                case 6: jamss = "Selamat pagi 🌄"; break;
                case 7: jamss = "Selamat pagi🌄"; break;
                case 8: jamss = "Selamat pagi🌄"; break;
                case 9: jamss = "Selamat pagi🌄"; break;
                case 10: jamss = "Selamat pagi🌄"; break;
                case 11: jamss = "Selamat siang🌞"; break;
                case 12: jamss = "Siang 🌞 Jangan lupa sholat Zuhur kak😇"; break;
                case 13: jamss = "Selamat siang🌞"; break;
                case 14: jamss = "Selamat sore🌇"; break;
                case 15: jamss = "Sore🌇Jangan lupa sholat Ashar kak😇"; break;
                case 16: jamss = "Selamat sore🌇"; break;
                case 17: jamss = "Selamat sore🌇"; break;
                case 18: jamss = "Selamat malam🌙"; break;
                case 19: jamss = "Malam 🌙 Jangan lupa sholat Isya kak😇"; break;
                case 20: jamss = "Selamat malam🌙"; break;
                case 21: jamss = "Selamat malam🌙"; break;
                case 22: jamss = "Selamat malam 🌙"; break;
                case 23: jamss = "Selamat malam🌙"; break;
            }
            var tampilUcapan = "" + jamss;
let locale = "id";
             let d = new Date();
            let week = d.toLocaleDateString(locale, { weekday: "long" });
    let date = d.toLocaleDateString(locale, {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
    
    countDownDate = new Date("2022-01-01").getTime();
var now = new Date().getTime();
var distance = countDownDate - now;
var dayss = Math.floor(distance / (1000 * 60 * 60 * 24));
var hourss = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutess = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
var secondss = Math.floor((distance % (1000 * 60)) / 1000);
newYear = `${dayss}Hari ${hourss}Jam ${minutess}Menit ${secondss}Detik`

countDownDate = new Date("2022-04-02").getTime();
var now = new Date().getTime();
var distance = countDownDate - now;
var dayss = Math.floor(distance / (1000 * 60 * 60 * 24));
var hourss = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutess = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
var secondss = Math.floor((distance % (1000 * 60)) / 1000);
Ramadhan = `${dayss}Hari ${hourss}Jam ${minutess}Menit ${secondss}Detik`

    

//━━━━━━━━━━━━━━━[ CONNECTION 3 ]━━━━━━━━━━━━━━━━━//

		colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
		const isMedia = (type === 'imageMessage' || type === 'videoMessage')
		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
      	if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
      	//if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mTEXT\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
     	if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
      	//if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mTEXT\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
//runtimebio
runi = process.uptime() 
     simple.setStatus(`Ɇ-ɃØŦƵ 𒆜 [ON] | Active : ${kyun(runi)}`).catch((_)=>_);
     settingstatus = new Date() * 1;
//Verify

//━━━━━━━━━━━━━━━[ MENU ]━━━━━━━━━━━━━━━━━//
switch (command) {
	case 'menu':
	case 'help':
	case 'm':
	timestamp = speed();
latensi = speed() - timestamp
simple.updatePresence(from, Presence.recording)
sticWait(from)	
simple.updatePresence(from, Presence.recording)		
img =  fs.readFileSync('./media/Menu.jpg')
teks = `Hai ${pushname} 👋${tampilUcapan}
I'M Ɇ-ɃØŦƵ 𒆜 SIAP MEMBANTU ANDA✨`
trans = `𝑼𝑺𝑬𝑹 𝑰𝑵𝑭𝑶
_*Status : ${isOwner ? 'Owner' : 'User'}*_
_*Nama : ${pushname}*_
_*Bio : ${bio_user}*_
_*Tag : @${sender.split('@')[0]}*_

𝑩𝑶𝑻 𝑰𝑵𝑭𝑶
_*Nama Bot : ${botname}*_
_*Nama Owner : ${ownername}*_
_*Active : ${runtime(process.uptime())}*_
_*Speed : ${latensi.toFixed(4)} second*_
_*lenguage : JavaScript*_
_*Mode : PUBLIC*_

_NOTE_
Sebelum Menggunakan Bot Harap Untuk Baca Rules Ketik ${prefix}rulesbot
Kalau Ada Bug/Error Lapor Owner Ketik ${prefix}report <text>


_*JIKA BUTTON TIDAK TERLIHAT KETIK ${prefix}allmenu/${prefix}command*_
            
_*${week} ${date}*_`
but = [
          { buttonId: `${prefix}allmenu`, buttonText: { displayText: '💮ALLMENU💮' }, type: 1 },
          { buttonId: `${prefix}command`, buttonText: { displayText: '👑MENUNYA👑' }, type: 1 },
          { buttonId: `${prefix}infobot`, buttonText: { displayText: '🐣Ɇ-ɃØŦƵ 𒆜🐣' }, type: 1 },
        ]
        sendButImage(from, teks, trans, img, but)
//Sound
case 'sound9':
simple.updatePresence(from, Presence.recording)
sound = fs.readFileSync('Audio/dj26.mp3')
simple.sendMessage(from, sound, MessageType.audio, {quoted: fgif, mimetype: 'audio/mp4', ptt:true})
break

case 'ppcouple':
case 'ppcp': 
simple.updatePresence(from, Presence.recording)
			anu = await fetchJson(`https://ziyy.herokuapp.com/api/ppcouple?apikey=xZiyy`) 
			cowo = await getBuffer(anu.result.cowo_image)
			simple.sendMessage(from, cowo, image, {caption: 'Ini Untuk »  *𝗖𝗼𝘄𝗼𝗸𝗻𝘆𝗮'})
       cewe = await getBuffer(anu.result.cewe_image)
		    pll = `Ini Untuk » *𝗖𝗲𝘄𝗲𝗸𝗻𝘆𝗮*`
   sendButImage(from, pll, `E~BOTZ © 2021`, cewe, [                      
          {
            buttonId: `${prefix}ppcouple`,
            buttonText: {
              displayText: `Next︎`,
            },
            type: 1,
          },
        ]);                 
                    break
                           
  case 'bot':
  simple.updatePresence(from, Presence.recording)
sound = fs.readFileSync('Audio/dj15.mp3')
simple.sendMessage(from, sound, MessageType.audio, {quoted: ftrol, mimetype: 'audio/mp4', ptt:true})
break
//CATALOGMENU
 
 abcdefg
 
//━━━━━━━━━━━━━━━[ GAK TAU ]━━━━━━━━━━━━━━━━━//

case 'command': case 'simplemenu':
            listMsg = {
            buttonText: '𝗟𝗜𝗦𝗧 𝗠𝗘𝗡𝗨',
            footerText: `${time}`,
            description: `Hai @${sender.split('@')[0]}, ${tampilUcapan}! Pilih Menu Di Sini:]\n\n*Dont Spam!!*\n`,
            sections: [
            {
            "title": `${wib} - ${tampilUcapan} kak`,
            rows: [
            {
              "title": "『 CATALOG 』",
              "rowId": `${prefix}catalog`,
              "description": `🕊️Menampilkan Menu Dengan Konsep Catalog Menu🕊️`
            },
            {
              "title": "『 ALL MENU 』",
              "rowId": `${prefix}allmenu`,
              "description": `Menampilkan Semua Menu Yang Ada Di Ɇ-ɃØŦƵ 𒆜`
            },
            {
              "title": "『 GROUP MENU 』",
              "rowId": `${prefix}groupmenu`,
              "description": `Menampilkan Semua Fitur Yang Hanya Bisa Di Gunakan Di Dalam Group`
            },
            {
              "title": "『 STICKER MENU 』",
              "rowId": `${prefix}stickermenu`,
              "description": `Menampilkan Semua Fitur Yang Ada Di Sticker Menu`
            },
            {
              "title": "『 DOWNLOAD MENU 』",
              "rowId": `${prefix}downloadmenu`,
              "description": `Menampilkan Semua Fitur Yang Ada Di Download Menu`
            },
            {
              "title": "『 ISLAM MENU 』",
              "rowId": `${prefix}islammenu`,
              "description": `Menampilkan Semua Fitur Yang Ada Di Islam Menu`
            },
            {
              "title": "『 ANIME MENU 』",
              "rowId": `${prefix}animemenu`,
              "description": `Menampilkan Semua Fitur Yang Ada Di Anime Menu! Dasar Kau Wibu🗿`
            },
            {
              "title": "『 INFORMATION MENU 』",
              "rowId": `${prefix}informationmenu`,
              "description": `Menampilkan Semua Fitur Yang Ada Di Information Menu`
            },
            {
              "title": "『 SEARCH MENU 』",
              "rowId": `${prefix}searchmenu`,
              "description": `Menampilkan Semua Fitur Yang Ada Di Search Menu`
            },
            {
              "title": "『 PRIMBON MENU 』",
              "rowId": `${prefix}primbonmenu`,
              "description": `Menampilkan Semua Fitur Yang Ada Di Primbon Menu`
            },
            {
              "title": "『 OWNER MENU 』",
              "rowId": `${prefix}ownermenu`,
              "description": `Menampilkan Semua Fitur Yang Hanya Bisa Di Gunakan Oleh Owner!`
            },
            {
              "title": "『 ASUPAN MENU 』",
              "rowId": `${prefix}asupanmenu`,
              "description": `Menampilkan Semua Fitur Yang Ada Di Asupan Menu`
            },
            {
              "title": "『 SOUND MENU 』",
              "rowId": `${prefix}soundmenu`,
              "description": `Menampilkan Semua Sound Yang Ada Di Database Bot!`
            },
            {
              "title": "『 MAKER MENU 』",
              "rowId": `${prefix}makermenu`,
              "description": `Menampilkan Semua Fitur Yang Ada Di Maker Menu`
            }
            ]
            }],
            listType: 1
            }
            simple.sendMessage(from, listMsg, MessageType.listMessage, {contextInfo: { mentionedJid: [sender]},quoted:floc})
            break
//━━━━━━━━━━━━━━━[ FAKE ITEM ]━━━━━━━━━━━━━━━━━//

case 'groupmenu':
simple.updatePresence(from, Presence.recording)		
lett =
`❏─「 ${botname} 」─❏`
yess =`
𝐆𝐫𝐨𝐮𝐩 𝐌𝐞𝐧𝐮
${prefix}𝘢𝘯𝘵𝘪𝘭𝘪𝘯𝘬 <on/off>
${prefix}𝘸𝘦𝘭𝘤𝘰𝘮𝘦 <on/off>
${prefix}𝘢𝘯𝘵𝘪𝘷𝘪𝘳𝘵𝘦𝘹 <on/off>
${prefix}𝘨𝘳𝘰𝘶𝘱 <open/close>
${prefix}𝘭𝘪𝘯𝘬𝘨𝘳𝘶𝘱 
${prefix}𝘱𝘳𝘰𝘮𝘰𝘵𝘦 <tag>
${prefix}𝘥𝘦𝘮𝘰𝘵𝘦 <tag>
${prefix}𝘢𝘥𝘥 <628***>
${prefix}𝘬𝘪𝘤𝘬 <tag>
${prefix}𝘴𝘦𝘵𝘱𝘱 <foto>
${prefix}𝘴𝘦𝘵𝘥𝘦𝘴𝘤 <text>
${prefix}𝘴𝘦𝘵𝘯𝘢𝘮𝘦 <text>
${prefix}𝘩𝘪𝘥𝘦𝘵𝘢𝘨 <text>
${prefix}𝘵𝘢𝘨𝘢𝘭𝘭
${prefix}𝘭𝘪𝘴𝘵𝘢𝘥𝘮𝘪𝘯
${prefix}𝘯𝘴𝘧𝘸`
but = [
          { buttonId: `${prefix}rulesbot`, buttonText: { displayText: '☰ RULES BOT' }, type: 1 }
        ]
        sendButton(from, lett, yess, but)
break
case 'stickermenu':
simple.updatePresence(from, Presence.recording)
lett =
`❏─「 ${botname} 」─❏`
yess =`
 亗Sticker Menu亗
◇⃟̣̣🎭 ${prefix}attp <text>
◇⃟̣̣🎭 ${prefix}sticker <foto>
◇⃟̣̣🎭 ${prefix}toimg <replysticker>
◇⃟̣̣🎭 ${prefix}tomp3 <video>
◇⃟̣̣🎭 ${prefix}tovideo <replysticker>
◇⃟̣̣🎭 ${prefix}gura
◇⃟̣̣🎭 ${prefix}patrick
◇⃟̣̣🎭 ${prefix}doge
◇⃟̣̣🎭 ${prefix}animestick`
but = [
          { buttonId: `${prefix}rulesbot`, buttonText: { displayText: '☰ RULES BOT' }, type: 1 }
        ]
        sendButton(from, lett, yess, but)
break

case 'downloadmenu':
simple.updatePresence(from, Presence.recording)
lett =
`❏─「 ${botname} 」─❏`
yess =`
 亗Downloader Menu亗
◇⃟̣̣🗂️ ${prefix}play <judul>
◇⃟̣̣🗂️${prefix}ytsearch <search>
◇⃟̣̣🗂️${prefix}ytmp3 <link>
◇⃟̣̣🗂️ ${prefix}ytmp4 <link>
◇⃟̣̣🗂️${prefix}tiktoknowm 
◇⃟̣̣🗂️ ${prefix}tiktokmusic <link>
◇⃟̣̣🗂️ ${prefix}pinterest`
but = [
          { buttonId: `${prefix}rulesbot`, buttonText: { displayText: '☰ RULES BOT' }, type: 1 }
        ]
        sendButton(from, lett, yess, but)
break
case 'islammenu':
simple.updatePresence(from, Presence.recording)
lett =
`❏─「 ${botname} 」─❏`
yess =`
  亗Islam Menu亗
◇⃟̣̣☕ ${prefix}alquran
◇⃟̣̣☕ ${prefix}asmaulhusna
◇⃟̣̣☕ ${prefix}alquranaudio
◇⃟̣̣☕ ${prefix}jadwalsholat
◇⃟̣̣☕ ${prefix}kisahnabi
◇⃟̣̣☕ ${prefix}listsurah`
but = [
          { buttonId: `${prefix}rulesbot`, buttonText: { displayText: '☰ RULES BOT' }, type: 1 }
        ]
        sendButton(from, lett, yess, but)
break
case 'animemenu':
simple.updatePresence(from, Presence.recording)
lett =
`❏─「 ${botname} 」─❏`
yess =`
  亗Anime Menu亗
◇⃟̣̣🔖 ${prefix}character <name>
◇⃟̣̣🔖 ${prefix}manga
◇⃟̣̣🔖 ${prefix}anime
◇⃟̣̣🔖 ${prefix}kusonimesearch
◇⃟̣̣🔖 ${prefix}otakudesusearch
◇⃟̣̣🔖 ${prefix}nhentaisearch
◇⃟̣̣🔖 ${prefix}nekopoisearch`
but = [
          { buttonId: `${prefix}rulesbot`, buttonText: { displayText: '☰ RULES BOT' }, type: 1 }
        ]
        sendButton(from, lett, yess, but)
break
    
case 'informationmenu':
simple.updatePresence(from, Presence.recording)
lett =
`❏─「 ${botname} 」─❏`
yess =`
亗Information Menu亗
◇⃟̣̣🌐 ${prefix}kbbi <text>
◇⃟̣̣🌐 ${prefix}infogempa
◇⃟̣̣🌐 ${prefix}covidindo
◇⃟̣̣🌐 ${prefix}covidglobal 
◇⃟̣̣🌐 ${prefix}jadwaltv <siaran>
◇⃟̣̣🌐 ${prefix}translate <text>
◇⃟̣̣🌐 ${prefix}cuaca <lokasi>
◇⃟̣̣🌐 ${prefix}wikipedia <text>
◇⃟̣̣🌐 ${prefix}jarak <lokasi> - <lokasi>`
but = [
          { buttonId: `${prefix}rulesbot`, buttonText: { displayText: '☰ RULES BOT' }, type: 1 }
        ]
        sendButton(from, lett, yess, but)
break
    
case 'randomtextmenu':
simple.updatePresence(from, Presence.recording)
lett =
`❏─「 ${botname} 」─❏`
yess =`
亗Random Text Menu亗
◇⃟̣̣📜${prefix}quotes
◇⃟̣̣📜 ${prefix}quotesanime
◇⃟̣̣📜 ${prefix}quotesdilan
◇⃟̣̣📜 ${prefix}quotesimage
◇⃟̣̣📜 ${prefix}katabijak
◇⃟̣̣📜 ${prefix}randomnama`
but = [
          { buttonId: `${prefix}rulesbot`, buttonText: { displayText: '☰ RULES BOT' }, type: 1 }
        ]
        sendButton(from, lett, yess, but)
break

case 'soundmenu':
simple.updatePresence(from, Presence.recording)
lett =
`❏─「 ${botname} 」─❏`
yess =`
亗sound menu亗
◇⃟̣̣☕ ${prefix}sound1
◇⃟̣̣☕ ${prefix}sound2
◇⃟̣̣☕ ${prefix}sound3
◇⃟̣̣☕ ${prefix}sound4
◇⃟̣̣☕ ${prefix}sound5
◇⃟̣̣☕ ${prefix}sound6
◇⃟̣̣☕ ${prefix}sound7
◇⃟̣̣☕ ${prefix}sound8
◇⃟̣̣☕ ${prefix}sound9
◇⃟̣̣☕ ${prefix}sound10
◇⃟̣̣☕ ${prefix}sound11
◇⃟̣̣☕ ${prefix}sound12
◇⃟̣̣☕ ${prefix}sound13
◇⃟̣̣☕ ${prefix}sound14
◇⃟̣̣☕ ${prefix}sound15`
but = [
          { buttonId: `${prefix}rulesbot`, buttonText: { displayText: '☰ RULES BOT' }, type: 1 }
        ]
        sendButton(from, lett, yess, but)
break
    
case 'searchmenu':
simple.updatePresence(from, Presence.recording)
lett =
`❏─「 ${botname} 」─❏`
yess =`
亗Search Menu亗
◇⃟̣̣🔍 ${prefix}gimage
◇⃟̣̣🔍 ${prefix}wallpapersearch 
◇⃟̣̣🔍 ${prefix}playstore <name>
◇⃟̣̣🔍 ${prefix}shopee <name>
◇⃟̣̣🔍 ${prefix}google <search>`
but = [
          { buttonId: `${prefix}rulesbot`, buttonText: { displayText: '☰ RULES BOT' }, type: 1 }
        ]
        sendButton(from, lett, yess, but)
break
    
case 'primbonmenu':
simple.updatePresence(from, Presence.recording)
lett =
`❏─「 ${botname} 」─❏`
yess =`
亗Primbon Menu亗
◇⃟̣̣🔮 ${prefix}tebakumur <tag>
◇⃟̣̣🔮 ${prefix}artinama <name>
◇⃟̣̣🔮 ${prefix}jodoh
◇⃟̣̣🔮 ${prefix}jadian`
but = [
          { buttonId: `${prefix}rulesbot`, buttonText: { displayText: '☰ RULES BOT' }, type: 1 }
        ]
        sendButton(from, lett, yess, but)
break
    
case 'stalkmenu':
simple.updatePresence(from, Presence.recording)
lett =
`❏─「 ${botname} 」─❏`
yess =`
亗Stalk Menu亗
◇⃟̣̣🔎 ${prefix}stalkig <name>
◇⃟̣̣🔎 ${prefix}stalkgithub <name>
◇⃟̣̣🔎 ${prefix}stalktiktok <name>`
but = [
          { buttonId: `${prefix}rulesbot`, buttonText: { displayText: '☰ RULES BOT' }, type: 1 }
        ]
        sendButton(from, lett, yess, but)
break
 
case 'asupanmenu':
simple.updatePresence(from, Presence.recording)
lett =
`❏─「 ${botname} 」─❏`
yess =`
亗Asupan Menu亗
◇⃟̣̣🚫 ${prefix}asupan
◇⃟̣̣🚫 ${prefix}asupancecan
◇⃟̣̣🚫 ${prefix}asupanhillllljaber
◇⃟̣̣🚫 ${prefix}asupansantuy
◇⃟̣̣🚫 ${prefix}asupanukhti
◇⃟̣̣🚫 ${prefix}asupanbocil
◇⃟̣̣🚫 ${prefix}asupanghea
◇⃟̣̣🚫 ${prefix}asupanrika`  
but = [
          { buttonId: `${prefix}rulesbot`, buttonText: { displayText: '☰ RULES BOT' }, type: 1 }
        ]
        sendButton(from, lett, yess, but)
break

case 'meme':
simple.updatePresence(from, Presence.recording)
lett =
`❏─「 ${botname} 」─❏`
yess =`
亗Random Meme Menu亗
◇⃟̣̣📸 ${prefix}randommeme
◇⃟̣̣📸 ${prefix}randomdarkjoke
◇⃟̣̣📸 ${prefix}randommemeindo`
but = [
          { buttonId: `${prefix}rulesbot`, buttonText: { displayText: '☰ RULES BOT' }, type: 1 }
        ]
        sendButton(from, lett, yess, but)
break

case 'gabut':
simple.updatePresence(from, Presence.recording)
lett =
`❏─「 ${botname} 」─❏`
yess =`
亗Gabut Menu亗
◇⃟̣̣🗿 ${prefix}apakah <text>
◇⃟̣̣🗿 ${prefix}cekganteng <tag>
◇⃟̣̣🗿 ${prefix}cekcantik <tag>
◇⃟̣̣🗿 ${prefix}hobby <tag>
◇⃟̣̣🗿 ${prefix}bisakah <text>
◇⃟̣̣🗿 ${prefix}kapankah <text>
◇⃟̣̣🗿 ${prefix}citacita <text>`
but = [
          { buttonId: `${prefix}rulesbot`, buttonText: { displayText: '☰ RULES BOT' }, type: 1 }
        ]
        sendButton(from, lett, yess, but)
break

case 'makermenu':
simple.updatePresence(from, Presence.recording)
lett =
`❏─「 ${botname} 」─❏`
yess =`
亗Maker Menu亗
◇⃟̣̣🛠️ ${prefix}neon <text>
◇⃟̣̣🛠️ ${prefix}glitch <text>
◇⃟̣̣🛠️ ${prefix}thunder <text>
◇⃟̣̣🛠️ ${prefix}tahta <text>
◇⃟̣̣🛠️ ${prefix}glow <text>`
but = [
          { buttonId: `${prefix}rulesbot`, buttonText: { displayText: '☰ RULES BOT' }, type: 1 }
        ]
        sendButton(from, lett, yess, but)
break

case 'game':
simple.updatePresence(from, Presence.recording)
lett =
`❏─「 ${botname} 」─❏`
yess =`
亗Game Menu亗
◇⃟̣̣🎮 ${prefix}slot
◇⃟̣̣🎮 ${prefix}truth
◇⃟̣̣🎮 ${prefix}dare
◇⃟̣̣🎮 ${prefix}tembak
◇⃟̣̣🎮 ${prefix}tebakjenaka
◇⃟̣̣🎮 ${prefix}tebaklirik
◇⃟̣̣🎮 ${prefix}tebaktebakan
◇⃟̣̣🎮 ${prefix}caklontong`
but = [
          { buttonId: `${prefix}rulesbot`, buttonText: { displayText: '☰ RULES BOT' }, type: 1 }
        ]
        sendButton(from, lett, yess, but)
break

case 'ownermenu':
simple.updatePresence(from, Presence.recording)
lett =
`❏─「 ${botname} 」─❏`
yess =`
亗Owner Menu亗
◇⃟̣̣👑 ${prefix}owner
◇⃟̣̣👑 ${prefix}sewabot
◇⃟̣̣👑 ${prefix}bc <text>
◇⃟̣̣👑 ${prefix}report <text>
◇⃟̣̣👑 ${prefix}setppbot <replyfotony>
◇⃟̣̣👑 ${prefix}setbiobot <text>
◇⃟̣̣👑 ${prefix}setnamebot <text>
◇⃟̣̣👑 ${prefix}setthumb <replyfotony>
◇⃟̣̣👑 ${prefix}hentai
◇⃟̣̣👑 ${prefix}leave
◇⃟̣̣👑 ${prefix}join <link>`
but = [
          { buttonId: `${prefix}rulesbot`, buttonText: { displayText: '☰ RULES BOT' }, type: 1 }
        ]
        sendButton(from, lett, yess, but)
break

//━━━━━━━━━━━━━━━[ ALLMENU ]━━━━━━━━━━━━━━━━━//

	case 'allmenu':
	stst = await simple.getStatus(`${sender.split('@')[0]}@c.us`)
	simple.updatePresence(from, Presence.recording)
	img =  fs.readFileSync('./media/Menu.jpg')
	menunya =`BOT INFO
◇⃟̣̣🕊️ _*Nama Bot : ${botname}*_
◇⃟̣̣🕊️  _️Nama Owner : ${ownername}_
️◇⃟̣̣🕊️ _*Active : ${runtime(process.uptime())}*_
◇⃟̣̣🕊️  _️*Prefix : Multi*_
◇⃟̣̣🕊️  _*lenguage : JavaScript*_
◇⃟̣̣🕊️  _*Jam : ${time}*_
◇⃟̣̣🕊️  _*Mode : PUBLIC*_

USER INFO
◇⃟̣̣🕊️ _*Status : ${isOwner ? 'Owner' : 'User'}*_
◇⃟̣̣🕊️ _*Nama : ${pushname}*_
◇⃟̣̣🕊️ _*Bio : ${bio_user}*_
◇⃟̣̣🕊️ _*Tag : @${sender.split('@')[0]}*_

         _*ALLMENU*_

      ✘Group Menu⚙️
➼ ${prefix}antilink <on/off>
➼ ${prefix}welcome <on/off>
➼ ${prefix}antivirtex <on/off>
➼ ${prefix}group <open/close>
➼ ${prefix} linkgroup
➼ ${prefix}promote <tag>
➼ ${prefix}demote <tag>
➼ ${prefix}add <628****>
➼ ${prefix}kick <tag>
➼ ${prefix}setpp <foto>
➼ ${prefix}setdesc <text>
➼ ${prefix}setname <text>
➼ ${prefix}hidetag

     ✘Sticker Menu🎭
➼ ${prefix}attp <text>
➼ ${prefix}sticker <foto>
➼ ${prefix}tomp3 <video>
➼ ${prefix}tovideo <sticker>

     ✘Maker Menu🧰
➼ ${prefix}pornhub <text text>
➼ ${prefix}glitch <text> 
➼ ${prefix}wallgravity <text>
➼ ${prefix}ninjalogo <text
➼ ${prefix}lionlogo <text>
➼ ${prefix}freefire <text>
➼ ${prefix}pubg <text>
➼ ${prefix}neon <text>
➼ ${prefix}glitch <text>
➼ ${prefix}thunder <text>
➼ ${prefix}tahta <text>
➼ ${prefix}glow <text>

     ✘Downloader Menu📥
➼ ${prefix}play <judul>
➼ ${prefix}ytsearch <judul>
➼ ${prefix}ytmp3 <link>
➼ ${prefix}ytmp4 <link>
➼ ${prefix}tiktoknowm
➼ ${prefix}tiktokmusic <link>
➼ ${prefix}pinterest 

     ✘Islam Menu
➼ ${prefix}alquran
➼ ${prefix}asmaulhusna
➼ ${prefix}alquranaudio
➼ ${prefix}jadwalsholat
➼ ${prefix}kisahnabi
➼ ${prefix}listsurah
    
     ✘Anime Menu♨️
➼ ${prefix}character <name>
➼ ${prefix}manga 
➼ ${prefix}anime
➼ ${prefix}kusonimesearch 
➼ ${prefix}otakudesusearch
➼ ${prefix}nhentaisearch
➼ ${prefix}nekopoisearch

     ✘Information Menu📢
➼ ${prefix}kbbi <text>
➼ ${prefix}infogempa 
➼ ${prefix}covidindo
➼ ${prefix}covidglobal
➼ ${prefix}jadwaltv <siaran>
➼ ${prefix}translate <text>
➼ ${prefix}cuaca <lokasi>
➼ ${prefix}wikipedia <query>
➼ ${prefix}jarak <lokasi - lokasi>

     ✘Search Menu🔎
➼ ${prefix}gimage
➼ ${prefix}wallpapersearch
➼ ${prefix}playstore <nameapk>
➼ ${prefix}shopee <namabarang>
➼ ${prefix}google <query>
➼ ${prefix}ppcp

     ✘Primbon Menu📜
➼ ${prefix}tebakumur <name>
➼ ${prefix}artinama <name>
➼ ${prefix}jodoh
➼ ${prefix}jadian

     ✘Asupan Menu🚫
➼ ${prefix}popo
➼ ${prefix}ragil
➼ ${prefix}lilnasx
➼ ${prefix}
➼ ${prefix}
➼ ${prefix}
➼ ${prefix}
➼ ${prefix}

     ✘Game Menu🎮
➼ ${prefix}slot
➼ ${prefix}truth
➼ ${prefix}dare
➼ ${prefix}tembak
➼ ${prefix}tebakjenaka
➼ ${prefix}tebaklirik
➼ ${prefix}tebaktebakan
➼ ${prefix}caklontong

     ✘Random Menu🗑️
➼ ${prefix}babi
➼ ${prefix}beban
➼ ${prefix}apakah <query>
➼ ${prefix}cekganteng <name>
➼ ${prefix}cekcantik <name>
➼ ${prefix}cekpintar <name>

     ✘sound menu🎧
➼ ${prefix}sound1
➼ ${prefix}sound2
➼ ${prefix}sound3
➼ ${prefix}sound4
➼ ${prefix}sound5
➼ ${prefix}sound6
➼ ${prefix}sound7
➼ ${prefix}sound8
➼ ${prefix}sound9
➼ ${prefix}sound10
➼ ${prefix}sound11
➼ ${prefix}sound12
➼ ${prefix}sound13
➼ ${prefix}sound14
➼ ${prefix}sound15
➼ ${prefix}sound16
➼ ${prefix}sound17
➼ ${prefix}sound18
➼ ${prefix}sound19
➼ ${prefix}sound20

     ✘Owner Menu👑
➼ ${prefix}owner
➼ ${prefix}sewabot
➼ ${prefix}bc <text>
➼ ${prefix}setppbot <foto>
➼ ${prefix}setbiobot <text>
➼ ${prefix}setnamebot <text>
➼ ${prefix}setthumb <foto>
➼ ${prefix}hentai <🐣🐣>
➼ ${prefix}leave 
➼ ${prefix}join <linkgrup>

_*JANGAN LUPA 5 M*_
🐣. *MEMAKAI MASKER*
🐣. *MENCUCI TANGAN*
🐣. *MENJAGA JARAK*
🐣. *MENJAUHI KERUMUNAN*
🐣. *MEMBATASI MOBILITAS*

`
but = [
{ buttonId: `${prefix}owner`, buttonText: { displayText: 'ᏪPEMILIK BOT' }, type: 1 }, 
]
	 sendButImage(from, menunya, text, img, but) 
break	
case 'dindamenu':
simple.updatePresence(from, Presence.recording)
menunya =`
*STORE BY 𝐀𝐃𝐈𝐍𝐃𝐀*
*serbah murmer n suka promo dadakan🙀, banyak freenya juga lohh yukk joinn💘💘*

LINK GC STORE :
https://chat.whatsapp.com/JP2SwsR3Yp4LJM7D1CRbsV

︶꒦꒷꒷꒦︶꒦꒷꒷꒦︶꒦꒷꒷꒦︶꒦꒷꒷꒦︶꒦꒷꒷꒦︶

𝒍𝒊𝒔𝒕 𝒇𝒆𝒆;
🌷 𝒕𝒐𝒑 𝒖𝒑 𝒅𝒎 𝒇𝒓𝒆𝒆 𝒇𝒊𝒓𝒆 𝒗𝒊𝒂 𝒊𝒅
🌷 𝒕𝒐𝒑 𝒖𝒑 𝒅𝒎 𝒇𝒓𝒆𝒆 𝒇𝒊𝒓𝒆 𝒗𝒊𝒂 𝒍𝒐𝒈  
🌷 𝒕𝒐𝒑 𝒖𝒑 𝒖𝒄 𝒑𝒖𝒃𝒈
🌷 𝒕𝒐𝒑 𝒖𝒑 𝒅𝒎 𝒎𝒐𝒃𝒊𝒍𝒆 𝒍𝒆𝒈𝒆𝒏𝒅𝒔
🌷 𝒕𝒐𝒑 𝒖𝒑 𝒛𝒆𝒎 𝒛𝒆𝒑𝒆𝒕𝒐
🌷 𝒂𝒍𝒍 𝒕𝒖𝒕𝒐𝒓              
🌷 𝒂𝒍𝒍 𝒅𝒆𝒔𝒊𝒈𝒏
🌷 𝒂𝒍𝒍 𝒌𝒆𝒃𝒖𝒕𝒖𝒉𝒂𝒏 𝒊𝒈
🌷 𝒂𝒍𝒍 𝒂𝒑𝒌 𝑾𝒉𝒂𝒕𝒔𝑨𝒑𝒑
🌷 𝒂𝒍𝒍 𝒑𝒐𝒍𝒐𝒔𝒂𝒏
🌷 𝒋𝒂𝒔𝒂 𝒔𝒉𝒂𝒓𝒆
🌷 𝒋𝒂𝒔𝒂 𝒄𝒓1+𝒔𝒑𝒆𝒄𝒕+𝒔𝒔
🌷 𝒋𝒂𝒔𝒂 𝒉𝒊𝒕𝒖𝒏𝒈 𝒑𝒐𝒊𝒏𝒕, 𝒏𝒐 𝒕𝒂𝒃𝒆𝒍
🌷𝒂𝒍𝒍 𝒏𝒐𝒌𝒐𝒔
🌷𝒂𝒍𝒍 𝒂𝒑𝒌 𝒑𝒓𝒆𝒎
🌷𝒂𝒍𝒍 𝒑𝒍𝒑
▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬▭▬

♡̷̷۫۫ 𝐚𝐦𝐚𝐧 𝐧 𝐚𝐦𝐚𝐧𝐚𝐡!໋.ˑ
♡̷̷۫۫ 𝐠𝐚 𝐦𝐚𝐬𝐮𝐤 𝐠𝐜 𝐡𝐚𝐫𝐠𝐚 𝐥𝐞𝐛𝐢𝐡 𝐦𝐚𝐡𝐚𝐥໋.ˑ
♡̷̷۫۫ 𝐨𝐫𝐝𝐞𝐫? 𝐰𝐚𝐣𝐢𝐛 𝐬𝐚𝐛𝐚𝐫໋.ˑ
♡̷̷۫۫ 𝐚𝐥𝐥 𝐭𝐫𝐱 𝐧𝐨 𝐫𝐞𝐟𝐟, 𝐬𝐥𝐡 𝐭𝐟? 𝐇𝐀𝐍𝐆𝐔𝐒໋.ˑ
♡̷̷۫۫ 𝐩𝐚𝐲𝐦𝐞𝐧𝐭? 𝐨𝐧𝐥𝐲 𝐠𝐨𝐩𝐚𝐲໋.ˑ 
♡̷̷۫۫ 𝐧𝐨 𝐬𝐡𝐚𝐫𝐞 𝐚𝐩𝐚𝐩𝐮𝐧 𝐤𝐞 𝐠𝐜 𝐚𝐝𝐦𝐢𝐧!໋.ˑ
♡̷̷۫۫ 𝐜𝐨𝐩𝐲 𝐥𝐢𝐬𝐭?𝐬𝐩𝐚𝐦 𝐯𝐢𝐫𝐭𝐞𝐱໋.ˑ
`

	simple.sendMessage(from, menunya, text, {quoted: ftrol})
                  break
case 'ssweb':  
                   if (isBanned) return reply(mess.banned)
                   if (args.length < 1) return reply(`[❗] Example :\n*${prefix}${command} https://google.com*`)                  
                   reply(mess.wait)
                   anu = await getBuffer(`https://hardianto.xyz/api/tools/ssweb?url=${args.join(' ')}&apikey=hardianto`)
                   simple.sendMessage(from, anu, image, {caption: `BERHASIL KAK\n\nPlease Support *Yanz Bot*`, quoted: mek})
                   break
	
//InfoToDay

case 'infotoday':
simple.updatePresence(from, Presence.recording)
lett =
`HariTanggal :
Time :
Runtime :`
but = [
          { buttonId: `${prefix}rulesbot`, buttonText: { displayText: '☰ RULES BOT' }, type: 1 }
        ]
        sendButton( lett)
break

//Nulis
case 'nulis':

if (!q) return reply('Textnya mana gan?')
sticWait(from)
kon = (`https://api.lolhuman.xyz/api/nulis?apikey=${lolkey}&text=${q}`)
anu = await getBuffer(kon)
simple.sendMessage(from, anu, image, { quoted: mek, thumbnail: fs.readFileSync('./media/Wkwk.jpg')})
break


//━━━━━━━━━━━━━━━[ FITUR GROUP ]━━━━━━━━━━━━━━━━━//
case 'welcome' : case 'welkom' :
simple.updatePresence(from, Presence.recording)
if (!isGroup) return reply(mess.only.group)
but = [
{ buttonId: '.welcomee on', buttonText: { displayText: '✔️' }, type: 1 },
{ buttonId: '.welcomee off', buttonText: { displayText: '❌' }, type: 1 }
]
sendButton(from, "Silahkan pilih untuk Welcome group", faketeks, but, mek)
break
case 'welcomee':
simple.updatePresence(from, Presence.recording)
if (!isGroup) return reply(mess.only.group)
if (args.length < 1) return reply(`Ketik :\n${prefix}welcome on untuk mengaktifkan\n${prefix}welcome off untuk menonaktifkan`)
if ((args[0]) === 'on') {
if (isWelkom) return reply('welcome sudah aktif')
_welkom.push(from)
fs.writeFileSync('./database/welcome.json', JSON.stringify(_welkom))
reply(`\`\`\`✓Sukses mengaktifkan fitur welcome di group\`\`\` *${groupMetadata.subject}*`)
} else if ((args[0]) === 'off') {
if (!isWelkom) return reply('welcome sudah off sebelumnya')
_welkom.splice(from, 1)
fs.writeFileSync('./database/welcome.json', JSON.stringify(_welkom))
reply(`\`\`\`✓Sukses menonaktifkan fitur welcome di group\`\`\` *${groupMetadata.subject}*`)
} else {
reply('on untuk mengaktifkan, off untuk menonaktifkan')
}
break
case 'antilink' :
simple.updatePresence(from, Presence.recording)
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply("Bot Bukan Admin! 🗿")
but = [
{ buttonId: '!antilinkon', buttonText: { displayText: 'On' }, type: 1 },
{ buttonId: '!antilinkoff', buttonText: { displayText: 'Off' }, type: 1 }
]
sendButton(from, "Silahkan pilih untuk antilink group", faketeks, but, mek)
break
case 'antilinkon' :
simple.updatePresence(from, Presence.recording)
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply("Bot Bukan Admin! 🗿")
if (isAntiLink) return reply('anti link sudah on')
_antilink.push(from)
fs.writeFileSync('./database/antilink.json', JSON.stringify(_antilink))
reply(`\`\`\`✓Sukses mengaktifkan fitur anti link di group\`\`\` *${groupMetadata.subject}*`)
break
case 'antilinkoff' :
simple.updatePresence(from, Presence.recording)
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply("Bot Bukan Admin! 🗿")
if (!isAntiLink) return reply('anti link sudah off sebelumnya')
_antilink.splice(from, 1)
fs.writeFileSync('./database/antilink.json', JSON.stringify(_antilink))
reply(`\`\`\`✓Sukses menonaktifkan fitur anti link di group\`\`\` *${groupMetadata.subject}*`)
break
case 'antivirtex' :
simple.updatePresence(from, Presence.recording)
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply("Bot Bukan Admin! 🗿")
but = [
{ buttonId: '!antivirtexon', buttonText: { displayText: 'On' }, type: 1 },
{ buttonId: '!antivirtexoff', buttonText: { displayText: 'Off' }, type: 1 }
]
sendButton(from, "Silahkan pilih untuk antivirtex group", faketeks, but, mek)
break
case 'antivirtexon' :
simple.updatePresence(from, Presence.recording)
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply("Bot Bukan Admin! 🗿")
if (isAntiVirtex) return reply('anti virtex group sudah aktif sebelumnya')
_antivirtex.push(from)
fs.writeFileSync('./database/antivirtex.json', JSON.stringify(_antivirtex))
reply(`\`\`\`Sukses mengaktifkan mode anti virtex di group\`\`\` *${groupMetadata.subject}*`)
break
case 'antivirtexoff' :
simple.updatePresence(from, Presence.recording)
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply("Bot Bukan Admin! 🗿")
if (!isAntiVirtex) return reply('Mode anti virtex sudah nonaktif sebelumnya')
_antivirtex.splice(from, 1)
fs.writeFileSync('./database/antivirtex.json', JSON.stringify(_antivirtex))
reply(`\`\`\`✓Sukes menonaktifkan mode anti virtex di group\`\`\` *${groupMetadata.subject}*`)
break
case 'group' :
simple.updatePresence(from, Presence.recording)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isGroup) return reply(mess.only.group)
if (!isBotGroupAdmins) return reply("Bot Bukan Admin! 🗿")
but = [
{ buttonId: '!groupbuka', buttonText: { displayText: 'Buka' }, type: 1 },
{ buttonId: '!grouptutup', buttonText: { displayText: 'Tutup' }, type: 1 }
]
sendButton(from, "Silahkan pilih untuk buka/tutup group", faketeks, but, mek)
break
case 'groupbuka' :
simple.updatePresence(from, Presence.recording)
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply("Bot Bukan Admin! 🗿")
reply(`\`\`\`✓Sukses Membuka Group\`\`\` *${groupMetadata.subject}*`)
simple.groupSettingChange(from, GroupSettingChange.messageSend, false)
break
case 'grouptutup' :
simple.updatePresence(from, Presence.recording)
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply("Bot Bukan Admin! 🗿")
reply(`\`\`\`✓Sukses Menutup Group\`\`\` *${groupMetadata.subject}*`)
simple.groupSettingChange(from, GroupSettingChange.messageSend, true)
break
case 'linkgrup' :
simple.updatePresence(from, Presence.recording)
if (!isGroup) return reply(mess.only.group)
if (!isBotGroupAdmins) return reply("Bot Bukan Admin! 🗿")
linkgc = await simple.groupInviteCode(from)
yeh = `https://chat.whatsapp.com/${linkgc}\n\nlink Group *${groupName}*`
simple.sendMessage(from, yeh, text, { quoted: ftrol })
break
case 'promote' :
simple.updatePresence(from, Presence.recording)
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply("Bot Bukan Admin! 🗿")
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di jadi admin!')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = 'Perintah di terima, anda menjdi admin :\n'
for (let _ of mentioned) {
teks += `@${_.split('@')[0]}\n`
}
mentions(teks, mentioned, true)
simple.groupMakeAdmin(from, mentioned)
} else {
mentions(`Perintah di terima, @${mentioned[0].split('@')[0]} Kamu Menjadi Admin Di Group *${groupMetadata.subject}*`, mentioned, true)
simple.groupMakeAdmin(from, mentioned)
}
break
case 'promote2' :
simple.updatePresence(from, Presence.recording)
if (!isGroup) return reply(mess.only.group)
if (!isOwner) return reply(mess.only.admin)
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di jadi admin!')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = 'Perintah di terima, anda menjdi admin :\n'
for (let _ of mentioned) {
teks += `@${_.split('@')[0]}\n`
}
mentions(teks, mentioned, true)
simple.groupMakeAdmin(from, mentioned)
} else {
mentions(`Perintah di terima, @${mentioned[0].split('@')[0]} Kamu Menjadi Admin Di Group *${groupMetadata.subject}*`, mentioned, true)
simple.groupMakeAdmin(from, mentioned)
}
break
case 'demote' :
simple.updatePresence(from, Presence.recording)
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply("Bot Bukan Admin! 🗿")
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di tidak jadi admin!')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = 'Perintah di terima, anda tidak admin lagi! :\n'
for (let _ of mentioned) {
teks += `@${_.split('@')[0]}\n`
}
mentions(teks, mentioned, true)
simple.groupDemoteAdmin(from, mentioned)
} else {
mentions(`Perintah di terima, Menurunkan : @${mentioned[0].split('@')[0]} Menjadi Member`, mentioned, true)
simple.groupDemoteAdmin(from, mentioned)
}
break
case 'demote2' :
simple.updatePresence(from, Presence.recording)
if (!isGroup) return reply(mess.only.group)
if (!isOwner) return reply(mess.only.admin)
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di tidak jadi admin!')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = 'Perintah di terima, anda tidak admin lagi! :\n'
for (let _ of mentioned) {
teks += `@${_.split('@')[0]}\n`
}
mentions(teks, mentioned, true)
simple.groupDemoteAdmin(from, mentioned)
} else {
mentions(`Perintah di terima, Menurunkan : @${mentioned[0].split('@')[0]} Menjadi Member`, mentioned, true)
simple.groupDemoteAdmin(from, mentioned)
}
break
case 'add' :
simple.updatePresence(from, Presence.recording)
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply("Bot Bukan Admin! 🗿")
if (args.length < 1) return reply('Yang mau di add siapa??')
if (args[0].startsWith('08')) return reply('Gunakan kode negara Gan Contoh 628***')
try {
num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
simple.groupAdd(from, [num])
} catch (e) {
console.log('Error :', e)
reply('Gagal menambahkan target, mungkin karena di private')
}
break
case 'kick' :
simple.updatePresence(from, Presence.recording)
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply("Bot Bukan Admin! 🗿")
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag target yang ingin di tendang!')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = 'Perintah di terima, mengeluarkan :\n'
for (let _ of mentioned) {
teks += `@${_.split('@')[0]}\n`
}
mentions(teks, mentioned, true)
simple.groupRemove(from, mentioned)
} else {
mentions(`Perintah di terima, mengeluarkan : @${mentioned[0].split('@')[0]}`, mentioned, true)
simple.groupRemove(from, mentioned)
}
break
case 'tagall':
if (!isGroup) return reply("Khusus di grup");
if (!isGroupAdmins && !zer.key.fromMe) return reply(mess.only.admin);
let arr = [];
let txti = `[ 𝗧𝗔𝗚 𝗔𝗟𝗟 ]\n${q ? q : ''}\n\n`
for (let i of groupMembers){
txti += `=> @${i.jid.split("@")[0]}\n`
arr.push(i.jid)
}
mentions(txti, arr, true)
break
case 'setname':
simple.updatePresence(from, Presence.recording)
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
simple.groupUpdateSubject(from, `${body.slice(9)}`)
simple.sendMessage(from, `\`\`\`✓Sukses Mengganti Nama Group Menjadi\`\`\` *${body.slice(9)}*`, text, { quoted: ftrol })
break
case 'setdesc':
simple.updatePresence(from, Presence.recording)
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
simple.groupUpdateDescription(from, `${body.slice(9)}`)
simple.sendMessage(from, `\`\`\`✓Sukses Mengganti Deskripsi Group\`\`\` *${groupMetadata.subject}* Menjadi: *${body.slice(9)}*`, text, { quoted: ftrol })
break
case 'setpp':
simple.updatePresence(from, Presence.recording)
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
media = await simple.downloadAndSaveMediaMessage(mek, './database/media_user')
await simple.updateProfilePicture(from, media)
reply(mess.wait)
reply(`\`\`\`✓Sukses Mengganti Profil Group\`\`\` *${groupMetadata.subject}*`)
break
case 'hidetag':
simple.updatePresence(from, Presence.recording)
if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
var value = body.slice(9)
var group = await simple.groupMetadata(from)
var member = group['participants']
var mem = []
member.map(async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
var options = {
text: value,
contextInfo: { mentionedJid: mem },
quoted: ftrol
}
simple.sendMessage(from, options, text)
break
case 'hidetag2':
simple.updatePresence(from, Presence.recording)
if (!isOwner) return reply('Owner Only!!')
var value = body.slice(9)
var group = await simple.groupMetadata(from)
var member = group['participants']
var mem = []
member.map(async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
var options = {
text: value,
contextInfo: { mentionedJid: mem },
quoted: ftrol
}
simple.sendMessage(from, options, text)
break

//━━━━━━━━━━━━━━━[ FITUR STICKER ]━━━━━━━━━━━━━━━━━//

case 'semoji':
       case 'emoji':
              if (args.length == 0) return reply(`Example: ${prefix + command} ðŸ˜­`)
              emoji = args[0]
              try {
              emoji = encodeURI(emoji[0])
              } catch {
              emoji = encodeURI(emoji)
 }
              ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/smoji/${emoji}?apikey=${setting.lolkey}`)
              await simple.sendMessage(from, ini_buffer, sticker, { quoted: mek })
              break
case 'attp':
simple.updatePresence(from, Presence.recording)
if (args.length == 0) return reply(`Example: ${prefix + command} Hai`)
buffer = await getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeURI(q)}`)
simple.sendMessage(from, buffer, sticker, { quoted: ftrol })
break
case 'sticker':
case 'stiker':
case 's':
simple.updatePresence(from, Presence.recording)
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
const media = await simple.downloadAndSaveMediaMessage(encmedia, './database/media_user')
ran = getRandom('.webp')
await ffmpeg(`./${media}`)
.input(media)
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
reply(mess.error.stick)
})
.on('end', function () {
console.log('Finish')
buffer = fs.readFileSync(ran)
costum(buffer, sticker, Verived, `Ɇ-ɃØŦƵ 𒆜 _Active :  ${runtime(process.uptime())}*_`)
fs.unlinkSync(media)
fs.unlinkSync(ran)
})
.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)
} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
const media = await simple.downloadAndSaveMediaMessage(encmedia, './database/media_user')
ran = getRandom('.webp')
reply(mess.wait)
await ffmpeg(`./${media}`)
.inputFormat(media.split('.')[1])
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
tipe = media.endsWith('.mp4') ? 'video' : 'gif'
reply(`❌ Gagal, pada saat mengkonversi ${tipe} ke stiker. pastikan untuk video yang dikirim tidak lebih dari 9 detik`)
})
.on('end', function () {
console.log('Finish')
costum(fs.readFileSync(ran), sticker, Verived, `~ Nih Dah Jadi Gif Stikernya`)
fs.unlinkSync(media)
fs.unlinkSync(ran)
})
.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)
} else if ((isMedia || isQuotedImage) && args[0] == 'nobg') {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
const media = await simple.downloadAndSaveMediaMessage(encmedia, './database/media_user')
ranw = getRandom('.webp')
ranp = getRandom('.png')
reply(mess.wait)
keyrmbg = '14a6072c1a48c7595c5fbce1'
await removeBackgroundFromImageFile({ path: media, apiKey: keyrmbg, size: 'auto', type: 'auto', ranp }).then(res => {
fs.unlinkSync(media)
let buffer = Buffer.from(res.base64img, 'base64')
fs.writeFileSync(ranp, buffer, (err) => {
if (err) return reply('Gagal, Terjadi kesalahan, silahkan coba beberapa saat lagi.')
})
exec(`ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${ranw}`, (err) => {
fs.unlinkSync(ranp)
if (err) return reply(mess.error.stick)
simple.sendMessage(from, fs.readFileSync(ranw), sticker, { quoted: ftrol })
fs.unlinkSync(ranw)
})
})
} else {
reply(`Kirim gambar dengan caption ${prefix}sticker atau tag gambar yang sudah dikirim`)
}
break
case 'toimg':
				case 'tomedia':
					if (!isQuotedSticker) return reply('Reply stiker nya')
					if (mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.isAnimated === true){
						const encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
						const media = await simple.downloadAndSaveMediaMessage(encmedia)
						const upload = await uploadimg(media, Date.now() + '.webp')
						console.log(upload)
						reply(`${upload.result.image}`)
						const rume = await axios.get(`http://nzcha-apii.herokuapp.com/webp-to-mp4?url=${upload.result.image}`)
						console.log(rume.data)
						sendMediaURL(from, rume.data.result)
					} else {
						const encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
						const media = await simple.downloadAndSaveMediaMessage(encmedia)
						ran = '1000.png'
						exec(`ffmpeg -i ${media} ${ran}`, (err) => {
							fs.unlinkSync(media)
							if (err) return reply(mess.error.api)
							buffer = fs.readFileSync(ran)
							simple.sendMessage(from, buffer, image, {quoted: mek})
							fs.unlinkSync(ran)
						})
					}
					break
case 'tomp3':
simple.updatePresence(from, Presence.recording)
if (!isQuotedVideo) return reply('Reply Video nya Tod')
reply(mess.wait)
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
media = await simple.downloadAndSaveMediaMessage(encmedia, './database/media_user')
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return reply('Gagal, pada saat mengkonversi video ke mp3')
bufferlkj = fs.readFileSync(ran)
simple.sendMessage(from, bufferlkj, audio, { mimetype: 'audio/mp4', quoted: ftrol })
fs.unlinkSync(ran)
})
break
case 'tovideo':
simple.updatePresence(from, Presence.recording)
if (!isQuotedSticker) return reply('Reply stikernya')
reply(mess.wait)
anumedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
anum = await simple.downloadAndSaveMediaMessage(anumedia, './database/media_user')
ran = getRandom('.webp')
exec(`ffmpeg -i ${anum} ${ran}`, (err) => {
fs.unlinkSync(anum)
buffer = fs.readFileSync(ran)
simple.sendMessage(from, buffer, video, { quoted: ftrol, caption: 'Done...' })
fs.unlinkSync(ran)
})
break

//ELLOAJA//nyuri dari Sc orang🐣
case 'amongus':
			random = Math.floor(Math.random() * 6) + 1
		wkwk = await getBuffer(`https://api.lolhuman.xyz/api/sticker/amongus?apikey=AditAnjay`)
			simple.sendMessage(from, wkwk, sticker, {quoted: zer})
			break
case 'sertiff3':

lol = await getBuffer(`https://sertiojanganzapi.nasihosting.com/serti/serti3/img.php?nama=${q}`)
simple.sendMessage(from, lol, image, {quoted: zer, caption: 'Nih Jangan Lupa Subscribe SonelBotz'})
break
const c = args.join(' ')
case 'antidelete':
      if (!isOwner && !mek.key.fromMe) return sticOwner(from)
           if (c === 'on'){
             antidelete = false
                    reply(`Berhasil mengaktifkan antidelete`)
                } else if (c === 'off'){
                    antidelete = true
                    reply(`Berhasil menonaktifkan antidelete`)
                } else if (!c) {
                    anu =`Silahkan pilih salah satu\n\non: untuk mengaktifkan\noff: untuk menonaktifkan`
const buttons = [{buttonId: 'antideletee on', buttonText: {displayText: 'ON✔️'}, type: 1},{buttonId: 'antideletee off', buttonText: {displayText: 'OFF✖️'}, type: 1}]
const buttonMessage = {
    contentText: `${anu}`,
    footerText: '*_© Ɇ-ɃØŦƵ 𒆜*',
    buttons: buttons,
    headerType: 1
}
await simple.sendMessage(from, buttonMessage, MessageType.buttonsMessage, {quoted: ftrol})
                }
                break
case 'lirik':
if (args.length < 1) return reply('Judulnya?')
reply(mess.wait)
teks = body.slice(7)
lirikLagu(teks).then((res) => {
let lirik = `${res[0].result}`
reply(lirik)
})
break
case 'hilih': 
					if (args.length < 1) return reply('kasih teks lah^_^!!!')
					anu = await fetchJson(`https://api.zeks.xyz/api/hilihmaker?text=${body.slice(7)}&apikey=${lolkey}`, {method: 'get'})
					reply(anu.result)
					break
		case 'holoh': 
					if (args.length < 1) return reply('kasih teks lah^_^!!!')
					anu = await fetchJson(`https://a.apimau.ga/vokal?vokal=o&teks=${body.slice(7)}`, {method: 'get'})
					reply(anu.result)
					break
		case 'halah': 
					if (args.length < 1) return reply('kasih teks lah^_^!!!')
					anu = await fetchJson(`https://a.apimau.ga/vokal?vokal=a&teks=${body.slice(7)}`, {method: 'get'})
					reply(anu.result)
					break
		case 'huluh': 
					if (args.length < 1) return reply('kasih teks lah^_^!!!')
					anu = await fetchJson(`https://a.apimau.ga/vokal?vokal=u&teks=${body.slice(7)}`, {method: 'get'})
					reply(anu.result)
					break
		case 'heleh': 
					if (args.length < 1) return reply('kasih teks lah^_^!!!')
					anu = await fetchJson(`https://a.apimau.ga/vokal?vokal=e&teks=${body.slice(7)}`, {method: 'get'})
					reply(anu.result)
					break
case 'ttp':
if (args.length < 1) return reply(`teksnya mana bruh?\ncontoh ${prefix} ${pushname}`)
woy = args.join(" ")
reply('wait....')
anjay = `http://zekais-api.herokuapp.com/text2png?text=${woy}&color=white`
sendStickerFromUrl(from, anjay)
break
case 'afk': 
              if (!isGroup) return reply(mess.only.group)
              if (isAfkOn) return reply('Woe Kalo Mau Afk Jangan Nimbrung di sini')
              const reason = q ? q : 'Nothing.'
              afk.addAfkUser(sender, time, reason, _afk)
              const aluty = `Fitur AFK berhasil *diaktifkan!*\n\n➸ *Ussername*: ${pushname}\n➸ *Alasan*: ${reason}`
              reply(aluty)
              break
case 'smeme': 
reply('Loading.... ')
top = arg.split('|')[0]
bottom = arg.split('|')[1]
var imgbb = require('imgbb-uploader')
if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length > 0) {
ger = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek 
owgi = await  simple.downloadAndSaveMediaMessage(ger)
anu = await imgbb("cedeb44b8d204947a6833ca1412ca77d", owgi)
teks = `${anu.display_url}`
ranp = getRandom('.gif')
rano = getRandom('.webp')
anu1 = `https://api.memegen.link/images/custom/${top}/${bottom}.png?background=${teks}`
sendStickerFromUrl(from, `${anu1}`)
} else {
reply('Gunakan foto/stiker!')
}
break
case 'doge':
              reply(mess.wait)
              fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/anjing')
             .then(res => res.text())
             .then(body => {
              let tod = body.split("\n");
              let pjr = tod[Math.floor(Math.random() * tod.length)];
              sendStickerFromUrl(from, pjr)
}
)
              break
case 'patrick':
              reply(mess.wait)
              fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/patrik')
             .then(res => res.text())
             .then(body => {
              let tod = body.split("\n");
              let pjr = tod[Math.floor(Math.random() * tod.length)];
              sendStickerFromUrl(from, pjr)
}
)
              break
       case 'gura':
       case 'gawrgura':
              reply(mess.wait)
              fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/gura')
             .then(res => res.text())
             .then(body => {
              let tod = body.split("\n");
              let pjr = tod[Math.floor(Math.random() * tod.length)];
              sendStickerFromUrl(from, pjr)
}
)
              break
case 'animestick':
       case 'stickeranime':
              reply(mess.wait)
              fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/animestick')
             .then(res => res.text())
             .then(body => {
              let todd = body.split("\n");
              let pjrr = todd[Math.floor(Math.random() * todd.length)];
              sendStickerFromUrl(from, pjrr)
}
)
              break
case 'ban':
					if (!isOwner) return reply('Lu Siapa?')
					bnnd = body.slice(6)
					ban.push(`${bnnd}@s.whatsapp.net`)
					fs.writeFileSync('./database/banned.json', JSON.stringify(ban))
					reply(`Nomor wa.me/${bnnd} telah dibanned !`)
					break
case 'unban':
					if (!isOwner) return reply('Lu Siapa?')
					bnnd = body.slice(8)
					ban.splice(`${bnnd}@s.whatsapp.net`, 1)
					fs.writeFileSync('./database/banned.json', JSON.stringify(ban))
					reply(`Nomor wa.me/${bnnd} telah di unban!`)
					break
case 'catalog':
var menu = `Hai kak ${pushname}

*Jangan Lupa Bahagia Hari Ini*

BOT INFO

◇⃟̣̣🕊️ _*Nama Bot : ${botname}*_
◇⃟̣̣🕊️  _️*NamaOwner : ${ownername}*_
️◇⃟̣̣🕊️ _*Active : ${runtime(process.uptime())}*_
◇⃟̣̣🕊️  _️*Prefix : Multi*_
◇⃟̣̣🕊️  _*lenguage : JavaScript*_
◇⃟̣̣🕊️  _*Jam : ${time}*_
◇⃟̣̣🕊️  _*Mode : START-MODE*_

OWNER INFO

◇⃟̣̣🕊️  _*Name : ItzElloAja*_
◇⃟̣̣🕊️  _*Umur : 14🐧*_
◇⃟̣̣🕊️  _*Game : Mc,Mlbb*_
◇⃟̣̣🕊️  _*GamerTag : ItzElloAja*_
◇⃟̣̣🕊️  _*Hobi : Ngen🤗🗿*_

         _ALLMENU_

      ✘Group Menu⚙️
➼ ${prefix}antilink <on/off>
➼ ${prefix}welcome <on/off>
➼ ${prefix}antivirtex <on/off>
➼ ${prefix}group <open/close>
➼ ${prefix} linkgroup
➼ ${prefix}promote <tag>
➼ ${prefix}demote <tag>
➼ ${prefix}add <628****>
➼ ${prefix}kick <tag>
➼ ${prefix}setpp <foto>
➼ ${prefix}setdesc <text>
➼ ${prefix}setname <text>
➼ ${prefix}hidetag

     ✘Sticker Menu🎭
➼ ${prefix}attp <text>
➼ ${prefix}sticker <foto>
➼ ${prefix}tomp3 <video>
➼ ${prefix}tovideo <sticker>
➼ ${prefix}doge
➼ ${prefix}animestick
➼ ${prefix}gura
➼ ${prefix}patrick

     ✘Maker Menu🧰
➼ ${prefix}pornhub <text text>
➼ ${prefix}glitch <text> 
➼ ${prefix}wallgravity <text>
➼ ${prefix}ninjalogo <text
➼ ${prefix}lionlogo <text>
➼ ${prefix}freefire <text>
➼ ${prefix}pubg <text>
➼ ${prefix}neon <text>
➼ ${prefix}glitch <text>
➼ ${prefix}thunder <text>
➼ ${prefix}tahta <text>
➼ ${prefix}glow <text>

     ✘Downloader Menu📥
➼ ${prefix}play <judul>
➼ ${prefix}ytsearch <judul>
➼ ${prefix}ytmp3 <link>
➼ ${prefix}ytmp4 <link>
➼ ${prefix}tiktoknowm
➼ ${prefix}tiktokmusic <link>
➼ ${prefix}pinterest 

     ✘Islam Menu
➼ ${prefix}alquran
➼ ${prefix}asmaulhusna
➼ ${prefix}alquranaudio
➼ ${prefix}jadwalsholat
➼ ${prefix}kisahnabi
➼ ${prefix}listsurah
    
     ✘Anime Menu♨️
➼ ${prefix}character <name>
➼ ${prefix}manga 
➼ ${prefix}anime
➼ ${prefix}kusonimesearch 
➼ ${prefix}otakudesusearch
➼ ${prefix}nhentaisearch
➼ ${prefix}nekopoisearch

     ✘Information Menu📢
➼ ${prefix}kbbi <text>
➼ ${prefix}infogempa 
➼ ${prefix}covidindo
➼ ${prefix}covidglobal
➼ ${prefix}jadwaltv <siaran>
➼ ${prefix}translate <text>
➼ ${prefix}cuaca <lokasi>
➼ ${prefix}wikipedia <query>
➼ ${prefix}jarak <lokasi - lokasi>

     ✘Search Menu🔎
➼ ${prefix}gimage
➼ ${prefix}wallpapersearch
➼ ${prefix}playstore <nameapk>
➼ ${prefix}shopee <namabarang>
➼ ${prefix}google <query>
➼ ${prefix}ppcp

     ✘Primbon Menu📜
➼ ${prefix}tebakumur <name>
➼ ${prefix}artinama <name>
➼ ${prefix}jodoh
➼ ${prefix}jadian

     ✘Asupan Menu🚫
➼ ${prefix}popo
➼ ${prefix}ragil
➼ ${prefix}lilnasx
➼ ${prefix}
➼ ${prefix}
➼ ${prefix}
➼ ${prefix}
➼ ${prefix}

     ✘Game Menu🎮
➼ ${prefix}slot
➼ ${prefix}truth
➼ ${prefix}dare
➼ ${prefix}tembak
➼ ${prefix}tebakjenaka
➼ ${prefix}tebaklirik
➼ ${prefix}tebaktebakan
➼ ${prefix}caklontong

     ✘Random Menu🗑️
➼ ${prefix}babi
➼ ${prefix}beban
➼ ${prefix}apakah <query>
➼ ${prefix}cekganteng <name>
➼ ${prefix}cekcantik <name>
➼ ${prefix}cekpintar <name>

     ✘sound menu🎧
➼ ${prefix}sound1
➼ ${prefix}sound2
➼ ${prefix}sound3
➼ ${prefix}sound4
➼ ${prefix}sound5
➼ ${prefix}sound6
➼ ${prefix}sound7
➼ ${prefix}sound8
➼ ${prefix}sound9
➼ ${prefix}sound10
➼ ${prefix}sound11
➼ ${prefix}sound12
➼ ${prefix}sound13
➼ ${prefix}sound14
➼ ${prefix}sound15
➼ ${prefix}sound16
➼ ${prefix}sound17
➼ ${prefix}sound18
➼ ${prefix}sound19
➼ ${prefix}sound20

     ✘Owner Menu👑
➼ ${prefix}owner
➼ ${prefix}sewabot
➼ ${prefix}bc <text>
➼ ${prefix}setppbot <foto>
➼ ${prefix}setbiobot <text>
➼ ${prefix}setnamebot <text>
➼ ${prefix}setthumb <foto>
➼ ${prefix}hentai <🐣🐣>
➼ ${prefix}leave 
➼ ${prefix}join <linkgrup>

_*JANGAN LUPA 5 M*_
🐣. *MEMAKAI MASKER*
🐣. *MENCUCI TANGAN*
🐣. *MENJAGA JARAK*
🐣. *MENJAUHI KERUMUNAN*
🐣. *MEMBATASI MOBILITAS*

            [ *POWERED BY ElloGanz ]
`
var imgs = await simple.prepareMessage('0@c.us', gambar, image, { thumbnail: tamnel })
            var imgCatalog = imgs.message.imageMessage
            var ctlg = await simple.prepareMessageFromContent(from, {
                "productMessage": {
                    "product": {
                        "productImage": imgCatalog,
                        "productId": "4457725420906655",
                        "title": `_*MENU ${botname}*_`,
                        "description": menu,
                        "footerText": `© Ɇ-ɃØŦƵ 𒆜`,
                        "currencyCode": "IDR",
                        "priceAmount1000": "20222",
                        "productImageCount": 1,
                        "firstImageId": 1,
                        "salePriceAmount1000": "1000",
                        "retailerId": `${week} ${date}`,
                        "url": "Love You All >_<"
                    },
                    "businessOwnerJid": "6289527031603@s.whatsapp.net",
                }
            }, { quoted: mek, mimetype: 'image/jpeg' })
            simple.relayWAMessage(ctlg)
            break
//━━━━━━━━━━━━━━━[ Dosa Menu ]━━━━━━━━━━━━━━━━━//
case 'dosa1':				 
qute = fs.readFileSync('./media/Menu.jpg') 
simple.sendMessage(from, qute, image, { quoted: ftrol, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/h2nygxbyb6n9cyo/VID-20210107-WA1468.mp4/file' })
break
case 'dosa2':
qute = fs.readFileSync('./media/Menu.jpg') 

simple.sendMessage(from, qute, image, { quoted: ftrol, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/pk8hozohzdc076c/VID-20210107-WA1466.mp4/file' })

break

case 'dosa3':	

qute = fs.readFileSync('./media/Menu.jpg') 

simple.sendMessage(from, qute, image, { quoted: ftrol, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/112q3u286tnvzjo/VID-20210107-WA1467.3gp/file' })				    

break

case 'dosa4':	

qute = fs.readFileSync('./media/Menu.jpg') 

simple.sendMessage(from, qute, image, { quoted: ftrol, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/arpphhxsv94ak0r/VID-20210107-WA1462.mp4/file' })				   

break

case 'dosa5':	

qute = fs.readFileSync('./media/Menu.jpg') 

simple.sendMessage(from, qute, image, { quoted: ftrol, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/us3f4j62emftbrf/VID-20210107-WA1463.mp4/file' })				   

break

case 'dosa6':	

qute = fs.readFileSync('./media/Menu.jpg') 

simple.sendMessage(from, qute, image, { quoted: ftrol, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/v4033tkl16hgf2b/VID-20210107-WA1459.mp4/file' })				   

break

case 'dosa7':

qute = fs.readFileSync('./media/Menu.jpg') 

simple.sendMessage(from, qute, image, { quoted: ftrol, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/3scnim6d1x4b8ie/VID-20210107-WA1461.mp4/file' })				   

break

case 'dosa8':	

qute = fs.readFileSync('./media/Menu.jpg') 

simple.sendMessage(from, qute, image, { quoted: ftrol, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/dx9tklonu0eq36w/VID-20210107-WA1464.mp4/file' })				   

break

case 'dosa10':	

qute = fs.readFileSync('./media/Menu.jpg') 

simple.sendMessage(from, qute, image, { quoted: ftrol, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/snwja297dv4zvtl/VID-20210107-WA0036.mp4/file' })				   

break

case 'dosa11':	

qute = fs.readFileSync('./media/Menu.jpg') 

simple.sendMessage(from, qute, image, { quoted: ftrol, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/60dqek0mqhyt6rn/VID-20210107-WA1530.mp4/file' })				   

break

case 'dosa12':	

qute = fs.readFileSync('./media/Menu.jpg') 

simple.sendMessage(from, qute, image, { quoted: ftrol, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/ni2mcdknb6zn50t/VID-20210107-WA1532.mp4/file' })				   

break

case 'dosa13':	

qute = fs.readFileSync('./media/Menu.jpg') 

simple.sendMessage(from, qute, image, { quoted: ftrol, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/i9t96lrmd9lm71z/VID-20210107-WA1542.mp4/file' })				   

break
case 'dosa14':	
qute = fs.readFileSync('./media/Menu.jpg') 
simple.sendMessage(from, qute, image, { quoted: ftrol, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/tjqdfmp8g08dt4e/VID-20210107-WA1536.mp4/file' })				   
break
case 'dosa15':
qute = fs.readFileSync('./media/Menu.jpg') 
simple.sendMessage(from, qute, image, { quoted: ftrol, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/x034q0s16u9vyhy/VID-20210107-WA1537.mp4/file' })				   
break


//━━━━━━━━━━━━━━━[ Nekopai Menu ]━━━━━━━━━━━━━━━━━//
			   case 'nekopoi1':
			   reply('Mode Sange!!..')
                 try {
				             pporang = 'https://i.ibb.co/ygw3X4P/120450014-395813958192355-7736109081332934145-n.jpg'
				} catch {
					          pporang = 'https://i.pinimg.com/originals/67/8a/24/678a2407f7d645c43d89f3905189c2dd.jpg'
				}
				fcrew = await getBuffer(pporang)
                ini_buffer = await getBuffer("https://i.pinimg.com/originals/33/3d/a0/333da04b420fbd824381385e6abe248f.jpg")
                simple.sendMessage(from, fcrew, MessageType.image, {quoted: Nia, caption: 'NIH LINKNYA: https://www2.zippyshare.com/d/z9dcY6Nr/791216/%5bNekoPoi%5d_Akina_to_Onsen_de_H_Shiyo%5b360P%5d%5bnekopoi.care%5d.mp4\n\nNOTE SIAPKAN TISU'})
                  break
                 case 'nekopoi2':
                 reply('Mode Sange!!..')
                 
                 try {
				             pporang = 'https://i.ibb.co/ygw3X4P/120450014-395813958192355-7736109081332934145-n.jpg'
				} catch {
					          pporang = 'https://i.pinimg.com/originals/67/8a/24/678a2407f7d645c43d89f3905189c2dd.jpg'
				}
				fcrew = await getBuffer(pporang)
                ini_buffer = await getBuffer("https://i.pinimg.com/originals/33/3d/a0/333da04b420fbd824381385e6abe248f.jpg")
                simple.sendMessage(from, fcrew, MessageType.image, {quoted: Nia, caption: 'NIH LINKNYA: https://www4.zippyshare.com/d/j7PFLGUY/946757/%5bNekoPoi%5d_Tsuma_ga_Kirei_ni_Natta_Wake_-_02_%5b360P%5d_%5bnekopoi.care%5d.mp4\n\nNOTE SIAPKAN TISU'})
                  break
                 case 'nekopoi3':
                 reply('Mode Sange!!..')
                 
                 try {
				             pporang = 'https://i.ibb.co/ygw3X4P/120450014-395813958192355-7736109081332934145-n.jpg'
				} catch {
					          pporang = 'https://i.pinimg.com/originals/67/8a/24/678a2407f7d645c43d89f3905189c2dd.jpg'
				}
				fcrew = await getBuffer(pporang)
                ini_buffer = await getBuffer("https://i.pinimg.com/originals/33/3d/a0/333da04b420fbd824381385e6abe248f.jpg")
                simple.sendMessage(from, fcrew, MessageType.image, {quoted: Nia, caption: 'NIH LINKNYA: https://www111.zippyshare.com/d/EK5uqIMh/566060/%5bNekoPoi%5d_Megane_no_Megami_-_01_%5b360P%5d_%5bnekopoi.care%5d.mp4\n\nNOTE SIAPKAN TISU'})
                  break
                 case 'nekopoi4':
                 reply('Mode Sange!!..')
                 
                 try {
				             pporang = 'https://i.ibb.co/ygw3X4P/120450014-395813958192355-7736109081332934145-n.jpg'
				} catch {
					          pporang = 'https://i.pinimg.com/originals/67/8a/24/678a2407f7d645c43d89f3905189c2dd.jpg'
				}
				fcrew = await getBuffer(pporang)
                ini_buffer = await getBuffer("https://i.pinimg.com/originals/33/3d/a0/333da04b420fbd824381385e6abe248f.jpg")
                simple.sendMessage(from, fcrew, MessageType.image, {quoted: Nia, caption: 'NIH LINKNYA: https://www109.zippyshare.com/d/2ebALhhS/463654/%5bNekoPoi%5d_Watashi_ga_Toriko_-_02%5b360P%5d%5bnekopoi.care%5d.mp4\n\nNOTE SIAPKAN TISU'})
                  break
                 case 'nekopoi5':
                 reply('Mode Sange!!..')
                 
                 try {
				             pporang = 'https://i.ibb.co/ygw3X4P/120450014-395813958192355-7736109081332934145-n.jpg'
				} catch {
					          pporang = 'https://i.pinimg.com/originals/67/8a/24/678a2407f7d645c43d89f3905189c2dd.jpg'
				}
				fcrew = await getBuffer(pporang)
                ini_buffer = await getBuffer("https://i.pinimg.com/originals/33/3d/a0/333da04b420fbd824381385e6abe248f.jpg")
                simple.sendMessage(from, fcrew, MessageType.image, {quoted: Nia, caption: 'NIH LINKNYA: https://www115.zippyshare.com/d/LmzOkRAI/313299/%5bNekoPoi%5d_simple.-iro_Toiki_-_01_%5b360P%5d%5bnekopoi.care%5d.mp4\n\nNOTE SIAPKAN TISU'})
                  break
                 case 'nekopoi6':
                 reply('Mode Sange!!..')
                 
                 try {
				             pporang = 'https://i.ibb.co/ygw3X4P/120450014-395813958192355-7736109081332934145-n.jpg'
				} catch {
					          pporang = 'https://i.pinimg.com/originals/67/8a/24/678a2407f7d645c43d89f3905189c2dd.jpg'
				}
				fcrew = await getBuffer(pporang)
                ini_buffer = await getBuffer("https://i.pinimg.com/originals/33/3d/a0/333da04b420fbd824381385e6abe248f.jpg")
                simple.sendMessage(from, fcrew, MessageType.image, {quoted: Nia, caption: 'NIH LINKNYA: https://www89.zippyshare.com/d/SgEHvrJs/42812/%5bNekoPoi%5d_simple.-iro_Toiki_-_02_%5b360P%5d%5bnekopoi.care%5d.mp4\n\nNOTE SIAPKAN TISU'})
                  break
                 case 'nekopoi7':
                 reply('Mode Sange!!..')
                 
                 try {
				             pporang = 'https://i.ibb.co/ygw3X4P/120450014-395813958192355-7736109081332934145-n.jpg'
				} catch {
					          pporang = 'https://i.pinimg.com/originals/67/8a/24/678a2407f7d645c43d89f3905189c2dd.jpg'
				}
				fcrew = await getBuffer(pporang)
                ini_buffer = await getBuffer("https://i.pinimg.com/originals/33/3d/a0/333da04b420fbd824381385e6abe248f.jpg")
                simple.sendMessage(from, fcrew, MessageType.image, {quoted: Nia, caption: 'NIH LINKNYA: https://www66.zippyshare.com/d/j0ivbciL/520411/%5bNekoPoi%5d_Onna_Maou_Melissa_no_H_na_Boukenki_-_01_%5b360P%5d_%5bnekopoi.care%5d.mp4\n\nNOTE SIAPKAN TISU'})
                  break
                 case 'nekopoi8':
                 reply('Mode Sange!!..')
                 
                 try {
				             pporang = 'https://i.ibb.co/ygw3X4P/120450014-395813958192355-7736109081332934145-n.jpg'
				} catch {
					          pporang = 'https://i.pinimg.com/originals/67/8a/24/678a2407f7d645c43d89f3905189c2dd.jpg'
				}
				fcrew = await getBuffer(pporang)
                ini_buffer = await getBuffer("https://i.pinimg.com/originals/33/3d/a0/333da04b420fbd824381385e6abe248f.jpg")
                simple.sendMessage(from, fcrew, MessageType.image, {quoted: Nia, caption: 'NIH LINKNYA: https://www71.zippyshare.com/d/M225YIrR/535656/%5bNekoPoi%5d_Buta_no_Gotoki_Sanzoku_ni_Torawarete_Shojo_wo_Ubawareru_Kyonyuu_HiNiaishi_Onna_Senshi_-_01%5b360P%5d%5bnekopoi.care%5d.mp4\n\nNOTE SIAPKAN TISU'})
                  break
                 case 'nekopoi9':
                 reply('NIH LINKNYA: https://www49.zippyshare.com/d/bdwYjaXS/605790/%5bNekoPoi%5d_Akebi_no_Hana___Maho_-_01_%5b360P%5d_%5bnekopoi.pro%5d.mp4\n\nNOTE SIAPKAN TISU')
                 
                 try {
				             pporang = 'https://i.ibb.co/ygw3X4P/120450014-395813958192355-7736109081332934145-n.jpg'
				} catch {
					          pporang = 'https://i.pinimg.com/originals/67/8a/24/678a2407f7d645c43d89f3905189c2dd.jpg'
				}
				fcrew = await getBuffer(pporang)
                ini_buffer = await getBuffer("https://i.pinimg.com/originals/33/3d/a0/333da04b420fbd824381385e6abe248f.jpg")
                simple.sendMessage(from, fcrew, MessageType.image, {quoted: simple, caption: 'NIH LINKNYA: https://www49.zippyshare.com/d/bdwYjaXS/605790/%5bNekoPoi%5d_Akebi_no_Hana___Maho_-_01_%5b360P%5d_%5bnekopoi.pro%5d.mp4\n\nNOTE SIAPKAN TISU'})
                  break


       case 'wangy':
              if (!q) return
              qq = q.toUpperCase()
              awikwok = `${qq} ${qq} ${qq} ❤️ ❤️ ❤️ WANGY WANGY WANGY WANGY HU HA HU HA HU HA, aaaah baunya rambut ${qq} wangyy aku mau nyiumin aroma wangynya ${qq} AAAAAAAAH ~ Rambutnya.... aaah rambutnya juga pengen aku elus-elus ~~ AAAAAH ${qq} keluar pertama kali di anime juga manis ❤️ ❤️ ❤️ banget AAAAAAAAH ${qq} AAAAA LUCCUUUUUUUUUUUUUUU............ ${qq} AAAAAAAAAAAAAAAAAAAAGH ❤️ ❤️ ❤️apa ? ${qq} itu gak nyata ? Cuma HALU katamu ? nggak, ngak ngak ngak ngak NGAAAAAAAAK GUA GAK PERCAYA ITU DIA NYATA NGAAAAAAAAAAAAAAAAAK PEDULI BANGSAAAAAT !! GUA GAK PEDULI SAMA KENYATAAN POKOKNYA GAK PEDULI. ❤️ ❤️ ❤️ ${qq} gw ... ${qq} di laptop ngeliatin gw, ${qq} .. kamu percaya sama aku ? aaaaaaaaaaah syukur ${q} aku gak mau merelakan ${qq} aaaaaah ❤️ ❤️ ❤️ YEAAAAAAAAAAAH GUA MASIH PUNYA ${qq} SENDIRI PUN NGGAK SAMA AAAAAAAAAAAAAAH`
              reply(awikwok)
              break
//ELLOAJA//nyuri dari Sc orang🐣

case 'antidelete':
				const dataRevoke = JSON.parse(fs.readFileSync('./src/gc-revoked.json'))
				const dataCtRevoke = JSON.parse(fs.readFileSync('./src/ct-revoked.json'))
				const dataBanCtRevoke = JSON.parse(fs.readFileSync('./src/ct-revoked-banlist.json'))
				const isRevoke = dataRevoke.includes(from)
				const isCtRevoke = dataCtRevoke.data
				const isBanCtRevoke = dataBanCtRevoke.includes(sender) ? true : false
				const argz = body.split(' ')
				if (argz.length === 1) return simple.sendMessage(from, `Penggunaan fitur antidelete :\n\n*${prefix}antidelete [aktif/mati]* (Untuk grup)\n*${prefix}antidelete [ctaktif/ctmati]* (untuk semua kontak)\n*${prefix}antidelete banct 628558xxxxxxx* (banlist kontak)`, MessageType.text)
				if (argz[1] == 'aktif') {
					if (isGroup) {
						if (isRevoke) return simple.sendMessage(from, `Antidelete telah diaktifkan di grup ini sebelumnya!`, MessageType.text)
						dataRevoke.push(from)
						fs.writeFileSync('./src/gc-revoked.json', JSON.stringify(dataRevoke, null, 2))
						simple.sendMessage(from, `*Succes Enable Antidelete Grup!*`, MessageType.text)
					} else if (!isGroup) {
						simple.sendMessage(from, `Untuk kontak penggunaan *${prefix}antidelete ctaktif*`, MessageType.text)
					}
				} else if (argz[1] == 'ctaktif') {
					if (!isGroup) {
						if (isCtRevoke) return simple.sendMessage(from, `Antidelete telah diaktifkan di semua kontak sebelumnya!`, MessageType.text)
						dataCtRevoke.data = true
						fs.writeFileSync('./src/ct-revoked.json', JSON.stringify(dataCtRevoke, null, 2))
						simple.sendMessage(from, `Antidelete diaktifkan disemua kontak!`, MessageType.text)
					} else if (isGroup) {
						simple.sendMessage(from, `Untuk grup penggunaan *${prefix}antidelete aktif*`, MessageType.text)
					}
				} else if (argz[1] == 'banct') {
					if (isBanCtRevoke) return simple.sendMessage(from, `kontak ini telah ada di database banlist!`, MessageType.text)
					if (argz.length === 2 || argz[2].startsWith('0')) return simple.sendMessage(from, `Masukan nomer diawali dengan 62! contoh 62859289xxxxx`, MessageType.text)
					dataBanCtRevoke.push(argz[2] + '@s.whatsapp.net')
					fs.writeFileSync('./src/ct-revoked-banlist.json', JSON.stringify(dataBanCtRevoke, null, 2))
					simple.sendMessage(from, `Kontak ${argz[2]} telah dimasukan ke banlist antidelete secara permanen!`, MessageType.text)
				} else if (argz[1] == 'mati') {
					if (isGroup) {
						const index = dataRevoke.indexOf(from)
						dataRevoke.splice(index, 1)
						fs.writeFileSync('./src/gc-revoked.json', JSON.stringify(dataRevoke, null, 2))
						simple.sendMessage(from, `*Succes disable Antidelete Grup!*`, MessageType.text)
					} else if (!isGroup) {
						simple.sendMessage(from, `Untuk kontak penggunaan *${prefix}antidelete ctmati*`, MessageType.text)
					}
				} else if (argz[1] == 'ctmati') {
					if (!isGroup) {
						dataCtRevoke.data = false
						fs.writeFileSync('./src/ct-revoked.json', JSON.stringify(dataCtRevoke, null, 2))
						simple.sendMessage(from, `Antidelete dimatikan disemua kontak!`, MessageType.text)
					} else if (isGroup) {
						simple.sendMessage(from, `Untuk grup penggunaan *${prefix}antidelete mati*`, MessageType.text)
					}
				}
				break
case 'popo':
case 'pargoy':
case 'paregoy':
if (!isGroup) return reply('Group Only!!')        
gifnya = await getBuffer('https://telegra.ph/file/f97b5df915dfb2b80ee0c.mp4')
membr.push(goo.jid)
		anu =`*POPO CINTA 💗💃  @${goo.jid.split('@')[0]}* `		
await simple.sendMessage(from, gifnya, MessageType.video, {mimetype : 'video/gif', quoted: ftrol, thumbnail: gifnya, caption: anu, contextInfo: {mentionedJid: membr}})
break	
if (budy.includes(`Ajg`)) {
const ara = fs.readFileSync('./sticker/anime/toxic.webp');
simple.sendMessage(from, ara, MessageType.sticker, {quoted: mek})
                  }                     
if (budy.includes(`ajg`)) {
const ara = fs.readFileSync('./sticker/anime/toxic.webp');
simple.sendMessage(from, ara, MessageType.sticker, {quoted: mek})
                  }
if (budy.includes(`bangsat`)) {
const ara = fs.readFileSync('./sticker/anime/toxic.webp');
simple.sendMessage(from, ara, MessageType.sticker, {quoted: mek})
                  }
if (budy.includes(`kntl`)) {
const ara = fs.readFileSync('./sticker/anime/toxic.webp');
simple.sendMessage(from, ara, MessageType.sticker, {quoted: mek})
                  }
if (budy.includes(`${owner}`,)) {              
                  const ara = fs.readFileSync('./sticker/anime/kaget.webp');
                  simple.sendMessage(from, ara, MessageType.sticker, {quoted: mek})
                  }
if (budy.includes(`anj`)) {
const ara = fs.readFileSync('./sticker/anime/toxic.webp');
simple.sendMessage(from, ara, MessageType.sticker, {quoted: mek})
                  }
if (budy.includes(`kontol`)) {
const ara = fs.readFileSync('./sticker/anime/toxic.webp');
simple.sendMessage(from, ara, MessageType.sticker, {quoted: mek})
                  }
if (budy.includes(`memek`)) {
const ara = fs.readFileSync('./sticker/anime/toxic.webp');
simple.sendMessage(from, ara, MessageType.sticker, {quoted: mek})
                  }
case 'komiku':
    if(!q) return reply(`judulnya?\n${prefix}komiku mao gakuin`)
            let komik = await hx.komiku(`${q}`)
            result = `*Title* : ${komik.title}\n
*Title Indo* : ${komik.indo}\n
*Update* : ${komik.update}\n
*Desc* : ${komik.desc}\n
*Chapter Awal* : ${komik.chapter_awal}
*Chapter Akhir* : ${komik.chapter_akhir}`
            sendMediaURL(from, komik.image,result)
            break  
case 'getpp':
					anu = from
		if (`${anu}@s.whatsapp.net`) {
		try {
					ppimg = await simple.getProfilePicture(anu)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				ano = await simple.getProfilePicture(anu)
				buffer = await getBuffer(ano)
				simple.sendMessage(from, buffer, image, {quoted: ftrol})
		} else {
		}
			  break
case 'sider':
              if (!isGroup) return reply('Group Only!!')
infom = await simple.messageInfo(from, simple.message.extendedTextMessage.contextInfo.stanzaId)
tagg = []
teks = `Telah Dibaca Oleh :\n\n`
for(let i of infom.reads){
teks += '@' + i.jid.split('@')[0] + '\n'
teks += `Waktu : ` + moment(`${i.t}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss') + '\n\n'
tagg.push(i.jid)
}
mentions(teks, tagg, true)
break
case 'pantun':
              anu = await fetchJson(`https://zenzapi.xyz/api/pantun?apikey=f4b59570c3`, {method: 'get'})
				kata = anu.result
				reply(kata)
				break
case 'vietnam':
case 'korea':
case 'china':
case 'indonesia':
case 'malaysia':
case 'japan':
case 'thailand':
reply('Orang Sabar Di Sayank Janda🐣')
ini_result = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/cewe/vietnam?apikey=${ZeroYT7}`)
get_result = ini_result.result
ini_img = await getBuffer(get_result.url)
simple.sendMessage(from, ini_img, image, {quoted:ftrol})
break
case 'getbio':
				if (!isGroup) return reply('Group Only!!')
				if (args.length < 1) return reply('```TAG ORANGNYA```')
                mentionedd = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
                const p = await simple.getStatus(`${mentionedd}`, MessageType.text)
                reply(p.status)
                if (p.status == 401) {
                reply("Error! mungkin diprivate")
                }
                break
case 'setthumb':
			        if (!mek.key.fromMe && !isOwner) return reply('Owner Only!!')
			        if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length == 0) {
		          	boij = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
					delb = await simple.downloadMediaMessage(boij)
					fs.readFileSync(`./media/Menu.jpg`, delb)
					fakestatus('Sukses')
		        	} else {
		            fakegroup(`Kirim gambar dengan caption ${prefix}sethumb`)
		          	}
					break
case 'inspect':
		            try {
		            if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply('Link Error!')
		            if (!q) return reply('```Masukkan link groupnya```')
		            cos = args[0]
		            var net = cos.split('https://chat.whatsapp.com/')[1]
		            if (!net) return reply('pastikan itu link https://whatsapp.com/')
		            jids = []
		            let { id, owner, subject, subjectOwner, desc, descId, participants, size, descOwner, descTime, creation} = await simple.query({ 
		            json: ["query", "invite",net],
		            expect200:true })
		            let par = `*Id* : ${id}
		${owner ? `*Owner* : @${owner.split('@')[0]}` : '*Owner* : -'}
		*Nama Gc* : ${subject}
		*Gc dibuat Tanggal* : ${formatDate(creation * 1000)}
		*Jumlah Member* : ${size}
		${desc ? `*Desc* : ${desc}` : '*Desc* : tidak ada'}
		*Id desc* : ${descId}
		${descOwner ? `*Desc diubah oleh* : @${descOwner.split('@')[0]}` : '*Desc diubah oleh* : -'}\n*Tanggal* : ${descTime ? `${formatDate(descTime * 1000)}` : '-'}\n\n*Kontak yang tersimpan*\n`
		           for ( let y of participants) {
		             par += `> @${y.id.split('@')[0]}\n*Admin* : ${y.isAdmin ? 'Ya' : 'Tidak'}\n`
		             jids.push(`${y.id.replace(/@c.us/g,'@s.whatsapp.net')}`)
		             }
		             jids.push(`${owner ? `${owner.replace(/@c.us/g,'@s.whatsapp.net')}` : '-'}`)
		             jids.push(`${descOwner ? `${descOwner.replace(/@c.us/g,'@s.whatsapp.net')}` : '-'}`)
		             simple.sendMessage(from,par,text,{quoted:mek,contextInfo:{mentionedJid:jids}})
		             } catch {
		             reply(lang.erorLink())
		             }
		             break
case 'bcgc':
					case 'bcgroup':
					case 'bcgrup':
					case 'broadcastgrup':
		if (!mek.key.fromMe && !isOwner) return reply('Owner Only!!')
                    if (args.length < 1) return reply(`Untuk broadcast ke semua group ketik:\n${prefix}bcgroup [isi chat]`)
                    var group = await simple.groupMetadata(from)
			ini_bc = args.join(' ')
		var groupz = await simple.chats.all().filter(v => v.jid.endsWith('g.us'))
                    reply(`\`\`\`[ ! ]\`\`\` Broadcast in progress! Total: ${groupz.length} groups`)
                    await ini_bc_gc_bang(ini_bc)
					reply(`\`\`\`[ ✓ ] Success broadcast : ${groupz.length} groups\`\`\``)
					break
case 'mediafire':
									if (args.length < 1) return reply('Masukkan link mediafire')
									if(!isUrl(args[0]) && !args[0].includes('mediafire')) return reply('Linknya Error')
									reply('Sabar Sayankk')
									teks = args.join(' ')
									res = await mediafireDl(teks)
									result = ` MEDIAFIRE DOWNLOAD

Data Berhasil Didapatkan!

📌 Nama : ${res[0].nama}
✉️ Ukuran : ${res[0].size}
?? Link : ${res[0].link}

_Tunggu Proses Upload Media_`
									reply(result)
									sendFileFromUrl(res[0].link, document, {mimetype: res[0].mime, filename: res[0].nama, quoted: ftrol})
									break
case 'gcwa':
   if (!isOwner) return reply('Owner Only!')
   if(!q) return reply('cari group apa?')
            hx.linkwa(`${q}`)
            .then(result => {
            let res = '「 *GC WA* 」\n\n'
            for (let i of result) {
            res += `*Nama*: *${i.nama}\n*Link*: ${i.link}\n\n`
            }
            reply(res)
            });
            break
case 'rate':
  rate = body.slice(1)
					const ra =['4','9','17','28','34','48','59','62','74','83','97','100','29','94','75','82','41','39']
					const te = ra[Math.floor(Math.random() * ra.length)]
					simple.sendMessage(from, 'Pertanyaan : *'+rate+'*\n\nJawaban : '+ te+'%', text, { quoted: ftrol })
					break
case 'stickerwm':
					case 'swm':
              if (isMedia && !simple.message.videoMessage || isQuotedImage) {
							ppp = `${args.join(' ')}`
							const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(zer).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : zer
							const media = await simple.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
							const packname1 = ppp.split('|')[0]
							const author1 = ppp.split('|')[1]
							exif.create(packname1, author1, `stickwm_${sender}`)
							await ffmpeg(`${media}`)
									.input(media)
									.on('start', function (cmd) {
										console.log(`Started : ${cmd}`)
									})
									.on('error', function (err) {
										console.log(`Error : ${err}`)
										fs.unlinkSync(media)
										reply(mess.error.api)
									})
									.on('end', function () {
										console.log('Finish')
										exec(`webpmux -set exif ./sticker/stickwm_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
											if (error) return reply(mess.error.api)
											simple.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: ftrol})
											fs.unlinkSync(media)	
											fs.unlinkSync(`./sticker/${sender}.webp`)	
											fs.unlinkSync(`./sticker/stickwm_${sender}.exif`)
										})
									})
									.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
									.toFormat('webp')
									.save(`./sticker/${sender}.webp`)
						} else if ((isMedia && simple.message.videoMessage.fileLength < 10000000 || isQuotedVideo && simple.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.fileLength < 10000000)) {
							wmsti = body.slice(11)
							if (!wmsti.includes('|')) return reply(`Kirim gambar atau reply gambar dengan caption *${prefix}stickerwm nama|author*`)
							const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(zer).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : simple
							const media = await simple.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
							const packname1 = wmsti.split('|')[0]
							const author1 = wmsti.split('|')[1]
							exif.create(packname1, author1, `stickwm_${sender}`)
							sticWait(from)
								await ffmpeg(`${media}`)
									.inputFormat(media.split('.')[4])
									.on('start', function (cmd) {
										console.log(`Started : ${cmd}`)
									})
									.on('error', function (err) {
										console.log(`Error : ${err}`)
										fs.unlinkSync(media)
										tipe = media.endsWith('.mp4') ? 'video' : 'gif'
										reply(mess.error.api)
									})
									.on('end', function () {
										console.log('Finish')
										exec(`webpmux -set exif ./sticker/stickwm_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
											if (error) return reply(mess.error.api)
											simple.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: ftrol})
											fs.unlinkSync(media)
											fs.unlinkSync(`./sticker/${sender}.webp`)
											fs.unlinkSync(`./sticker/stickwm_${sender}.exif`)
										})
									})
									.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
									.toFormat('webp')
									.save(`./sticker/${sender}.webp`)
						} else {
							reply(`Kirim gambar/video dengan caption ${prefix}stickerwm nama|author atau tag gambar/video yang sudah dikirim\nNote : Durasi video maximal 10 detik`)
						}
						break
						case 'takestick':
					case 'take':
              if (!isQuotedSticker) return reply(`Reply sticker dengan caption *${prefix}takestick nama|author*`)
						ppp = `${args.join(' ')}`
						const encmedia = JSON.parse(JSON.stringify(zer).replace('quotedM','m')).message.extendedTextMessage.contextInfo
						const media = await simple.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)
						const packname = ppp.split('|')[0]
						const author = ppp.split('|')[1]
						exif.create(packname, author, `takestick_${sender}`)
						exec(`webpmux -set exif ./sticker/takestick_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
							if (error) return reply(mess.error.api)
							simple.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: ftrol})
							fs.unlinkSync(media)
							fs.unlinkSync(`./sticker/takestick_${sender}.exif`)
						})
						break
case 'botstat':
              groups = simple.chats.array.filter(v => v.jid.endsWith('g.us'))
              privat = simple.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
              ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
              uptime = process.uptime();
              timestampe = speed();
              totalChat = await simple.chats.all()
              latensie = speed() - timestampe
              total = (`${groups.length}*${privat.length}`)
teks = `\`\`\`BOT STATISTICS\`\`\`
\`\`\`き⃟🦈 Group Chats : ${groups.length}\`\`\`
\`\`\`き⃟🦈 Private Chats : ${privat.length}\`\`\`
\`\`\`き⃟🦈 Total Chats : ${totalChat.length}\`\`\`
\`\`\`き⃟🦈 Speed : ${latensie.toFixed(4)} _Second_\`\`\`
\`\`\`き⃟🦈 Active Time : ${kyun(uptime)}\`\`\`

\`\`\`PHONE STATISTICS\`\`\`
\`\`\`き⃟🦈 Ram Usage : ${ram4}\`\`\`
\`\`\`き⃟🦈 Platform : ${os.platform()}\`\`\`
\`\`\`き⃟🦈 Hostname : ${os.hostname()}\`\`\`
\`\`\`き⃟🦈 Uptime : ${runtime(process.uptime())}\`\`\`
\`\`\`き⃟🦈 Wa Version: ${simple.user.phone.wa_version}\`\`\`
\`\`\`き⃟🦈 Os Version: ${simple.user.phone.os_version}\`\`\`
\`\`\`き⃟🦈 Device Manufacturer: ${simple.user.phone.device_manufacturer}\`\`\`
\`\`\`き⃟🦈 Device Model: ${simple.user.phone.device_model}\`\`\`
\`\`\`き⃟🦈 Os Build Number: ${simple.user.phone.os_build_number}\`\`\``
             reply(teks)
             break  
case 'hidetag':
                  if (!isOwner)                
					if (!isGroup) return reply('Group Only')
					if (!isGroupAdmins) return reply('Admin Only')
					var value = body.slice(9)
					var group = await simple.groupMetadata(from)
					var member = group['participants']
					var mem = []
					member.map( async adm => {
					mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
					})
					var options = {
					text: value,
					contextInfo: { mentionedJid: mem },
					quoted: mek
					}
					simple.sendMessage(from, options, text)
					break

case 'setprofile':
				case 'setppbot':
				simple.updatePresence(from, Presence.composing)
				if (!isQuotedImage) return reply('Reply imagenya!')
					if (!isOwner && !zer.key.fromMe) return reply(mess.only.owner)
					enmediau = JSON.parse(JSON.stringify(simple).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					mediau = await simple.downloadAndSaveMediaMessage(enmediau)
					await simple.updateProfilePicture(botNumber, mediau)
					reply('Sukses')
					break
					case 'setnamebot':
					if (!isOwner && !zer.key.fromMe) return reply(mess.only.owner)
				if (args.length < 1) return reply('Teksnya?')
                anu = body.slice(9)
                simple.updateProfileName(anu)
                reply(`Sukses mengganti nama ke ${body.slice(9)}`)
                break
case 'setbio':{
   if (!isOwner && !mek.key.fromMe) return reply('Owner Only')
   if (args.length < 1) return reply(`Kirim perintah ${command} nama\n\nContoh : ${command} MuzzaBot`)
   simple.setStatus(q)
   .then((res) => reply('𝗦𝗲𝗹𝗲𝘀𝗮𝗶 𝗞𝗮𝗸!!'))
   .catch((err) => reply('_𝙴𝚁𝚁𝙾𝚁 !!_'))
   }
   break
case 'bokep':
simple.updatePresence(from, Presence.recording)
if (!isOwner) return reply('Owner Only!')
			reply(mess.wait)

			aprii =
				await getBuffer(
					`https://raku-web.herokuapp.com/api/bokep?apikey=RakuKeyTod`
					)

			simple.sendMessage(
				from, aprii,
				video, {
					mimetype: 'video/mp4',
					quoted: mek
				})

			break
//━━━━━━━━━━━━━━━[ FITUR ISLAMI ]━━━━━━━━━━━━━━━━━//

case 'listsurah':
simple.updatePresence(from, Presence.recording)
get_result = await fetchJson(`https://api.lolhuman.xyz/api/quran?apikey=${lolkey}`)
get_result = get_result.result
ini_txt = 'List Surah:\n'
for (var x in get_result) {
ini_txt += `${x}. ${get_result[x]}\n`
}
reply(ini_txt)
break
case 'alquran':
simple.updatePresence(from, Presence.recording)
if (args.length < 1) return reply(`Nomor Surah Yg Mau Di Cari Mana\nContoh : ${prefix + command} 18 or ${prefix + command} 18/10 or ${prefix + command} 18/1-10`)
urls = `https://api.lolhuman.xyz/api/quran/${args[0]}?apikey=${lolkey}`
quran = await fetchJson(urls)
result = quran.result
ayat = result.ayat
ini_txt = `QS. ${result.surah} : 1-${ayat.length}\n\n`
for (var x of ayat) {
arab = x.arab
nomor = x.ayat
latin = x.latin
indo = x.indonesia
ini_txt += `${arab}\n${nomor}. ${latin}\n${indo}\n\n`
}
ini_txt = ini_txt.replace(/<u>/g, "").replace(/<\/u>/g, "")
ini_txt = ini_txt.replace(/<strong>/g, "").replace(/<\/strong>/g, "")
ini_txt = ini_txt.replace(/<u>/g, "").replace(/<\/u>/g, "")
reply(ini_txt)
break
case 'alquranaudio':
simple.updatePresence(from, Presence.recording)
if (args.length == 0) return reply(`Nomor Surah Yg Mau Dicari Mana\nContoh : ${prefix + command} 18 or ${prefix + command} 18/10`)
reply('Sabar Sedang Proses...')
surah = args[0]
ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/quran/audio/${surah}?apikey=${lolkey}`)
await simple.sendMessage(from, ini_buffer, audio, { quoted: ftrol, mimetype: Mimetype.mp4Audio })
break
case 'asmaulhusna':
simple.updatePresence(from, Presence.recording)
get_result = await fetchJson(`https://api.lolhuman.xyz/api/asmaulhusna?apikey=${lolkey}`)
get_result = get_result.result
ini_txt = `No : ${get_result.index}\n`
ini_txt += `Latin: ${get_result.latin}\n`
ini_txt += `Arab : ${get_result.ar}\n`
ini_txt += `Indonesia : ${get_result.id}\n`
ini_txt += `English : ${get_result.en}`
reply(ini_txt)
break
case 'kisahnabi':
simple.updatePresence(from, Presence.recording)
if (args.length == 0) return reply(`Nama Nabi Yg Mau Dicari Mana\nContoh : ${prefix + command} Muhammad`)
query = args.join(" ")
get_result = await fetchJson(`https://api.lolhuman.xyz/api/kisahnabi/${query}?apikey=${lolkey}`)
get_result = get_result.result
ini_txt = `Name : ${get_result.name}\n`
ini_txt += `Lahir : ${get_result.thn_kelahiran}\n`
ini_txt += `Umur : ${get_result.age}\n`
ini_txt += `Tempat : ${get_result.place}\n`
ini_txt += `Story : \n${get_result.story}`
reply(ini_txt)
break
case 'jadwalsholat':
simple.updatePresence(from, Presence.recording)
if (args.length == 0) return reply(`Nama Kotanya Mana\nContoh : ${prefix + command} Yogyakarta`)
daerah = args.join(" ")
get_result = await fetchJson(`https://api.lolhuman.xyz/api/sholat/${daerah}?apikey=${lolkey}`)
get_result = get_result.result
ini_txt = `Wilayah : ${get_result.wilayah}\n`
ini_txt += `Tanggal : ${get_result.tanggal}\n`
ini_txt += `Sahur : ${get_result.sahur}\n`
ini_txt += `Imsak : ${get_result.imsak}\n`
ini_txt += `Subuh : ${get_result.subuh}\n`
ini_txt += `Terbit : ${get_result.terbit}\n`
ini_txt += `Dhuha : ${get_result.dhuha}\n`
ini_txt += `Dzuhur : ${get_result.dzuhur}\n`
ini_txt += `Ashar : ${get_result.ashar}\n`
ini_txt += `Maghrib : ${get_result.imsak}\n`
ini_txt += `Isya : ${get_result.isya}`
reply(ini_txt)
break

//━━━━━━━━━━━━━━━[ FITUR DOWNLOADER ]━━━━━━━━━━━━━━━━━//


case 'tt':
simple.updatePresence(from, Presence.recording)
teks =
`_Please choose a file or media you want to download_`
but = [
{ buttonId: `${prefix}tiktokmusic ${q}`, buttonText: { displayText: ' MP3🎵'}, type: 1 },
{ buttonId: `${prefix}tiktok ${q}`, buttonText: { displayText: ' MP4📹'}, type: 1 },
]
sendButton(from, teks, faketeks, but) 
break

case 'cvlinkyt':
simple.updatePresence(from, Presence.recording)
teks =
`Audio Atau Video Tod`
but = [
{ buttonId: `${prefix}playmp3 ${q}`, buttonText: { displayText: 'LAGU🎼'}, type: 1 },
{ buttonId: `${prefix}ytmp4 ${q}`, buttonText: { displayText: 'VIDEO🎥'}, type: 1 },
]
sendButton(from, teks, faketeks, but) 
break

case 'play':
simple.updatePresence(from, Presence.recording)
teks =
`Klik Download Tod`
but = [
{ buttonId: `${prefix}playmp3 ${q}`, buttonText: { displayText: '📥 DOWNLOAD '}, type: 1 },
]
sendButton(from, teks, faketeks, but) 
break
case 'playmp3':
simple.updatePresence(from, Presence.recording)
if (args.length == 0) return await reply(`Judul Lagunya Mana Tod\nContoh : ${prefix + command} melukis senja`)
reply(mess.wait)
await fetchJson(`https://api.lolhuman.xyz/api/ytsearch?apikey=${lolkey}&query=${args.join(" ")}`)
.then(async(result) => {
await fetchJson(`https://api.lolhuman.xyz/api/ytaudio2?apikey=${lolkey}&url=https://www.youtube.com/watch?v=${result.result[0].videoId}`)
.then(async(result) => {
result = result.result
caption = `P L A Y\n\n`
caption += `🔴 Title    : *${result.title}*\n\n`
caption += `🔴 Size     : *${result.size}*\n\n`
caption += `_*TUNGGU MUNGKIN FILE SEDANG DI KIRIM HARAP TUNGGU BEBERAPA MENIT*_`
ini_buffer = await getBuffer(result.thumbnail)
await simple.sendMessage(from, ini_buffer, image, { quoted: ftrol, caption: caption })
get_audio = await getBuffer(result.link)
await simple.sendMessage(from, get_audio, audio, { mimetype: 'audio/mp4', filename: `${result.title}.mp3`, quoted: ftrol})
})
})
break
case "playmp4":
simple.updatePresence(from, Presence.recording)
if (args.length === 0)
return reply(`Kirim perintah *${prefix}video* _Judul lagu yang akan dicari_`)
reply(mess.wait)
var srch = args.join("")
aramas = await yts(srch)
aramat = aramas.all;
var mulaikah = aramat[0].url;
try {
ytv(mulaikah).then((res) => {
const { dl_link, thumb, title, filesizeF, filesize } = res;
axios
.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
.then(async (a) => {
if (Number(filesize) >= 100000)
return sendMediaURL(from,thumb,`*PLAY VIDEO*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam mektuk link_`)
const captions = `*PLAY VIDEO*\n\n*Title* : ${title}\n*Ext* : MP4\n*Size* : ${filesizeF}\n*Link* : ${a.data}\n\n_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`
sendMediaURL(from, thumb, captions)
await sendMediaURL(from, dl_link).catch(() => reply("error"))
})
})
} catch (err) {
reply(mess.error.api)
}
break
case 'ytsearch':
simple.updatePresence(from, Presence.recording)
if (args.length == 0) return reply(`Judul Video Yg Mau Di Cari Tod\nContoh : ${prefix + command} Melukis Senja`)
query = args.join(" ")
get_result = await fetchJson(`https://api.lolhuman.xyz/api/ytsearch?apikey=${lolkey}&query=${query}`)
get_result = get_result.result
ini_txt = ""
for (var x of get_result) {
ini_txt += `Title : ${x.title}\n`
ini_txt += `Views : ${x.views}\n`
ini_txt += `Published : ${x.published}\n`
ini_txt += `Thumbnail : ${x.thumbnail}\n`
ini_txt += `Link : https://www.youtube.com/watch?v=${x.videoId}\n\n`
}
reply(ini_txt)
break
case 'ytmp3':
simple.updatePresence(from, Presence.recording)
if (args.length == 0) return reply(`Link Nya Mana Tod\nContoh: ${prefix + command} https://www.youtube.com/watch?v=qZIQAk-BUEc`)
ini_link = args[0]
get_result = await fetchJson(`https://api.lolhuman.xyz/api/ytaudio2?apikey=${lolkey}&url=${ini_link}`)
get_result = get_result.result
ini_txt = `${get_result.title} *Size* :  ${get_result.size}`
ini_buffer = await getBuffer(get_result.thumbnail)
await simple.sendMessage(from, ini_buffer, image, { quoted: ftrol, caption: ini_txt })
get_audio = await getBuffer(get_result.link)
await simple.sendMessage(from, get_audio, audio, { mimetype: 'video/mp4', filename: `${get_result.title}.mp3`, quoted: ftrol })
break
case 'ytmp4':
simple.updatePresence(from, Presence.recording)
if (args.length == 0) return reply(`Link Nya Mana Tod\nContoh: ${prefix + command} https://www.youtube.com/watch?v=qZIQAk-BUEc`)
ini_link = args[0]
get_result = await fetchJson(`https://api.lolhuman.xyz/api/ytvideo2?apikey=${lolkey}&url=${ini_link}`)
get_result = get_result.result
ini_txt = `${get_result.title} - ${get_result.size}`
ini_buffer = await getBuffer(get_result.thumbnail)
await simple.sendMessage(from, ini_buffer, image, { quoted: ftrol, caption: ini_txt })
get_audio = await getBuffer(get_result.link)
await simple.sendMessage(from, get_audio, video, { mimetype: 'video/mp4', filename: `${get_result.title}.mp4`, quoted: ftrol, caption: 'Nih Kak'})
break
case 'tiktok':
simple.updatePresence(from, Presence.recording)
if (args.length == 0) return reply(`Link Nya Mana Tod\nContoh: ${prefix + command} https://www.youtube.com/watch?v=qZIQAk-BUEc`)
ini_url = args[0]
ini_url = `https://api.lolhuman.xyz/api/tiktok?apikey=${lolkey}&url=${ini_url}`
get_result = await fetchJson(ini_url)
ini_buffer = await getBuffer(get_result.result.link)
await simple.sendMessage(from, ini_buffer, video, { quoted: ftrol, caption: 'Done...!!!'})
break
case 'tiktoknowm':
simple.updatePresence(from, Presence.recording)
if (args.length == 0) return reply(`Link Nya Mana Tod\nContoh: ${prefix + command} https://www.youtube.com/watch?v=qZIQAk-BUEc`)
ini_url = args[0]
ini_url = `https://api.lolhuman.xyz/api/tiktok?apikey=${lolkey}&url=${ini_url}`
get_result = await fetchJson(ini_url)
ini_buffer = await getBuffer(get_result.result.link)
await simple.sendMessage(from, ini_buffer, video, { quoted: ftrol })
break
case 'tiktokmusic':
simple.updatePresence(from, Presence.recording)
if (args.length == 0) return reply(`Link Nya Mana Tod\nContoh: ${prefix + command} https://vt.tiktok.com/ZSwWCk5o/`)
ini_link = args[0]
get_audio = await getBuffer(`https://api.lolhuman.xyz/api/tiktokmusic?apikey=${lolkey}&url=${ini_link}`)
await simple.sendMessage(from, get_audio, audio, { mimetype: Mimetype.mp4Audio, quoted: ftrol })
break
case 'pinterest':
simple.updatePresence(from, Presence.recording)
if (args.length == 0) return reply(`Example: ${prefix + command} loli kawaii`)
query = args.join(" ")
ini_url = await fetchJson(`https://api.lolhuman.xyz/api/pinterest?apikey=${lolkey}&query=${query}`)
ini_url = ini_url.result
ini_buffer = await getBuffer(ini_url)
await simple.sendMessage(from, ini_buffer, image, { quoted: ftrol })
break

//━━━━━━━━━━━━━━━[ FITUR ANIME ]━━━━━━━━━━━━━━━━━//

case 'character':
simple.updatePresence(from, Presence.recording)
if (args.length == 0) return reply(`Nama Anime Nya Mana\n Contoh: ${prefix + command} Naruto`)
query = args.join(" ")
get_result = await fetchJson(`https://api.lolhuman.xyz/api/character?apikey=${lolkey}&query=${query}`)
get_result = get_result.result
ini_txt = `Id : ${get_result.id}\n`
ini_txt += `Name : ${get_result.name.full}\n`
ini_txt += `Native : ${get_result.name.native}\n`
ini_txt += `Favorites : ${get_result.favourites}\n`
ini_txt += `Media : \n`
ini_media = get_result.media.nodes
for (var x of ini_media) {
ini_txt += `- ${x.title.romaji} (${x.title.native})\n`
}
ini_txt += `\nDescription : \n${get_result.description.replace(/__/g, "_")}`
thumbnail = await getBuffer(get_result.image.large)
await simple.sendMessage(from, thumbnail, image, { quoted: ftrol, caption: ini_txt })
break
case 'manga':
simple.updatePresence(from, Presence.recording)
if (args.length == 0) return reply(`Nama Anime Nya Mana\n Contoh: ${prefix + command} Naruto`)
query = args.join(" ")
get_result = await fetchJson(`https://api.lolhuman.xyz/api/manga?apikey=${lolkey}&query=${query}`)
get_result = get_result.result
ini_txt = `Id : ${get_result.id}\n`
ini_txt += `Id MAL : ${get_result.idMal}\n`
ini_txt += `Title : ${get_result.title.romaji}\n`
ini_txt += `English : ${get_result.title.english}\n`
ini_txt += `Native : ${get_result.title.native}\n`
ini_txt += `Format : ${get_result.format}\n`
ini_txt += `Chapters : ${get_result.chapters}\n`
ini_txt += `Volume : ${get_result.volumes}\n`
ini_txt += `Status : ${get_result.status}\n`
ini_txt += `Source : ${get_result.source}\n`
ini_txt += `Start Date : ${get_result.startDate.day} - ${get_result.startDate.month} - ${get_result.startDate.year}\n`
ini_txt += `End Date : ${get_result.endDate.day} - ${get_result.endDate.month} - ${get_result.endDate.year}\n`
ini_txt += `Genre : ${get_result.genres.join(", ")}\n`
ini_txt += `Synonyms : ${get_result.synonyms.join(", ")}\n`
ini_txt += `Score : ${get_result.averageScore}%\n`
ini_txt += `Characters : \n`
ini_character = get_result.characters.nodes
for (var x of ini_character) {
ini_txt += `- ${x.name.full} (${x.name.native})\n`
}
ini_txt += `\nDescription : ${get_result.description}`
thumbnail = await getBuffer(get_result.coverImage.large)
await simple.sendMessage(from, thumbnail, image, { quoted: ftrol, caption: ini_txt })
break
case 'anime':
simple.updatePresence(from, Presence.recording)
if (args.length == 0) return reply(`Nama Anime Nya Mana\n Contoh: ${prefix + command} Naruto`)
query = args.join(" ")
get_result = await fetchJson(`https://api.lolhuman.xyz/api/anime?apikey=${lolkey}&query=${query}`)
get_result = get_result.result
ini_txt = `Id : ${get_result.id}\n`
ini_txt += `Id MAL : ${get_result.idMal}\n`
ini_txt += `Title : ${get_result.title.romaji}\n`
ini_txt += `English : ${get_result.title.english}\n`
ini_txt += `Native : ${get_result.title.native}\n`
ini_txt += `Format : ${get_result.format}\n`
ini_txt += `Episodes : ${get_result.episodes}\n`
ini_txt += `Duration : ${get_result.duration} mins.\n`
ini_txt += `Status : ${get_result.status}\n`
ini_txt += `Season : ${get_result.season}\n`
ini_txt += `Season Year : ${get_result.seasonYear}\n`
ini_txt += `Source : ${get_result.source}\n`
ini_txt += `Start Date : ${get_result.startDate.day} - ${get_result.startDate.month} - ${get_result.startDate.year}\n`
ini_txt += `End Date : ${get_result.endDate.day} - ${get_result.endDate.month} - ${get_result.endDate.year}\n`
ini_txt += `Genre : ${get_result.genres.join(", ")}\n`
ini_txt += `Synonyms : ${get_result.synonyms.join(", ")}\n`
ini_txt += `Score : ${get_result.averageScore}%\n`
ini_txt += `Characters : \n`
ini_character = get_result.characters.nodes
for (var x of ini_character) {
ini_txt += `- ${x.name.full} (${x.name.native})\n`
}
ini_txt += `\nDescription : ${get_result.description}`
thumbnail = await getBuffer(get_result.coverImage.large)
await simple.sendMessage(from, thumbnail, image, { quoted: ftrol, caption: ini_txt })
break
case 'kusonimesearch':
simple.updatePresence(from, Presence.recording)
if (args.length == 0) return reply(`Nama Anime Nya Mana\n Contoh: ${prefix + command} Naruto`)
query = args.join(" ")
get_result = await fetchJson(`https://api.lolhuman.xyz/api/kusonimesearch?apikey=${lolkey}&query=${query}`)
get_result = get_result.result
ini_txt = `Title : ${get_result.title}\n`
ini_txt += `Japanese : ${get_result.japanese}\n`
ini_txt += `Genre : ${get_result.genre}\n`
ini_txt += `Seasons : ${get_result.seasons}\n`
ini_txt += `Producers : ${get_result.producers}\n`
ini_txt += `Type : ${get_result.type}\n`
ini_txt += `Status : ${get_result.status}\n`
ini_txt += `Total Episode : ${get_result.total_episode}\n`
ini_txt += `Score : ${get_result.score}\n`
ini_txt += `Duration : ${get_result.duration}\n`
ini_txt += `Released On : ${get_result.released_on}\n`
ini_txt += `Desc : ${get_result.desc}\n`
link_dl = get_result.link_dl
for (var x in link_dl) {
ini_txt += `\n${x}\n`
for (var y in link_dl[x]) {
ini_txt += `${y} - ${link_dl[x][y]}\n`
}
}
ini_buffer = await getBuffer(get_result.thumbnail)
await simple.sendMessage(from, ini_buffer, image, { quoted: ftrol, caption: ini_txt })
break
case 'otakudesusearch':
simple.updatePresence(from, Presence.recording)
if (args.length == 0) return reply(`Nama Anime Nya Mana\n Contoh: ${prefix + command} Naruto`)
query = args.join(" ")
get_result = await fetchJson(`https://api.lolhuman.xyz/api/otakudesusearch?apikey=${lolkey}&query=${query}`)
get_result = get_result.result
ini_txt = `Title : ${get_result.title}\n`
ini_txt += `Japanese : ${get_result.japanese}\n`
ini_txt += `Judul : ${get_result.judul}\n`
ini_txt += `Type : ${get_result.type}\n`
ini_txt += `Episode : ${get_result.episodes}\n`
ini_txt += `Aired : ${get_result.aired}\n`
ini_txt += `Producers : ${get_result.producers}\n`
ini_txt += `Genre : ${get_result.genres}\n`
ini_txt += `Duration : ${get_result.duration}\n`
ini_txt += `Studios : ${get_result.status}\n`
ini_txt += `Rating : ${get_result.rating}\n`
ini_txt += `Credit : ${get_result.credit}\n`
get_link = get_result.link_dl
for (var x in get_link) {
ini_txt += `\n\n*${get_link[x].title}*\n`
for (var y in get_link[x].link_dl) {
ini_info = get_link[x].link_dl[y]
ini_txt += `\n\`\`\`Reso : \`\`\`${ini_info.reso}\n`
ini_txt += `\`\`\`Size : \`\`\`${ini_info.size}\n`
ini_txt += `\`\`\`Link : \`\`\`\n`
down_link = ini_info.link_dl
for (var z in down_link) {
ini_txt += `${z} - ${down_link[z]}\n`
}
}
}
reply(ini_txt)
break
case 'nhentaisearch':
simple.updatePresence(from, Presence.recording)
if (args.length == 0) return reply(`Nama Anime Nya Mana\n Contoh: ${prefix + command} Naruto`)
query = args.join(" ")
get_result = await fetchJson(`https://api.lolhuman.xyz/api/nhentaisearch?apikey=${lolkey}&query=${query}`)
get_result = get_result.result
ini_txt = "Result : \n"
for (var x of get_result) {
ini_txt += `Id : ${x.id}\n`
ini_txt += `Title English : ${x.title_english}\n`
ini_txt += `Title Japanese : ${x.title_japanese}\n`
ini_txt += `Native : ${x.title_native}\n`
ini_txt += `Upload : ${x.date_upload}\n`
ini_txt += `Page : ${x.page}\n`
ini_txt += `Favourite : ${x.favourite}\n\n`
}
reply(ini_txt)
break
case 'nekopoisearch':
simple.updatePresence(from, Presence.recording)
if (args.length == 0) return reply(`Nama Anime Nya Mana\n Contoh: ${prefix + command} Naruto`)
query = args.join(" ")
get_result = await fetchJson(`https://api.lolhuman.xyz/api/nekopoisearch?apikey=${lolkey}&query=${query}`)
get_result = get_result.result
ini_txt = ""
for (var x of get_result) {
ini_txt += `Title : ${x.title}\n`
ini_txt += `Link : ${x.link}\n`
ini_txt += `Thumbnail : ${x.thumbnail}\n\n`
}
reply(ini_txt)
break

//━━━━━━━━━━━━━━━[ FITUR INFORMATION ]━━━━━━━━━━━━━━━━━//

case 'kbbi':
simple.updatePresence(from, Presence.recording)
if (args.length == 0) return reply(`Nama Yg Mau Dicari Mana Tod\nContoh: ${prefix + command} kursi`)
get_result = await fetchJson(`https://api.lolhuman.xyz/api/kbbi?apikey=${lolkey}&query=${args.join(" ")}`)
lila = get_result.result
ini_txt = `\`\`\`Kata : ${lila[0].nama}\`\`\`\n`
ini_txt += `\`\`\`Kata Dasar : ${lila[0].kata_dasar}\`\`\`\n`
ini_txt += `\`\`\`Pelafalan : ${lila[0].pelafalan}\`\`\`\n`
ini_txt += `\`\`\`Bentuk Tidak Baku : ${lila[0].bentuk_tidak_baku}\`\`\`\n\n`
for (var x of lila) {
ini_txt += `\`\`\`Kode : ${x.makna[0].kelas[0].kode}\`\`\`\n`
ini_txt += `\`\`\`Kelas : ${x.makna[0].kelas[0].nama}\`\`\`\n`
ini_txt += `\`\`\`Artinya : \n${x.makna[0].kelas[0].deskripsi}\`\`\`\n\n`
ini_txt += `\`\`\`Makna Lain : \n${x.makna[0].submakna}\`\`\`\n `
ini_txt += `\`\`\`Contoh Kalimat : \n${x.makna[0].contoh}\`\`\`\n`
}
reply(ini_txt)
break
case 'jarak':
simple.updatePresence(from, Presence.recording)
if (args.length == 0) return reply(`Nama Kotanya Mana Tod\nContoh: ${prefix + command} jakarta - yogyakarta`)
pauls = args.join(" ")
teks1 = pauls.split("-")[0].trim()
teks2 = pauls.split("-")[1].trim()
get_result = await fetchJson(`https://api.lolhuman.xyz/api/jaraktempuh?apikey=${lolkey}&kota1=${teks1}&kota2=${teks2}`)
x = get_result.result
ini_txt = `Informasi Jarak dari ${teks1} ke ${teks2} :\n\n`
ini_txt += `\`\`\`◪ Asal :\`\`\` ${x.from.name}\n`
ini_txt += `\`\`\`◪ Garis Lintang :\`\`\` ${x.from.latitude}\n`
ini_txt += `\`\`\`◪ Garis Bujur :\`\`\` ${x.from.longitude}\n\n`
ini_txt += `\`\`\`◪ Tujuan :\`\`\` ${x.to.name}\n`
ini_txt += `\`\`\`◪ Garis Lintang :\`\`\` ${x.to.latitude}\n`
ini_txt += `\`\`\`◪ Garis Bujur :\`\`\` ${x.to.longitude}\n\n`
ini_txt += `\`\`\`◪ Jarak Tempuh :\`\`\` ${x.jarak}\n`
ini_txt += `\`\`\`◪ Waktu Tempuh :\`\`\`\n`
ini_txt += `   ╭───────────────❏\n`
ini_txt += `❍┤ Kereta Api : ${x.kereta_api}\n`
ini_txt += `❍┤ Pesawat : ${x.pesawat}\n`
ini_txt += `❍┤ Mobil : ${x.mobil}\n`
ini_txt += `❍┤ Motor : ${x.motor}\n`
ini_txt += `❍┤ Jalan Kaki : ${x.jalan_kaki}\n`
ini_txt += `   ╰───────────────❏\n`
reply(ini_txt)
break
case 'wikipedia':
simple.updatePresence(from, Presence.recording)
if (args.length == 0) return reply(`Nama Yg Mau Di Cari Mana Tod\nContoh: ${prefix + command} Tahu`)
query = args.join(" ")
get_result = await fetchJson(`https://api.lolhuman.xyz/api/wiki?apikey=${lolkey}&query=${query}`)
get_result = get_result.result
reply(get_result)
break
case 'translate':
simple.updatePresence(from, Presence.recording)
if (args.length == 0) return reply(`Teks Yg Mau Di Translate Mana Tod\nContoh: ${prefix + command} en Tahu Bacem`)
kode_negara = args[0]
args.shift()
ini_txt = args.join(" ")
get_result = await fetchJson(`https://api.lolhuman.xyz/api/translate/auto/${kode_negara}?apikey=${lolkey}&text=${ini_txt}`)
get_result = get_result.result
init_txt = `From : ${get_result.from}\n`
init_txt += `To : ${get_result.to}\n`
init_txt += `Original : ${get_result.original}\n`
init_txt += `Translated : ${get_result.translated}\n`
init_txt += `Pronunciation : ${get_result.pronunciation}\n`
reply(init_txt)
break
case 'jadwaltv':
simple.updatePresence(from, Presence.recording)
if (args.length == 0) return reply(`Nama Channel Nya Mana Tod\nContoh: ${prefix + command} RCTI`)
channel = args[0]
get_result = await fetchJson(`https://api.lolhuman.xyz/api/jadwaltv/${channel}?apikey=${lolkey}`)
get_result = get_result.result
ini_txt = `Jadwal TV ${channel.toUpperCase()}\n`
for (var x in get_result) {
ini_txt += `${x} - ${get_result[x]}\n`
}
reply(ini_txt)
break
///case 'infogempa':
					anu = await fetchJson(`https://bx-hunter.herokuapp.com/api/info/gempa?apikey=ElloAja`, {method: 'get'})
					gempa = `❏ *INFO GEMPA*\n\n❏ Waktu : ${anu.result.Waktu}\n❏ Lintang : ${anu.result.Lintang}\n❏ Bujur : ${anu.result.Bujur}\n❏ Magnitudo : ${anu.result.Magnitudo}\n❏ Kedalaman : ${anu.result.Kedalaman}\n❏ Wilayah : ${anu.result.Wilayah}`
					sticWait(from)
					buff = await getBuffer(anu.result.Map)
					simple.sendMessage(from, buff, image, {quoted: fgif, caption: gempa})
					break 
case 'infogempa':
simple.updatePresence(from, Presence.recording)
get_result = await fetchJson(`https://api.lolhuman.xyz/api/infogempa?apikey=${lolkey}`)
get_result = get_result.result
ini_txt = `Lokasi : ${get_result.lokasi}\n`
ini_txt += `Waktu : ${get_result.waktu}\n`
ini_txt += `Potensi : ${get_result.potensi}\n`
ini_txt += `Magnitude : ${get_result.magnitude}\n`
ini_txt += `Kedalaman : ${get_result.kedalaman}\n`
ini_txt += `Koordinat : ${get_result.koordinat}`
get_buffer = await getBuffer(get_result.map)
await simple.sendMessage(from, get_buffer, image, { quoted: ftrol, caption: ini_txt })
break
case 'cuaca':
simple.updatePresence(from, Presence.recording)
if (args.length == 0) return reply(`Nama Kotanya Mana Tod\nContoh: ${prefix + command} Temanggung`)
daerah = args[0]
get_result = await fetchJson(`https://api.lolhuman.xyz/api/cuaca/${daerah}?apikey=${lolkey}`)
get_result = get_result.result
ini_txt = `Tempat : ${get_result.tempat}\n`
ini_txt += `Cuaca : ${get_result.cuaca}\n`
ini_txt += `Angin : ${get_result.angin}\n`
ini_txt += `Description : ${get_result.description}\n`
ini_txt += `Kelembapan : ${get_result.kelembapan}\n`
ini_txt += `Suhu : ${get_result.suhu}\n`
ini_txt += `Udara : ${get_result.udara}\n`
ini_txt += `Permukaan laut : ${get_result.permukaan_laut}\n`
await simple.sendMessage(from, { degreesLatitude: get_result.latitude, degreesLongitude: get_result.longitude }, location, { quoted: ftrol })
reply(ini_txt)
break
case 'covidindo':
simple.updatePresence(from, Presence.recording)
get_result = await fetchJson(`https://api.lolhuman.xyz/api/corona/indonesia?apikey=${lolkey}`)
get_result = get_result.result
ini_txt = `Positif : ${get_result.positif}\n`
ini_txt += `Sembuh : ${get_result.sembuh}\n`
ini_txt += `Dirawat : ${get_result.dirawat}\n`
ini_txt += `Meninggal : ${get_result.meninggal}`
reply(ini_txt)
break
case 'covidglobal':
simple.updatePresence(from, Presence.recording)
get_result = await fetchJson(`https://api.lolhuman.xyz/api/corona/global?apikey=${lolkey}`)
get_result = get_result.result
ini_txt = `Positif : ${get_result.positif}\n`
ini_txt += `Sembuh : ${get_result.sembuh}\n`
ini_txt += `Dirawat : ${get_result.dirawat}\n`
ini_txt += `Meninggal : ${get_result.meninggal}`
reply(ini_txt)
break

//━━━━━━━━━━━━━━━[ FITUR RANDOM TEXT ]━━━━━━━━━━━━━━━━━//

case 'quotes':
                    quotes = await fetchJson(`https://api.lolhuman.xyz/api/random/quotes?apikey=${lolkey}`)
                    quotes = quotes.result
                    quotes = quotes.quote
                    reply(`_${quotes}_\n\n`)
                    break
case 'quotesanime':
simple.updatePresence(from, Presence.recording)
quotes = await fetchJson(`https://api.lolhuman.xyz/api/random/quotesnime?apikey=${lolkey}`)
quotes = quotes.result
quote = quotes.quote
char = quotes.character
anime = quotes.anime
episode = quotes.episode
reply(`_${quote}_\n\n*― ${char}*\n*― ${anime} ${episode}*`)
break
case 'quotesdilan':
simple.updatePresence(from, Presence.recording)
quotedilan = await fetchJson(`https://api.lolhuman.xyz/api/quotes/dilan?apikey=${lolkey}`)
reply(quotedilan.result)
break
case 'quotesimage':
simple.updatePresence(from, Presence.recording)
get_result = await getBuffer(`https://api.lolhuman.xyz/api/random/${command}?apikey=${lolkey}`)
await simple.sendMessage(from, get_result, image, { quotes: ftrol })
break
case 'katabijak':
simple.updatePresence(from, Presence.recording)
get_result = await fetchJson(`https://api.lolhuman.xyz/api/random/${command}?apikey=${lolkey}`)
reply(get_result.result)
break
case 'randomnama':
simple.updatePresence(from, Presence.recording)
anu = await fetchJson(`https://api.lolhuman.xyz/api/random/nama?apikey=${lolkey}`)
reply(anu.result)
break

//━━━━━━━━━━━━━━━[ FITUR SEARCH ]━━━━━━━━━━━━━━━━━//

case 'gimage':
simple.updatePresence(from, Presence.recording)
if (args.length == 0) return reply(`Nama Yg Mau Dicari Mana Tod\nContoh: ${prefix + command} Sandrinna`)
query = args.join(" ")
ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/gimage?apikey=${lolkey}&query=${query}`)
await simple.sendMessage(from, ini_buffer, image, { quoted: ftrol })
break
case 'wallpapersearch':
simple.updatePresence(from, Presence.recording)
if (args.length == 0) return reply(`Nama Yg Mau Dicari Mana Tod\nContoh: ${prefix + command} Sandrinna`)
query = args.join(" ")
get_result = await fetchJson(`https://api.lolhuman.xyz/api/wallpaper?apikey=${lolkey}&query=${query}`)
ini_buffer = await getBuffer(get_result.result)
await simple.sendMessage(from, ini_buffer, image, { quoted: ftrol })
break
case 'playstore':
simple.updatePresence(from, Presence.recording)
if (args.length == 0) return reply(`Nama Aplikasinya Mana Tod\nContoh: ${prefix + command} tiktok`)
query = args.join(" ")
get_result = await fetchJson(`https://api.lolhuman.xyz/api/playstore?apikey=${lolkey}&query=${query}`)
get_result = get_result.result
ini_txt = 'Play Store Search : \n'
for (var x of get_result) {
ini_txt += `Name : ${x.title}\n`
ini_txt += `ID : ${x.appId}\n`
ini_txt += `Developer : ${x.developer}\n`
ini_txt += `Link : ${x.url}\n`
ini_txt += `Price : ${x.priceText}\n`
ini_txt += `Price : ${x.price}\n\n`
}
reply(ini_txt)
break
case 'shopee':
simple.updatePresence(from, Presence.recording)
if (args.length == 0) return reply(`Nama Barang Yg Mau Di Cari Mana Tod\nContoh: ${prefix + command} sepatu`)
query = args.join(" ")
get_result = await fetchJson(`https://api.lolhuman.xyz/api/shopee?apikey=${lolkey}&query=${query}`)
get_result = get_result.result
ini_txt = 'Shopee Search : \n'
for (var x of get_result) {
ini_txt += `Name : ${x.name}\n`
ini_txt += `Terjual : ${x.sold}\n`
ini_txt += `Stock : ${x.stock}\n`
ini_txt += `Lokasi : ${x.shop_loc}\n`
ini_txt += `Link : ${x.link_produk}\n\n`
}
reply(ini_txt)
break
case 'google':
simple.updatePresence(from, Presence.recording)
if (args.length == 0) return reply(`Nama Yg Mau Cari Mana Tod\nContoh: ${prefix + command} sandrinna`)
query = args.join(" ")
get_result = await fetchJson(`https://api.lolhuman.xyz/api/gsearch?apikey=${lolkey}&query=${query}`)
get_result = get_result.result
ini_txt = 'Google Search : \n'
for (var x of get_result) {
ini_txt += `Title : ${x.title}\n`
ini_txt += `Link : ${x.link}\n`
ini_txt += `Desc : ${x.desc}\n\n`
}
reply(ini_txt)
break

//━━━━━━━━━━━━━━━[ FITUR PRIMBON ]━━━━━━━━━━━━━━━━━//

case 'artinama':
simple.updatePresence(from, Presence.recording)
if (args.length == 0) return reply(`Namamya Mana Tod\nContoh: ${prefix + command} Zero YT7`)
ini_nama = args.join(" ")
get_result = await fetchJson(`https://api.lolhuman.xyz/api/artinama?apikey=${lolkey}&nama=${ini_nama}`)
reply(get_result.result)
break
case 'jodoh':
simple.updatePresence(from, Presence.recording)
if (args.length == 0) return reply(`Namanya Mana Tod\nContoh: ${prefix + command} Zero & Sandrinna`)
ini_nama = args.join(" ").split("&")
nama1 = ini_nama[0].trim()
nama2 = ini_nama[1].trim()
get_result = await fetchJson(`https://api.lolhuman.xyz/api/jodoh/${nama1}/${nama2}?apikey=${lolkey}`)
get_result = get_result.result
ini_txt = `Positif : ${get_result.positif}\n`
ini_txt += `Negative : ${get_result.negatif}\n`
ini_txt += `Deskripsi : ${get_result.deskripsi}`
reply(ini_txt)
break
case 'jadian':
simple.updatePresence(from, Presence.recording)
if (args.length == 0) return reply(`Tanggal Jadiannya Mana Tod\nContoh: ${prefix + command} 12 12 2020`)
tanggal = args[0]
bulan = args[1]
tahun = args[2]
get_result = await fetchJson(`https://api.lolhuman.xyz/api/jadian/${tanggal}/${bulan}/${tahun}?apikey=${lolkey}`)
get_result = get_result.result
ini_txt = `Karakteristik : ${get_result.karakteristik}\n`
ini_txt += `Deskripsi : ${get_result.deskripsi}`
reply(ini_txt)
break
case 'tebakumur':
simple.updatePresence(from, Presence.recording)
if (args.length == 0) return reply(`Namanya Mana Tod\nContoh: ${prefix + command} Z-BOT8`)
ini_name = args.join(" ")
if (args.length == 0) return reply(`Example: ${prefix + command} LoL Human`)
get_result = await fetchJson(`https://api.lolhuman.xyz/api/tebakumur?apikey=${lolkey}&name=${ini_name}`)
get_result = get_result.result
ini_txt = `Nama : ${get_result.name}\n`
ini_txt += `Umur : ${get_result.age}`
reply(ini_txt)
break
case 'tebakgambar':
simple.updatePresence(from, Presence.recording)
anu = await fetchJson(`https://bx-hunter.herokuapp.com/api/tebakgambar?apikey=Ikyy69`, {method: 'get'})
ngebuff = await getBuffer(anu.img)
tebak = `Jawaban : *${anu.jawaban}*`
setTimeout( () => {
simple.sendMessage(from, tebak, text, {quoted: ftrol})
}, 60000) // 1000 = 1s,
setTimeout( () => {
simple.sendMessage(from, '_10 Detik lagi..._', text) 
}, 50000) // 1000 = 1s,
setTimeout( () => {
simple.sendMessage(from, '_20 Detik lagi..._', text)
}, 40000) // 1000 = 1s,
setTimeout( () => {
simple.sendMessage(from, '_30 Detik lagi..._', text) 
}, 30000) // 1000 = 1s,
setTimeout( () => {
simple.sendMessage(from, '_40 Detik lagi..._', text) 
}, 20000) // 1000 = 1s,
setTimeout( () => {
simple.sendMessage(from, '_50 Detik lagi..._', text) 
}, 10000) // 1000 = 1s,
setTimeout( () => {
simple.sendMessage(from, '_60 Detik lagi..._', text) 
}, 2500) // 1000 = 1s,
setTimeout( () => {
simple.sendMessage(from, ngebuff, image, { caption: '_Tebak bro!!! gak bisa jawab wajib subrek zero yt7 :v_', quoted: ftrol }) 
}, 0) // 1000 = 1s,
break
//------------------< Stalk >-------------------
      case 'stalkgithub':
      case 'githubstalk':
              if (args.length == 0) return reply(`Example: ${prefix + command} dha-chan02`)
              reply(mess.wait)
              username = args[0]
              ini_result = await fetchJson(`https://api.lolhuman.xyz/api/github/${username}?apikey=${lolkey}`)
              ini_result = ini_result.result
              ini_buffer = await getBuffer(ini_result.avatar)
              ini_txt = `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *GITHUB USER*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*
\`\`\`き⃟🦈 Username : ${ini_result.name}\`\`\`
\`\`\`き⃟🦈 Public Repo : ${ini_result.public_repos}\`\`\`
\`\`\`き⃟🦈 Public Gists : ${ini_result.public_gists}\`\`\`
\`\`\`き⃟🦈 Pengikut : ${ini_result.followers}\`\`\`
\`\`\`き⃟🦈 Following : ${ini_result.following}\`\`\`
\`\`\`き⃟🦈 Mengikuti : ${ini_result.bio}\`\`\`
\`\`\`き⃟🦈 Link : ${ini_result.url}\`\`\`
`
             simple.sendMessage(from, ini_buffer, image, { caption: ini_txt, thumbnail: Buffer.alloc(0) })
             break
      case 'stalkig':
      case 'igstalk':
             if (args.length == 0) return reply(`Example: ${prefix + command} simple.chan26`)
             reply(mess.wait)
             username = args[0]
             ini_result = await fetchJson(`https://api.lolhuman.xyz/api/stalkig/${username}?apikey=${lolkey}`)
             ini_result = ini_result.result
             ini_buffer = await getBuffer(ini_result.photo_profile)
             ini_txt = `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *INSTAGRAM PROFILE*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*
\`\`\`き⃟🦈 Username : ${ini_result.username}\`\`\`
\`\`\`き⃟🦈 Nama : ${ini_result.fullname}\`\`\`
\`\`\`き⃟🦈 Pengikut : ${ini_result.followers}\`\`\`
\`\`\`き⃟🦈 Mengikuti : ${ini_result.following}\`\`\`
\`\`\`き⃟🦈 Deskripsi : ${ini_result.bio}\`\`\`
\`\`\`き⃟🦈 Link : https://instagram.com/${ini_result.username}\`\`\`
`
             simple.sendMessage(from, ini_buffer, image, { caption: ini_txt, thumbnail: Buffer.alloc(0) })
             break
      case 'stalktiktok':
      case 'tiktokstalk':
             if (args.length == 0) return reply(`Example: ${prefix + command} marz.hiatus`)
             reply(mess.wait)
             stalk_toktok = args[0]
             get_result = await fetchJson(`http://lolhuman.herokuapp.com/api/stalktiktok/${stalk_toktok}?apikey=${lolkey}`)
             get_result = get_result.result
             pp_tt = await getBuffer(get_result.user_picture)
             ini_txt = `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *TIKTOK PROFILE*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*
\`\`\`き⃟🦈 Username : ${get_result.username}\`\`\`
\`\`\`き⃟🦈 Nama : ${get_result.nickname}\`\`\`
\`\`\`き⃟🦈 Pengikut : ${get_result.followers}\`\`\`
\`\`\`き⃟🦈 Mengikuti : ${get_result.followings}\`\`\`
\`\`\`き⃟🦈 Likes : ${get_result.likes}\`\`\`
\`\`\`き⃟🦈 Video : ${get_result.video}\`\`\`
\`\`\`き⃟🦈 Deskripsi : ${get_result.bio}\`\`\`
`
              simple.sendMessage(from, pp_tt, image, { quoted: mek, caption: ini_txt, thumbnail: Buffer.alloc(0) })
              break
       case 'iguser':
              try {
              if (args.length == 0) return reply(`Kirim perintah *${prefix}iguser [ username ]*\nContoh : ${prefix}iguser jessnolimit`)
              query = args.join(" ")
              reply(mess.wait)
              get_result = await fetchJson(`https://api.zeks.xyz/api/iguser?apikey=${lolkey}&q=${query}`)
              get_result = get_result.result
              teks = `*「 INSTAGRAM USER 」*\n\n*Hasil Pencarian : ${query}*\n\n`
              for(let i = 0; i < get_result.length; i++) {
              teks += `*Username* : ${get_result[i].username}\n*Full name*: ${get_result[i].full_name}\n*Akun private* : ${get_result[i].private_user}\n*Verified*: ${get_result[i].verified_user}\n*Link*: https://instagram.com/${get_result[i].username}\n\n`
}
              ini_buffer = await getBuffer(get_result[0].profile_pic)
              simple.sendMessage(from, ini_buffer, image, { quoted: mek, caption: teks })
              } catch {
              reply(`Maaf username ${query} tidak ditemukan`)
}
              break
        
case 'ffstalk':
if (args.length == 0) return reply(`Idnya mana kak?`)
                    ff_id = args[0]
                    get_result = await fetchJson(`https://lolhuman.herokuapp.com/api/freefire/${ff_id}?apikey=genbotkey`)
                    reply(`nih kak`)
                    break
//━━━━━━━━━━━━━━━[ FITUR STALK ]━━━━━━━━━━━━━━━━━//

case 'stalkig':
simple.updatePresence(from, Presence.recording)
if (args.length == 0) return reply(`Usernamenya Mana Tod\nContoh: ${prefix + command} Sandrinna_11`)
username = args[0]
ini_result = await fetchJson(`https://api.lolhuman.xyz/api/stalkig/${username}?apikey=${lolkey}`)
ini_result = ini_result.result
ini_buffer = await getBuffer(ini_result.photo_profile)
ini_txt = `Username : ${ini_result.username}\n`
ini_txt += `Full Name : ${ini_result.fullname}\n`
ini_txt += `Posts : ${ini_result.posts}\n`
ini_txt += `Followers : ${ini_result.followers}\n`
ini_txt += `Following : ${ini_result.following}\n`
ini_txt += `Bio : ${ini_result.bio}`
simple.sendMessage(from, ini_buffer, image, { caption: ini_txt })
break
case 'stalktiktok':
simple.updatePresence(from, Presence.recording)
if (args.length == 0) return reply(`Usernamenya Mana Tod\nContoh: ${prefix + command} tjukruw`)
stalk_toktok = args[0]
get_result = await fetchJson(`https://api.lolhuman.xyz/api/stalktiktok/${stalk_toktok}?apikey={lolkey}`)
get_result = get_result.result
ini_txt = `Username : ${get_result.username}\n`
ini_txt += `Nickname : ${get_result.nickname}\n`
ini_txt += `Bio : ${get_result.nickname}\n`
ini_txt += `Followers : ${get_result.followers}\n`
ini_txt += `Followings : ${get_result.followings}\n`
ini_txt += `Likes : ${get_result.likes}\n`
ini_txt += `Video : ${get_result.video}\n`
pp_tt = await getBuffer(get_result.user_picture)
simple.sendMessage(from, pp_tt, image, { quoted: ftrol, caption: ini_txt })
break
case 'stalkgithub':
simple.updatePresence(from, Presence.recording)
if (args.length == 0) return reply(`Usernamenya Mana Tod\nContoh: ${prefix + command} Ikalbot`)
username = args[0]
ini_result = await fetchJson(`https://api.lolhuman.xyz/api/github/${username}?apikey=${lolkey}`)
ini_result = ini_result.result
ini_buffer = await getBuffer(ini_result.avatar)
ini_txt = `Name : ${ini_result.name}\n`
ini_txt += `Link : ${ini_result.url}\n`
ini_txt += `Public Repo : ${ini_result.public_repos}\n`
ini_txt += `Public Gists : ${ini_result.public_gists}\n`
ini_txt += `Followers : ${ini_result.followers}\n`
ini_txt += `Following : ${ini_result.following}\n`
ini_txt += `Bio : ${ini_result.bio}`
simple.sendMessage(from, ini_buffer, image, { caption: ini_txt })
break

//━━━━━━━━━━━━━━━[ FITUR RANDOM IMAGE ]━━━━━━━━━━━━━━━━━//

//══════════[ Fitur Nfsw ]══════════//
			case 'storyanime':
			reply(mess.wait)
			anu =
				await fetchJson(
					`http://api.lolhuman.xyz/api/storynime?apikey=chikey`
					)
			buffer =
				await getBuffer(
					anu.result)
			simple.sendMessage(
				from,
				buffer,
				video, {
					quoted: mek
				})
			break
case 'chiisaihentai':
case 'trap':
case 'blowjob':
case 'yaoi':
case 'ecchi':
//case 'hentai':
case 'ahegao':
case 'hololewd':
case 'sideoppai':
case 'animefeets':
case 'animebooty':
case 'animethighss':
case 'animearmpits':
case 'hentaifemdom':
case 'lewdanimegirls':
case 'biganimetiddies':
case 'hentai4everyone':
simple.updatePresence(from, Presence.recording)
if (!isOwner) return reply('Owner Only!! AWOAKWOK🐣')
await getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/${command}?apikey=${lolkey}`).then((gambar) => {
simple.sendMessage(from, gambar, image, { quoted: fgif })
})
break
case 'loli': case 'hentai':
timestamp = speed();
latensi = speed() - timestamp
teks =
`*Fitur _NSFW_ Di NonAktifKan Di Bot Ini*`
                  but = [
{ buttonId: `${prefix}menu`, buttonText: { displayText: '🐣MENU' }, type: 1 },
{ buttonId: `${prefix}owner`, buttonText: { displayText: '👥 OWNER' }, type: 1 }
]
sendButton(from, teks, faketeks, but)
break
//case 'loli':
     //  case 'husbu':
       //case 'milf':
    //   case 'cosplay':
      // case 'wallml':
              let wipu = (await axios.get(`https://raw.githubusercontent.com/Arya-was/endak-tau/main/${command}.json`)).data
              let wipi = wipu[Math.floor(Math.random() * (wipu.length))]
              fs.writeFileSync(`./${sender}.jpeg`, await getBuffer(wipi))
		      buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️Next`},type:1},{buttonId:`${prefix}nhentaibot`,buttonText:{displayText:'NHENTAI BOT'},type:1}]
              imageMsg = ( await simple.prepareMessage(from, fs.readFileSync(`./${sender}.jpeg`), 'imageMessage', {thumbnail: Buffer.alloc(0)})).message.imageMessage
              buttonsMessage = {footerText:'Jangan Lupa Donasi Ya Kak ☕', imageMessage: imageMsg,
              contentText:`klik Next untuk ke gambar selanjut nya`,buttons,headerType:4}
              prep = await simple.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})
              simple.relayWAMessage(prep)
              fs.unlinkSync(`./${sender}.jpeg`)
              break
//━━━━━━━━━━━━━━━[ FITUR OWNER ]━━━━━━━━━━━━━━━━━//

case 'd':
        case 'del':
        case 'delete': // MR.CYSER
        if (!isOwner && !isGroupAdmins) return reply('Owner Only!')  
               try {
               if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Reply chat bot')
               simple.deleteMessage(from, {id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true})
               } catch (e){
               reply('Reply chat bot')
}
               break
case 'hacked':
              if (!isOwner) return reply(mess.only.ownerB)
              if (!isBotGroupAdmins) return reply(mess.only.Badmin)
              if (args.length < 1) return reply('Teksnya?')
              reply('Otw Hack')
                tessgc = await getBuffer(`https://i.postimg.cc/LXtTzcHV/IMG-20220106-WA0050.jpg`)
                   simple.updateProfilePicture (from, tessgc)
                simple.groupUpdateSubject(from, `HACKED BY ${body.slice(8)}`)
                simple.groupUpdateDescription(from, `_Owner telah meretas grup ini_`)             
                simple.sendMessage(from, 'Succes Hacked', text, {quoted: mek})
					break
case 'leave':
			if (!isOwner)
				return reply(
					mess
					.only
					.Owner)
			if (!isGroup)
			return reply(
					mess
					.only
					.group)
			setTimeout(() => {
				simple
					.groupLeave(
						from
						)
			}, 2000)
			setTimeout(() => {
				reply(
					'Byee...')
			}, 0)
			break
case 'join':
			if (!q) return reply(
				'Linknya?'
				)
			if (!isOwner && !mek
				.key.fromMe)
				return reply(
					mess
					.only
					.owner)
			if (!isUrl(args[
				0]) && !args[0]
				.includes(
					'https://chat.whatsapp.com/'
					))
			return reply(
					'Linknya Invalid Tod'
					)
			link = args[0]
				.replace(
					'https://chat.whatsapp.com/',
					'')
			fak = simple.query({
				json: ['action',
					'invite',
					link
				],
				expect200: true
			})
			reply(
				'Berhasil Masuk Grup')
			break
case 'clearall':
			if (!isOwner && !mek
				.key.fromMe)
				return reply(
					mess
					.only
					.owner)
			anu = await simple
				.chats.all()
			simple
				.setMaxListeners(
					25)
			for (let _ of anu) {
				simple
					.deleteChat(
						_.jid)
			}
			reply(
				'Sukses delete all chat :)')
			break
case 'done':
case 'owner':
simple.updatePresence(from, Presence.recording)
let inilist = []
for (let i of ownerNumber) {
let vname = simple.contacts[i] != undefined ? simple.contacts[i].vname || simple.contacts[i].notify : undefined
inilist.push({
"displayName": 'HaikalGanz',
"vcard": 'BEGIN:VCARD\n'
+ 'VERSION:3.0\n'
+ `FN:${ownername}\n`
+ `ORG: ${ownername} ;\n`
+ `TEL;type=CELL;type=VOICE;waid=${owner}:${owner}\n`
+ 'END:VCARD'.trim()
})
}
hehe = await simple.sendMessage(from, {
"displayName": `${inilist.length} kontak`,
"contacts": inilist 
}, 'contactsArrayMessage', { quoted: ftrol })
button = [
  {buttonId: '.menu', buttonText: {displayText: '🔴MENU GUA'}, type: 1},
  {buttonId: '.rulesbot', buttonText: {displayText: '☕ PERATURAN'}, type: 1},
  {buttonId: '.vn', buttonText: {displayText: '🔉VN'}, type: 1}
]
 buttons = {
    contentText: 'Nih Owner Ku Mau Tanya? Jangan Malu-Malu Save Kalo Boleh :)',
    footerText: faketeks,
    buttons: button,
    headerType: 1
}
await simple.sendMessage(from, buttons, MessageType.buttonsMessage, {quoted: ftrol})
break
case 'bc':
simple.updatePresence(from, Presence.recording)
if (!isOwner) return reply('LU BUKAN OWNER GBLOK')
if (args.length < 1) return reply('.......')
anu = await simple.chats.all()
if (isMedia && !mek.message.videoMessage || isQuotedImage) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
bc = await simple.downloadMediaMessage(encmedia)
for (let _ of anu) {
simple.sendMessage(_.jid, bc, image, { caption: `『 *Ɇ-ɃØŦƵ 𒆜 BROADCAST* 』\n\n◇⃟̣̣💬Dari : ItzElloAja🗿\n◇⃟̣̣💬Time : ${time}\n◇⃟̣̣💬Pesan : \n\n${body.slice(4)}` })
}
reply('Suksess broadcast')
} else {
for (let _ of anu) {
sendMess(_.jid, `『 *Ɇ-ɃØŦƵ 𒆜 BROADCAST* 』\n\n◇⃟̣̣💬Dari : ItzElloAja🗿\n◇⃟̣̣💬Time : ${time}\n◇⃟̣̣💬Pesan : \n\n${body.slice(4)}`)
}
reply('Suksess broadcast')
}
break
case 'bc2': 
					if (!isOwner) return reply(mess.only.ownerB) 
					if (args.length < 1) return reply('.......')
					anu = await simple.chats.all()
					if (isMedia && !mek.message.videoMessage || isQuotedImage) {
						const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
						buff = await simple.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							simple.sendMessage(_.jid, bc, image, {quoted:mek,caption: `*「 PESAN SIARAN BOT 」*\n\n${body.slice(4)}`})
}
             reply('Suksess broadcast')
             } else {
             for (let _ of anu) {
simple.sendMessage(_.jid, 
			{"contentText": `*「 BROADCAST ${botname} 」*\n\n${body.slice(4)}`,
			"footerText": '©E BOTZ',
			"buttons": [
			{"buttonId": `${prefix}menu`,
			"buttonText": {"displayText": "MENU BOT"
			},"type": "RESPONSE"}
			], "headerType": 1,
			}, MessageType.buttonsMessage )
}
             reply('Suksess broadcast')
}
             break
simple.updatePresence(from, Presence.recording)
case 'report':
reply('Waiting..')
const pesan = body.slice(8)
if (pesan.length > 300) return pras.sendMessage(from, 'Maaf Teks Terlalu Panjang, Maksimal 300 Teks', text, { quoted: ftrol })
var nomor = mek.participant
const teks1 = `*[REPORT]*\n\n*◇⃟̣̣💬Nomor* : ${sender.split('@')[0]}\n*◇⃟̣̣💬Name* : ${pushname}\n*◇⃟̣̣💬Bio* : ${bio_user}\n*◇⃟̣̣💬Time* : ${time}\n*◇⃟̣̣💬Pesan* : \n\n${pesan}\n\n`
var options = {
text: teks1,
contextInfo: { mentionedJid: [nomor] },
}
simple.sendMessage(`6289527031603@s.whatsapp.net`, options, text, { quoted: ftrol })
reply('Masalah Telah Di Laporkan Ke Owner BOT, Mohon Tunggu Untuk Proses Perbaikan')
break

case 'botinfo':
simple.updatePresence(from, Presence.recording)
img =  fs.readFileSync('./media/Wkwk.jpg')
tod = `
╭━🔥─BOT INFO─━─🔥━╮
 |Hai ${pushname} 👋 selamat ${tampilUcapan}
│🔖Nama Bot : ${botname}
│🔖Nama Owner : ${ownername}
│🔖Nomor Owner : ${owner}
│🔖Prefix :「 Multi Prefix 」
│🔖Runtime : _*${process.uptime()}*_
╰━━🔥─━─◈─━🔥─━╯`
but = [
{ buttonId: `${prefix}owner`, buttonText: { displayText: 'OWNERᏪ' }, type: 1 }
]
 sendButImage(from, tod, faketeks, img, but) 
break
case 'infobot':
timestamp = speed();
latensi = speed() - timestamp
teks =
`*INFO BOT* 
 🎀*Sc Ori : SIMPLE-BOT2*
 👑*Nama Owner : Ello Ganz🐣*
 🦖*Nama Bot : E BOT*
 ☕*Prefix : Multi Prefix*
 🎮*Total Pengguna : 2738*
 ⏰*Runtime : ${runtime(process.uptime())}*
 ⏱️*Speed : ${latensi.toFixed(4)} second*
 📌*Prefix : MULTI*
`
                  but = [
{ buttonId: `menu`, buttonText: { displayText: '🐣MENU' }, type: 1 },
{ buttonId: `owner`, buttonText: { displayText: '👥 OWNER' }, type: 1 }
]
sendButton(from, teks, faketeks, but)
break
//(MENU KHUSUS USER GG)//
case 'menudinda':
simple.updatePresence(from, Presence.recording)
tod = `
*STORE BY 𝐀𝐃𝐈𝐍𝐃𝐀*
*serbah murmer n suka promo dadakan🙀, banyak freenya juga lohh yukk joinn💘💘*

LINK GC STORE :
https://chat.whatsapp.com/JP2SwsR3Yp4LJM7D1CRbsV

︶꒦꒷꒷꒦︶꒦꒷꒷꒦︶꒦꒷꒷꒦︶꒦꒷꒷꒦︶꒦꒷꒷꒦︶

ᥒႸ⍺rі рᥣр рᥱr⍺k⍺ᥒ ᥒ tut𝘰r 𝗆ur𝗆ᥱr?Ⴘukk 𝗆⍺𝗆ріr 𝖽і A𝖽іᥒ𝖽⍺ 𝘚t𝘰rᥱ😋💘

❁ཻུ۪۪亗͎𝐋𝚰𝐍𝐊 𝐆𝐂 :
https://chat.whatsapp.com/LC2ux4rUxbSItiqI4qGaXB

ᖯᥒႸ⍺k 𝗆ᥱᥒu ᥣ⍺іᥒ jɡ⍺ ᖯᥱᖯᖯ :
៰࣪ ࣭ 🍪Aᥣᥣ рᥣр
៰࣪ ࣭ 🍪Aᥣᥣ tut𝘰r
៰࣪ ࣭ 🍪Aᥣᥣ ⍺рk рrᥱ𝗆
៰࣪ ࣭ 🍪Aᥣᥣ р𝘰ᥣ𝘰𝘴⍺ᥒ
៰࣪ ࣭ 🍪ᒍ⍺𝘴⍺ 𝘴h⍺rᥱ
៰࣪ ࣭ 🍪Aᥣᥣ ⍺рk ᗯh⍺t𝘴Aрр
៰࣪ ࣭ 🍪ᒍ⍺𝘴⍺ 𐒨r
៰࣪ ࣭ 🍪ꔋ𝘰р uр D𝗆
៰࣪ ࣭ 🍪Μᥱᥒu ᥣ⍺іᥒ?ꔋ⍺ᥒႸ⍺ ⍺𝖽𝗆іᥒ Ⴘ⍺ww <3

˖࣪ ϟ ִֶָ𝐍𝐎𝐓𝐄 :
❀┊pɑyოеიt оიIy GОPΑY იо 𝗋еff,kc𝗎ɑIі sIɑһ ɑⅾოіი
❀┊p𝗋оsеs fɑst
❀┊о𝗋ⅾе𝗋?sbɑ𝗋 yɑ
❀┊bе ɑ sოɑ𝗋t b𝗎yyе𝗋 
❀┊cоpy Iіst?ⅾеიⅾɑ+𝗏і𝗋ɑI y
*MAU BUY JASA? PILIH BUTTON DINDA DI BAWAH*
─`
but = [
{ buttonId: `${prefix}dinda`, buttonText: { displayText: 'DINDA😘' }, type: 1 }, 
{ buttonId: `${prefix}menu`, buttonText: { displayText: 'BOTNYA☕' }, type: 1 }
]
sendButton(from, tod, faketeks, but, mek)
break

case 'menuyopki':
simple.updatePresence(from, Presence.recording)
tod = `

**ADMIN YOPKI MELAYANI:*
-GOBER!
-OVOBER!
-REKBER
- DANABER
-TT/BT BER  
_BATAL TRX KE POTONG_

*BER ? SUNG MC LANGSUNG*
_Fee Admin YOPKI_

*🌻1k - 50k : 5k*
*🌻50k - 100k : 10k*
*🌻100k - 150k : 12k*
*🌻150k - 250k : 15k*
*🌻250k - 600k : 20k*
*🌻600k - 1JT : 50k*
*MAU BUY JASA ADMIN? PILIH BUTTON YOPKI
 DI BAWAH*
─`
but = [
{ buttonId: `${prefix}yopki`, buttonText: { displayText: 'BER²😎' }, type: 1 }, 
]
sendButton(from, tod, faketeks, but, mek)
break

case 'menunando':
simple.updatePresence(from, Presence.recording)
tod = `

NO : 082213416986
WASPADA CLONE YA
SELAIN ITU CLONE YA

*JOIN GRUB JB NANDO STORE KAWAN : https://chat.whatsapp.com/J5BlH0iUuzJ3PwG6rhGAxj*

*ADMIN NANDO MENYEDIAKAN :*
📢 GOBER
📢 OVOBER
📢 DANABER
📢 JASA CR 2k
📢 TUTOR SESI 10k
📢 JUAL/BELI AKUN

*FEE ADMIN NANDO STORE :*
📍0-80  : 5k
📍81-250 : 10k
📍251-350 : 15k
📍351-450 : 20k
📍451-750 : 25k
📍751-1JT : 35k 

📍TRX BATAL FEE KEPOTONG
📍GOBER/BER² : SUNG MC KAN
📍RAGU? Cek IG nando_store_ff
📍BE SMART BUYER NANDO JB
─`
but = [
{ buttonId: `${prefix}nando`, buttonText: { displayText: 'BER²😎' }, type: 1 }, 
]
sendButton(from, tod, faketeks, but, mek)
break

case 'sewa':
simple.updatePresence(from, Presence.recording)
img =  fs.readFileSync('./media/sewa.jpg')
tod = `𝐒𝐄𝐖𝐀 𝐁𝐎𝐓
╭━━━━━━━━━━━━🕊️
│ *「 INFO BOT 」*
│➛*Nama Bot* : ${botname}
│➛*Owner* : ElloGanz
│➛*Prefix* : Multi
╰┬────────────🕊️
   │ *「HARGA SEWA 」* 
   │➛ *1 BULAN* : 10K
   ╰────────────🕊️
   
   _PEMBAYARAN VIA_
-*Dana* 

085696684534
Not Premium:v

-*Pulsa*

085696684534 ( Indosat )
089527031603 ( Tri )
  
 
   _NOTE_

_*Ingin Sewa? Chat Owner!*_
_Button MAU SEWA BANG Jangan Di Mainin Kalau Ga Mau Sewa🗿, Solnya Itu Bot Nya Ngasih Notif Ke Owner Bahwa Yg Pencet Itu Mau Sewa Bot 🗿🗿, SKALI LAGI JANGAN DI MAININ YA BANH_
`
but = [
{ buttonId: `${prefix}owner`, buttonText: { displayText: 'OWNER🗿' }, type: 1 }, 
{ buttonId: `${prefix}sewaaa`, buttonText: { displayText: 'MAU SEWA BANG' }, type: 1 }, 
]
 sendButImage(from, tod, faketeks, img, but) 
break
case 'sewaaa':
simple.sendMessage(`6289527031603@s.whatsapp.net`, `─────「 *SEWABOT* 」─────\n\n Hallo Owner ${tampilUcapan}, Ada User Yang Mau Sewa Bot Nih \n Namanya {pushame} \n Nomor Nya ${sender.split('@')[0]} \n Bio Nya {bio_user} \n\n────────────────────`)
reply(' Succes✓ Laporan Ke Owner BOT, Mohon Tunggu Untuk Respon Dari Owner Bot!!')
break


//━━━━━━━━━━━━━━━[ FITUR SEWA BOT ]━━━━━━━━━━━━━━━━━//

case 'sewabot':
simple.updatePresence(from, Presence.recording)
but = [
{ buttonId: `${prefix}sebulan`, buttonText: { displayText: 'SEBULAN' }, type: 1 },
{ buttonId: `${prefix}permanen`, buttonText: { displayText: 'PERMANEN' }, type: 1 }
]
sendButton(from, "_Silahkan Pilih Jangka Sewa Di Bawah_", faketeks, but, mek)
break
case 'sebulan':
simple.updatePresence(from, Presence.recording)
but = [
{ buttonId: `${prefix}gopay`, buttonText: { displayText: 'GOPAY' }, type: 1 },
{ buttonId: `${prefix}dana`, buttonText: { displayText: 'DANA' }, type: 1 },
{ buttonId: `${prefix}ovo`, buttonText: { displayText: 'OVO' }, type: 1 }
]
sendButton(from, "SEWA 1 BULAN 10K", faketeks, but, mek)
break
case 'permanen':
simple.updatePresence(from, Presence.recording)
but = [
{ buttonId: `${prefix}gopay`, buttonText: { displayText: 'GOPAY' }, type: 1 },
{ buttonId: `${prefix}dana`, buttonText: { displayText: 'DANA' }, type: 1 },
{ buttonId: `${prefix}ovo`, buttonText: { displayText: 'OVO' }, type: 1 }
]
sendButton(from, "SEWA PERMANEN 15K", faketeks, but, mek)
break
case 'gopay':
simple.updatePresence(from, Presence.recording)
but = [
{ buttonId: `${prefix}done`, buttonText: { displayText: 'OWNER 🔥' }, type: 1 }
]
sendButton(from, "GOPAY : Ndak Di Sewain", faketeks, but, mek)
break
case 'dana':
simple.updatePresence(from, Presence.recording)
but = [
{ buttonId: `${prefix}done`, buttonText: { displayText: 'OWNER 🔥' }, type: 1 }
]
sendButton(from, "DANA : Ndak Di Sewain", faketeks, but, mek)
break
case 'ovo':
simple.updatePresence(from, Presence.recording)
but = [
{ buttonId: `${prefix}done`, buttonText: { displayText: 'OWNER 🔥' }, type: 1 }
]
sendButton(from, "OVO : Ndak Di Sewain", faketeks, but, mek)
break

//━━━━━━━━━━━━━━━[ FITUR ASUPAN ]━━━━━━━━━━━━━━━━━//

case 'asupan':
simple.updatePresence(from, Presence.recording)
ini = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/asupan?apikey=${zerkey}`)
reply(mess.wait)
buffer = await getBuffer(ini.result.result)
simple.sendMessage(from, buffer, video, {quoted: ftrol, caption: 'Nih Kak'})
break
case 'asupancecan':
simple.updatePresence(from, Presence.recording)
ini = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/asupan/cecan?apikey=${zerkey}`)
reply(mess.wait)
buffer = await getBuffer(ini.result.url)
simple.sendMessage(from, buffer, image, {quoted: ftrol, caption: 'Nih Kak'})
break
case 'asupanhijaber':
simple.updatePresence(from, Presence.recording)
ini = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/asupan/hijaber?apikey=${zerkey}`)
reply(mess.wait)
buffer = await getBuffer(ini.result.url)
simple.sendMessage(from, buffer, image, {quoted: ftrol, caption: 'Nih Kak'})
break
case 'asupansantuy':
simple.updatePresence(from, Presence.recording)
ini = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/asupan/santuy?apikey=${zerkey}`)
reply(mess.wait)
buffer = await getBuffer(ini.result.url)
simple.sendMessage(from, buffer, video, {quoted: ftrol, caption: 'Nih Kak'})
break
case 'asupanukhti':
simple.updatePresence(from, Presence.recording)
ini = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/asupan/ukty?apikey=${zerkey}`)
reply(mess.wait)
buffer = await getBuffer(ini.result.url)
simple.sendMessage(from, buffer, video, {quoted: ftrol, caption: 'Nih Kak'})
break
case 'asupanbocil':
simple.updatePresence(from, Presence.recording)
ini = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/asupan/bocil?apikey=${zerkey}`)
reply(mess.wait)
buffer = await getBuffer(ini.result.url)
simple.sendMessage(from, buffer, video, {quoted: ftrol, caption: 'Nih Kak'})
break
case 'asupanghea':
simple.updatePresence(from, Presence.recording)
ini = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/asupan/ghea?apikey=${zerkey}`)
reply(mess.wait)
buffer = await getBuffer(ini.result.url)
simple.sendMessage(from, buffer, video, {quoted: ftrol, caption: 'Nih Kak'})
break
case 'asupanrika':
simple.updatePresence(from, Presence.recording)
ini = await fetchJson(`https://zeroyt7-api.herokuapp.com/api/asupan/rikagusriani?apikey=${zerkey}`)
reply(mess.wait)
buffer = await getBuffer(ini.result.url)
simple.sendMessage(from, buffer, video, {quoted: ftrol, caption: 'Nih Kak'})
break
//Bio

     runi = process.uptime() 
           simple.setStatus(`E-BOTZ Active ${kyun(runi)} `).catch((_)=>_);

           settingstatus = new Date() * 1

//━━━━━━━━━━━━━━━[ FITUR GABUT ]━━━━━━━━━━━━━━━━━//
case 'bego':
      case 'tolol':
      case 'pinter':
      case 'pintar':
      case 'asu':
      case 'bodoh':
      case 'gay':
      case 'lesby':
      case 'bajingan':
      case 'jancok':
      case 'anjing':
      case 'ngentod':
      case 'ngentot':
      case 'monyet':
      case 'mastah':
      case 'newbie':
      case 'bangsat':
      case 'bangke':
      case 'sange':
      case 'sangean':
      case 'dakjal':
      case 'horny':
      case 'wibu':
      case 'puki':
      case 'pantex':
      case 'pantek':
      
      if (!isGroup) return reply(mess.only.group)  
        teks = `*Yang Paling ${command} Disini Adalah :* @${goo.jid.split('@')[0]} Damsarr ${command}`
        membr.push(goo.jid)
        mentions(teks, membr, true)
        break
case 'apakah':
simple.updatePresence(from, Presence.recording)
apakah = body.slice(1)
const apa =['Iya','Tidak','Bisa Jadi','Coba Ulangi']
const kah = apa[Math.floor(Math.random() * apa.length)]
simple.sendMessage(from, '*Pertanyaan :* '+apakah+'\n*Jawaban :* '+ kah, text, { quoted: ftrol })
break
case 'cekganteng':
simple.updatePresence(from, Presence.recording)
ganteng = body.slice(1)
const gan =['10','30','20','40','50','60','70','62','74','83','97','100','29','94','75','82','41','39']
const teng = gan[Math.floor(Math.random() * gan.length)]
simple.sendMessage(from, '*Pertanyaan :* '+ganteng+'\n*Jawaban :* '+ teng+'%', text, { quoted: ftrol })
break
case 'cekcantik':
simple.updatePresence(from, Presence.recording)
cantik = body.slice(1)
const can =['10','30','20','40','50','60','70','62','74','83','97','100','29','94','75','82','41','39']
const tik = can[Math.floor(Math.random() * can.length)]
simple.sendMessage(from, '*Pertanyaan :* '+cantik+'\n*Jawaban :* '+ tik+'%', text, { quoted: ftrol })
break
case 'hobby':
simple.updatePresence(from, Presence.recording)
const kan =['Coli','baca buku','Tadi','ngeliat org mandi','Nonton bokep','sepedaan','Baca wattpad','belajar','Main discord','menabung']
const hooo = kan[Math.floor(Math.random() * kan.length)]
simple.sendMessage(from, 'Pertanyaan : *hoby*\n\nJawaban : '+ hooo, text, { quoted: ftrol })
break
case 'bisakah':
simple.updatePresence(from, Presence.recording)
bisakah = body.slice(1)
const bisa =['Bisa','Tidak Bisa','Coba Ulangi','MANA GW TAU']
const keh = bisa[Math.floor(Math.random() * bisa.length)]
simple.sendMessage(from, '*Pertanyaan :* '+bisakah+'\n*Jawaban :* '+ keh, text, { quoted: ftrol })
break
case 'citacita':  
simple.updatePresence(from, Presence.recording)
var cita =['http://piyobot.000webhostapp.com/citacita1.mp3','http://piyobot.000webhostapp.com/citacita2.mp3','http://piyobot.000webhostapp.com/citacita3.mp3','http://piyobot.000webhostapp.com/citacita4.mp3','http://piyobot.000webhostapp.com/citacita5.mp3','http://piyobot.000webhostapp.com/citacita6.mp3','http://piyobot.000webhostapp.com/citacita7.mp3','http://piyobot.000webhostapp.com/citacita8.mp3','http://piyobot.000webhostapp.com/citacita9.mp3','http://piyobot.000webhostapp.com/citacita10.mp3','http://piyobot.000webhostapp.com/citacita11.mp3','http://piyobot.000webhostapp.com/citacita12.mp3','http://piyobot.000webhostapp.com/citacita13.mp3','http://piyobot.000webhostapp.com/citacita14.mp3','http://piyobot.000webhostapp.com/citacita15.mp3','http://piyobot.000webhostapp.com/citacita16.mp3','http://piyobot.000webhostapp.com/citacita17.mp3','http://piyobot.000webhostapp.com/citacita18.mp3','http://piyobot.000webhostapp.com/citacita19.mp3','http://piyobot.000webhostapp.com/citacita20.mp3','http://piyobot.000webhostapp.com/citacita21.mp3','http://piyobot.000webhostapp.com/citacita22.mp3','http://piyobot.000webhostapp.com/citacita23.mp3','http://piyobot.000webhostapp.com/citacita24.mp3','http://piyobot.000webhostapp.com/citacita25.mp3','http://piyobot.000webhostapp.com/citacita26.mp3','http://piyobot.000webhostapp.com/citacita27.mp3','http://piyobot.000webhostapp.com/citacita28.mp3','http://piyobot.000webhostapp.com/citacita29.mp3','http://piyobot.000webhostapp.com/citacita30.mp3','http://piyobot.000webhostapp.com/citacita31.mp3','http://piyobot.000webhostapp.com/citacita32.mp3','http://piyobot.000webhostapp.com/citacita33.mp3','http://piyobot.000webhostapp.com/citacita34.mp3','http://piyobot.000webhostapp.com/citacita35.mp3']
var cita3 = cita[Math.floor(Math.random() * cita.length)]
cita2 = await getBuffer(cita3)
simple.sendMessage(from, cita2, MessageType.audio, {quoted: ftrol, mimetype: 'audio/mp4', ptt:true, duration: -838719282910})
break
case 'kapankah':
simple.updatePresence(from, Presence.recording)
kapankah = body.slice(1)
const kapan =['Besok','Lusa','Tadi','4 Hari Lagi','5 Hari Lagi','6 Hari Lagi','1 Minggu Lagi','2 Minggu Lagi','3 Minggu Lagi','1 Bulan Lagi','2 Bulan Lagi','3 Bulan Lagi','4 Bulan Lagi','5 Bulan Lagi','6 Bulan Lagi','1 Tahun Lagi','2 Tahun Lagi','3 Tahun Lagi','4 Tahun Lagi','5 Tahun Lagi','6 Tahun Lagi','1 Abad lagi','3 Hari Lagi']
const koh = kapan[Math.floor(Math.random() * kapan.length)]
simple.sendMessage(from, '*Pertanyaan :* '+kapankah+'\n*Jawaban :* '+ koh, text, { quoted: ftrol })
break
case 'cekpintar': case 'pintarcek':
simple.updatePresence(from, Presence.recording)
pintar = body.slice(1)
const pin =['10','30','20','40','50','60','70','62','74','83','97','100','29','94','75','82','41','39']
const tar = pin[Math.floor(Math.random() * pin.length)]
simple.sendMessage(from, '*Pertanyaan :* '+pintar+'\n*Jawaban :* '+ tar+'%', text, { quoted: ftrol })
break


//━━━━━━━━━━━━━━━[ FITUR GAME ]━━━━━━━━━━━━━━━━━//

case 'truth':
simple.updatePresence(from, Presence.recording)
const trut = ['Pernah suka sama siapa aja? berapa lama?', 'Kalau boleh atau kalau mau, di gc/luar gc siapa yang akan kamu jadikan sahabat?(boleh beda/sma jenis)', 'apa ketakutan terbesar kamu?', 'pernah suka sama orang dan merasa orang itu suka sama kamu juga?', 'Siapa nama mantan pacar teman mu yang pernah kamu sukai diam diam?', 'pernah gak nyuri uang nyokap atau bokap? Alesanya?', 'hal yang bikin seneng pas lu lagi sedih apa', 'pernah cinta bertepuk sebelah tangan? kalo pernah sama siapa? rasanya gimana brou?', 'pernah jadi selingkuhan orang?', 'hal yang paling ditakutin', 'siapa orang yang paling berpengaruh kepada kehidupanmu', 'hal membanggakan apa yang kamu dapatkan di tahun ini', 'siapa orang yang bisa membuatmu sange', 'siapa orang yang pernah buatmu sange', '(bgi yg muslim) pernah ga solat seharian?', 'Siapa yang paling mendekati tipe pasangan idealmu di sini', 'suka mabar(main bareng)sama siapa?', 'pernah nolak orang? alasannya kenapa?', 'Sebutkan kejadian yang bikin kamu sakit hati yang masih di inget', 'pencapaian yang udah didapet apa aja ditahun ini?', 'kebiasaan terburuk lo pas di sekolah apa?']
var ttrth = (await fetchJson(`https://pencarikode.xyz/api/truthid?apikey=APIKEY`)).message
var bff = Buffer.alloc(0)
sendButton(from, `_*Truth*_\n\n${ttrth}`, `${tampilUcapan}`, fs.readFileSync("./media/trorda.jpeg"), [ { buttonId: `${prefix}truth`, buttonText: { displayText: "➡️ NEXT" }, type: 1 } ], { contextInfo: { mentionedJid: [sender] }})                 
break
case 'dare':
simple.updatePresence(from, Presence.recording)
const dare = ['Prank mak bilang "aku hamil" (bagi cewe) atau "Aku hamilin anak orang" (bagi cowo)\nrecord terus kirim kesini', 'Kirim pesan ke mantan kamu dan bilang "aku masih suka sama kamu', 'telfon crush/pacar sekarang dan ss ke pemain', 'pap ke salah satu anggota grup', 'Bilang "KAMU CANTIK BANGET NGGAK BOHONG" ke cowo', 'ss recent call whatsapp', 'drop emot 🤥 setiap ngetik di gc/pc selama 1 hari', 'kirim voice note bilang can i call u baby?', 'drop kutipan lagu/quote, terus tag member yang cocok buat kutipan itu', 'pake foto sule sampe 3 hari', 'ketik pake bahasa daerah 24 jam', 'ganti nama menjadi "gue anak lucinta luna" selama 5 jam', 'chat ke kontak wa urutan sesuai %batre kamu, terus bilang ke dia "i lucky to hv you', 'prank chat mantan dan bilang " i love u, pgn balikan', 'record voice baca surah al-kautsar', 'bilang "i hv crush on you, mau jadi pacarku gak?" ke lawan jenis yang terakhir bgt kamu chat (serah di wa/tele), tunggu dia bales, kalo udah ss drop ke sini', 'sebutkan tipe pacar mu!', 'snap/post foto pacar/crush', 'teriak gajelas lalu kirim pake vn kesini', 'pap mukamu lalu kirim ke salah satu temanmu', 'kirim fotomu dengan caption, aku anak pungut', 'teriak pake kata kasar sambil vn trus kirim kesini', 'teriak " anjimm gabutt anjimmm " di depan rumah mu', 'ganti nama jadi " BOWO " selama 24 jam', 'Pura pura kerasukan, contoh : kerasukan maung, kerasukan belalang, kerasukan kulkas, dll']
var der = (await fetchJson(`https://pencarikode.xyz/api/dareid?apikey=APIKEY`)).message
var bff = Buffer.alloc(0)
sendButton(from, `_*Dare*_\n\n${der}`, `${tampilUcapan}`, fs.readFileSync("./media/trorda.jpeg"), [ { buttonId: `${prefix}truth`, buttonText: { displayText: "Truth" }, type: 1 }, { buttonId: `${prefix}dare`, buttonText: { displayText: "Dare" }, type: 1} ], { contextInfo: { mentionedJid: [sender] }})
break
case 'tebakkalimat':
simple.updatePresence(from, Presence.recording)
anu = await fetchJson(`https://velgrynd.herokuapp.com/api/tebak/kalimat`, {method: 'get'})
get = `*${anu.result.soal}*`
setTimeout( () => {
simple.sendMessage(from, 'Jawaban: '
+anu.result.jawaban, text, {quoted: ftrol})
}, 60000) // 1000 = 1s,
setTimeout( () => {
simple.sendMessage(from, '_10 Detik lagi..._', text)
}, 50000) // 1000 = 1s,
setTimeout( () => {
simple.sendMessage(from, '_20 Detik lagi..._', text)
}, 40000) // 1000 = 1s,
setTimeout( () => {
simple.sendMessage(from, '_30 Detik lagi..._', text)
}, 30000) // 1000 = 1s,
setTimeout( () => {
simple.sendMessage(from, '_40 Detik lagi..._', text)
}, 20000) // 1000 = 1s,
setTimeout( () => {
simple.sendMessage(from, '_50 Detik lagi..._', text)
}, 10000) // 1000 = 1s,
setTimeout( () => {
simple.sendMessage(from, '_60 Detik lagi..._', text)
}, 2500) // 1000 = 1s,
setTimeout( () => {
simple.sendMessage(from, get, text, {quoted: ftrol})
}, 0) // 1000 = 1s,
break
case 'tebaktebakan':
simple.updatePresence(from, Presence.recording)
anu = await fetchJson(`https://velgrynd.herokuapp.com/api/tebak/tebakan`, {method: 'get'})
get = `*${anu.result.soal}*`
setTimeout( () => {
simple.sendMessage(from, 'Jawaban: '
+anu.result.jawaban, text, {quoted: ftrol}) 
}, 60000) // 1000 = 1s,
setTimeout( () => {
simple.sendMessage(from, '_10 Detik lagi..._', text) 
}, 50000) // 1000 = 1s,
setTimeout( () => {
simple.sendMessage(from, '_20 Detik lagi..._', text) 
}, 40000) // 1000 = 1s,
setTimeout( () => {
simple.sendMessage(from, '_30 Detik lagi..._', text)
}, 30000) // 1000 = 1s,
setTimeout( () => {
simple.sendMessage(from, '_40 Detik lagi..._', text) 
}, 20000) // 1000 = 1s,
setTimeout( () => {
simple.sendMessage(from, '_50 Detik lagi..._', text) 
}, 10000) // 1000 = 1s,
setTimeout( () => {
simple.sendMessage(from, '_60 Detik lagi..._', text)
}, 2500) // 1000 = 1s,
setTimeout( () => {
simple.sendMessage(from, get, text, {quoted: ftrol})
}, 0) // 1000 = 1s,
break
case 'tebaklirik':
simple.updatePresence(from, Presence.recording)
anu = await fetchJson(`https://velgrynd.herokuapp.com/api/tebak/lirik`, {method: 'get'})
get = `*${anu.result.question}*`
setTimeout( () => {
simple.sendMessage(from, 'Jawaban: '
+anu.result.answer, text, {quoted: ftrol}) 
}, 60000) // 1000 = 1s,
setTimeout( () => {
simple.sendMessage(from, '_10 Detik lagi..._', text) 
}, 50000) // 1000 = 1s,
setTimeout( () => {
simple.sendMessage(from, '_20 Detik lagi..._', text) 
}, 40000) // 1000 = 1s,
setTimeout( () => {
simple.sendMessage(from, '_30 Detik lagi..._', text) 
}, 30000) // 1000 = 1s,
setTimeout( () => {
simple.sendMessage(from, '_40 Detik lagi..._', text) 
}, 20000) // 1000 = 1s,
setTimeout( () => {
simple.sendMessage(from, '_50 Detik lagi..._', text) 
}, 10000) // 1000 = 1s,
setTimeout( () => {
simple.sendMessage(from, '_60 Detik lagi..._', text) 
}, 2500) // 1000 = 1s,
setTimeout( () => {
simple.sendMessage(from, get, text, {quoted: ftrol})
}, 0) // 1000 = 1s,
break
case 'tebakkimia':
simple.updatePresence(from, Presence.recording)
anu = await fetchJson(`https://velgrynd.herokuapp.com/api/tebak/kimia`, {method: 'get'})
get = `*${anu.result.nama}*`
setTimeout( () => {
simple.sendMessage(from, 'Jawaban: '
+anu.result.lambang, text, {quoted: ftrol}) 
}, 60000) // 1000 = 1s,
setTimeout( () => {
simple.sendMessage(from, '_10 Detik lagi..._', text) 
}, 50000) // 1000 = 1s,
setTimeout( () => {
simple.sendMessage(from, '_20 Detik lagi..._', text)
}, 40000) // 1000 = 1s,
setTimeout( () => {
simple.sendMessage(from, '_30 Detik lagi..._', text)
}, 30000) // 1000 = 1s,
setTimeout( () => {
simple.sendMessage(from, '_40 Detik lagi..._', text)
}, 20000) // 1000 = 1s,
setTimeout( () => {
simple.sendMessage(from, '_50 Detik lagi..._', text) 
}, 10000) // 1000 = 1s,
setTimeout( () => {
simple.sendMessage(from, '_60 Detik lagi..._', text) 
}, 2500) // 1000 = 1s,
setTimeout( () => {
simple.sendMessage(from, get, text, {quoted: ftrol}) 
}, 0) // 1000 = 1s,
break
case 'tebakjenaka':
simple.updatePresence(from, Presence.recording)
anu = await fetchJson(`https://velgrynd.herokuapp.com/api/tebak/jenaka`, {method: 'get'})
tebakjenaka = `*${anu.result.pertanyaan}*`
setTimeout( () => {
simple.sendMessage(from, 'Jawaban: '
+anu.result.jawaban, text, {quoted: ftrol}) 
}, 60000) // 1000 = 1s,
setTimeout( () => {
simple.sendMessage(from, '_10 Detik lagi..._', text) 
}, 50000) // 1000 = 1s,
setTimeout( () => {
simple.sendMessage(from, '_20 Detik lagi..._', text) 
}, 40000) // 1000 = 1s,
setTimeout( () => {
simple.sendMessage(from, '_30 Detik lagi..._', text) 
}, 30000) // 1000 = 1s,
setTimeout( () => {
simple.sendMessage(from, '_40 Detik lagi..._', text) 
}, 20000) // 1000 = 1s,
setTimeout( () => {
simple.sendMessage(from, '_50 Detik lagi..._', text) 
}, 10000) // 1000 = 1s,
setTimeout( () => {
simple.sendMessage(from, '_60 Detik lagi..._', text) 
}, 2500) // 1000 = 1s,
setTimeout( () => {
simple.sendMessage(from, tebakjenaka, text, {quoted: ftrol}) 
}, 0) // 1000 = 1s,
break
case 'tebakgambar':
simple.updatePresence(from, Presence.recording)
anu = await fetchJson(`https://bx-hunter.herokuapp.com/api/tebakgambar?apikey=Ikyy69`, {method: 'get'})
ngebuff = await getBuffer(anu.img)
tebak = `Jawaban : *${anu.jawaban}*`
setTimeout( () => {
simple.sendMessage(from, tebak, text, {quoted: ftrol})
}, 60000) // 1000 = 1s,
setTimeout( () => {
simple.sendMessage(from, '_10 Detik lagi..._', text) 
}, 50000) // 1000 = 1s,
setTimeout( () => {
simple.sendMessage(from, '_20 Detik lagi..._', text)
}, 40000) // 1000 = 1s,
setTimeout( () => {
simple.sendMessage(from, '_30 Detik lagi..._', text) 
}, 30000) // 1000 = 1s,
setTimeout( () => {
simple.sendMessage(from, '_40 Detik lagi..._', text) 
}, 20000) // 1000 = 1s,
setTimeout( () => {
simple.sendMessage(from, '_50 Detik lagi..._', text) 
}, 10000) // 1000 = 1s,
setTimeout( () => {
simple.sendMessage(from, '_60 Detik lagi..._', text) 
}, 2500) // 1000 = 1s,
setTimeout( () => {
simple.sendMessage(from, ngebuff, image, { caption: '_Tebak bro!!! gak bisa jawab wajib subrek zero yt7 :v_', quoted: ftrol }) 
}, 0) // 1000 = 1s,
break
case 'suit':
simple.updatePresence(from, Presence.recording)
if (!q) return reply(`Kirim perintah ${prefix}suit [pilihan]\nContoh: ${prefix}suit gunting`)
if (!q.match(/batu|gunting|kertas/)) return reply(`Format salah!`)
if (q.match(/batu|gunting|kertas/)) {
await sleep(2000)
var computer = Math.random();
if (computer < 0.34) {
computer = 'batu';
} else if (computer >= 0.34 && computer < 0.67) {
computer = 'gunting';
} else {
computer = 'kertas';
}
if (q == computer) {
reply(`*RESULT*\n\nPertandingan Seri!`)
} else if (q == 'batu') {
if (computer == 'gunting') {
reply(`*RESULT*\n\n• You: Batu\n• Computer: Gunting\n\nCongrats You win!`)
} else {
reply(`*RESULT*\n\n• You: Batu\n• Computer: Kertas\n\nYou lose:(`)
}
} else if (q == 'gunting') {
if (computer == 'batu') {
reply(`*RESULT*\n\n• You: Gunting\n• Computer: Batu\n\nYou lose:(`)
} else {
reply(`*RESULT*\n\n• You: Gunting\n• Computer: Kertas\n\nCongrats You win!`)
}
} else if (q == 'kertas') {
if (computer == 'batu') {
reply(`*RESULT*\n\n• You: Kertas\n• Computer: Batu\n\nCongrats You win!`)
} else {
reply(`*RESULT*\n\n• You: Kertas\n• Computer: Gunting\n\nYou lose:(`)
}
}
}
break

//━━━━━━━━━━━━━━━[ FITUR RANDOM MEME ]━━━━━━━━━━━━━━━━━//

case 'babi':
			membr = []
			const meg =
				groupMembers
			const mge =
				groupMembers
			const ba = meg[Math
				.floor(Math
					.random() *
					meg
					.length)
				]
			const bi = pushname[
				Math.floor(
					Math
					.random() *
					mge
					.length)
				]
			teks =
				`*Yang Paling Babi Disini Adalah :* @${ba.jid.split('@')[0]}`
			membr.push(ba.jid)
			mentions(teks,
				membr, true)
			break
		case 'beban':
			membr = []
			const nge =
				groupMembers
			const tod =
				groupMembers
			const beb = nge[Math
				.floor(Math
					.random() *
					nge
					.length)
				]
			const an = pushname[
				Math.floor(
					Math
					.random() *
					tod
					.length)
				]
			teks =
				`*Yang Paling Beban Disini Adalah :* @${beb.jid.split('@')[0]}`
			membr.push(beb.jid)
			mentions(teks,
				membr, true)
			break

//━━━━━━━━━━━━━━━[ FITUR RANDOM MEME ]━━━━━━━━━━━━━━━━━//

case 'randommeme':
await getBuffer(`https://api.lolhuman.xyz/api/random/meme?apikey=YTRAMLANID`).then((gambar) => {
reply(mess.wait)
simple.sendMessage(from, gambar, image, {quoted: fstatus, caption: 'Dark Ajg', thumbnail: Buffer.alloc(0)})
})
break
case 'randommdarkjoke':
await getBuffer(`https://api.lolhuman.xyz/api/meme/darkjoke?apikey=YTRAMLANID`).then((gambar) => {
reply(mess.wait)
simple.sendMessage(from, gambar, image, {quoted: fstatus, caption: 'Dark Ajg', thumbnail: Buffer.alloc(0)})
})
break
case 'randommemeindo':
await getBuffer(`https://api.lolhuman.xyz/api/meme/memeindo?apikey=YTRAMLANID`).then((gambar) => {
reply(mess.wait)
simple.sendMessage(from, gambar, image, {quoted: fstatus, caption: 'Dark Ajg', thumbnail: Buffer.alloc(0)})
})
break

case "runtime":
case "test":
run = process.uptime();
break	

case 'dinda':
simple.updatePresence(from, Presence.recording)
members_ids = []
for (let mem of groupMembers) {
members_ids.push(mem.jid)
}
vcard2 = 'BEGIN:VCARD\n'
+ 'VERSION:3.0\n'
+ `FN:${dindaname}\n`
+ `ORG: Creator ${dindaname} ;\n`
+ `TEL;type=CELL;type=VOICE;waid=${dinda}:${dinda}\n`
+ 'END:VCARD'.trim()
simple.sendMessage(from, {displayName: `Creator ${dindaname}`, vcard: vcard2}, contact, 
{ quoted: ftrol, 
})
reply('TUHH NOMER DINDA')
break
case 'okh tq bot':
reply('sama-sama kak 😇') 
break


case 'yopki':
simple.updatePresence(from, Presence.recording)
members_ids = []
for (let mem of groupMembers) {
members_ids.push(mem.jid)
}
vcard2 = 'BEGIN:VCARD\n'
+ 'VERSION:3.0\n'
+ `FN:${yopkiname}\n`
+ `ORG: Creator ${yopkiname} ;\n`
+ `TEL;type=CELL;type=VOICE;waid=${yopki}:${yopki}\n`
+ 'END:VCARD'.trim()
simple.sendMessage(from, {displayName: `Creator ${yopkiname}`, vcard: vcard2}, contact, 
{ quoted: ftrol, 
})
reply('TUHH NOMER YOPKI SUNG TARIK KE GRUP BER²')
break

case 'nando':
simple.updatePresence(from, Presence.recording)
members_ids = []
for (let mem of groupMembers) {
members_ids.push(mem.jid)
}
vcard2 = 'BEGIN:VCARD\n'
+ 'VERSION:3.0\n'
+ `FN:${nandoname}\n`
+ `ORG: Creator ${nandoname} ;\n`
+ `TEL;type=CELL;type=VOICE;waid=${nando}:${nando}\n`
+ 'END:VCARD'.trim()
simple.sendMessage(from, {displayName: `Creator ${nandoname}`, vcard: vcard2}, contact, 
{ quoted: ftrol, 
})
reply('TUHH NOMER NANDO SUNG TARIK KE GRUP BER²')
break

case 'start':
simple.updatePresence(from, Presence.recording)
if (!isOwner) return reply('LU BUKAN OWNER GBLOK')
reply('_*Starting*_. . .')	
reply('_*Opened Conected√*_. . .')	
trans = `Note : kalau kamu wa lama atau mod, dan button ga keliatan, langsung aja ketik allmenu`
buttonss = [{buttonId: `${prefix}m`, buttonText: {displayText: 'START▶'}, type: 1},{buttonId: `${prefix}allmenu`, buttonText: {displayText: 'MENU🔥'}, type: 1}]
const buMess = {
    contentText: "_*BOT SUDAH BERHASIL START*_",
    footerText: '🔖 _1.868 >User Aktif_',
    buttons: buttonss,
    headerType: 1
}
reply('_*Done Connected*_. . .')	
await simple.sendMessage(from, buMess, MessageType.buttonsMessage, {quoted: ftrol})
case 'sound9':
simple.updatePresence(from, Presence.recording)
sound = fs.readFileSync('modevn/start.mp3')
simple.sendMessage(from, sound, MessageType.audio, {quoted: ftrol, mimetype: 'audio/mp4', ptt:true})
break



//━━━━━━━━━━━━━━━[ FITUR MAKER ]━━━━━━━━━━━━━━━━━//

case 'tahta':
simple.updatePresence(from, Presence.recording)
if (args.length < 1) return reply('*Teks nya mana?*')
reply(mess.wait)
tahta = args.join(" ")
tahta = await getBuffer(`https://api.zeks.xyz/api/hartatahta?apikey=apivinz&text=${tahta}`)
simple.sendMessage(from,tahta,image,{quoted:ftrol, thumbnail: Buffer.alloc(0)})
break
case 'thunder':
simple.updatePresence(from, Presence.recording)
if (args.length < 1) return reply('*Teks nya mana?*')
reply(mess.wait)
thunder = args.join(" ")
thunder = await getBuffer(`https://api.zeks.xyz/api/thundertext?apikey=apivinz&text=${thunder}`)
simple.sendMessage(from,thunder,image,{quoted:ftrol, thumbnail: Buffer.alloc(0)})
break
case 'blackpink':
simple.updatePresence(from, Presence.recording)
if (args.length < 1) return reply('*Teks nya mana?*')
reply(mess.wait)
bp = args.join(" ")
bp = await getBuffer(`https://api.zeks.xyz/api/logobp?apikey=apivinz&text=${bp}`)
simple.sendMessage(from,bp,image,{quoted:ftrol, thumbnail: Buffer.alloc(0)})
break
case 'marvel':
simple.updatePresence(from, Presence.recording)
if(!q) return reply(`Example : ${prefix}marvel nama|autor`)
m1 = q.split('|')[0]
m2 = q.split('|')[1]
reply(mess.wait)
marvel = await getBuffer(`https://api.zeks.xyz/api/marvellogo?apikey=${zeks}&text1=${m1}&text2=${m2}`)
simple.sendMessage(from,marvel,image,{quoted:ftrol, thumbnail: Buffer.alloc(0)})
break
				case "warrior":
				simple.updatePresence(from, Presence.recording)
				if (args.length < 1) return reply(from, `Teksnya Mana Tod ?\nContoh: ${prefix + command} Z-BOT8`, mek)
			 reply(mess.wait)
				bapakao = body.slice(9)
				sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/flamingtext/warrior?text=${bapakao}&apikey=Ikyy69`)
				break
				case "text3d":
				simple.updatePresence(from, Presence.recording)
				if (args.length < 1) return reply(from, `Teksnya Mana Tod ?\nContoh: ${prefix + command}Z-BOT8`, mek)
				reply(mess.wait)
				bapakao = body.slice(8)
				sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/flamingtext/text3d?text=${bapakao}&apikey=Ikyy69`)
				break
				case "express":
				  simple.updatePresence(from, Presence.recording)
				if (args.length < 1) return reply(from, `Teksnya Mana Tod ?\nContoh: ${prefix + command}Z-BOT8`, mek)
				reply(mess.wait)
				bapakao = body.slice(9)
				sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/flamingtext/express?text=${bapakao}&apikey=Ikyy69`)
				break
				case "spiderman":
				simple.updatePresence(from, Presence.recording)
				if (args.length < 1) return reply(from, `Teksnya Mana Tod ?\nContoh: ${prefix + command}Zero YT7`, mek)
				reply(mess.wait)
				bapakao = body.slice(11)
				sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/flamingtext/spider?text=${bapakao}&apikey=Ikyy69`)
				break
				case "matrix":
                simple.updatePresence(from, Presence.recording)
				if (args.length < 1) return reply(from, `Teksnya Mana Tod ?\nContoh: ${prefix + command}Z-BOT8`, mek)
				reply(mess.wait)
				bapakao = body.slice(8)
				sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/flamingtext/matrix?text=${bapakao}&apikey=Ikyy69`)
				break
				case "vampire":   
				simple.updatePresence(from, Presence.recording)
   if (args.length < 1) return reply(from, `Teksnya Mana Tod ?\nContoh: ${prefix + command}Z-BOT8`, mek)
   reply(mess.wait)
   bapakao = body.slice(9)
   sendMediaURL(from, `https://bx-hunter.herokuapp.com/api/flamingtext/vampire?text=${bapakao}&apikey=Ikyy69`)
   break
   case "remm":
   simple.updatePresence(from, Presence.recording)
   if (args.length < 1) return reply(from, `Teksnya Mana Tod ?\nContoh: ${prefix + command}Z-BOT8`, mek)
   reply(mess.wait)
   bapakao = body.slice(6)
   sendMediaURL(from, `https://hardianto-chan.herokuapp.com/api/bot/gfx5?apikey=hardianto&text=${bapakao}`)
   break
case "lolim":
simple.updatePresence(from, Presence.recording)
   if (args.length < 1) return reply(from, `Teksnya Mana Tod ?\nContoh: ${prefix + command}Z-BOT8`, mek)
   reply(mess.wait)
   bapakao = body.slice(7)
   sendMediaURL(from, `https://hardianto-chan.herokuapp.com/api/bot/gfx2?apikey=hardianto&nama=${bapakao}`)
   break
   case "kaneki":
   simple.updatePresence(from, Presence.recording)
   if (args.length < 1) return reply(from, `Teksnya Mana Tod ?\nContoh: ${prefix + command}Z-BOT8`, mek)
   reply(mess.wait)
   bapakao = body.slice(8)
   sendMediaURL(from, `https://hardianto-chan.herokuapp.com/api/bot/gfx1?apikey=hardianto&nama=${bapakao}`)
   break
   
case "sertiff1":
simple.updatePresence(from, Presence.recording)
        if (args.length < 1) return reply(`Teksnya Mana Tod ?\nContoh: ${prefix + command}Z-BOT8`)
        pll = body.slice(10);
        reply("Loading.....");
        rakz = await getBuffer(
          `https://fdz-app.herokuapp.com/api/maker/sertif-ff-v1?text=${pll}`
        );
        simple.sendMessage(from, rakz, image, {
          quoted: ftrol,
          thumbnail: Buffer.alloc(0),
        });
        break

case 'sound1':
simple.updatePresence(from, Presence.recording)
sound = fs.readFileSync('Audio/dj1.mp3')
simple.sendMessage(from, sound, MessageType.audio, {quoted: ftrol, mimetype: 'audio/mp4', ptt:true})
break
case 'sound2':
simple.updatePresence(from, Presence.recording)
sound = fs.readFileSync('Audio/dj2.mp3')
simple.sendMessage(from, sound, MessageType.audio, {quoted: ftrol, mimetype: 'audio/mp4', ptt:true})
break
case 'sound3':
simple.updatePresence(from, Presence.recording)
sound = fs.readFileSync('Audio/dj3.mp3')
simple.sendMessage(from, sound, MessageType.audio, {quoted: ftrol, mimetype: 'audio/mp4', ptt:true})
break
case 'sound4':
simple.updatePresence(from, Presence.recording)
sound = fs.readFileSync('Audio/dj4.mp3')
simple.sendMessage(from, sound, MessageType.audio, {quoted: ftrol, mimetype: 'audio/mp4', ptt:true})
break
case 'sound5':
simple.updatePresence(from, Presence.recording)
sound = fs.readFileSync('Audio/dj5.mp3')
simple.sendMessage(from, sound, MessageType.audio, {quoted: ftrol, mimetype: 'audio/mp4', ptt:true})
break
case 'sound6':
simple.updatePresence(from, Presence.recording)
sound = fs.readFileSync('Audio/dj6.mp3')
simple.sendMessage(from, sound, MessageType.audio, {quoted: ftrol, mimetype: 'audio/mp4', ptt:true})
break
case 'sound7':
simple.updatePresence(from, Presence.recording)
sound = fs.readFileSync('Audio/dj7.mp3')
simple.sendMessage(from, sound, MessageType.audio, {quoted: ftrol, mimetype: 'audio/mp4', ptt:true})
break
case 'sound8':
simple.updatePresence(from, Presence.recording)
sound = fs.readFileSync('Audio/dj8.mp3')
simple.sendMessage(from, sound, MessageType.audio, {quoted: ftrol, mimetype: 'audio/mp4', ptt:true})
break
case 'sound9':
simple.updatePresence(from, Presence.recording)
sound = fs.readFileSync('Audio/dj9.mp3')
simple.sendMessage(from, sound, MessageType.audio, {quoted: ftrol, mimetype: 'audio/mp4', ptt:true})
break
case 'sound10':
simple.updatePresence(from, Presence.recording)
sound = fs.readFileSync('Audio/dj10.mp3')
simple.sendMessage(from, sound, MessageType.audio, {quoted: ftrol, mimetype: 'audio/mp4', ptt:true})
break
case 'sound11':
simple.updatePresence(from, Presence.recording)
sound = fs.readFileSync('Audio/dj11.mp3')
simple.sendMessage(from, sound, MessageType.audio, {quoted: ftrol, mimetype: 'audio/mp4', ptt:true})
break
case 'sound12':
simple.updatePresence(from, Presence.recording)
sound = fs.readFileSync('Audio/dj12.mp3')
simple.sendMessage(from, sound, MessageType.audio, {quoted: ftrol, mimetype: 'audio/mp4', ptt:true})
break
case 'sound13':
simple.updatePresence(from, Presence.recording)
sound = fs.readFileSync('Audio/dj13.mp3')
simple.sendMessage(from, sound, MessageType.audio, {quoted: ftrol, mimetype: 'audio/mp4', ptt:true})
break
case 'sound14':
simple.updatePresence(from, Presence.recording)
sound = fs.readFileSync('Audio/dj14.mp3')
simple.sendMessage(from, sound, MessageType.audio, {quoted: ftrol, mimetype: 'audio/mp4', ptt:true})
break
case 'sound15':
simple.updatePresence(from, Presence.recording)
sound = fs.readFileSync('Audio/dj15.mp3')
simple.sendMessage(from, sound, MessageType.audio, {quoted: ftrol, mimetype: 'audio/mp4', ptt:true})
break
case 'sound16':
simple.updatePresence(from, Presence.recording)
sound = fs.readFileSync('Audio/dj16.mp3')
simple.sendMessage(from, sound, MessageType.audio, {quoted: ftrol, mimetype: 'audio/mp4', ptt:true})
break
case 'sound17':
simple.updatePresence(from, Presence.recording)
sound = fs.readFileSync('Audio/dj17.mp3')
simple.sendMessage(from, sound, MessageType.audio, {quoted: ftrol, mimetype: 'audio/mp4', ptt:true})
break
case 'sound18':
simple.updatePresence(from, Presence.recording)
sound = fs.readFileSync('Audio/dj18.mp3')
simple.sendMessage(from, sound, MessageType.audio, {quoted: ftrol, mimetype: 'audio/mp4', ptt:true})
break
case 'sound19':
simple.updatePresence(from, Presence.recording)
sound = fs.readFileSync('Audio/dj19.mp3')
simple.sendMessage(from, sound, MessageType.audio, {quoted: ftrol, mimetype: 'audio/mp4', ptt:true})
break
case 'sound20':
simple.updatePresence(from, Presence.recording)
sound = fs.readFileSync('Audio/dj20.mp3')
simple.sendMessage(from, sound, MessageType.audio, {quoted: ftrol, mimetype: 'audio/mp4', ptt:true})
break
case 'sound21':
simple.updatePresence(from, Presence.recording)
sound = fs.readFileSync('Audio/dj21.mp3')
simple.sendMessage(from, sound, MessageType.audio, {quoted: ftrol, mimetype: 'audio/mp4', ptt:true})
break
case 'sound22':
simple.updatePresence(from, Presence.recording)
sound = fs.readFileSync('Audio/dj22.mp3')
simple.sendMessage(from, sound, MessageType.audio, {quoted: ftrol, mimetype: 'audio/mp4', ptt:true})
break
case 'sound23':
simple.updatePresence(from, Presence.recording)
sound = fs.readFileSync('Audio/dj23.mp3')
simple.sendMessage(from, sound, MessageType.audio, {quoted: ftrol, mimetype: 'audio/mp4', ptt:true})
break
case 'sound24':
simple.updatePresence(from, Presence.recording)
sound = fs.readFileSync('Audio/dj24.mp3')
simple.sendMessage(from, sound, MessageType.audio, {quoted: ftrol, mimetype: 'audio/mp4', ptt:true})
break
case 'sound25':
simple.updatePresence(from, Presence.recording)
sound = fs.readFileSync('Audio/dj25.mp3')
simple.sendMessage(from, sound, MessageType.audio, {quoted: ftrol, mimetype: 'audio/mp4', ptt:true})
break


case 'rulesbot':
simple.updatePresence(from, Presence.recording)
ruls =`*Syarat & Ketentuan ${botname}*
Harus di patuhi, Kalau tidak di Banned!

1. Dilarang Toxic Ke Bot. 
2. Dilarang VC/Call Bot.
3. Dilarang Spam Fitur Bot.
4. Dilarang Culik Bot ke Grup.

Kalo sudah dipahami Rules nya
*Silahkan lanjut gunakan ${botname}!*`
but = [{ buttonId: `${prefix}m`, buttonText: { displayText: 'LANJUT KE MENU🍱' }, type: 1 }]
sendButton(from, ruls, faketeks, but, mek)
break

case 'freefire':
simple.updatePresence(from, Presence.recording)
if (args.length == 0) return reply(`Teksnya Mana Tod ?\nContoh : ${prefix + command} Z-BOT8`)
zerr = args.join(" ")
buffer = await getBuffer(`https://api.lolhuman.xyz/api/ephoto1/freefire?apikey=${lolkey}&text=${zerr}`)
simple.sendMessage(from, buffer, image, { quoted: ftrol})
break

case 'runtime':
simple.updatePresence(from, Presence.recording)
teks = `
┏━━⏱ 𝙄𝙉𝙁𝙊
┃❏ Nama User : ${pushname}
┃❏ Nama Bot : ${botname}
┃❏ Nama Owner : ${ownername}
┃❏ Runtime : ${runtime(process.uptime())}
┃❏ Tanggal : ${week} ${date}
┗━━⏱`
	simple.sendMessage(text, {quoted: ftrol})
                  break

case 'cecanrandom':
			ini =
				await fetchJson(
					`https://zeroyt7-api.herokuapp.com/api/asupan/cecan?apikey=ZeroYT7`
					)
			reply(mess.wait)
			buffer =
				await getBuffer(
					ini.result
					.url)
			simple.sendMessage(
				from,
				buffer,
				image, {
					quoted: mek,
					caption: 'Nih Jangan Lupa Follow Ig Gw @ItzElloAja'
				})
			break
case 'cecanvietnam':
			huft =
				await fetchJson(
					`https://zeroyt7-api.herokuapp.com/api/cewe/vietnam?apikey=ZeroYT7`
					)
			reply(mess.wait)
			goo =
				await getBuffer(
					huft.result
					.url)
			simple.sendMessage(
				from, goo,
				image, {
					quoted: mek,
					caption: 'Nih Jangan Lupa Follow Ig Gw @ItzElloAja'
				})
			break
//HERMAN CHANNEL
case 'chiisaihentai':
case 'trap':
case 'blowjob':
case 'yaoi':
case 'ecchi':
case 'ahegao':
case 'hololewd':
case 'sideoppai':
case 'animefeets':
case 'animebooty':
case 'animethighss':
case 'hentaiparadise':
case 'animearmpits':
case 'hentaifemdom':
case 'lewdanimegirls':
case 'biganimetiddies':
case 'animebellybutton':
case 'hentai4everyone':
sticWait(from)
buff = await getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/${command}?apikey=${lolkey}`)
buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️Next`},type:1}]
imageMsg = (await simple.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
buttonsMessage = {footerText:'© Created By ElloAja🗿', imageMessage: imageMsg,
contentText:`Done✓ Follow Ig Gw @itzelloaja`,buttons,headerType:4}
prep = await simple.prepareMessageFromContent(from,{buttonsMessage},{quoted: ftrol})
simple.relayWAMessage(prep)
break
case 'blackpink':
                case 'neon':
                case 'greenneon':
                case 'advanceglow':
                case 'futureneon':
                case 'sandwriting':
                case 'sandsummer':
                case 'sandengraved':
                case 'metaldark':
                case 'neonlight':
                case 'holographic':
                case 'text1917':
                case 'minion':
                case 'deluxesilver':
                case 'newyearcard':
                case 'bloodfrosted':
                case 'halloween':
                case 'jokerlogo':
                case 'fireworksparkle':
                case 'natureleaves':
                case 'bokeh':
                case 'toxic':
                case 'strawberry':
                case 'box3d':
                case 'roadwarning':
                case 'breakwall':
                case 'icecold':
                case 'luxury':
                case 'cloud':
                case 'summersand':
                case 'horrorblood':
                case 'thunder':
                sticWait(from)
if (args.length == 0) return reply(`Teksnya Mana ?\nContoh : ${prefix + command} herman Chanel`)
ini_txt = args.join(" ")
getBuffer(`http://api.lolhuman.xyz/api/textprome/${command}?apikey=${lolkey}&text=${ini_txt}`).then((gambar) => {
simple.sendMessage(from, gambar, image, {thumbnail: Buffer.alloc(0), caption: `Done✓ Follow Ig Gw @itzelloaja`, quoted : ftrol})
})
break
case 'shadow'://Herman Chanel
                case 'cup':
                case 'cup1':
                case 'romance':
                case 'smoke':
                case 'burnpaper':
                case 'lovemessage':
                case 'undergrass':
                case 'love':
                case 'coffe':
                case 'woodheart':
                case 'woodenboard':
                case 'summer3d':
                case 'wolfmetal':
                case 'nature3d':
                case 'underwater':
                case 'golderrose':
                case 'summernature':
                case 'letterleaves':
                case 'glowingneon':
                case 'fallleaves':
                case 'flamming':
                case 'harrypotter':
                case 'carvedwood':
                    if (args.length == 0) return reply(`Teksnya Mana ?\nContoh : ${prefix + command} herman Chanel`)
ini_txt = args.join(" ")
getBuffer(`http://api.lolhuman.xyz/api/photooxy1/${command}?apikey=${lolkey}&text=${ini_txt}`).then((gambar) => {
simple.sendMessage(from, gambar, image, {thumbnail: Buffer.alloc(0), caption: `Done Follow Ig Gw @itzelloaja`, quoted : ftrol})
})
break

//━━━━━━━━━━━━━━━[ AKHIR DARI SEMUA FITUR ]━━━━━━━━━━━━━━━━━//
				
default:
if (isOwner) {
			if (budy.startsWith('>')) {
				console.log(color('[EVAL1]'), color(moment(mek.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`eval return`))
				try {
					let evaled = await eval(budy.slice(2))
					if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
					reply(`${evaled}`)
				} catch (err) {
					reply(`${err}`)
				}
			} else if (budy.startsWith('x')) {
				console.log(color('[EVAL2]'), color(moment(mek.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`eval identy`))
				try {
					return simple.sendMessage(from, JSON.stringify(eval(budy.slice(2)), null, '\t'), text, { quoted: ftrol })
				} catch (err) {
					e = String(err)
					reply(e)
				}
			}
		}
		}
	} catch (e) {
    e = String(e)
    if (!e.includes("this.isZero") && !e.includes("jid")) {
	console.log('Error : %s', color(e, 'red'))
	simple.sendMessage(`6289527031603@s.whatsapp.net`, `─────「 *ALERT-ERROR* 」─────\n\n\`\`\`${e}\`\`\`\n\n────────────────────`, MessageType.text, {contextInfo: { forwardingScore: 508, isForwarded: true, externalAdreply:{title: "Developer Ello ゑ",body:"",previewType:"PHOTO",thumbnail:fs.readFileSync('./media/Wkwk.jpg'),sourceUrl:"https://wa.me/p/6349482305092740/6281220670449"}}})
        }
	// console.log(e)
	}
}


	
    
