const {
    WAConnection,
    MessageType,
    Presence,
    Mimetype,
    GroupSettingChange
} = require('@adiwajshing/baileys')
const fs = require('fs')
const moment = require('moment-timezone')
const { wait, banner, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, start, info, success, close } = require('./lib/functions')
const { color } = require('./lib/color')
const _welkom = JSON.parse(fs.readFileSync('./database/welcome.json'))

require('./simple.js')
nocache('./simple.js', module => console.log(`${module} telah di update!`))

const starts = async (simple = new WAConnection()) => {
    simple.logger.level = 'warn'
    simple.version = [2, 2143, 3]
 //   function _0x3ab7(_0x323e7b,_0xf98192){var _0x19281d=_0x1928();return _0x3ab7=function(_0x3ab720,_0x21b17e){_0x3ab720=_0x3ab720-0x1bc;var _0x34c2b2=_0x19281d[_0x3ab720];return _0x34c2b2;},_0x3ab7(_0x323e7b,_0xf98192);}var _0x3ccdec=_0x3ab7;function _0x1928(){var _0x3e76b1=['31092mOhVGa','60XhHTIy','9209120wvQyih','30KoevrD','4261710hEoKWp','33472oxxMwt','94rPJnNt','551642pNnrId','Opera','3102920jecioL','9197784MfyLqh','3.0','Zero\x20YT7','browserDescription'];_0x1928=function(){return _0x3e76b1;};return _0x1928();}(function(_0x2afb88,_0x3230a3){var _0x5142ea=_0x3ab7,_0x5104b1=_0x2afb88();while(!![]){try{var _0x45924c=parseInt(_0x5142ea(0x1bd))/0x1*(parseInt(_0x5142ea(0x1be))/0x2)+-parseInt(_0x5142ea(0x1bc))/0x3+parseInt(_0x5142ea(0x1c6))/0x4*(-parseInt(_0x5142ea(0x1c7))/0x5)+parseInt(_0x5142ea(0x1c9))/0x6*(parseInt(_0x5142ea(0x1bf))/0x7)+parseInt(_0x5142ea(0x1c1))/0x8+parseInt(_0x5142ea(0x1c2))/0x9+-parseInt(_0x5142ea(0x1c8))/0xa;if(_0x45924c===_0x3230a3)break;else _0x5104b1['push'](_0x5104b1['shift']());}catch(_0x4cf233){_0x5104b1['push'](_0x5104b1['shift']());}}}(_0x1928,0xe60d9),simple[_0x3ccdec(0x1c5)]=[_0x3ccdec(0x1c4),_0x3ccdec(0x1c0),_0x3ccdec(0x1c3)]);
    console.log(banner)
    simple.on('qr', () => {
        console.log(color('[','white'), color('!','red'), color(']','white'), color(' Silahkan Scan Kode Qr Nya...!'))
    })
      const sendButImage = async (from, context, fotext, img, but) => {
    gam = img
    jadinya = await simple.prepareMessage(from, gam, MessageType.image)
    buttonMessagesI = {
      imageMessage: jadinya.message.imageMessage,
      contentText: context,
      footerText: fotext,
      buttons: but,
      headerType: 4
    }
    simple.sendMessage(from, buttonMessagesI, MessageType.buttonsMessage)
  }

    fs.existsSync('./simple.json') && simple.loadAuthInfo('./simple.json')
    simple.on('connecting', () => {
        start('2', 'Menghubungkan...')
    })
    simple.on('open', () => {
        success('2', 'Done.. E-BOTZ Udah Nyambung')
    })
    await simple.connect({timeoutMs: 30*1000})
        fs.writeFileSync('./simple.json', JSON.stringify(simple.base64EncodedAuthInfo(), null, '\t'))

    simple.on('chat-update', async (message) => {
        require('./simple.js')(simple, message, _welkom)
    })
simple.on("group-participants-update", async (anu) => {

    const isWelkom = _welkom.includes(anu.jid)
    try {
      groupMet = await simple.groupMetadata(anu.jid)
      groupMembers = groupMet.participants
      groupAdmins = getGroupAdmins(groupMembers)
      mem = anu.participants[0]

      console.log(anu)
      try {
        pp_user = await simple.getProfilePicture(mem)
      } catch (e) {
        pp_user = "https://telegra.ph/file/c9dfa715c26518201f478.jpg"
      }
      try {
        pp_grup = await simple.getProfilePicture(anu.jid)
      } catch (e) {
        pp_grup =
          "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60"
      }
      if (anu.action == "add" && mem.includes(simple.user.jid)) {
        simple.sendMessage(anu.jid, "Halo!.. saya E BOT ,Thx Dah Masukin Grup:) Btw Udah Izin Ama Owner Ku? Kalau Udah Selamat Menggunakan E-BOTZ ketik !menu🗿.   .", "conversation")
      }
      if (!isWelkom) return
      if (anu.action == "add" && !mem.includes(simple.user.jid)) {
      	const thu = await simple.getStatus(anu.participants[0], MessageType.text)
        mdata = await simple.groupMetadata(anu.jid)
        memeg = mdata.participants.length
        num = anu.participants[0]
        let v = simple.contacts[num] || { notify: num.replace(/@.+/, "") }
        anu_user = v.vname || v.notify || num.split("@")[0]
        time_wel = moment.tz("Asia/Jakarta").format("HH:mm")
        wel = `「 *ЩΞLCФMΞ* 」\n\n*𝙃𝙖𝙡𝙡𝙤...*  @${anu_user} 𝙒𝙚𝙡𝙘𝙤𝙢𝙚 𝙄𝙣  ${mdata.subject} \n\n◯ *Name* : @${anu_user}\n◯ *Bio User* : ${thu.status}\n◯ *Total Member* : ${groupMembers.length}\n◯ *Total Admin* : ${groupAdmins.length}\n◯ *Time* : ${time_wel} WIB\n\n𝘿𝙀𝙎𝘾 𝙂𝙍𝙐𝙋 : \n${mdata.desc} \n\n ✨𝑴𝑶𝑮𝑨 𝑩𝑬𝑻𝑨𝑯✨`
        buff = await getBuffer(
          `http://hadi-api.herokuapp.com/api/card/welcome?nama=${anu_user}&descriminator=${groupMembers.length
          }&memcount=${memeg}&gcname=${encodeURI(
            mdata.subject
          )}&pp=${pp_user}&bg=https://i.postimg.cc/7ZHRj5wf/20220103-101336.png`
        )

        but = [
          { buttonId: 'add', buttonText: { displayText: 'Welcome Member Baru' }, type: 1 }
        ]
        sendButImage(mdata.id, wel, "Welcome Room", buff, but)
      }
      if (!isWelkom) return
      if (anu.action == "remove" && !mem.includes(simple.user.jid)) {
        mdata = await simple.groupMetadata(anu.jid)
        num = anu.participants[0]
        let w = simple.contacts[num] || { notify: num.replace(/@.+/, "") }
        anu_user = w.vname || w.notify || num.split("@")[0]
        time_wel = moment.tz("Asia/Jakarta").format("HH:mm")
        memeg = mdata.participants.length
        out = `「 *GФФÐБЏΞ*」\n\n 𝑺𝒊 𝑩𝒆𝒃𝒂𝒏 𝒌𝒆𝒍𝒖𝒂𝒓 𝑼𝒈𝒂𝒂\n👋𝑺𝒂𝒚𝒐𝒏𝒂𝒓𝒂 @${anu_user} 𝑺𝒆𝒎𝒐𝒈𝒂 𝑻𝒆𝒏𝒂𝒏𝒈 𝑫𝒊 𝑨𝒍𝒂𝒎 𝑺𝒂𝒏𝒂 \n\n◯ *Total Member* : ${groupMembers.length}\n◯ *Total Admin* : ${groupAdmins.length}\n◯ *Time* : ${time_wel} WIB\n`
        buff = await getBuffer(
          `http://hadi-api.herokuapp.com/api/card/goodbye?nama=${anu_user}&descriminator=${groupMembers.length
          }&memcount=${memeg}&gcname=${encodeURI(
            mdata.subject
          )}&pp=${pp_user}&bg=https://i.postimg.cc/7ZHRj5wf/20220103-101336.png`
        )

        but = [
          { buttonId: 'remove', buttonText: { displayText: 'Selamat Tinggal' }, type: 1 }
        ]
        sendButImage(mdata.id, out, "Leaving Room", buff, but)
      }
      if (anu.action == "promote") {
        const mdata = await simple.groupMetadata(anu.jid)
        anu_user = simple.contacts[mem]
        num = anu.participants[0]
        try {
          ppimg = await simple.getProfilePicture(
            `${anu.participants[0].split("@")[0]}@c.us`
          )
        } catch {
          ppimg =
            "https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg"
        }
        let buff = await getBuffer(ppimg)
        teks = `@${num.split("@")[0]} Telah dipromote`
        simple.sendMessage(mdata.id, teks, MessageType.text)
      }

      if (anu.action == "demote") {
        anu_user = simple.contacts[mem]
        num = anu.participants[0]
        const mdata = await simple.groupMetadata(anu.jid)
        try {
          ppimg = await simple.getProfilePicture(
            `${anu.participants[0].split("@")[0]}@c.us`
          )
        } catch {
          ppimg =
            "https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg"
        }

        let buff = await getBuffer(
          `https://gatauajg.yogipw.repl.co/api/demote?name=${anu_user.notify}&msg=selamat%20menjadi%20admin&mem=5&picurl=${ppimg}&bgurl=https://cdn.discordapp.com/attachments/819995259261288475/835055559941292032/style.jpg`
        )
        teks = `@${num.split("@")[0]} Telah didemote`
        simple.sendMessage(mdata.id, teks, MessageType.text)
      }
    } catch (e) {
      console.log("Error : %s", color(e, "red"))
    }

  })
}

/**
 * Uncache if there is file change
 * @param {string} module Module name or path
 * @param {function} cb <optional> 
 */
function nocache(module, cb = () => { }) {
    console.log('Module', `'${module}'`, 'sekarang sedang diawasi untuk perubahan')
    fs.watchFile(require.resolve(module), async () => {
        await uncache(require.resolve(module))
        cb(module)
    })
}

/**
 * Uncache a module
 * @param {string} module Module name or path
 */
function uncache(module = '.') {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(module)]
            resolve()
        } catch (e) {
            reject(e)
        }
    })
}

starts()
