//==============================+========\\
const {
WAMessageProto,
MessageOptions,
WAFlag,
WANode,
WAMetric,
ChatModification,
DisconectReason,
MessageTypeProto,
  WAConnection,
WALocationMessage,
ReconnectMode,
WAContextInfo,
proto,
ProxyAgent,
waChatKey,
  MimetypeMap,
  MediaPathMap,
  WAContactMessage,
  WAContactsArrayMessage,
  WAGroupInviteMessage,
  WATextMessage,
  WAMessageContent, 
  WAMessage, 
  BaileysError, 
  WA_MESSAGE_STATUS_TYPE, 
  MediaConnInfo, 
  URL_REGEX, 
  WAUrlInfo, 
  WA_DEFAULT_EPHEMERAL, 
  WAMediaUpload,
mentionedJid,
processTime,
Browser,
  MessageType,
  Presence,
  WA_MESSAGE_STUB_TYPES,
  Mimetype,
relayWAMessage,
  GroupSettingChange
} = require('@adiwajshing/baileys')
//=======================================\\
const { color, bgcolor } = require('./~ Infinity Datab ~/funções/color')
const { wait, simih, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./~ Infinity Datab ~/funções/functions')
const { fetchJson, fetchText } = require('./~ Infinity Datab ~/funções/fetcher')
const { recognize } = require('./~ Infinity Datab ~/funções/ocr')
const fs = require('fs');
const os = require('os');
const chalk = require('chalk');
const yts = require('yt-search');
const crypto = require('crypto');
const util = require('util');
const axios = require('axios');
const encodeUrl = require('encodeurl');
const linkfy = require('linkifyjs');
const request = require('request');
const cheerio = require('cheerio');
const imgbb = require('imgbb-uploader');
const googleImage = require('g-i-s');
const googleIt = require('google-it');
const imageToBase64 = require('image-to-base64');
const moment = require('moment-timezone')
const { exec } = require('child_process')
const fetch = require('node-fetch')
const ffmpeg = require('fluent-ffmpeg')
const { removeBackgroundFromImageFile } = require('remove.bg')
const lolis = require('lolis.life')
const loli = new lolis()
const welkom = JSON.parse(fs.readFileSync('./~ Infinity Datab ~/funções/welkom.json'))
const nsfw = JSON.parse(fs.readFileSync('./~ Infinity Datab ~/funções/nsfw.json'))
const samih = JSON.parse(fs.readFileSync('./~ Infinity Datab ~/funções/simi.json'))
const simple = require('./~ Infinity Datab ~/funções/simple.js');
blocked = []

//=======================================\\
//      ❗ ❗ ❗ ❗  //Antis\\   ❗ ❗ ❗ ❗      \\
//=========================================\\

const antifake = JSON.parse(fs.readFileSync('./~ Infinity Datab ~/funções/antis/antifake.json'))

const antilink = JSON.parse(fs.readFileSync('./~ Infinity Datab ~/funções/antis/antilink.json'))

//=======================================\\
//      ❗ ❗ ❗ ❗  //Ping\\   ❗ ❗ ❗ ❗       \\
//=========================================\\

function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);

  //return pad(hours) + ':' + pad(minutes) + ':' + pad(seconds)
  return `${pad(hours)} Jam ${pad(minutes)} Menit ${pad(seconds)} Detik`
}

//=======================================\\
// ❗ ❗ ❗ ❗  //Conexao Do Bot \\  ❗ ❗ ❗ ❗  \\
//=========================================\\

async function starts() {
const lz = new WAConnection()
lz.logger.level = 'warn'
console.log(banner.string)
lz.on('qr', () => {
console.log(color('[','white'), color('!','red'), color(']','white'), color('Escaneie o Qr Code Acima Para Iniciar o Bot'))
})

fs.existsSync('./qrcode.json') && lz.loadAuthInfo('./qrcode.json')
lz.on('connecting', () => {
start('2', 'Conectando Aguarde...')
})
lz.on('open', () => {
success('2', '🎃 Conectado Com Sucesso ✡️')
})

await lz.connect({
  timeoutMs: 30 * 1000
  })
  
  fs.writeFileSync('./qrcode.json', JSON.stringify(lz.base64EncodedAuthInfo(), null, '\t'))
  lz.on('close', () => {
  rc = 'QUE INTERNET DA XUXA EM AMIGO KKKK, A CONEXÃO CAIU...'
  console.log(color(rc,'red'))
  })

//=======================================\\
// ❗ ❗ ❗  //ANTI FAKE\\  ❗ ❗ ❗  \\
//=========================================\\ 

lz.on('group-participants-update', async (anu) => {
if(antifake.includes(anu.jid)) {
const mdata = await lz.groupMetadata(anu.jid)
if (anu.action == 'add'){
num = anu.participants[0]
if(!num.split('@')[0].startsWith(55)) {
lz.sendMessage(mdata.id, ' ⛹️⛹️numero fake aq nao!👋🏌️', MessageType.text)
setTimeout(async function () {
lz.groupRemove(mdata.id, [num])
}, 1000)
    }
}
}


//=======================================\\
// ❗ ❗ ❗  //Bem Vindo\\  ❗ ❗ ❗  \\
//=========================================\\ 

if (!welkom.includes(anu.jid)) return
try {
const mdata = await lz.groupMetadata(anu.jid)
console.log(anu)
if (anu.action == 'add') {
num = anu.participants[0]
try {
ppimg = await lz.getProfilePicture(`${anu.participants[0].split('@')[0]}@c.us`)
} catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
teks = `𝐎𝐩𝐚 @${num.split('@')[0]}\n𝐁𝐞𝐦 𝐯𝐢𝐧𝐝𝐨 𝐚𝐨 𝐠𝐫𝐮𝐩𝐨 *${mdata.subject}*\n\n𝐥𝐞𝐢𝐚 𝐚𝐬 𝐫𝐞𝐠𝐫𝐚𝐬 𝐝𝐨 𝐠𝐫𝐮𝐩𝐨 𝐩𝐚𝐫𝐚 𝐧𝐚𝐨 𝐬𝐞𝐫 𝐛𝐚𝐧𝐢𝐝𝐨❤️`
let buff = await getBuffer(ppimg)
lz.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
lz.sendMessage(from, tujuh, MessageType.audio, {quoted: info, mimetype: 'audio/mp4', ptt:true})
} else if (anu.action == 'remove') {
num = anu.participants[0]
try {
ppimg = await lz.getProfilePicture(`${num.split('@')[0]}@c.us`)
} catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
teks = `ඞ   。　    .    •
    •  @${num.split('@')[0]} was E j e c t e d
               1 impostor restante   。　.
    　 　　。　　 　　　　ﾟ　　　.　      　　
𝐁𝐨𝐢 𝐛𝐨𝐢 𝐛𝐨𝐢, 𝐛𝐨𝐢 𝐝𝐚 𝐜𝐚𝐫𝐚 𝐩𝐫𝐞𝐭𝐚 𝐪𝐮𝐞𝐦 𝐬𝐚𝐢𝐮 𝐝𝐨 𝐠𝐫𝐮𝐩𝐨 𝐦𝐚𝐦𝐚 𝐚 𝐩𝐢𝐤𝐚 𝐝𝐨 𝐜𝐚𝐩𝐞𝐭𝐚😂👋`
        
let buff = await getBuffer(ppimg)
lz.sendMessage(mdata.id, buff, MessageType.image, {caption: teks, contextInfo: {"mentionedJid": [num]}})
}
} catch (e) {
console.log('Error : %s', color(e, 'red'))
}
})

lz.on('CB:Blocklist', json => {
            if (blocked.length > 2) return
    for (let i of json[1].blocklist) {
    blocked.push(i.replace('c.us','s.whatsapp.net'))
    }
})

//=======================================\\
//     ❗ ❗ ❗  //Chat Update\\  ❗ ❗ ❗      \\
//=========================================\\ 

lz.on('chat-update', async (info) => {
	try {
	if (!info.hasNewMessage) return
	info = info.messages.all()[0]
	if (!info.message) return
	info.message = (Object.keys(info.message)[0] === 'ephemeralMessage') ? info.message.ephemeralMessage.message : info.message
	if (info.key && info.key.remoteJid == 'status@broadcast') return
	if (!info.message) return
	m = simple.smsg(lz, info)
	
	global.prefix
	
	global.blocked
	
	const content = JSON.stringify(info.message)
	const speed = require('performance-now');
	const from = info.key.remoteJid
	const type = Object.keys(info.message)[0]
	const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product, contactsArray } = MessageType
	
const { MsgsDeEspera } = require('./~ Infinity Datab ~/funções/wait.js');
var aguarde = MsgsDeEspera[Math.floor(Math.random() * MsgsDeEspera.length)] 

//=======================================\\
//       ❗ ❗ ❗ ❗  //Msgs\\  ❗ ❗ ❗ ❗       \\
//=========================================\\

enviar = {
espere: `${aguarde}`,
success: '✅ Esta Ai Mano :) ✅️',

apenas: {
grupos: '❰ ❌ Esse Comando So Pode Ser Usado Em Grupos Mano ❌ ❱',
premium: '❰ ❌ Esse Comando So Pode Ser Usado Por Usuarios Premium Do Bot Mano ❌ ❱',
dono: `❰ ❌ Esse Comando So Pode Ser Usado Pelo Meu Dono Mano❌ ❱`,

bad: {
AdmBot: '❰ ❌ So Posso Executar Esse Comando Se Eu For Adm mano ❌ ❱',
adm: '❰ ❌ Ponha-se No Seu Lugar Membro Comum! Esse Comando e So Pra Adms ❌ ❱',
link: '❰ ❌ Link inválido ❌ ❱',
registro: '❰ ❌ Você Não Esta Registrado(a)! Use: .rg Para Se Registrar ❌ ❱',
}
}
}

//=======================================\\
//   ❗ ❗ ❗ ❗  //Exportaçoes\\  ❗ ❗ ❗ ❗    \\
//=========================================\\

NotRG = '❰ ❌ Você Não Esta Registrado(a)! Use: .rg Para Se Registrar ❌ ❱'

const dono = JSON.parse(fs.readFileSync('./dono/configs.json'))

const logoslink = JSON.parse(fs.readFileSync('./~ Infinity Datab ~/logos/logos.json'))

const registro = JSON.parse(fs.readFileSync('./~ Infinity Datab ~/funções/rg.json'));

const prefix = dono.prefix

NomeDoBot = dono.NomeDoBot

NickDoDono = dono.NickDoDono

NumeroDoDono = dono.NumeroDoDono

logo = logoslink.logo

function _0x4bdf(_0x582226,_0x13105a){var _0x1d5385=_0x1d53();return _0x4bdf=function(_0x4bdf20,_0x40085a){_0x4bdf20=_0x4bdf20-0xf2;var _0x177dc2=_0x1d5385[_0x4bdf20];return _0x177dc2;},_0x4bdf(_0x582226,_0x13105a);}var _0x198efd=_0x4bdf;function _0x1d53(){var _0x2148f1=['1087272GufyIt','ale652','1058082sJAkWu','74619KWfExj','20RzRwoW','650776gjncdC','20ehewlr','128868GbZFBN','224358TnlCzS','6112BHhSXK','21ueSXbt','539ebjQSl','5eumowx'];_0x1d53=function(){return _0x2148f1;};return _0x1d53();}(function(_0x54b6c1,_0x2ad6b4){var _0x131b85=_0x4bdf,_0x1a1d6d=_0x54b6c1();while(!![]){try{var _0x1290fa=parseInt(_0x131b85(0xf2))/0x1*(-parseInt(_0x131b85(0xfc))/0x2)+-parseInt(_0x131b85(0xfe))/0x3+-parseInt(_0x131b85(0xf6))/0x4+-parseInt(_0x131b85(0xf5))/0x5*(parseInt(_0x131b85(0xf8))/0x6)+parseInt(_0x131b85(0xf3))/0x7*(parseInt(_0x131b85(0xfb))/0x8)+-parseInt(_0x131b85(0xf9))/0x9*(parseInt(_0x131b85(0xfa))/0xa)+-parseInt(_0x131b85(0xf4))/0xb*(-parseInt(_0x131b85(0xfd))/0xc);if(_0x1290fa===_0x2ad6b4)break;else _0x1a1d6d['push'](_0x1a1d6d['shift']());}catch(_0x749888){_0x1a1d6d['push'](_0x1a1d6d['shift']());}}}(_0x1d53,0x2967f),ExApiKey=_0x198efd(0xf7));

//=======================================\\
// ❗ ❗ ❗  //Algumas Definiçoes\\  ❗ ❗ ❗   \\
//=========================================\\

//Botoes\\
const sendButImage = async(id, text1, desc1, gam1, but = [], options = {}) => {
kma = gam1
mhan = await lz.prepareMessage(from, kma, image, {quoted:selo})
const buttonMessages = {
imageMessage: mhan.message.imageMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 4
}
lz.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}

const sendBut = (id, text1, desc1, but = [], options = {}) => {
const buttonMessage = {
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 1
}
lz.sendMessage(id, buttonMessage, MessageType.buttonsMessage, options)
}

const sendFileFromUrl = async(link, type, options) => {
	hasil = await getBuffer(link)
	await lz.sendMessage(from, hasil, type, options).catch(e => {
	fetch(link).then((hasil) => {
	lz.sendMessage(from, hasil, type, options).catch(e => {
	lz.sendMessage(from, { url : link }, type, options).catch(e => {
	reply('[ ! ] Erro ao baixar mídia')
	console.log(e)
	})
	})
	})
	})
	}	
	
  (function(_0x193dfc,_0x2ad78f){var _0x1c99a9=_0x5881,_0x42c37b=_0x193dfc();while(!![]){try{var _0x31e10b=-parseInt(_0x1c99a9(0x107))/0x1+-parseInt(_0x1c99a9(0x10a))/0x2*(-parseInt(_0x1c99a9(0x10b))/0x3)+-parseInt(_0x1c99a9(0x10c))/0x4*(-parseInt(_0x1c99a9(0x103))/0x5)+parseInt(_0x1c99a9(0x105))/0x6+parseInt(_0x1c99a9(0x104))/0x7+-parseInt(_0x1c99a9(0x106))/0x8*(parseInt(_0x1c99a9(0x108))/0x9)+-parseInt(_0x1c99a9(0x109))/0xa;if(_0x31e10b===_0x2ad78f)break;else _0x42c37b['push'](_0x42c37b['shift']());}catch(_0x31f627){_0x42c37b['push'](_0x42c37b['shift']());}}}(_0x4330,0x7faea),ExApiKey='ale652');function _0x5881(_0x4f3f35,_0x1ed8e3){var _0x43305f=_0x4330();return _0x5881=function(_0x588156,_0x5af712){_0x588156=_0x588156-0x103;var _0x4b013f=_0x43305f[_0x588156];return _0x4b013f;},_0x5881(_0x4f3f35,_0x1ed8e3);}function _0x4330(){var _0x26defd=['2xTchdz','2690202AxUfjO','41464ajQLBU','315GzpnHj','6323863jpyoBE','2893206XInKcO','327920edqQMt','862059ulPvTq','54JtzDrT','13044170MrEpeF'];_0x4330=function(){return _0x26defd;};return _0x4330();}

//Grupos\\

const botNumber = lz.user.jid
const isGroup = from.endsWith('@g.us')
const sender = isGroup ? info.participant : info.key.remoteJid
const groupMetadata = isGroup ? await lz.groupMetadata(from) : ''
const groupName = isGroup ? groupMetadata.subject : ''
const groupId = isGroup ? groupMetadata.jid : ''
const groupMembers = isGroup ? groupMetadata.participants : ''
const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
const isGroupAdmins = groupAdmins.includes(sender) || false
const isWelkom = isGroup ? welkom.includes(from) : false
const isNsfw = isGroup ? nsfw.includes(from) : false
const isAntiFake = isGroup ? antifake.includes(from) : false
const isSimi = isGroup ? samih.includes(from) : false

const isAntiLink = isGroup ? antilink.includes(from) : false

//VISUALIZAR AS MENSAGENS\\
lz.chatRead(from)

//Dono\\
const ownerNumber = [`${NumeroDoDono}@s.whatsapp.net`]
const isOwner = ownerNumber.includes(sender)

//Premium\\


//Registro\\
const isRG = registro.includes(sender)

//Outras\\
global.prefix
body = (type === 'conversation' && info.message.conversation.startsWith(prefix)) ? info.message.conversation : (type == 'imageMessage') && info.message[type].caption.startsWith(prefix) ? info.message[type].caption : (type == 'videoMessage') && info.message[type].caption.startsWith(prefix) ? info.message[type].caption : (type == 'extendedTextMessage') && info.message[type].text.startsWith(prefix) ? info.message[type].text : (type == 'listResponseMessage') && info.message[type].singleSelectReply.selectedRowId ? info.message[type].singleSelectReply.selectedRowId : (type == 'buttonsResponseMessage') && info.message[type].selectedButtonId ? info.message[type].selectedButtonId : info.message[type].selectedButtonId && ((info.message[type].fileSha256.toString('base64')) !== null && (info.message[type].fileSha256.toString('base64')) !== undefined) ? (info.message[type].fileSha256.toString('base64')) : ""
bady = (type === 'conversation') ? info.message.conversation : (type == 'imageMessage') ? info.message.imageMessage.caption : (type == 'videoMessage') ? info.message.videoMessage.caption : (type == 'extendedTextMessage') ? info.message.extendedTextMessage.text : (info.message.listResponseMessage && info.message.listResponseMessage.singleSelectReply.selectedRowId) ? info.message.listResponseMessage.singleSelectReply.selectedRowId: ''
budy = (type === 'conversation') ? info.message.conversation : (type === 'extendedTextMessage') ? info.message.extendedTextMessage.text : ''

button = (type == 'buttonsResponseMessage') ? info.message.buttonsResponseMessage.selectedDisplayText : ''
button = (type == 'buttonsResponseMessage') ? info.message.buttonsResponseMessage.selectedButtonId : ''
listMessage = (type == 'listResponseMessage') ? info.message.listResponseMessage.title : ''

const hora = moment.tz('America/Sao_Paulo').format('HH:mm:ss')
const data = moment.tz('America/Sao_Paulo').format('DD/MM/YY');



const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
const args = body.trim().split(/ +/).slice(1)
const q = args.join(" ")
const isCmd = body.startsWith(prefix)

//=======================================\\
//     ❗ ❗ ❗  //Consts Menus\\  ❗ ❗ ❗     \\
//=========================================\\

const { menuprincipal } = require('./menus/menu.js');
		
const { gitdobot } = require('./dono/gitdobot.js');

//=======================================\\
const isUrl = (url) => {
    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
}
const reply = (teks) => {
lz.sendMessage(from, teks, text, {quoted: selo2})
}
const sendMess = (hehe, teks) => {
lz.sendMessage(hehe, teks, text)
}
const mentions = (teks, memberr, id) => {
(id == null || id == undefined || id == false) ? lz.sendMessage(from, teks.trim(), extendedText, {contextInfo: {"mentionedJid": memberr}}) : lz.sendMessage(from, teks.trim(), extendedText, {quoted: info, contextInfo: {"mentionedJid": memberr}})
}
//=======================================\\

colors = ['red','white','black','blue','yellow','green']
const isMedia = (type === 'imageMessage' || type === 'videoMessage')
const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')

let pushname = lz.contacts[from] != undefined ? lz.contacts[from].vname || lz.contacts[from].notify : undefined
if (pushname != undefined) { } else { pushname = sender.split('@')[0]}

// Selos [Verificados] \\

const selo = {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})},message: { "extendedTextMessage": {"text": `${NomeDoBot}`,"title": "hmm" }}}

const selo2 = { key: { participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: `6283136505591-1614953337@g.us` } : {}) }, message: { 'contactMessage': { 'displayName': `${pushname}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;LZ MODS,;;;\nFN:LZ MODS,\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': fs.readFileSync(`./~ Infinity Datab ~/logos/logo.jpg`), thumbnail:fs.readFileSync(`./~ Infinity Datab ~/logos/logo.jpg`),sendEphemeral: true}}}

//COMANDOS\\
if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mComando\x1b[1;37m]', color(prefix + command), 'Do Lek', color(pushname), 'args :', color(args.length))
if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mComando\x1b[1;37m]', color(prefix + command), 'Do Lek', color(pushname), color(sender.split('@')[0]), 'No Grupo', color(groupName), 'args :', color(args.length))


if(isAntiLink) { 
  if(!isBotGroupAdmins) return reply('cade meu adm? assim n consigo remover os lek')
  if(budy.includes("https://") || (budy.includes(".net") || (budy.includes(".com" ) || (budy.includes("//s.kwai.app/") || (budy.includes("//vm.tiktok") || (budy.includes("www.") || (budy.includes("chat.whatsapp") || (budy.includes(".xml") || (budy.includes("youtube.com") || (budy.includes("//t.me/") || (budy.includes(".css")))))))))))) {
  linkgpp = await lz.groupInviteCode(from)
  if(budy.match(`${linkgpp}`)) return reply('Link detectado! porem foi averiguado que eo link do nosso grupo entao o ban sera anulado ')  
  if (!isGroup) return
  if (isGroupAdmins) return reply(`link detectado! porem foi averiguado que voce e adm entao o ban sera anulado`)
  lz.updatePresence(from, Presence.composing)
  var Kic = `${sender.split("@")[0]}@s.whatsapp.net`
  setTimeout( () => {
  }, 1100)
  setTimeout( () => {
  lz.groupRemove(from, [Kic]).catch((e) => {reply(`ERRO ${e}`)}) 
  }, 1000)
  }
  }

var _0x3355fa=_0x2af2;(function(_0x1064ce,_0x5c7fa6){var _0x59842e=_0x2af2,_0x535efb=_0x1064ce();while(!![]){try{var _0x379353=parseInt(_0x59842e(0x193))/0x1*(-parseInt(_0x59842e(0x18f))/0x2)+-parseInt(_0x59842e(0x191))/0x3+parseInt(_0x59842e(0x195))/0x4*(parseInt(_0x59842e(0x18e))/0x5)+parseInt(_0x59842e(0x192))/0x6*(-parseInt(_0x59842e(0x199))/0x7)+parseInt(_0x59842e(0x196))/0x8*(parseInt(_0x59842e(0x197))/0x9)+-parseInt(_0x59842e(0x198))/0xa+parseInt(_0x59842e(0x194))/0xb*(parseInt(_0x59842e(0x18d))/0xc);if(_0x379353===_0x5c7fa6)break;else _0x535efb['push'](_0x535efb['shift']());}catch(_0x440c01){_0x535efb['push'](_0x535efb['shift']());}}}(_0x5da1,0xf132a),ExApiKey=_0x3355fa(0x190));function _0x2af2(_0x20f9fd,_0x4296c4){var _0x5da189=_0x5da1();return _0x2af2=function(_0x2af25c,_0x5c4b49){_0x2af25c=_0x2af25c-0x18d;var _0x2daf5b=_0x5da189[_0x2af25c];return _0x2daf5b;},_0x2af2(_0x20f9fd,_0x4296c4);}function _0x5da1(){var _0x144299=['6GWLrRc','ale652','5749674sTYnjh','642zmzPkd','325177ipEJyU','781JWvtiw','2940nzHxcB','10888LEpKoC','3033TQmOTN','17492330niIbBI','120127cGoAtb','1136676bhrPeo','1915eCCFxB'];_0x5da1=function(){return _0x144299;};return _0x5da1();}

switch(command) {

//=======================================\\
// ❗ ❗ ❗  //Comandos Com Prefixo\\  ❗ ❗ ❗ \\
//=========================================\\

// M e n u s \\

case 'help':
case 'menu':
if (!isRG) return reply(`${NotRG}`)
let fotomenu = fs.readFileSync('./~ Infinity Datab ~/logos/logo.jpg')  
await lz.sendMessage(from, fotomenu, image, {quoted: selo2, caption: menuprincipal(prefix, pushname, hora, data, NomeDoBot, NickDoDono, NumeroDoDono)})
break
		
case 'git':
case 'gitdobot':
if (!isRG) return reply(`${NotRG}`)
let fotogt = fs.readFileSync('./~ Infinity Datab ~/logos/logo.jpg')  
await lz.sendMessage(from, fotogt, image, {quoted: selo2, caption: gitdobot(prefix)})
break

case 'lzmodsapi':
case 'lzapi':
reply("https://lzmods-api.herokuapp.com/")
break

case 'rg':
case 'registro':  
case 'registrar':  
registro.push(`${sender}`)
fs.writeFileSync('./~ Infinity Datab ~/funções/rg.json', JSON.stringify(registro))
sendBut(from,`
☑️ Usuário Registrado Com Sucesso ☑️

Espero Que Goste Do Bot :)`,`${NomeDoBot}`,
[
            {              
              buttonId: `.menu`,
              buttonText: {
                displayText:  `💠 ᎷᎬΝႮ 💠`,
              },
              type: 1
            },
          ]);
break

// L o g o s \\

case 'pornhublogo':
if (!isRG) return reply(`${NotRG}`)
if (args.length < 1) return reply('Cade o Nome ._.?')
teks = args.join(' ')
teks1 = teks.split("/")[0];
teks2 = teks.split("/")[1];
reply(enviar.espere)
gradient = await fetchJson(`https://lzmods-api.herokuapp.com/textpro/pornhub-logo?texto1=${teks1}&texto2=${teks2}&apikey=lzmods`)
result = await getBuffer(gradient.resultado)
await lz.sendMessage(from, result, image, {quoted: selo, caption: (enviar.sucess)})
break

case 'glitchlogo':
if (!isRG) return reply(`${NotRG}`)
if (args.length < 1) return reply('Cade o Nome ._.?')
teks = args.join(' ')
teks11 = teks.split("/")[0];
teks22 = teks.split("/")[1];
reply(enviar.espere)
gradient = await fetchJson(`https://lzmods-api.herokuapp.com/textpro/glitch2-logo?texto1=${teks11}&texto2=${teks22}&apikey=lzmods`)
result = await getBuffer(gradient.resultado)
await lz.sendMessage(from, result, image, {quoted: selo, caption: (enviar.sucess)})
break

case 'harrypoterlogo':
if (!isRG) return reply(`${NotRG}`)
if (args.length < 1) return reply('Cade o Nome ._.?')
reply(enviar.espere)
gradient = await fetchJson(`https://lzmods-api.herokuapp.com/textpro/harrypotter-logo?texto=${q}&apikey=lzmods`)
result = await getBuffer(gradient.resultado)
await lz.sendMessage(from, result, image, {quoted: selo, caption: (enviar.sucess)})
break

case 'neon3d':
if (!isRG) return reply(`${NotRG}`)
if (args.length < 1) return reply('Cade o Nome ._.?')
reply(enviar.espere)
gradient = await fetchJson(`https://lzmods-api.herokuapp.com/textpro/neon3d-logo?texto=${q}&apikey=lzmods`)
result = await getBuffer(gradient.resultado)
await lz.sendMessage(from, result, image, {quoted: selo, caption: (enviar.sucess)})
break

case 'stonelogo':
if (!isRG) return reply(`${NotRG}`)
if (args.length < 1) return reply('Cade o Nome ._.?')
reply(enviar.espere)
gradient = await fetchJson(`https://lzmods-api.herokuapp.com/textpro/stone-logo?texto=${q}&apikey=lzmods`)
result = await getBuffer(gradient.resultado)
await lz.sendMessage(from, result, image, {quoted: selo, caption: (enviar.sucess)})
break

case 'futurologo':
case 'futurelogo':
if (!isRG) return reply(`${NotRG}`)
if (args.length < 1) return reply('Cade o Nome ._.?')
reply(enviar.espere)
gradient = await fetchJson(`https://lzmods-api.herokuapp.com/textpro/future-logo?texto=${q}&apikey=lzmods`)
result = await getBuffer(gradient.resultado)
await lz.sendMessage(from, result, image, {quoted: selo, caption: (enviar.sucess)})
break

case 'joker':
case 'jokerlogo':
if (!isRG) return reply(`${NotRG}`)
if (args.length < 1) return reply('Cade o Nome ._.?')
reply(enviar.espere)
gradient = await fetchJson(`https://lzmods-api.herokuapp.com/textpro/joker-logo?texto=${q}&apikey=lzmods`)
result = await getBuffer(gradient.resultado)
await lz.sendMessage(from, result, image, {quoted: selo, caption: (enviar.sucess)})
break

case 'cameralogo':
if (!isRG) return reply(`${NotRG}`)
if (args.length < 1) return reply('Cade o Nome ._.?')
reply(enviar.espere)
gradient = await fetchJson(`https://lzmods-api.herokuapp.com/textpro/cam-logo?texto=${q}&apikey=lzmods`)
result = await getBuffer(gradient.resultado)
await lz.sendMessage(from, result, image, {quoted: selo, caption: (enviar.sucess)})
break

// ==========/ S t i c k e r s \========== \\

case 'st':
case 'st':
case 'sticker':
case 's':
if ((isMedia && !info.message.videoMessage || isQuotedImage) && args.length == 0) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo : info
const media = await lz.downloadAndSaveMediaMessage(encmedia)
rano = getRandom('.webp')
reply(enviar.espere)
await ffmpeg(`./${media}`)
.input(media)
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
exec(`webpmux -set exif ${addMetadata('infinity','bot')} ${rano} -o ${rano}`, async (error) => {
fs.unlinkSync(media)
reply(enviar.stick)
})
})
exec(`ffmpeg -i ${media} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 800:800 ${rano}`, (err) => {
fs.unlinkSync(media)
buffer = fs.readFileSync(rano)
lz.sendMessage(from, buffer, sticker, {quoted: selo})
fs.unlinkSync(rano)
})
} else if ((isMedia && info.message.videoMessage.seconds < 11 || isQuotedVideo && info.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo : info
const media = await lz.downloadAndSaveMediaMessage(encmedia)
rano = getRandom('.webp')
await ffmpeg(`./${media}`)
.inputFormat(media.split('.')[1])
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
exec(`webpmux -set exif ${addMetadata('infinity', 'bot')} ${rano} -o ${rano}`, async (error) => {
fs.unlinkSync(media)
tipe = media.endsWith('.mp4') ? 'video' : 'gif'
reply(`Falha na conversão de ${tipe} para sticker`)
})
})
exec(`ffmpeg -i ${media} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 200:200 ${rano}`, (err) => {
fs.unlinkSync(media)
buffer = fs.readFileSync(rano)
lz.sendMessage(from, buffer, sticker, {quoted: selo2})
fs.unlinkSync(rano)
})
} else {
reply(`envie e marque uma foto ou video com no maximo 10 segundos manito`)
}
break

//=======================================\\

case 'attp' :
case 'sttp' :
if (!isRG) return reply(`${NotRG}`)
if (args.length < 1) return reply(`Cade o texto Mano?? \nExemplo: ${prefix}attp texto`)
try {
var TextoAttp = body.slice(5).trim()
reply(enviar.espere)
url = encodeURI(`https://lzmods-api.herokuapp.com/others/attp?texto=${TextoAttp}&apikey=lzmods`)
ResultadoAttp = await getBuffer(url)
lz.sendMessage(from, ResultadoAttp, sticker, { quoted: info })
}
catch (e) {
reply("Error: Use apenas caracteres alfanuméricos")
}
break

//=======================================\\

case 'rename': // creditos: aleatory bot
case 're':
if (!isQuotedSticker) return reply('Marque uma figurinha...')  
var namaPackss = q.substring(0, q.indexOf('/') - 0)
var authorPackss = q.substring(q.lastIndexOf('/') + 1)
texto = body.slice(7)
reply(enviar.espere)
stiker_wm = JSON.parse(JSON.stringify(info).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
dlstiker_wm = await lz.downloadAndSaveMediaMessage(stiker_wm)
stickerpackid = "com.snowcorp.stickerly.android.stickercontentprovider b5e7275f-f1de-4137-961f-57becfad34f2"
packname = namaPackss;
author = authorPackss;
exif321 = getRandom('.exif')
exifst = getRandom('.webp')
googlelink = ` `;
applelink = ` `;
json = {"sticker-pack-id": stickerpackid, "sticker-pack-name": packname, "sticker-pack-publisher": author, "android-app-store-link": googlelink, "ios-app-store-link": applelink}
len = JSON.stringify(json).length
f = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00])
aaa = [0x00, 0x00, 0x16, 0x00, 0x00, 0x00]
if (len > 256) {
len = len - 256
aaa.unshift(0x01)
} else {
aaa.unshift(0x00)
}
fff = Buffer.from(aaa)
ffff = Buffer.from(JSON.stringify(json))
if (len < 16) {
len = len.toString(16)
len = "0" + len
} else {
len = len.toString(16)
}
ff = Buffer.from(len, "hex")
wm = Buffer.concat([f, ff, fff, ffff])
fs.writeFile(exif321, wm, function(err) {
if (err) return console.log(err);
exec(`webpmux -set exif ${exif321} undefined.webp -o ${exifst}`, (err) => {
if (err) return console.log(err);
lz.sendMessage(from, fs.readFileSync(exifst), sticker, {quoted: selo})
fs.unlinkSync(exifst)
fs.unlinkSync(exif321)
fs.unlinkSync('undefined.webp')
})
});
break

// ==========/ P l a y s \========== \\

case 'play':
if (!isRG) return reply(`${NotRG}`)
if (args.length < 1) return reply(`Cade o Nome Da Musica Mano?? \nExemplo: ${prefix}play rei lacoste`)
reply(enviar.espere)
anu = await fetchJson(`https://lzmods-api.herokuapp.com/yt/playmp3?&musica=${q}&apikey=lzmods`)
let resultadoplay = `
🍀 a Musica「 ${q} 」Foi Encontrada Com Sucesso! 🍀

☔Título : ${anu.resultado.titulo}
☔Canal : ${anu.resultado.canal}
☔Views : ${anu.resultado.views}

Aguarde o Envio Do Audio...
Audios Muito Pesadas Nao Serão Enviados.`
buffer = await getBuffer(anu.resultado.thumb)
sendButImage(from,`${resultadoplay}`,
`💾 Caso Queira Outro Tipo Selecione Abaixo 💾`, buffer,
[{buttonId:`.playdocumentokk ${anu.resultado.titulo}`, buttonText: {displayText: '📄 𝐃𝐨𝐜𝐮𝐦𝐞𝐧𝐭𝐨 📄'}, type: 1},
{buttonId: `${prefix}playvideo ${anu.resultado.titulo}`, buttonText: {displayText: '🎥 𝐕𝐢𝐝𝐞𝐨 🎥'}, type:1}]);
let audee = await getBuffer(anu.resultado.download)
lz.sendMessage(from, audee, audio, {quoted: info, mimetype: 'audio/mp4'})
break

case 'playvideo':
if (!isRG) return reply(`${NotRG}`)
playvideo = args.join(' ')
reply(`
Aguarde o Envio Do Video...
Videos Muito Pesados Nao Serão Enviados.`)
anu = await fetchJson(`https://lzmods-api.herokuapp.com/yt/playmp4?&musica=${q}&apikey=lzmods`)
let videomsc = await getBuffer(anu.resultado.download)
lz.sendMessage(from, videomsc, video, {quoted: selo, mimetype: 'video/mp4'})
break

case 'playdocumentokk':
if (!isRG) return reply(`${NotRG}`)
reply(`
Aguarde o Envio Do Documento...
Documentos Muito Pesados Nao Serão Enviados.`)
anu = await fetchJson(`https://lzmods-api.herokuapp.com/yt/playmp3?&musica=${q}&apikey=lzmods`)
let audeb = await getBuffer(anu.resultado.download)
lz.sendMessage(from, audeb, document, {quoted: selo, mimetype: 'audio/mp3', filename: `${anu.resultado.titulo}.mp3`})
break

//=====================================\\

case 'playdoc':
case 'playdocumento':
if (!isRG) return reply(`${NotRG}`)
if (args.length < 1) return reply(`Cade o Nome Da Musica Mano?? \nExemplo: ${prefix}playdoc rei lacoste`)
reply(enviar.espere)
playdoc = body.slice(8)
anu = await fetchJson(`https://lzmods-api.herokuapp.com/yt/playmp3?&musica=${q}&apikey=lzmods`)
let resultadodoc = `
💎 a Musica「 ${q} 」Encontrada Com Sucesso! 💎

📌Título : ${anu.resultado.titulo}
📍Canal : ${anu.resultado.canal}
📌Views : ${anu.resultado.views}

Aguarde o Envio Do Documento...
Documentos Muito Pesados Nao Serão Enviados.`
let aude = await getBuffer(anu.resultado.download)
buffer = await getBuffer(anu.resultado.thumb)
lz.sendMessage(from, buffer, image, {quoted: selo, thumbnail: null, caption: `${resultadodoc}`})
lz.sendMessage(from, aude, document, {quoted: info, mimetype: 'audio/mp3', filename: `${anu.resultado.titulo}.mp3`})
break

//=====================================\\

case 'play2':
if (!isRG) return reply(`${NotRG}`)
if (args.length < 1) return reply(`Cade o Nome Da Musica Mano?? \nExemplo: ${prefix}play2 rei lacoste`)
play2txt = args.join(' ')
reply(enviar.espere)
anu = await fetchJson(`https://api-team-of-hero.herokuapp.com/api/yt/playmp3?query=${play2txt}&apikey=apiteam`)
let resultado3 = `
💈 Musica Encontrada Com Sucesso! 💈

☄️Título : ${anu.titulo}
☄️Canal : ${anu.canal}
☄️Views : ${anu.views}
☄️Lançada Em : ${anu.data}

Aguarde o Envio...
Audios Muito Pesadas Nao Serão Enviadas.`
result = await getBuffer(anu.url)
buffer = await getBuffer(anu.thumb)
lz.sendMessage(from, buffer, image, {quoted: selo, thumbnail: null, caption: `${resultado3}`})
lz.sendMessage(from, result, audio, {quoted: info, mimetype: 'audio/mp4'})
break

//=====================================\\

case 'playmp4':
if (!isRG) return reply(`${NotRG}`)
if (args.length < 1) return reply(`Cade o Nome Da Musica Mano?? \nExemplo: ${prefix}playmp4 rei lacoste`)
reply(enviar.espere)
anu = await fetchJson(`https://lzmods-api.herokuapp.com/yt/playmp4?&musica=${q}&apikey=lzmods`)
let resultadomp4 = `
✝️ Musica「 ${q} 」Foi Encontrada Com Sucesso! ✝️

🎈Título : ${anu.resultado.titulo}
🎈Canal : ${anu.resultado.canal}
🎈Views : ${anu.resultado.views}
🎈Lançada Em : ${anu.resultado.data_de_lançamento}

Aguarde o Envio...
Videos Muito Pesadas Nao Serão Enviadas.`
let resultt = await getBuffer(anu.url)
buffer = await getBuffer(anu.thumb)
lz.sendMessage(from, buffer, image, {quoted: selo, thumbnail: null, caption: `${resultadomp4}`})
lz.sendMessage(from, resultt, video, {quoted: selo, mimetype: 'video/mp4'})
break

//=====================================\\

case 'ytmp4':
if (!isRG) return reply(`${NotRG}`)
if (!q) return reply(`exemplo: ${prefix}ytmp4 [ Link Do Video ]`)
reply(enviar.espere)
ase = await y2mateV(q).catch(e => {
reply('Erro🧸')
})
vidionye = await getBuffer(ase[0].link)
await lz.sendMessage(from, vidionye, video, {mimetype: 'video/mp4', filename: `${ase[0].output}`, quoted: selo})
break

//=====================================\\

case 'play3':
if (!isRG) return reply(`${NotRG}`)
reply(enviar.espere)
play3 = args.join(' ')
send = await fetchJson(`https://kauan-ofc.herokuapp.com/api/play?musica=${play3}`) 
let ku = `
💎Musica Encontrada Com Sucesso!💎

Titulo: ${send.titulo}
Tamanho: ${send.tamanho}
Visualizações: ${send.views}
Likes: ${send.likes}`
img = await getBuffer(send.link_image)
lz.sendMessage(from, img, image, {quoted: selo, caption: ku})
aud = await getBuffer(send.link_musica)
lz.sendMessage(from, aud, audio, {quoted: selo, mimetype: 'audio/mp4'})
break

// ==========/  G r u p o s \========== \\

case 'promover': // Creditos: Aleatory Bot
case 'promote':
case 'ademir':
  if (!isGroup) return reply(enviar.apenas.grupos)
  if (!isGroupAdmins) return reply(enviar.bad.adm)
  if (!isBotGroupAdmins) return reply(enviar.bad.BotAdm)
  const dlptu = body.slice(10)
  if (dlptu.length > 14)return reply(`Exemplo : ${prefix}promover @55439220420`) 
  if (info.message.extendedTextMessage === undefined || info.message.extendedTextMessage === null) return
  mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid
  if (mentioned.length > 1) {
  ytb = 'F\n'
  for (let _ of mentioned) {
  ytb += `@${_.split('@')[0]}\n`
  }
  mentions(from, mentioned, true)
  lz.groupRemove(from, mentioned)
  } else {
  mentions(`@${mentioned[0].split('@')[0]} agora é admin do grupo!`, mentioned, true)
  lz.groupMakeAdmin(from, mentioned)
  }
  break

//=====================================\\

case 'gpconfig':
case 'goconf':
case 'gp':
if (!isRG) return reply(`${NotRG}`)
sendBut(from,`Escolha Abaixo Oque Você Deseja Fazer`,`${NomeDoBot}`,
[
            {              
              buttonId: `.grupo f`,
              buttonText: {
                displayText:  `🔰 ҒᎬᏟᎻᎪᎡ ᏀᎡႮᏢϴ 🔰`,
              },
              type: 1,
            },
            {              
              buttonId: `.grupo a`,
              buttonText: {
                displayText:  `💠 ᎪᏴᎡᏆᎡ ᏀᎡႮᏢϴ 💠`,
              },
              type: 1
            },
          ]);
break
          
//=====================================\\

case 'grupo':  // Creditos: Aleatory Bot
if (!isRG) return reply(`${NotRG}`)
if (!isGroup) return reply(`SÓ EM GRUPOS`)
if (!isGroupAdmins) return reply(`VOCÊ PRECISA SER ADMININASTROR`)
if (!isBotGroupAdmins) return reply(`BOT PRECISA SER ADMININASTROR`)
if (args[0] === 'a') {
await lz.groupSettingChange(from, GroupSettingChange.messageSend, false)
reply(`🎃 GRUPO ABERTO PARA TODOS COM SUCESSO 💎`)
} else if (args[0] === 'f') {
await lz.groupSettingChange(from, GroupSettingChange.messageSend, true)
reply(`GRUPO FECHADO PARA ADMS COM SUCESSO`)
}				 
break 

//=====================================\\

case 'antifake':
if (!isRG) return reply(`${NotRG}`)
try {
if (!isGroup) return reply(enviar.apenas.grupos)
if (!isGroupAdmins) return reply(enviar.bad.adm)
if (args.length < 1) return reply('Hmmmm')
if (Number(args[0]) === 1) {
if (isAntiFake) return reply('Ja esta ativo')
antifake.push(from)
fs.writeFileSync('./~ Infinity Datab ~/funções/antis/antifake.json', JSON.stringify(antifake))
reply('Ativou com sucesso o recurso de antifake neste grupo✔️')
} else if (Number(args[0]) === 0) {
antifake.splice(from, 1)
fs.writeFileSync('./~ Infinity Datab ~/funções/antis/antifake.json', JSON.stringify(antifake))
reply('Desativou com sucesso o recurso de antifake neste grupo✔️')
} else {
reply('1 para ativar, 0 para desativar')
}
} catch {
reply('Deu erro, tente novamente :/')
}
break

case 'antilink':  // Creditos: Aleatory Bot
if (!isGroup) return reply(enviar.msg.grupo)
if (!isGroupAdmins) return reply(enviar.msg.adm)
if (!isBotGroupAdmins) return reply(enviar.msg.Badmin)
if (args.length < 1) return reply('1 ativa 0 desativa brow')
if (Number(args[0]) === 1) {
if (isAntiLink) return reply('ja ta ativado brow')
antilink.push(from)
fs.writeFileSync('./~ Infinity Datab ~/funções/antis/antilink.json', JSON.stringify(antilink))
reply('🌀 Ativado com sucesso 📝')
} else if (Number(args[0]) === 0) {
if (!isAntiLink) return reply('Ja esta desativado brow')
pesquisar = from
processo = antilink.indexOf(pesquisar)
while(processo >= 0){
antilink.splice(processo, 1)
processo = antilink.indexOf(pesquisar)
}
fs.writeFileSync('./~ Infinity Datab ~/funções/antis/antilink.json', JSON.stringify(antilink))
reply('‼️ Desativado com sucesso ✔️')
} else {
reply('1 ativa 0 desativa brow')
}
  break

//=====================================\\

case 'hidetag':
if (!isRG) return reply(`${NotRG}`)
if (!isGroup) return reply(enviar.apenas.grupos)
if (!groupAdmins) return reply(enviar.bad.adm)
var value = body.slice(9)
var group = await lz.groupMetadata(from)
var member = group['participants']
var mem = []
member.map( async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
var options = {
text: value,
contextInfo: { mentionedJid: mem },
quoted: info
}
lz.sendMessage(from, options, text)
break

//=====================================\\

case 'nomegp':  // Creditos: Aleatory Bot
if (!isRG) return reply(`${NotRG}`)
if (!isGroup) return reply(enviar.apenas.grupos)
if (!isGroupAdmins) return reply(enviar.bad.adm)
if (!isBotGroupAdmins) return reply(enviar.bad.BotAdm)
lzmods = args.join(" ")
lz.groupUpdateSubject(from, `${lzmods}`)
lz.sendMessage(from, 'Nome Do Grupo Alterado Com Sucesso!', text, {quoted: selo})
break

case 'descgp':  // Creditos: Aleatory Bot
if (!isRG) return reply(`${NotRG}`)
if (!isGroup) return reply(enviar.apenas.grupos)
if (!isGroupAdmins) return reply(enviar.bad.adm)
if (!isBotGroupAdmins) return reply(enviar.bad.BotAdm)
desc = args.join(" ")
lz.groupUpdateDescription(from, `${desc}`)
lz.sendMessage(from, 'descrição do grupo alterada com sucesso', text, {quoted: selo})
break

case 'fotogp':   // Creditos: Aleatory Bot
if (!isRG) return reply(`${NotRG}`)
if (!isGroup) return reply(enviar.apenas.grupos)
if (!isGroupAdmins) return reply(enviar.bad.adm)
if (!isBotGroupAdmins) return reply(enviar.bad.BotAdm)
if (!isQuotedImage) return reply(`Use: ${prefix}fotogp <Marque uma foto>`)
const ftgp = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: info
const media = await lz.downloadAndSaveMediaMessage(ftgp)
await lz.updateProfilePicture(from, media)
reply(`Foto do grupo alterada com sucesso ☢️`) 
break

//=====================================\\

case 'ban':  // Creditos: Aleatory Bot
  if (!isGroup) return reply(enviar.apenas.grupos)
  if (!isGroupAdmins) return reply(enviar.bad.adm)
  if (!isBotGroupAdmins) return reply(enviar.bad.BotAdm)
  if (info.message.extendedTextMessage === null || info.message.extendedTextMessage === undefined) return reply('Marque uma mensagem')
  if (info.message.extendedTextMessage.contextInfo.participant == NumeroDoDono) return reply('Não posso remover meu dono.')
  if (info.message.extendedTextMessage.contextInfo.participant == botNumber) return reply('ei ei ei q merda e essa kkkkk')
  setTimeout(function() {}, 2000);
  if (info.message.extendedTextMessage.contextInfo.participant === undefined) {
  entah = info.message.extendedTextMessage.contextInfo.mentionedJid
  if (exe1.length > 1) {
  var M_exe = []
  for (let cut of exe1) {
  M_exe.push(cut)
  }
  lz.groupRemove(from, M_exe)
  } else {
  lz.groupRemove(from, [exe1[0]])
  }
  } else {
  exe1 = info.message.extendedTextMessage.contextInfo.participant
  lz.groupRemove(from, [exe1])
  }
  break

//=====================================\\

case 'voltar':
case 'reviver':
  if (!isGroup) return reply(enviar.apenas.grupos)
  if (!isGroupAdmins) return reply(enviar.bad.adm)
  if (!isBotGroupAdmins) return reply(enviar.bad.BotAdm)
  if (info.message.extendedTextMessage === null || info.message.extendedTextMessage === undefined) return reply('Marque uma mensagem')
  if (info.message.extendedTextMessage.contextInfo.participant == botNumber) return reply('ei ei ei q merda e essa kkkkk')
  setTimeout(function() {}, 2000);
  if (info.message.extendedTextMessage.contextInfo.participant === undefined) {
  entah = info.message.extendedTextMessage.contextInfo.mentionedJid
  if (exe1.length > 1) {
  var M_exe = []
  for (let cut of exe1) {
  M_exe.push(cut)
  }
  lz.groupAdd(from, M_exe)
  } else {
  lz.groupAdd(from, [exe1[0]])
  }
  } else {
  exe1 = info.message.extendedTextMessage.contextInfo.participant
  lz.groupAdd(from, [exe1])
  }
  break

//=====================================\\

case 'rebaixar':  // Creditos: Aleatory Bot
case 'demote':
case 'membrocomum':
  if (!isGroup) return reply(enviar.apenas.grupos)
  if (!isGroupAdmins) return reply(enviar.bad.adm)
  if (!isBotGroupAdmins) return reply(enviar.bad.BotAdm)
  const dlp = body.slice(15)
  if (dlp.length >= 15)return reply(`Exemplo : ${prefix}rebaixar @pessoa`)
  if (info.message.extendedTextMessage === undefined || info.message.extendedTextMessage === null) return
  mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid
  if (mentioned.length > 1) {
  ytb = 'F\n'
  for (let _ of mentioned) {
  ytb += `@${_.split('@')[0]}\n`
  }
  mentions(ytb, mentioned, true)
  await lz.groupRemove(from, mentioned)
  } else {
  mentions(`@${mentioned[0].split('@')[0]} perdeu o adm com sucesso!`, mentioned, true)
  await lz.groupDemoteAdmin(from, mentioned)
  }
  break

//=====================================\\

case 'add':
if (!isRG) return reply(`${NotRG}`)
if (!isGroup) return reply(enviar.apenas.grupos)
if (!isGroupAdmins) return reply(enviar.bad.adm)
if (!isBotGroupAdmins) return reply(enviar.bad.BotAdm)
if (args.length < 1) return reply('quem vc quer que eu adicione?')
if (args[0].startsWith('08')) return reply('Use o código do país')
try {
num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
lz.groupAdd(from, [num])
} catch (e) {
console.log('Error :', e)
reply('Falha ao adicionar alvo, talvez porque esteja privado')
}
break

//=====================================\\

case 'kick':  // Creditos: Aleatory Bot
if (!isGroup) return reply(enviar.apenas.grupos)
if (!isGroupAdmins) return reply(enviar.bad.adm)
const dltp = body.slice(6)
if (dltp.length > 14)return reply(`Exemplo : ${prefix}kick @55439220420`) 
if (info.message.extendedTextMessage === undefined || info.message.extendedTextMessage === null) return reply('Marque o alguem por @ que você quer remover do grupo!') 
mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = 'F PRA ELE KKKK\n'
for (let _ of mentioned) {
teks += `@${_.split('@')[0]}\n`
}
mentions(teks, mentioned, true)
lz.groupRemove(from, mentioned)
} else {
mentions(`F PRA ELE KKKK`, mentioned, true)
lz.groupRemove(from, mentioned)
}
break

//=====================================\\

case 'admins':
case 'ademiros':  // Creditos: Aleatory Bot
if (!isRG) return reply(`${NotRG}`)
if (!isGroup) return reply(enviar.apenas.grupos)
teks = `Lista de admin do grupo *${groupMetadata.subject}*\nTotal : ${groupAdmins.length}\n\n`
no = 0
for (let admon of groupAdmins) {
no += 1
teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
}
mentions(teks, groupAdmins, true)
break

//=======================================\\

case 'simi':
if (!isRG) return reply(`${NotRG}`)
if (args.length < 1) return reply(`Use ${prefix}simi texto`)
try { 
anu = await fetchJson(`https://simsumi.herokuapp.com/api?text=${encodeURIComponent(body.slice(5))}`, {method: 'get'})
if (anu.error) return reply('Não sei ler o que não existe 🐤 (converse cmg)')
lz.sendMessage(from, `${anu.success} 🐤`, text, {quoted: info})
} catch {
reply("erro ao executar comando")
}
break

//=======================================\\

case 'marcar':
if (!isRG) return reply(`${NotRG}`)
if (!isGroup) return reply(enviar.apenas.grupos)
if (!isGroupAdmins) return reply(enviar.bad.adm)
members_id = []
teks = (args.length > 1) ? body.slice(8).trim() : ''
teks += '\n\n'
for (let mem of groupMembers) {
teks += `*#* @${mem.jid.split('@')[0]}\n`
members_id.push(mem.jid)
}
mentions(teks, members_id, true)
break

//=====================================\\

case 'marcar2':
if (!isRG) return reply(`${NotRG}`)
members_id = []
teks = (args.length > 1) ? body.slice(8).trim() : ''
teks += '\n\n'
for (let mem of groupMembers) {
teks += `╠➥ https://wa.me/${mem.jid.split('@')[0]}\n`
members_id.push(mem.jid)
}
lz.sendMessage(from, teks, text, {detectLinks: false, quoted: info})
break

//=====================================\\

case 'ler':
if (!isRG) return reply(`${NotRG}`)
if ((isMedia && !info.message.videoMessage || isQuotedImage) && args.length == 0) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo : info
const media = await lz.downloadAndSaveMediaMessage(encmedia)
reply(enviar.espere)
await recognize(media, {lang: 'eng+ind', oem: 1, psm: 3})
.then(teks => {
reply(teks.trim())
fs.unlinkSync(media)
})
.catch(err => {
reply(err.message)
fs.unlinkSync(media)
})
} else {
reply('Só uma foto mano')
}
break

//=====================================\\

case 'ocr':
if (!isRG) return reply(`${NotRG}`)
if ((isMedia && !info.message.videoMessage || isQuotedImage) && args.length == 0) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(info).replace('quotedM','m')).message.extendedTextMessage.contextInfo : info
const media = await lz.downloadAndSaveMediaMessage(encmedia)
reply(enviar.espere)
await recognize(media, {lang: 'eng+ind', oem: 1, psm: 3})
.then(teks => {
reply(teks.trim())
fs.unlinkSync(media)
})
.catch(err => {
reply(err.message)
fs.unlinkSync(media)
})
} else {
reply('marque uma foto mano ')
}
break

//=====================================\\

case 'ling':
if (!isRG) return reply(`${NotRG}`)
lzdomina = `  
'af': 'Afrikaans',
  'sq': 'Albanian',
  'ar': 'Arabic',
  'hy': 'Armenian',
  'ca': 'Catalan',
  'zh': 'Chinese',
  'zh-cn': 'Chinese (Mandarin/China)',
  'zh-tw': 'Chinese (Mandarin/Taiwan)',
  'zh-yue': 'Chinese (Cantonese)',
  'hr': 'Croatian',
  'cs': 'Czech',
  'da': 'Danish',
  'nl': 'Dutch',
  'en': 'English',
  'en-au': 'English (Australia)',
  'en-uk': 'English (United Kingdom)',
  'en-us': 'English (United States)',
  'eo': 'Esperanto',
  'fi': 'Finnish',
  'fr': 'French',
  'de': 'German',
  'el': 'Greek',
  'ht': 'Haitian Creole',
  'hi': 'Hindi',
  'hu': 'Hungarian',
  'is': 'Icelandic',
  'id': 'Indonesian',
  'it': 'Italian',
  'ja': 'Japanese',
  'ko': 'Korean',
  'la': 'Latin',
  'lv': 'Latvian',
  'mk': 'Macedonian',
  'no': 'Norwegian',
  'pl': 'Polish',
  'pt': 'Portuguese',
  'pt-br': 'Portuguese (Brazil)',
  'ro': 'Romanian',
  'ru': 'Russian',
  'sr': 'Serbian',
  'sk': 'Slovak',
  'es': 'Spanish',
  'es-es': 'Spanish (Spain)',
  'es-us': 'Spanish (United States)',
  'sw': 'Swahili',
  'sv': 'Swedish',
  'ta': 'Tamil',
  'th': 'Thai',
  'tr': 'Turkish',
  'vi': 'Vietnamese',
  'cy': 'Welsh'`
lz.sendMessage(from, lzdomina, text, {quoted: selo})
break

//=====================================\\

case 'letra':
if (!isRG) return reply(`${NotRG}`)
if (args.length < 1) return reply('👽 Cade o nome da musica vadia 👽')
anu = await fetchJson(`http://api-exteam.herokuapp.com/api/music/lirik?search=${q}&apikey=${ExApiKey}`)
let xj = `${anu.result}`
await lz.sendMessage(from, xj, text, {quoted: selo2})
break

//=====================================\\

case 'traduzir':
if (!isRG) return reply(`${NotRG}`)
if (args.length == 0) return reply(`Exemplo: ${prefix + command} texto que você quer traduzir/codigo da linguagem, Clique No botão abaixo para saber como usar o traduzir e saber os códigos das linguagens`)
txt = body.slice(9)
teks1 = txt.split("/")[0];
teks2 = txt.split("/")[1];
anu = await fetchJson(`https://lzmods-api.herokuapp.com/others/tradutor?texto=${teks1}&linguagem=${teks2}&apikey=estreia`)
const resultado = `${anu.resultado}`
sendBut(from,`Palavra Original: ${teks1}\nPalavra Traduzida: ${resultado}\nLinguagem: ${teks2}`,`${NomeDoBot}`,
[
            {              
              buttonId: `.helptdz`,
              buttonText: {
                displayText:  `🔰 𝘾𝙤𝙢𝙤 𝙐𝙨𝙖𝙧 🔰`,
              },
              type: 1,},]);
break

//=====================================\\

case 'helptdz':
if (!isRG) return reply(`${NotRG}`)
const helptdzz = `Exemplo: ${prefix}traduzir texto que você quer traduzir/codigo da linguagem, envie ${prefix}idiomas para saber os codigos das linguagens disponíveis ou clique no botão abaixo`
sendBut(from,`${helptdzz}`,`${NomeDoBot}`,
[
            {              
              buttonId: `.ling`,
              buttonText: {
                displayText:  `🎃 𝐂𝐨́𝐝𝐢𝐠𝐨𝐬 𝐃𝐞 𝐋𝐢𝐧𝐠𝐮𝐚𝐠𝐞𝐧𝐬 🎃`,
              },
              type: 1,},]);
break

//=====================================\\
                


//=====================================\\

case 'simih':
if (!isRG) return reply(`${NotRG}`)
if (!isGroup) return reply(enviar.apenas.grupos)
if (!isGroupAdmins) return reply(enviar.bad.adm)
if (args.length < 1) return reply('Hmmmm')
if (Number(args[0]) === 1) {
if (isSimi) return reply('O modo Simi está ativado ')
samih.push(from)
fs.writeFileSync('./~ Infinity Datab ~/funções/simi.json', JSON.stringify(samih))
reply('Ativado com sucesso o modo simi neste grupo ✔️')
} else if (Number(args[0]) === 0) {
samih.splice(from, 1)
fs.writeFileSync('./src/simi.json', JSON.stringify(samih))
reply('Sucesso ao desativar o modo simi neste grupo de grupo ✔️')
} else {
reply('1 para habilitar, 0 para desabilitar ')
}
break

//=====================================\\

case 'welcome':
case 'bemvindo':
if (!isRG) return reply(`${NotRG}`)
if (!isGroup) return reply(enviar.apenas.grupos)
if (!isGroupAdmins) return reply(enviar.bad.adm)
if (args.length < 1) return reply('🧐')
if (Number(args[0]) === 1) {
if (isWelkom) return reply('já esta ativo')
welkom.push(from)
fs.writeFileSync('./~ Infinity Datab ~/funções/welkom.json', JSON.stringify(welkom))
reply('Ativado com sucesso o recurso Boas vindas do grupo✔️')
} else if (Number(args[0]) === 0) {
welkom.splice(from, 1)
fs.writeFileSync('./~ Infinity Datab ~/funções/welkom.json', JSON.stringify(welkom))
reply('Desativar com sucesso o recurso de boas-vindas neste grupo ✔️')
} else {
reply('welcome 1 para habilitar,welcome 0 para desabilitar')
}
break

//=====================================\\

case 'clone':
if (!isRG) return reply(`${NotRG}`)
if (!isGroup) return reply(enviar.apenas.grupos)
if (!isGroupAdmins) return reply(enviar.bad.adm)
if (args.length < 1) return reply('Marque o alvo que você deseja clonar')
if (info.message.extendedTextMessage === undefined || info.message.extendedTextMessage === null) return reply('📌')
mentioned = info.message.extendedTextMessage.contextInfo.mentionedJid[0]
let { jid, id, notify } = groupMembers.find(x => x.jid === mentioned)
try {
pp = await lz.getProfilePicture(id)
buffer = await getBuffer(pp)
lz.updateProfilePicture(botNumber, buffer)
mentions(`obrigado pela nova foto 🎃`, [jid], true)
} catch (e) {
reply('falhou, talvez a foto do lek seja privada')
}
break

//=====================================\\
                  //FIM\\
//=====================================\\

default: 
if (body == `${prefix}${command}`) {
hsl = `
*⟅❗ *CMD NÃO ENCONTRADO*❗⟆ *\n\n❯ Olá @${sender.split("@")[0]}!!\n❯ O comando: *${prefix}${command}*\n❯ Não existe ou digitou errado\n❯ Verifique usando ${prefix}menu ^^
`
lz.sendMessage(from, hsl, text, {quoted: selo2, contextInfo: {mentionedJid: [sender]}})
}
}
} catch (err) {
e = String(err)
if (!e.includes("this.isZero" || !e.match("jid is not defined"))){
const time_error = moment.tz('America/Sao_Paulo').format('HH:mm:ss')
console.log(color(time_error, "yellow"), color("[ ERRO ]", "aqua"), color(e, 'red'))
}
}
})
}
starts()
