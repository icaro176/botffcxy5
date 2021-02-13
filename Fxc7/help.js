// menu fitur bot
const help = (prefix, instagram, yt, name, pushname2, user, limitt, uptime, jam, tanggal) => { 
	return `

\`\`\`POR FAVOR, LEIA ABAIXO ANTES DE\`\`\`
\`\`\`USAR O BOT\`\`\`

╭─⇨︙࿐༆𝐔𝐒𝐔𝐀𝐑𝐈𝐎࿐༆ ${name}* 」
▎✰ *NOME DO USUÁRIO:* *${pushname2}*
▎✰ *VERIFICAÇÃO:* 
▎✰ *LIMITE:* *${limitt} por dia*
▎✰ *ATIVO:* ${kyun(uptime)}
▎✰ *HORA:* *${jam}*
▎✰ *DATA:* *${tanggal}*
▎✰ *VERSÃO:* *1.0*
▎  ❌ *SPAM*
▎  ❌ *CALL*
▎ ✠ REGRAS QUEBRADA?? *BAN* ✠
▎ ❖ *SOMENTE ADM TEM ACESSO PREMIUM SE O PROPRIETÁRIO ESTIVER NO GRUPO* ❖
╰─
│
╭──「 *SOBRE ${name}* 」
│➻ *${prefix}report <reportar erro>*
│➻ *${prefix}speed*
│➻ *${prefix}daftar*
│➻ *${prefix}banlist*
│➻ *${prefix}bahasa* <códigos de idioma>
╰─
│
͏͏͏͏͏͏͏͏͏͏͏͏͏͏╭──「 *MEDIA DOWNLOADER* 」
│➻ *${prefix}tiktokstalk <usuário>*
│➻ *${prefix}igstalk <usuário>*
│➻ *${prefix}instavid <link válido>*
│➻ *${prefix}instaimg <link válido>*
│➻ *${prefix}instastory <usuário>*
│➻ *${prefix}ssweb <url>*
│➻ *${prefix}url2img <url>*
│➻ *${prefix}tiktok* <link>
│➻ *${prefix}fototiktok*
│➻ *${prefix}wait* <foto do anime>
│➻ *${prefix}trendtwit*
│➻ *${prefix}google*
╰─
│
╭──「 *MENU CRIADOR* 」
│➻ *${prefix}quotemaker txt/criador/tema*
│➻ *${prefix}nulis nome/classe/texto*
│➻ *${prefix}croman BOT e amigo*
│➻ *${prefix}slide <texto>*
├─
│➻ *${prefix}tp 1 - 162*
│➻ *${prefix}ep 1 - 216*
│➻ *${prefix}tahta <texto>*
│➻ *${prefix}cglass <texto>*
│➻ *${prefix}cstyle <texto>*
│➻ *${prefix}cgame <texto>*
│➻ *${prefix}clove <texto>*
│➻ *${prefix}cparty <texto>*
│➻ *${prefix}csky <texto>*
│➻ *${prefix}tts <idioma> <texto>*
│➻ *${prefix}ttp <texto>*
│➻ *${prefix}cpaper <texto>*
├─
│➻ *${prefix}sticker*
│➻ *${prefix}stiker*
│➻ *${prefix}toimg*
│➻ *${prefix}img2url*
│➻ *${prefix}tomp3*
│➻ *${prefix}ocr*
╰─
│
╭──「 *SÓ EM GRUPO* 」
│➻ *${prefix}modeanime On/Off*
│➻ *${prefix}neonime naruto*
│➻ *${prefix}naruto*
│➻ *${prefix}minato*
│➻ *${prefix}boruto*
│➻ *${prefix}hinata*
│➻ *${prefix}sakura*
│➻ *${prefix}sasuke*
│➻ *${prefix}toukachan*
│➻ *${prefix}rize*
│➻ *${prefix}akira*
│➻ *${prefix}itori*
│➻ *${prefix}kurumi*
│➻ *${prefix}miku*
│➻ *${prefix}anime*
│➻ *${prefix}animecry*
│➻ *${prefix}animekiss*
╰─
│
╭──「 *SÓ EM GRUPO* 」
│➻ *${prefix}antilink On/Off*
│➻ *${prefix}welcome On/Off*
│➻ *${prefix}grup buka/tutup*
│➻ *${prefix}ownergrup*
│➻ *${prefix}setpp*
│➻ *${prefix}infogc*
│➻ *${prefix}add 554xxxxxxxxxx*
│➻ *${prefix}kick @membro*
│➻ *${prefix}kicktime @membro*
│➻ *${prefix}promote @membro*
│➻ *${prefix}demote @membro*
│➻ *${prefix}setname* <texto>
│➻ *${prefix}setdesc* <texto>
│➻ *${prefix}linkgrup*
│➻ *${prefix}tagme*
│➻ *${prefix}hidetag*
│➻ *${prefix}tagall*
│➻ *${prefix}mentionall*
│➻ *${prefix}fitnah @membro/sua msg/msg do bot*
│➻ *${prefix}listadmin*
╰─
│
╭──「 *SOMENTE ADMINISTRADOR* 」
│➻ *${prefix}nsfw On/Off*
│➻ *${prefix}nsfwloli*
│➻ *${prefix}nsfwblowjob*
│➻ *${prefix}nsfwneko*
│➻ *${prefix}nsfwtrap*
│➻ *${prefix}hentai*
│➻ *${prefix}simih On/Off*
│➻ *${prefix}bott on/off*
╰─
│
╭──「 *DIVERSÃO E JOGO* 」
│➻ *${prefix}anjing*
│➻ *${prefix}kucing*
│➻ *${prefix}testime*
│➻ *${prefix}hilih*
│➻ *${prefix}apakah* <texto>
│➻ *${prefix}kapankah* <texto>
│➻ *${prefix}bisakah* <texto>
│➻ *${prefix}rate* <texto>
│➻ *${prefix}watak* <texto>
│➻ *${prefix}hobby* <texto>
│➻ *${prefix}infogempa*
│➻ *${prefix}infonomor* <55xxx>
│➻ *${prefix}quotes*
│➻ *${prefix}truth*
│➻ *${prefix}dare*
│➻ *${prefix}katabijak*
│➻ *${prefix}fakta*
│➻ *${prefix}bucin*
│➻ *${prefix}pantun*
│➻ *${prefix}katacinta*
│➻ *${prefix}jadwaltvnow*
│➻ *${prefix}hekerbucin*
│➻ *${prefix}katailham*
╰─
│
╭──「 *DIVERSÃO E JOGO* 」
│➻ *${prefix}jarak*
│➻ *${prefix}translate en/Oi*
│➻ *${prefix}pasangan <@tag/@tag>*
│➻ *${prefix}gantengcek <@tag>*
│➻ *${prefix}cantikcek <@tag>*
│➻ *${prefix}persengay <@tag>*
│➻ *${prefix}pbucin <texto>*
│➻ *${prefix}bpfont <texto>*
│➻ *${prefix}textstyle <texto>*
│➻ *${prefix}jadwaltv antv*
│➻ *${prefix}lirik <título>*
│➻ *${prefix}chord <título>*
│➻ *${prefix}wiki Adolf Hitler*
│➻ *${prefix}brainly <pergunta>*
│➻ *${prefix}resepmasakan*
│➻ *${prefix}map <cidade>*
│➻ *${prefix}film <filme>*
│➻ *${prefix}pinterest <fotos de cachorro>*
│➻ *${prefix}infocuaca <cidade>*
│➻ *${prefix}jamdunia*
│➻ *${prefix}mimpi*
│➻ *${prefix}infoalamat*
│➻ *${prefix}playstore <app>*
╰─
│
╭──「 *DIVERSÃO E JOGO* 」
│➻ *${prefix}readmore*
│➻ *${prefix}puisiimg*
│➻ *${prefix}asupan*
│➻ *${prefix}tebakgambar*
│➻ *${prefix}caklontong*
│➻ *${prefix}family100*
│➻ *${prefix}memeindo*
│➻ *${prefix}kalkulator 13*12*
│➻ *${prefix}moddroid lightroom*
│➻ *${prefix}happymod lightroom*
╰─
│
╭──「 *DIVERSÃO E JOGO* 」
│➻ *${prefix}randomkpop*
│➻ *${prefix}cersex*
│➻ *${prefix}randombokep*
│➻ *${prefix}pornhub stepMoms*
│➻ *${prefix}xvideos japan*
│➻ *${prefix}nekopoi oni chichi*
╰─
│
╭──「 *OUTROS* 」
│➻ *${prefix}becrypt string*
│➻ *${prefix}encode64 string*
│➻ *${prefix}decode64 encrypt*
│➻ *${prefix}encode32 string*
│➻ *${prefix}decode32 encrypt*
│➻ *${prefix}encbinary string*
│➻ *${prefix}decbinary encrypt*
│➻ *${prefix}encoctal string*
│➻ *${prefix}decoctal encrypt*
│➻ *${prefix}hashidentifier Encrypt Hash*
│➻ *${prefix}dorking <idiota>*
│➻ *${prefix}pastebin <texto>*
│➻ *${prefix}tinyurl link*
│➻ *${prefix}bitly link*
╰─
│
╭──「 *DIVERSÃO E JOGO* 」
│➻ *${prefix}spamcall 012xxxxxxxxx*
│➻ *${prefix}spamgmail exemplo@gmail.com*
╰─
│
╭──「 *PROPRIETÁRIO* 」
│➻ *${prefix}addprem @tag*
│➻ *${prefix}removeprem @tag*
│➻ *${prefix}setmemlimit*
│➻ *${prefix}setlimit*
│➻ *${prefix}setreply* <texto>
│➻ *${prefix}setprefix* <símbolo>
│➻ *${prefix}setnamebot* <nome>
│➻ *${prefix}setppbot* <foto>
│➻ *${prefix}bc* <texto>
│➻ *${prefix}bcgc* <texto>
│➻ *${prefix}ban* <@tag>
│➻ *${prefix}unban* <@tag>
│➻ *${prefix}block* <@tag>
│➻ *${prefix}unblock* <@tag>
│➻ *${prefix}clearall*
│➻ *${prefix}delete*
│➻ *${prefix}clone*
│➻ *${prefix}getses*
│➻ *${prefix}leave*
╰─
│
╭──「 *SOMENTE PREMIUM* 」
│➻ *${prefix}playmp3 <título>*
│➻ *${prefix}fb <link>*
│➻ *${prefix}snack <link snack video>*
│➻ *${prefix}ytmp3 <link yt>*
│➻ *${prefix}ytmp4 <link yt>*
│➻ *${prefix}joox <título>*
│➻ *${prefix}smule <link Video Smule>*
╰─`
}

exports.help = help

// penghitung aktif bot
function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);
  return `*${pad(hours)} Hora ${pad(minutes)} Minutos ${pad(seconds)} Segundos*`
}

// info bot 
const bottt = (prefix) => {
return `
\`\`\`Por enquanto, o bot só pode ser usado em grupos*

Se este bot estiver em seu grupo, diga para ativar o bot por via ${prefix}bott aktif
`
}
exports.bottt = bottt
// donasi menu
const donasi = (name) => { 
	return `       
╭─────「 *:v* 」
┴
│√ *v*
│√ *v*
│
│\`\`\`f\`\`\`
│ *f*
│
│\`\`\`z\`\`\`
│ *z*
┬
╰──────「 *BY ${name}* 」

Para a sobrevivência do bot, porque as contas são caras:'
`
}
exports.donasi = donasi

// bahasa list
const bahasa = (prefix) => {
return `
Lista de idiomas para comando *${prefix}tts*

  af: Afrikaans
  sq: Albanian
  ar: Arabic
  hy: Armenian
  ca: Catalan
  zh: Chinese
  zh-cn: Chinese (Mandarin/China)
  zh-tw: Chinese (Mandarin/Taiwan)
  zh-yue: Chinese (Cantonese)
  hr: Croatian
  cs: Czech
  da: Danish
  nl: Dutch
  en: English
  en-au: English (Australia)
  en-uk: English (United Kingdom)
  en-us: English (United States)
  eo: Esperanto
  fi: Finnish
  fr: French
  de: German
  el: Greek
  ht: Haitian Creole
  hi: Hindi
  hu: Hungarian
  is: Icelandic
  id: Indonesian
  it: Italian
  ja: Japanese
  ko: Korean
  la: Latin
  lv: Latvian
  mk: Macedonian
  no: Norwegian
  pl: Polish
  pt: Portuguese
  pt-br: Portuguese (Brazil)
  ro: Romanian
  ru: Russian
  sr: Serbian
  sk: Slovak
  es: Spanish
  es-es: Spanish (Spain)
  es-us: Spanish (United States)
  sw: Swahili
  sv: Swedish
  ta: Tamil
  th: Thai
  tr: Turkish
  vi: Vietnamese
  cy: Welsh
`
}
exports.bahasa = bahasa

// Limit
const limitend = (pushname2) => {
        return`*Desculpe ${pushname2} seu limite acabou*\n*o limite é redefinido a cada 12:00*`
}

const limitcount = (limitCounts) => {
        return`
Seu limite: ${limitCounts}
`
}

exports.limitend = limitend
exports.limitcount = limitcount
