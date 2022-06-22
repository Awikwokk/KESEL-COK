/*
Created By @ZeeoneOfc
Base Ori : @DikaArdnt
Recode¹ : @ZeeoneOfc
Recode² : @Riy | @Yoga
Paiz paling ngontol sedunia yahahhaa
*/


//━━━━━━━━━━━━━━━[ INFO UPDATE ]━━━━━━━━━━━━━━━━━//

exports.notcmd = () =>{
	return`Maaf command tidak terdaftar di list menu, coba beberapa hari kedepan ya_^
`
}


exports.private = () =>{
	return`Fitur hanya bisa di gunakan di private chat
`
}

exports.wait = () => {
    return `⏳ Sedang di proses ~
`
}

exports.ok = () => {
    return `✅ Done. Ok desu ~
`
}

exports.err = () => {
    return `⚠️ Fitur sedang error
`
}

exports.erorLink = () => {
    return `⚠️ Link nya error
`
}

exports.media = () => {
    return `Silahkan pilih media yang ingin kamu download
`
}

exports.replyImg = (prefix, command) => {
    return `Kirim/reply foto dengan caption ${prefix + command}
`
}

exports.wrongFormat = (prefix) => {
    return `Format salah ❎ Silakan cek cara penggunaan di *${prefix}allmenu*
`
}

exports.emptyMess = () => {
    return `❎ Harap masukkan pesan yang ingin disampaikan!
`
}

exports.cmdNotFound = (cmd, prefix) => {
    return `❎ Command *${cmd}* tidak terdaftar di *${prefix}allmenu*
`
}

exports.ownerOnly = () => {
    return `❎ Command ini khusus owner
`
}

exports.doneOwner = () => {
    return `✅ Oke. Done owner ~
`
}

exports.groupOnly = () => {
    return `👥  Command ini hanya bisa digunakan di dalam grup!
`
}

exports.adminOnly = () => {
    return `🙅  Command ini hanya bisa digunakan oleh admin grup!
`
}

exports.nhFalse = () => {
    return `Kode tidak valid!
`
}

exports.listBlock = (blockNumber) => {
    return `*──「 HALL OF SHAME 」──*
    
Total diblokir: *${blockNumber.length}* user\n
`
}

exports.notAdmin = () => {
    return `❎ User bukan seorang admin!
`
}

exports.adminAlready = () => {
    return `❎ Tidak  dapat mem-promote user yang merupakan admin!
`
}

exports.botNotAdmin = () => {
    return `Jadikan bot sebagai admin terlebih dahulu! 🙏
`
}

exports.received = (pushname) => {
    return `
Halo ${pushname}!
Terima kasih telah melapor, laporanmu akan kami segera terima.
`
}

exports.videoLimit = () => {
    return `Ukuran file terlalu besar!
`
}

exports.notNum = (q) => {
    return `"${q}", bukan angka!
`
}
//━━━━━━━━━━━━━━━[ MENU & ALL MENU ]━━━━━━━━━━━━━━━━━//
exports.menunya = () =>{
	return``
}

exports.listMenu = (prefix) => {
    return `
┏━━⬣ 𝗕𝗼𝘁 𝗜𝗻𝗳𝗼
┃⬡ ${prefix}owner
┃⬡ ${prefix}rules
┃⬡ ${prefix}ping
┃⬡ ${prefix}runtime
┃⬡ ${prefix}speedtest
┃⬡ ${prefix}botstatus
┃⬡ ${prefix}donate
┃⬡ ${prefix}script
┗⬣

┏━━⬣ 𝗢𝘄𝗻𝗲𝗿 𝗖𝗺𝗱
┃⬡ < evaluate
┃⬡ > evaluate
┃⬡ $ exec
┃⬡ => exec
┃⬡ ${prefix}mute [query]
┃⬡ ${prefix}setmenu [query]
┃⬡ ${prefix}setwm [packname|author]
┃⬡ ${prefix}sendsesi
┃⬡ ${prefix}listpc
┃⬡ ${prefix}listgc
┃⬡ ${prefix}culik [id gc | jumlah member]
┃⬡ ${prefix}broadcast [text]
┃⬡ ${prefix}bc [text]
┃⬡ ${prefix}bcgc [text]
┃⬡ ${prefix}bcvideo [reply video]
┃⬡ ${prefix}bcimage [reply image]
┃⬡ ${prefix}bcaudio [reply audio/vn]
┃⬡ ${prefix}bcsticker [reply sticker]
┃⬡ ${prefix}nsfw [on/off]
┃⬡ ${prefix}autorespond [on/off]
┃⬡ ${prefix}antiviewonce [on/off]
┃⬡ ${prefix}join [link]
┃⬡ ${prefix}self
┃⬡ ${prefix}public [only bot]
┃⬡ ${prefix}del [reply pesan bot]
┃⬡ ${prefix}setppbot [reply image]
┗⬣

┏━━⬣ 𝗚𝗿𝗼𝘂𝗽 𝗖𝗺𝗱 
┃⬡ ${prefix}listonline
┃⬡ ${prefix}sider
┃⬡ ${prefix}wm packname|author
┃⬡ ${prefix}infochat
┃⬡ ${prefix}setdesk [text]
┃⬡ ${prefix}setppgrup [reply image]
┃⬡ ${prefix}antilink [on/off]
┃⬡ ${prefix}antilinkyoutube [on/off]
┃⬡ ${prefix}antilinktiktok [on/off]
┃⬡ ${prefix}revoke
┃⬡ ${prefix}leave
┃⬡ ${prefix}add [62***]
┃⬡ ${prefix}kick @tag
┃⬡ ${prefix}leave
┃⬡ ${prefix}linkgc
┃⬡ ${prefix}take packname|author
┃⬡ ${prefix}group [open/close]
┃⬡ ${prefix}tagall [text]
┃⬡ ${prefix}hidetag [text]
┃⬡ ${prefix}stickertag [reply sticker]
┃⬡ ${prefix}videotag [reply video]
┃⬡ ${prefix}vntag [reply vn]
┃⬡ ${prefix}imagetag [reply image]
┃⬡ ${prefix}absenstart
┃⬡ ${prefix}absen
┃⬡ ${prefix}cekabsen
┃⬡ ${prefix}deleteabsen
┗⬣

┏━━⬣ 𝗗𝗮𝘁𝗮𝗯𝗮𝘀𝗲 𝗖𝗺𝗱 
┃⬡ ${prefix}setcmd [reply stiker]
┃⬡ ${prefix}delcmd [reply stiker]
┃⬡ ${prefix}listcmd
┃⬡ ${prefix}addmsg [nama file]
┃⬡ ${prefix}getmsg [nama file]
┃⬡ ${prefix}listmsg
┃⬡ ${prefix}delmsg [nama file]
┗⬣

┏━━⬣ 𝗦𝘁𝗮𝗹𝗸𝗶𝗻𝗴 𝗖𝗺𝗱 
┃⬡ ${prefix}igstalk [username]
┃⬡ ${prefix}ghstalk [username]
┃⬡ ${prefix}tiktokstalk [username]
┃⬡ ${prefix}twitterstalk [username]
┃⬡ ${prefix}ytstalk [channel]
┗⬣

┏━━⬣ 𝗦𝗲𝗮𝗿𝗰𝗵 𝗖𝗺𝗱 
┃⬡ ${prefix}ytsearch [query]
┃⬡ ${prefix}wallpaper [query]
┃⬡ ${prefix}wikimedia [query]
┃⬡ ${prefix}hentai
┃⬡ ${prefix}wattpad [query]
┃⬡ ${prefix}webtoons [query]
┃⬡ ${prefix}drakor [query]
┃⬡ ${prefix}pinterest [query]
┗⬣

┏━━⬣ 𝗔𝗻𝗶𝗺𝗲 𝗦𝗲𝗮𝗿𝗰𝗵 𝗖𝗺𝗱
┃⬡ ${prefix}quotesanime
┃⬡ ${prefix}anime [query]
┃⬡ ${prefix}manga [query]
┃⬡ ${prefix}character [query]
┗⬣

┏━━⬣ 𝗖𝗼𝗻𝘃𝗲𝗿𝘁𝗲𝗿 𝗖𝗺𝗱 
┃⬡ ${prefix}toaudio [video]
┃⬡ ${prefix}tomp3 [video]
┃⬡ ${prefix}tovn [video]
┃⬡ ${prefix}stiker [reply image]
┃⬡ ${prefix}tourl [image/video/stiker]
┃⬡ ${prefix}togif [sticker]
┃⬡ ${prefix}tomp4 [sticker]
┃⬡ ${prefix}toimg [reply sticker]
┃⬡ ${prefix}smeme [text]
┃⬡ ${prefix}smeme2 [text¹|text²]
┃⬡ ${prefix}memegen [text¹|text²]
┃⬡ ${prefix}emojimix [🥺+🥵]
┃⬡ ${prefix}attp [text]
┃⬡ ${prefix}ttp [text]
┃⬡ ${prefix}tulis [text]
┃⬡ ${prefix}ssweb [link]
┗⬣

┏━━⬣ 𝗜𝗺𝗮𝗴𝗲 𝗘𝗳𝗳𝗲𝗰𝘁 𝗖𝗺𝗱
┃⬡ ${prefix}wanted
┃⬡ ${prefix}utatoo
┃⬡ ${prefix}unsharpen
┃⬡ ${prefix}thanos
┃⬡ ${prefix}sniper
┃⬡ ${prefix}sharpen
┃⬡ ${prefix}sepia
┃⬡ ${prefix}scary
┃⬡ ${prefix}rip
┃⬡ ${prefix}redple
┃⬡ ${prefix}rejected
┃⬡ ${prefix}posterize
┃⬡ ${prefix}ps4
┃⬡ ${prefix}pixelize
┃⬡ ${prefix}missionpassed
┃⬡ ${prefix}moustache
┃⬡ ${prefix}lookwhatkarenhave
┃⬡ ${prefix}jail
┃⬡ ${prefix}invert
┃⬡ ${prefix}instagram
┃⬡ ${prefix}greyscale
┃⬡ ${prefix}glitch
┃⬡ ${prefix}gay
┃⬡ ${prefix}frame
┃⬡ ${prefix}fire
┃⬡ ${prefix}distort
┃⬡ ${prefix}dictator
┃⬡ ${prefix}deepfry
┃⬡ ${prefix}ddungeon
┃⬡ ${prefix}circle
┃⬡ ${prefix}challenger
┃⬡ ${prefix}burn
┃⬡ ${prefix}brazzers
┃⬡ ${prefix}beautiful
┗⬣

┏━━⬣ 𝗦𝘁𝗶𝗰𝗸𝗲𝗿 𝗘𝗳𝗳𝗲𝗰𝘁 𝗖𝗺𝗱
┃⬡ ${prefix}jail
┃⬡ ${prefix}red
┃⬡ ${prefix}gay
┃⬡ ${prefix}bloo
┃⬡ ${prefix}blue
┃⬡ ${prefix}sepia
┃⬡ ${prefix}green
┃⬡ ${prefix}glass
┃⬡ ${prefix}invert
┃⬡ ${prefix}blurple
┃⬡ ${prefix}blurple2
┃⬡ ${prefix}wasted
┃⬡ ${prefix}passed
┃⬡ ${prefix}triggered
┃⬡ ${prefix}comrade
┃⬡ ${prefix}greyscale
┃⬡ ${prefix}threshold
┃⬡ ${prefix}brightness
┃⬡ ${prefix}invertgreyscale
┃⬡ ${prefix}fisheye
┃⬡ ${prefix}pixelate
┃⬡ ${prefix}invert
┃⬡ ${prefix}roundimage
┃⬡ ${prefix}1977
┃⬡ ${prefix}aden
┃⬡ ${prefix}clarendon
┃⬡ ${prefix}gingham
┃⬡ ${prefix}hudson
┃⬡ ${prefix}inkwell
┃⬡ ${prefix}earlybird
┃⬡ ${prefix}kelvin
┃⬡ ${prefix}lark
┃⬡ ${prefix}lofi
┃⬡ ${prefix}maven
┃⬡ ${prefix}mayfair
┃⬡ ${prefix}moon
┃⬡ ${prefix}nashville
┃⬡ ${prefix}perpetua
┃⬡ ${prefix}reyes
┃⬡ ${prefix}rise
┃⬡ ${prefix}slumber
┃⬡ ${prefix}stinson
┃⬡ ${prefix}toaster
┃⬡ ${prefix}valencia
┃⬡ ${prefix}walden
┃⬡ ${prefix}willow
┃⬡ ${prefix}xpro2
┃⬡ ${prefix}rainbow
┗⬣

┏━━⬣ 𝗗𝗼𝘄𝗻𝗹𝗼𝗮𝗱𝗲𝗿 𝗖𝗺𝗱
┃⬡ ${prefix}tiktok [link]
┃⬡ ${prefix}tiktoknowm [link]
┃⬡ ${prefix}tiktokwm [link]
┃⬡ ${prefix}tiktokaudio [link]
┃⬡ ${prefix}ytdl [link]
┃⬡ ${prefix}play [query]
┃⬡ ${prefix}ytmp3 [link]
┃⬡ ${prefix}ytshortmp3 [link]
┃⬡ ${prefix}ytmp4 [link]
┃⬡ ${prefix}ytshorts [link]
┃⬡ ${prefix}facebook [link]
┃⬡ ${prefix}facebooksd [link]
┃⬡ ${prefix}facebookhd [link]
┃⬡ ${prefix}fbaudio [link]
┃⬡ ${prefix}igstory [username]
┃⬡ ${prefix}igdl [link]
┃⬡ ${prefix}igphoto [link]
┃⬡ ${prefix}igvideo [link]
┃⬡ ${prefix}igreels [link]
┃⬡ ${prefix}igtv [link]
┃⬡ ${prefix}soundcloud [link]
┃⬡ ${prefix}gitclone [link repo]
┃⬡ ${prefix}gitrepo [username repo branch]
┃⬡ ${prefix}mediafire [link]
┃⬡ ${prefix}twitter [link]
┗⬣

┏━━⬣ 𝗣𝗿𝗶𝗺𝗯𝗼𝗻 𝗖𝗺𝗱
┃⬡ ${prefix}nomorhoki
┃⬡ ${prefix}artimimpi
┃⬡ ${prefix}artinama
┃⬡ ${prefix}ramaljodoh
┃⬡ ${prefix}ramaljodohbali
┃⬡ ${prefix}suamiistri
┃⬡ ${prefix}ramalcinta
┃⬡ ${prefix}cocoknama
┃⬡ ${prefix}pasangan
┃⬡ ${prefix}jadiannikah
┃⬡ ${prefix}sifatusaha
┃⬡ ${prefix}rezeki
┃⬡ ${prefix}pekerjaan
┃⬡ ${prefix}nasib
┃⬡ ${prefix}penyakit
┃⬡ ${prefix}tarot
┃⬡ ${prefix}fengshui
┃⬡ ${prefix}haribaik
┃⬡ ${prefix}harisangar
┃⬡ ${prefix}harisial
┃⬡ ${prefix}nagahari
┃⬡ ${prefix}arahrezeki
┃⬡ ${prefix}peruntungan
┃⬡ ${prefix}weton
┃⬡ ${prefix}karakter
┃⬡ ${prefix}keberuntungan
┃⬡ ${prefix}memancing
┃⬡ ${prefix}masasubur
┃⬡ ${prefix}zodiak 
┃⬡ ${prefix}shio [query]
┗⬣

┏━━⬣ 𝗦𝘁𝗶𝗰𝗸𝗲𝗿 𝗔𝗻𝗶𝗺𝗲 𝗖𝗺𝗱
┃⬡ ${prefix}loli
┃⬡ ${prefix}neko
┃⬡ ${prefix}waifu
┃⬡ ${prefix}shinobu
┃⬡ ${prefix}megumin
┃⬡ ${prefix}bully
┃⬡ ${prefix}cuddle
┃⬡ ${prefix}cry
┃⬡ ${prefix}hug
┃⬡ ${prefix}awoo
┃⬡ ${prefix}kiss
┃⬡ ${prefix}lick
┃⬡ ${prefix}pat
┃⬡ ${prefix}smug
┃⬡ ${prefix}bonk
┃⬡ ${prefix}yeet
┃⬡ ${prefix}blush
┃⬡ ${prefix}smile
┃⬡ ${prefix}wave
┃⬡ ${prefix}highfive
┃⬡ ${prefix}handhold
┃⬡ ${prefix}nom
┃⬡ ${prefix}bite
┃⬡ ${prefix}glomp
┃⬡ ${prefix}slap
┃⬡ ${prefix}kill
┃⬡ ${prefix}happy
┃⬡ ${prefix}wink
┃⬡ ${prefix}poke
┃⬡ ${prefix}dance
┃⬡ ${prefix}cringe
┗⬣

┏━━⬣ 𝗡𝘀𝗳𝘄 & 𝗦𝗳𝘄 𝗖𝗺𝗱
┃⬡ ${prefix}ahegao
┃⬡ ${prefix}ass
┃⬡ ${prefix}bdsm
┃⬡ ${prefix}blowjob
┃⬡ ${prefix}cuckold
┃⬡ ${prefix}cum
┃⬡ ${prefix}ero
┃⬡ ${prefix}femdom
┃⬡ ${prefix}foot
┃⬡ ${prefix}gangbang
┃⬡ ${prefix}glasses
┃⬡ ${prefix}jahy
┃⬡ ${prefix}manga
┃⬡ ${prefix}masturbation
┃⬡ ${prefix}neko
┃⬡ ${prefix}orgy
┃⬡ ${prefix}panties
┃⬡ ${prefix}pussy
┃⬡ ${prefix}tentacles
┃⬡ ${prefix}thighs
┃⬡ ${prefix}yuri
┃⬡ ${prefix}feet
┃⬡ ${prefix}lewdkemo
┃⬡ ${prefix}woof
┃⬡ ${prefix}gasm
┃⬡ ${prefix}solo
┃⬡ ${prefix}8ball
┃⬡ ${prefix}goose
┃⬡ ${prefix}avatar
┃⬡ ${prefix}hololewd
┃⬡ ${prefix}gecg
┃⬡ ${prefix}holo
┃⬡ ${prefix}fox_girl
┃⬡ ${prefix}tits
┃⬡ ${prefix}eroyuri
┃⬡ ${prefix}holoyero
┃⬡ ${prefix}lizard
┃⬡ ${prefix}keta
┃⬡ ${prefix}eron
┃⬡ ${prefix}erok
┃⬡ ${prefix}kemonomimi
┃⬡ ${prefix}cum_jpg
┃⬡ ${prefix}nsfw_avatar
┃⬡ ${prefix}erofeet
┃⬡ ${prefix}meow
┃⬡ ${prefix}wallpaper
┃⬡ ${prefix}waifu
┃⬡ ${prefix}trap
┃⬡ ${prefix}lewd
┃⬡ ${prefix}pussy_jpg
┃⬡ ${prefix}futanari
┃⬡ ${prefix}lewdk
┃⬡ ${prefix}solog
┃⬡ ${prefix}smug
┃⬡ ${prefix}cum
┃⬡ ${prefix}slap
┃⬡ ${prefix}les
┃⬡ ${prefix}erokemo
┃⬡ ${prefix}bj
┃⬡ ${prefix}pwankg
┃⬡ ${prefix}pat
┃⬡ ${prefix}poke
┃⬡ ${prefix}feed
┃⬡ ${prefix}nsfw_neko_gif
┃⬡ ${prefix}pussy
┃⬡ ${prefix}feetg
┃⬡ ${prefix}baka
┃⬡ ${prefix}hug
┃⬡ ${prefix}kiss
┃⬡ ${prefix}tickle
┃⬡ ${prefix}spank
┃⬡ ${prefix}kuni
┃⬡ ${prefix}classic
┃⬡ ${prefix}boobs
┃⬡ ${prefix}anal
┃⬡ ${prefix}ngif
┃⬡ ${prefix}cuddle
┃⬡ ${prefix}zettai
┗⬣

┏━━⬣ 𝗧𝗲𝘅𝘁𝗽𝗿𝗼 𝗖𝗺𝗱 
┃⬡ ${prefix}halloween2 [text¹|text²]
┃⬡ ${prefix}horror [text¹|text²]
┃⬡ ${prefix}game8bit [text¹|text²]
┃⬡ ${prefix}layered [text¹|text²]
┃⬡ ${prefix}glitch2 [text¹|text²]
┃⬡ ${prefix}coolg [text¹|text²]
┃⬡ ${prefix}coolwg [text¹|text²]
┃⬡ ${prefix}realistic [text¹|text²]
┃⬡ ${prefix}space3d [text¹|text²]
┃⬡ ${prefix}gtiktok [text¹|text²]
┃⬡ ${prefix}stone [text¹|text²]
┃⬡ ${prefix}marvel [text¹|text²]
┃⬡ ${prefix}marvel2 [text¹|text²]
┃⬡ ${prefix}pornhub [text¹|text²]
┃⬡ ${prefix}avengers [text¹|text²]
┃⬡ ${prefix}metalr [text¹|text²]
┃⬡ ${prefix}metalg [text¹|text²]
┃⬡ ${prefix}metalg2 [text¹|text²]
┃⬡ ${prefix}halloween2 [text¹|text²]
┃⬡ ${prefix}lion [text¹|text²]
┃⬡ ${prefix}wolf_bw [text¹|text²]
┃⬡ ${prefix}wolf_g [text¹|text²]
┃⬡ ${prefix}ninja [text¹|text²]
┃⬡ ${prefix}3dsteel [text¹|text²]
┃⬡ ${prefix}horror2 [text¹|text²]
┃⬡ ${prefix}lava [text¹|text²]
┃⬡ ${prefix}bagel [text¹|text²]
┃⬡ ${prefix}blackpink [text]
┃⬡ ${prefix}rainbow2 [text]
┃⬡ ${prefix}water_pipe [text]
┃⬡ ${prefix}halloween [text]
┃⬡ ${prefix}sketch [text]
┃⬡ ${prefix}sircuit [text]
┃⬡ ${prefix}discovery [text]
┃⬡ ${prefix}metallic2 [text]
┃⬡ ${prefix}fiction [text]
┃⬡ ${prefix}demon [text]
┃⬡ ${prefix}transformer [text]
┃⬡ ${prefix}berry [text]
┃⬡ ${prefix}thunder [text]
┃⬡ ${prefix}magma [text]
┃⬡ ${prefix}3dstone [text]
┃⬡ ${prefix}neon [text]
┃⬡ ${prefix}glitch [text]
┃⬡ ${prefix}harry_potter [text]
┃⬡ ${prefix}embossed [text]
┃⬡ ${prefix}broken [text]
┃⬡ ${prefix}papercut [text]
┃⬡ ${prefix}gradient [text]
┃⬡ ${prefix}glossy [text]
┃⬡ ${prefix}watercolor [text]
┃⬡ ${prefix}multicolor [text]
┃⬡ ${prefix}neon_devil [text]
┃⬡ ${prefix}underwater [text]
┃⬡ ${prefix}bear [text]
┃⬡ ${prefix}wonderfulg [text]
┃⬡ ${prefix}christmas [text]
┃⬡ ${prefix}neon_light [text]
┃⬡ ${prefix}snow [text]
┃⬡ ${prefix}cloudsky [text]
┃⬡ ${prefix}luxury2 [text]
┃⬡ ${prefix}gradient2 [text]
┃⬡ ${prefix}summer [text]
┃⬡ ${prefix}writing [text]
┃⬡ ${prefix}engraved [text]
┃⬡ ${prefix}summery [text]
┃⬡ ${prefix}3dglue [text]
┃⬡ ${prefix}metaldark [text]
┃⬡ ${prefix}neonlight [text]
┃⬡ ${prefix}oscar [text]
┃⬡ ${prefix}minion [text]
┃⬡ ${prefix}holographic [text]
┃⬡ ${prefix}purple [text]
┃⬡ ${prefix}glossyb [text]
┃⬡ ${prefix}deluxe2 [text]
┃⬡ ${prefix}glossyc [text]
┃⬡ ${prefix}fabric [text]
┃⬡ ${prefix}neonc [text]
┃⬡ ${prefix}newyear [text]
┃⬡ ${prefix}newyear2 [text]
┃⬡ ${prefix}metals [text]
┃⬡ ${prefix}xmas [text]
┃⬡ ${prefix}blood [text]
┃⬡ ${prefix}darkg [text]
┃⬡ ${prefix}joker [text]
┃⬡ ${prefix}wicker [text]
┃⬡ ${prefix}natural [text]
┃⬡ ${prefix}firework [text]
┃⬡ ${prefix}skeleton [text]
┃⬡ ${prefix}balloon [text]
┃⬡ ${prefix}balloon2 [text]
┃⬡ ${prefix}balloon3 [text]
┃⬡ ${prefix}balloon4 [text]
┃⬡ ${prefix}balloon5 [text]
┃⬡ ${prefix}balloon6 [text]
┃⬡ ${prefix}balloon7 [text]
┃⬡ ${prefix}steel [text]
┃⬡ ${prefix}gloss [text]
┃⬡ ${prefix}denim [text]
┃⬡ ${prefix}decorate [text]
┃⬡ ${prefix}decorate2 [text]
┃⬡ ${prefix}peridot [text]
┃⬡ ${prefix}rock [text]
┃⬡ ${prefix}glass [text]
┃⬡ ${prefix}glass2 [text]
┃⬡ ${prefix}glass3 [text]
┃⬡ ${prefix}glass4 [text]
┃⬡ ${prefix}glass5 [text]
┃⬡ ${prefix}glass6 [text]
┃⬡ ${prefix}glass7 [text]
┃⬡ ${prefix}glass8 [text]
┃⬡ ${prefix}captain_as2 [text]
┃⬡ ${prefix}robot [text]
┃⬡ ${prefix}equalizer [text]
┃⬡ ${prefix}toxic [text]
┃⬡ ${prefix}sparkling [text]
┃⬡ ${prefix}sparkling2 [text]
┃⬡ ${prefix}sparkling3 [text]
┃⬡ ${prefix}sparkling4 [text]
┃⬡ ${prefix}sparkling5 [text]
┃⬡ ${prefix}sparkling6 [text]
┃⬡ ${prefix}sparkling7 [text]
┃⬡ ${prefix}decorative [text]
┃⬡ ${prefix}chocolate [text]
┃⬡ ${prefix}strawberry [text]
┃⬡ ${prefix}koifish [text]
┃⬡ ${prefix}bread [text]
┃⬡ ${prefix}matrix [text]
┃⬡ ${prefix}blood2 [text]
┃⬡ ${prefix}neonligth2 [text]
┃⬡ ${prefix}thunder2 [text]
┃⬡ ${prefix}3dbox [text]
┃⬡ ${prefix}neon2 [text]
┃⬡ ${prefix}roadw [text]
┃⬡ ${prefix}bokeh [text]
┃⬡ ${prefix}gneon [text]
┃⬡ ${prefix}advanced [text]
┃⬡ ${prefix}dropwater [text]
┃⬡ ${prefix}wall [text]
┃⬡ ${prefix}chrismast [text]
┃⬡ ${prefix}honey [text]
┃⬡ ${prefix}drug [text]
┃⬡ ${prefix}marble [text]
┃⬡ ${prefix}marble2 [text]
┃⬡ ${prefix}ice [text]
┃⬡ ${prefix}juice [text]
┃⬡ ${prefix}rusty [text]
┃⬡ ${prefix}abstra [text]
┃⬡ ${prefix}biscuit [text]
┃⬡ ${prefix}wood [text]
┃⬡ ${prefix}scifi [text]
┃⬡ ${prefix}metalr [text]
┃⬡ ${prefix}purpleg [text]
┃⬡ ${prefix}shiny [text] 
┃⬡ ${prefix}jewelry [text]
┃⬡ ${prefix}jewelry2 [text]
┃⬡ ${prefix}jewelry3 [text]
┃⬡ ${prefix}jewelry4 [text]
┃⬡ ${prefix}jewelry5 [text]
┃⬡ ${prefix}jewelry6 [text]
┃⬡ ${prefix}jewelry7 [text]
┃⬡ ${prefix}jewelry8 [text]
┃⬡ ${prefix}metalh [text]
┃⬡ ${prefix}golden [text]
┃⬡ ${prefix}glitter [text]
┃⬡ ${prefix}glitter2 [text]
┃⬡ ${prefix}glitter3 [text]
┃⬡ ${prefix}glitter4 [text]
┃⬡ ${prefix}glitter5 [text]
┃⬡ ${prefix}glitter6 [text]
┃⬡ ${prefix}glitter7 [text]
┃⬡ ${prefix}metale [text]
┃⬡ ${prefix}carbon [text]
┃⬡ ${prefix}candy [text]
┃⬡ ${prefix}metalb [text]
┃⬡ ${prefix}gemb [text]
┃⬡ ${prefix}3dchrome [text]
┃⬡ ${prefix}metalb2 [text]
┃⬡ ${prefix}metalg [text]
┃⬡ ${prefix}metalg [text]
┗⬣

┏━━⬣ 𝗘𝗽𝗵𝗼𝘁𝗼𝟯𝟲𝟬 𝗖𝗺𝗱 
┃⬡ ${prefix}youtubegold [text]
┃⬡ ${prefix}youtubesilver [text]
┃⬡ ${prefix}facebookgold [text]
┃⬡ ${prefix}facebooksilver [text]
┃⬡ ${prefix}instagramgold [text]
┃⬡ ${prefix}instagramsilver [text]
┃⬡ ${prefix}twittergold [text]
┃⬡ ${prefix}twittersilver [text]
┃⬡ ${prefix}retrotext [text]
┃⬡ ${prefix}halloweenbats [text]
┃⬡ ${prefix}texthalloween [text]
┃⬡ ${prefix}cardhalloween [text]
┃⬡ ${prefix}birthdaycake [text]
┃⬡ ${prefix}thundertext [text]
┃⬡ ${prefix}icetext [text]
┃⬡ ${prefix}milkcake [text]
┃⬡ ${prefix}snowontext [text]
┃⬡ ${prefix}metalstar [text]
┃⬡ ${prefix}dragonfire [text]
┃⬡ ${prefix}zombie3d [text]
┃⬡ ${prefix}merrycard [text]
┃⬡ ${prefix}generalexam [text]
┃⬡ ${prefix}viettel [text]
┃⬡ ${prefix}embroider [text]
┃⬡ ${prefix}graffititext [text]
┃⬡ ${prefix}graffititext2 [text]
┃⬡ ${prefix}graffititext3 [text]
┃⬡ ${prefix}covergraffiti [text]
┃⬡ ${prefix}moderngold [text]
┃⬡ ${prefix}capercut [text]
┃⬡ ${prefix}lovecard [text]
┃⬡ ${prefix}heartflashlight [text]
┃⬡ ${prefix}heartcup [text]
┃⬡ ${prefix}sunglightshadow [text]
┃⬡ ${prefix}graffiti3d [text]
┃⬡ ${prefix}moderngoldsilver [text]
┃⬡ ${prefix}moderngold2 [text]
┃⬡ ${prefix}moderngold3 [text]
┃⬡ ${prefix}fabrictext [text]
┃⬡ ${prefix}masteryavatar [text]
┃⬡ ${prefix}messagecoffee [text]
┃⬡ ${prefix}announofwin [text]
┃⬡ ${prefix}writeblood [text]
┃⬡ ${prefix}horrorletter [text]
┃⬡ ${prefix}writehorror [text]
┃⬡ ${prefix}shirtclub [text]
┃⬡ ${prefix}angelwing [text]
┃⬡ ${prefix}christmasseason [text]
┃⬡ ${prefix}projectyasuo [text]
┃⬡ ${prefix}lovelycute [text]
┃⬡ ${prefix}womansday [text]
┃⬡ ${prefix}covergamepubg [text]
┃⬡ ${prefix}nameonheart [text]
┃⬡ ${prefix}funnyhalloween [text]
┃⬡ ${prefix}lightningpubg [text]
┃⬡ ${prefix}greetingcardvideo [text]
┃⬡ ${prefix}christmascard [text]
┃⬡ ${prefix}galaxybat [text]
┃⬡ ${prefix}writegalaxy [text]
┃⬡ ${prefix}starsnight [text]
┃⬡ ${prefix}noeltext [text]
┃⬡ ${prefix}textcakes [text]
┃⬡ ${prefix}pubgbirthday [text]
┃⬡ ${prefix}galaxywallpaper [text]
┃⬡ ${prefix}pubgglicthvideo [text]
┃⬡ ${prefix}pubgmascotlogo [text]
┃⬡ ${prefix}realembroidery [text]
┃⬡ ${prefix}vintagetelevision [text]
┃⬡ ${prefix}funnyanimations [text]
┃⬡ ${prefix}glowingtext [text]
┃⬡ ${prefix}textonglass [text]
┃⬡ ${prefix}cartoonstyle [text]
┃⬡ ${prefix}multicolor [text]
┃⬡ ${prefix}watercolor2 [text] 
┃⬡ ${prefix}textsky [text]
┃⬡ ${prefix}summerbeach [text]
┃⬡ ${prefix}1917text [text]
┃⬡ ${prefix}puppycute [text]
┃⬡ ${prefix}rosebirthday [text]
┗⬣

┏━━⬣ 𝗦𝗲𝗿𝘁𝗶𝗳𝗶𝗸𝗮𝘁 𝗖𝗺𝗱 
┃⬡ ${prefix}pacarserti [text¹|text²]
┃⬡ ${prefix}fuckboy [text]
┃⬡ ${prefix}fuckgirl [text]
┃⬡ ${prefix}bucinserti [text]
┃⬡ ${prefix}goodboy [text]
┃⬡ ${prefix}goodgirl [text]
┃⬡ ${prefix}badboy [text]
┃⬡ ${prefix}badgirl [text]
┗⬣

┏━━⬣ 𝗔𝗻𝗼𝗻𝘆𝗺𝗼𝘂𝘀 𝗖𝗵𝗮𝘁
┃⬡ /start
┃⬡ /skip
┃⬡ /leave
┃⬡ /sendkontak
┗⬣

┏━━⬣ 𝗜𝘀𝗹𝗮𝗺𝗶𝗰 𝗖𝗺𝗱 
┃⬡ ${prefix}iqra
┃⬡ ${prefix}hadist
┃⬡ ${prefix}alquran
┃⬡ ${prefix}juzamma
┃⬡ ${prefix}tafsirsurah
┗⬣

┏━━⬣ 𝗢𝘁𝗵𝗲𝗿𝘀 𝗖𝗺𝗱 
┃⬡ ${prefix}afk [reason]
┃⬡ ${prefix}translate kode_bahasa [text]
┃⬡ ${prefix}kalkulator [query]
┗⬣

┏━━⬣ 𝗚𝗮𝗺𝗲 𝗖𝗺𝗱 
┃⬡ ${prefix}tebakgambar 
┃⬡ ${prefix}tebakbendera 
┃⬡ ${prefix}tebakkabupaten 
┃⬡ ${prefix}tebakkimia 
┃⬡ ${prefix}tebaklirik 
┃⬡ ${prefix}tebakkalimat 
┃⬡ ${prefix}tebaktebakan 
┃⬡ ${prefix}tebaksiapa 
┃⬡ ${prefix}tebakkata 
┃⬡ ${prefix}kuismath 
┃⬡ ${prefix}tekateki 
┃⬡ ${prefix}susunkata 
┃⬡ ${prefix}caklontong 
┃⬡ ${prefix}suit @tag 
┃⬡ ${prefix}tictactoe @tag hapus > ${prefix}delttt
┃⬡ ${prefix}slot
┗⬣

┏━━⬣ 𝗙𝘂𝗻 𝗖𝗺𝗱
┃⬡ ${prefix}halah
┃⬡ ${prefix}hilih
┃⬡ ${prefix}huluh
┃⬡ ${prefix}heleh
┃⬡ ${prefix}holoh
┃⬡ ${prefix}bagaimanakah
┃⬡ ${prefix}kapankah
┃⬡ ${prefix}apakah
┃⬡ ${prefix}bisakah
┃⬡ ${prefix}rate
┃⬡ ${prefix}wangy
┃⬡ ${prefix}gantengcek
┃⬡ ${prefix}cekganteng
┃⬡ ${prefix}cantikcek
┃⬡ ${prefix}cekcantik
┃⬡ ${prefix}sangecek
┃⬡ ${prefix}ceksange
┃⬡ ${prefix}cekme
┃⬡ ${prefix}gaycek
┃⬡ ${prefix}cekgay
┃⬡ ${prefix}lesbicek
┗⬣

┏━━⬣ 𝗔𝘀𝘂𝗽𝗮𝗻 𝗖𝗺𝗱 
┃⬡ ${prefix}chika
┃⬡ ${prefix}delvira
┃⬡ ${prefix}ayu
┃⬡ ${prefix}bunga
┃⬡ ${prefix}aura
┃⬡ ${prefix}nisa
┃⬡ ${prefix}ziva
┃⬡ ${prefix}yana
┃⬡ ${prefix}viona
┃⬡ ${prefix}syania
┃⬡ ${prefix}riri
┃⬡ ${prefix}syifa
┃⬡ ${prefix}mama_gina
┃⬡ ${prefix}alcakenya
┃⬡ ${prefix}mangayutri
┃⬡ ${prefix}rikagusriani
┃⬡ ${prefix}asupan
┃⬡ ${prefix}bocil
┃⬡ ${prefix}geayubi
┃⬡ ${prefix}santuy
┃⬡ ${prefix}ukhty
┃⬡ ${prefix}syifa
┗⬣

┏━━⬣ 𝗖𝗲𝗰𝗮𝗻 𝗖𝗺𝗱 
┃⬡ ${prefix}china 
┃⬡ ${prefix}indonesia 
┃⬡ ${prefix}malaysia 
┃⬡ ${prefix}thailand 
┃⬡ ${prefix}korea 
┃⬡ ${prefix}japan 
┃⬡ ${prefix}vietnam 
┃⬡ ${prefix}jenni 
┃⬡ ${prefix}jiso 
┃⬡ ${prefix}lisa  
┃⬡ ${prefix}rose
┗⬣

┏━━⬣ 𝗧𝗲𝗹𝗲𝗴𝗿𝗮𝗺 𝗦𝘁𝗶𝗰𝗸𝗲𝗿 𝗖𝗺𝗱
┃⬡ ${prefix}awoawo
┃⬡ ${prefix}benedict
┃⬡ ${prefix}chat
┃⬡ ${prefix}dbfly
┃⬡ ${prefix}dino_kuning
┃⬡ ${prefix}doge
┃⬡ ${prefix}gojosatoru
┃⬡ ${prefix}hope_boy
┃⬡ ${prefix}jisoo
┃⬡ ${prefix}kr_robot
┃⬡ ${prefix}kucing
┃⬡ ${prefix}lonte
┃⬡ ${prefix}manusia_lidi
┃⬡ ${prefix}menjamet
┃⬡ ${prefix}meow
┃⬡ ${prefix}nicholas
┃⬡ ${prefix}patrick
┃⬡ ${prefix}popoci
┃⬡ ${prefix}sponsbob
┃⬡ ${prefix}kawan_sponsbob
┃⬡ ${prefix}tyni
┗⬣

┏━━⬣ 𝗩𝗼𝗶𝗰𝗲 𝗖𝗵𝗮𝗿𝗴𝗲𝗿 𝗖𝗺𝗱
┃⬡ ${prefix}bass
┃⬡ ${prefix}blown
┃⬡ ${prefix}deep
┃⬡ ${prefix}earrape
┃⬡ ${prefix}fast
┃⬡ ${prefix}fat
┃⬡ ${prefix}nightcore
┃⬡ ${prefix}reverse
┃⬡ ${prefix}robot
┃⬡ ${prefix}slow
┃⬡ ${prefix}tupai
┗⬣

┏━━⬣ 𝗧𝗵𝗮𝗻𝗸𝘀 𝗧𝗼 
┃⬡ My God
┃⬡ My Parents
┃⬡ Dika Ardnt
┃⬡ Zeeone Ofc
┃⬡ Fatih Arridho
┃⬡ Ferdi Z-Afk
┃⬡ Riych
┃⬡ Yoga
┃⬡ Faiz
┃⬡ Adhista
┗⬣
`
}
//━━━━━━━━━━━━━━━[ RULES ]━━━━━━━━━━━━━━━━━//
exports.rules = (prefix) => {
    return `
*──「 RULES AND FAQ  」──*

1. Jangan spam bot. 🙅
Sanksi: *❎ WARN/SOFT BLOCK*

2. Jangan telepon bot. ☎️
Sanksi: *❎ SOFT BLOCK*

3. Jangan mengeksploitasi bot.😖
Sanksi: *PERMANENT BLOCK*

🗯️ Bot tidak atau lambat merespon ?
➡️ Mungkin dipengaruhi oleh jaringan, signal, banned oleh Whatsapp dan beberapa asalan. Tetap patuhi rules‼️

🗯️ Dimana saya bisa mendapatkan Script dari bot ini ?
➡️ Script ini masih private dan tidak pernah diperjual belikan ,bijaklah dalam mengetahui penipu.

🗯️ Boleh saya menambah ke grup?
➡️ Untuk sementara bot dalam status free to add.

🗯️ Prefixnya apa ya?
➡️ Bot ini menggunakan multi prefix. Berarti anda bisa menggunakan prefix #, . , Dan prefix wajar lainnya.

🗯️ Kak, kok syaa chat owner tidak direspon?
➡️ Owner hanya merespon pertanyaan seputar bot Dan kendala eror, tidak untuk kenalan ataupun mengemis script.


Jika sudah dipahami rules-nya, silakan ketik *${prefix}allmenu* untuk memulai!

⚠️ Segala kebijakan dan ketentuan PaizBot di pegang oleh owner dan segala perubahan kebijakan, sewaktu waktu owner berhak mencabut, memblokir user(*﹏*) 

Arigatou Gozaimasu! Untuk kalian user ramah dan Beberapa orang yg ikut membantu juga dalam project pembuatan PaizBot.
😖🙏
`
}
//━━━━━━━━━━━━━━━[ WELCOME & LEAVE ]━━━━━━━━━━━━━━━━━//
exports.welcome = () =>{
	return`┏━━⬣ *Intro Kak* 
┃⬡ 𝖭𝖺𝗆𝖺 :
┃⬡ 𝖴𝗆𝗎𝗋 :
┃⬡ 𝖦𝖾𝗇𝖽𝖾𝗋 :
┃⬡ 𝖠𝗌𝗄𝗈𝗍 :
┃⬡ 𝖯𝖺𝗍𝗎𝗁𝗂 𝗋𝗎𝗅𝖾𝗌 𝗀𝗋𝗎𝗉 𝗒𝖺 𝗄𝖺k
┗⬣
`
}

exports.leave = () =>{
	return`Bye beban group, gosah balik ya lu kalo balik cuma nyampah disini
`
}
//━━━━━━━━━━━━━━━[ SOURCECODE ]━━━━━━━━━━━━━━━━━//
exports.source = () =>{
return`*──「 SOURCE CODE 」──*

MAU CARI APA BANH?🐦🤡

`
}
//━━━━━━━━━━━━━━━[ DONASI ]━━━━━━━━━━━━━━━━━//
exports.donasi = (ownernomer) => {
    return `
*──「 DONASI 」──*

Hai kak ☺️ 
Kalian bisa mendukung saya agar bot ini tetap up to date dengan cara donasi
Berapapun donasi kalian akan sangat berarti 👍
Thanks!





Mau donasi?hubungi nomer owner dibawah





┏━━⬣ *Jadi Bot* 
┃⬡ Jadi Bot 30k/bln
┃⬡ Jadi Bot + Owner 35k
┃⬡ Jasa Run Bot 20k
┗⬣

Contact person Owner :
wa.me/${ownernomer}
`
}
//━━━━━━━━━━━━━━━[ SIMPLE MENU ]━━━━━━━━━━━━━━━━━//
exports.anonymous = () =>{
	return`
┏━━⬣ 𝗔𝗻𝗼𝗻𝘆𝗺𝗼𝘂𝘀 𝗖𝗵𝗮𝘁
┃⬡ /start
┃⬡ /skip
┃⬡ /leave
┃⬡ /sendkontak
┗⬣
`
}

exports.info = (prefix) =>{
	return`
┏━━⬣ 𝗕𝗼𝘁 𝗜𝗻𝗳𝗼
┃⬡ ${prefix}owner
┃⬡ ${prefix}rules
┃⬡ ${prefix}ping
┃⬡ ${prefix}runtime
┃⬡ ${prefix}speedtest
┃⬡ ${prefix}botstatus
┃⬡ ${prefix}donate
┃⬡ ${prefix}script
┗⬣
`
}

exports.ownermenu = (prefix) =>{
return`
┏━━⬣ 𝗢𝘄𝗻𝗲𝗿 𝗖𝗺𝗱 
┃⬡ < evaluate
┃⬡ > evaluate
┃⬡ $ exec
┃⬡ => exec
┃⬡ ${prefix}mute [query]
┃⬡ ${prefix}setmenu [query]
┃⬡ ${prefix}setwm [packname|author]
┃⬡ ${prefix}sendsesi
┃⬡ ${prefix}listpc
┃⬡ ${prefix}listgc
┃⬡ ${prefix}culik [id gc | jumlah member]
┃⬡ ${prefix}broadcast [text]
┃⬡ ${prefix}bc [text]
┃⬡ ${prefix}bcgc [text]
┃⬡ ${prefix}bcvideo [reply video]
┃⬡ ${prefix}bcimage [reply image]
┃⬡ ${prefix}bcaudio [reply audio/vn]
┃⬡ ${prefix}bcsticker [reply sticker]
┃⬡ ${prefix}nsfw [on/off]
┃⬡ ${prefix}autorespond [on/off]
┃⬡ ${prefix}antiviewonce [on/off]
┃⬡ ${prefix}join [link]
┃⬡ ${prefix}self
┃⬡ ${prefix}public [only bot]
┃⬡ ${prefix}del [reply pesan bot]
┃⬡ ${prefix}setppbot [reply image]
┗⬣
`
}

exports.database = (prefix) =>{
	return`┏━━⬣ 𝗗𝗮𝘁𝗮𝗯𝗮𝘀𝗲 𝗖𝗺𝗱 
┃⬡ ${prefix}setcmd [reply stiker]
┃⬡ ${prefix}delcmd [reply stiker]
┃⬡ ${prefix}listcmd
┃⬡ ${prefix}addmsg [nama file]
┃⬡ ${prefix}getmsg [nama file]
┃⬡ ${prefix}listmsg
┃⬡ ${prefix}delmsg [nama file]
┗⬣
`
}

exports.group = (prefix) =>{
	return`
┏━━⬣ 𝗚𝗿𝗼𝘂𝗽 𝗖𝗺𝗱 
┃⬡ ${prefix}listonline
┃⬡ ${prefix}sider
┃⬡ ${prefix}wm packname|author
┃⬡ ${prefix}infochat
┃⬡ ${prefix}setdesk [text]
┃⬡ ${prefix}setppgrup [reply image]
┃⬡ ${prefix}antilink [on/off]
┃⬡ ${prefix}antilinkyoutube [on/off]
┃⬡ ${prefix}antilinktiktok [on/off]
┃⬡ ${prefix}revoke
┃⬡ ${prefix}leave
┃⬡ ${prefix}add [62***]
┃⬡ ${prefix}kick @tag
┃⬡ ${prefix}leave
┃⬡ ${prefix}linkgc
┃⬡ ${prefix}take packname|author
┃⬡ ${prefix}group [open/close]
┃⬡ ${prefix}tagall [text]
┃⬡ ${prefix}hidetag [text]
┃⬡ ${prefix}stickertag
┃⬡ ${prefix}videotag [query]
┃⬡ ${prefix}vntag [query]
┃⬡ ${prefix}imagetag [query]
┃⬡ ${prefix}absenstart
┃⬡ ${prefix}absen
┃⬡ ${prefix}cekabsen
┃⬡ ${prefix}deleteabsen
┗⬣
`
}

exports.anime = (prefix) =>{
	return`
┏━━⬣ 𝗔𝗻𝗶𝗺𝗲 𝗦𝗲𝗮𝗿𝗰𝗵 
┃⬡ ${prefix}quotesanime
┃⬡ ${prefix}anime [query]
┃⬡ ${prefix}manga [query]
┃⬡ ${prefix}character [query]
┗⬣
`
}

exports.stalk = (prefix) =>{
	return`┏━━⬣ 𝗦𝘁𝗮𝗹𝗸𝗶𝗻𝗴 𝗖𝗺𝗱 
┃⬡ ${prefix}igstalk [username]
┃⬡ ${prefix}ghstalk [username]
┃⬡ ${prefix}tiktokstalk [username]
┃⬡ ${prefix}twitterstalk [username]
┃⬡ ${prefix}ytstalk [channel]
┗⬣
`
}

exports.search = (prefix) =>{
	return`┏━━⬣ 𝗦𝗲𝗮𝗿𝗰𝗵 𝗖𝗺𝗱 
┃⬡ ${prefix}ytsearch [query]
┃⬡ ${prefix}wallpaper [query]
┃⬡ ${prefix}wikimedia [query]
┃⬡ ${prefix}hentai
┃⬡ ${prefix}wattpad [query]
┃⬡ ${prefix}webtoons [query]
┃⬡ ${prefix}drakor [query]
┃⬡ ${prefix}pinterest [query]
┗⬣
`
}

exports.converter = (prefix) =>{
	return`┏━━⬣ 𝗖𝗼𝗻𝘃𝗲𝗿𝘁𝗲𝗿 𝗖𝗺𝗱 
┃⬡ ${prefix}toaudio [video]
┃⬡ ${prefix}tomp3 [video]
┃⬡ ${prefix}tovn [video]
┃⬡ ${prefix}stiker [reply image]
┃⬡ ${prefix}tourl [image/video/stiker]
┃⬡ ${prefix}togif [sticker]
┃⬡ ${prefix}tomp4 [sticker]
┃⬡ ${prefix}toimg [reply sticker]
┃⬡ ${prefix}smeme [text]
┃⬡ ${prefix}smeme2 [text¹|text²]
┃⬡ ${prefix}memegen [text¹|text²]
┃⬡ ${prefix}emojimix [🥺+🥵]
┃⬡ ${prefix}attp [text]
┃⬡ ${prefix}ttp [text]
┃⬡ ${prefix}tulis [text]
┗⬣
`
}

exports.effect = (prefix) =>{
	return`┏━━⬣ 𝗜𝗺𝗮𝗴𝗲 𝗘𝗳𝗳𝗲𝗰𝘁 𝗖𝗺𝗱
┃⬡ ${prefix}wanted
┃⬡ ${prefix}utatoo
┃⬡ ${prefix}unsharpen
┃⬡ ${prefix}thanos
┃⬡ ${prefix}sniper
┃⬡ ${prefix}sharpen
┃⬡ ${prefix}sepia
┃⬡ ${prefix}scary
┃⬡ ${prefix}rip
┃⬡ ${prefix}redple
┃⬡ ${prefix}rejected
┃⬡ ${prefix}posterize
┃⬡ ${prefix}ps4
┃⬡ ${prefix}pixelize
┃⬡ ${prefix}missionpassed
┃⬡ ${prefix}moustache
┃⬡ ${prefix}lookwhatkarenhave
┃⬡ ${prefix}jail
┃⬡ ${prefix}invert
┃⬡ ${prefix}instagram
┃⬡ ${prefix}greyscale
┃⬡ ${prefix}glitch
┃⬡ ${prefix}gay
┃⬡ ${prefix}frame
┃⬡ ${prefix}fire
┃⬡ ${prefix}distort
┃⬡ ${prefix}dictator
┃⬡ ${prefix}deepfry
┃⬡ ${prefix}ddungeon
┃⬡ ${prefix}circle
┃⬡ ${prefix}challenger
┃⬡ ${prefix}burn
┃⬡ ${prefix}brazzers
┃⬡ ${prefix}beautiful
┗⬣
`}

exports.effect2 = (prefix) =>{
	return`┏━━⬣ 𝗦𝘁𝗶𝗰𝗸𝗲𝗿 𝗘𝗳𝗳𝗲𝗰𝘁 𝗖𝗺𝗱
┃⬡ ${prefix}jail
┃⬡ ${prefix}red
┃⬡ ${prefix}gay
┃⬡ ${prefix}bloo
┃⬡ ${prefix}blue
┃⬡ ${prefix}sepia
┃⬡ ${prefix}green
┃⬡ ${prefix}glass
┃⬡ ${prefix}invert
┃⬡ ${prefix}blurple
┃⬡ ${prefix}blurple2
┃⬡ ${prefix}wasted
┃⬡ ${prefix}passed
┃⬡ ${prefix}triggered
┃⬡ ${prefix}comrade
┃⬡ ${prefix}greyscale
┃⬡ ${prefix}threshold
┃⬡ ${prefix}brightness
┃⬡ ${prefix}invertgreyscale
┃⬡ ${prefix}fisheye
┃⬡ ${prefix}pixelate
┃⬡ ${prefix}invert
┃⬡ ${prefix}roundimage
┃⬡ ${prefix}1977
┃⬡ ${prefix}aden
┃⬡ ${prefix}clarendon
┃⬡ ${prefix}gingham
┃⬡ ${prefix}hudson
┃⬡ ${prefix}inkwell
┃⬡ ${prefix}earlybird
┃⬡ ${prefix}kelvin
┃⬡ ${prefix}lark
┃⬡ ${prefix}lofi
┃⬡ ${prefix}maven
┃⬡ ${prefix}mayfair
┃⬡ ${prefix}moon
┃⬡ ${prefix}nashville
┃⬡ ${prefix}perpetua
┃⬡ ${prefix}reyes
┃⬡ ${prefix}rise
┃⬡ ${prefix}slumber
┃⬡ ${prefix}stinson
┃⬡ ${prefix}toaster
┃⬡ ${prefix}valencia
┃⬡ ${prefix}walden
┃⬡ ${prefix}willow
┃⬡ ${prefix}xpro2
┃⬡ ${prefix}rainbow
┗⬣
`
}

exports.download = (prefix) =>{
return`┏━━⬣ 𝗗𝗼𝘄𝗻𝗹𝗼𝗮𝗱𝗲𝗿 𝗖𝗺𝗱
┃⬡ ${prefix}tiktok [link]
┃⬡ ${prefix}tiktoknowm [link]
┃⬡ ${prefix}tiktokwm [link]
┃⬡ ${prefix}tiktokaudio [link]
┃⬡ ${prefix}ytdl [link]
┃⬡ ${prefix}play [query]
┃⬡ ${prefix}ytmp3 [link]
┃⬡ ${prefix}ytshortmp3 [link]
┃⬡ ${prefix}ytmp4 [link]
┃⬡ ${prefix}ytshorts [link]
┃⬡ ${prefix}facebook [link]
┃⬡ ${prefix}facebooksd [link]
┃⬡ ${prefix}facebookhd [link]
┃⬡ ${prefix}fbaudio [link]
┃⬡ ${prefix}igstory [username]
┃⬡ ${prefix}igdl [link]
┃⬡ ${prefix}igphoto [link]
┃⬡ ${prefix}igvideo [link]
┃⬡ ${prefix}igreels [link]
┃⬡ ${prefix}igtv [link]
┃⬡ ${prefix}twitter [link]
┃⬡ ${prefix}soundcloud [link]
┃⬡ ${prefix}gitclone [link repo]
┃⬡ ${prefix}gitrepo [username repo branch]
┃⬡ ${prefix}mediafire [link]
┗⬣
`
}

exports.ranime = (prefix) =>{
	return`┏━━⬣ 𝗦𝘁𝗶𝗰𝗸𝗲𝗿 𝗔𝗻𝗶𝗺𝗲 𝗖𝗺𝗱
┃⬡ ${prefix}loli
┃⬡ ${prefix}neko
┃⬡ ${prefix}waifu
┃⬡ ${prefix}shinobu
┃⬡ ${prefix}megumin
┃⬡ ${prefix}bully
┃⬡ ${prefix}cuddle
┃⬡ ${prefix}cry
┃⬡ ${prefix}hug
┃⬡ ${prefix}awoo
┃⬡ ${prefix}kiss
┃⬡ ${prefix}lick
┃⬡ ${prefix}pat
┃⬡ ${prefix}smug
┃⬡ ${prefix}bonk
┃⬡ ${prefix}yeet
┃⬡ ${prefix}blush
┃⬡ ${prefix}smile
┃⬡ ${prefix}wave
┃⬡ ${prefix}highfive
┃⬡ ${prefix}handhold
┃⬡ ${prefix}nom
┃⬡ ${prefix}bite
┃⬡ ${prefix}glomp
┃⬡ ${prefix}slap
┃⬡ ${prefix}kill
┃⬡ ${prefix}happy
┃⬡ ${prefix}wink
┃⬡ ${prefix}poke
┃⬡ ${prefix}dance
┃⬡ ${prefix}cringe
┗⬣
`
}

exports.nsfw = (prefix) =>{
	return`┏━━⬣ 𝗡𝘀𝗳𝘄 & 𝗦𝗳𝘄 𝗖𝗺𝗱
┃⬡ ${prefix}ahegao
┃⬡ ${prefix}ass
┃⬡ ${prefix}bdsm
┃⬡ ${prefix}blowjob
┃⬡ ${prefix}cuckold
┃⬡ ${prefix}cum
┃⬡ ${prefix}ero
┃⬡ ${prefix}femdom
┃⬡ ${prefix}foot
┃⬡ ${prefix}gangbang
┃⬡ ${prefix}glasses
┃⬡ ${prefix}jahy
┃⬡ ${prefix}manga
┃⬡ ${prefix}masturbation
┃⬡ ${prefix}neko
┃⬡ ${prefix}orgy
┃⬡ ${prefix}panties
┃⬡ ${prefix}pussy
┃⬡ ${prefix}tentacles
┃⬡ ${prefix}thighs
┃⬡ ${prefix}yuri
┃⬡ ${prefix}feet
┃⬡ ${prefix}lewdkemo
┃⬡ ${prefix}woof
┃⬡ ${prefix}gasm
┃⬡ ${prefix}solo
┃⬡ ${prefix}8ball
┃⬡ ${prefix}goose
┃⬡ ${prefix}avatar
┃⬡ ${prefix}hololewd
┃⬡ ${prefix}gecg
┃⬡ ${prefix}holo
┃⬡ ${prefix}fox_girl
┃⬡ ${prefix}tits
┃⬡ ${prefix}eroyuri
┃⬡ ${prefix}holoyero
┃⬡ ${prefix}lizard
┃⬡ ${prefix}keta
┃⬡ ${prefix}eron
┃⬡ ${prefix}erok
┃⬡ ${prefix}kemonomimi
┃⬡ ${prefix}cum_jpg
┃⬡ ${prefix}nsfw_avatar
┃⬡ ${prefix}erofeet
┃⬡ ${prefix}meow
┃⬡ ${prefix}wallpaper
┃⬡ ${prefix}waifu
┃⬡ ${prefix}trap
┃⬡ ${prefix}lewd
┃⬡ ${prefix}pussy_jpg
┃⬡ ${prefix}futanari
┃⬡ ${prefix}lewdk
┃⬡ ${prefix}solog
┃⬡ ${prefix}smug
┃⬡ ${prefix}cum
┃⬡ ${prefix}slap
┃⬡ ${prefix}les
┃⬡ ${prefix}erokemo
┃⬡ ${prefix}bj
┃⬡ ${prefix}pwankg
┃⬡ ${prefix}pat
┃⬡ ${prefix}poke
┃⬡ ${prefix}feed
┃⬡ ${prefix}nsfw_neko_gif
┃⬡ ${prefix}pussy
┃⬡ ${prefix}feetg
┃⬡ ${prefix}baka
┃⬡ ${prefix}hug
┃⬡ ${prefix}kiss
┃⬡ ${prefix}tickle
┃⬡ ${prefix}spank
┃⬡ ${prefix}kuni
┃⬡ ${prefix}classic
┃⬡ ${prefix}boobs
┃⬡ ${prefix}anal
┃⬡ ${prefix}ngif
┃⬡ ${prefix}cuddle
┃⬡ ${prefix}zettai
┗⬣
`
}

exports.textpro = (prefix) =>{
	return`┏━━⬣ 𝗧𝗲𝘅𝘁𝗽𝗿𝗼 𝗖𝗺𝗱 
┃⬡ ${prefix}halloween2 [text¹|text²]
┃⬡ ${prefix}horror [text¹|text²]
┃⬡ ${prefix}game8bit [text¹|text²]
┃⬡ ${prefix}layered [text¹|text²]
┃⬡ ${prefix}glitch2 [text¹|text²]
┃⬡ ${prefix}coolg [text¹|text²]
┃⬡ ${prefix}coolwg [text¹|text²]
┃⬡ ${prefix}realistic [text¹|text²]
┃⬡ ${prefix}space3d [text¹|text²]
┃⬡ ${prefix}gtiktok [text¹|text²]
┃⬡ ${prefix}stone [text¹|text²]
┃⬡ ${prefix}marvel [text¹|text²]
┃⬡ ${prefix}marvel2 [text¹|text²]
┃⬡ ${prefix}pornhub [text¹|text²]
┃⬡ ${prefix}avengers [text¹|text²]
┃⬡ ${prefix}metalr [text¹|text²]
┃⬡ ${prefix}metalg [text¹|text²]
┃⬡ ${prefix}metalg2 [text¹|text²]
┃⬡ ${prefix}halloween2 [text¹|text²]
┃⬡ ${prefix}lion [text¹|text²]
┃⬡ ${prefix}wolf_bw [text¹|text²]
┃⬡ ${prefix}wolf_g [text¹|text²]
┃⬡ ${prefix}ninja [text¹|text²]
┃⬡ ${prefix}3dsteel [text¹|text²]
┃⬡ ${prefix}horror2 [text¹|text²]
┃⬡ ${prefix}lava [text¹|text²]
┃⬡ ${prefix}bagel [text¹|text²]
┃⬡ ${prefix}blackpink [text]
┃⬡ ${prefix}rainbow2 [text]
┃⬡ ${prefix}water_pipe [text]
┃⬡ ${prefix}halloween [text]
┃⬡ ${prefix}sketch [text]
┃⬡ ${prefix}sircuit [text]
┃⬡ ${prefix}discovery [text]
┃⬡ ${prefix}metallic2 [text]
┃⬡ ${prefix}fiction [text]
┃⬡ ${prefix}demon [text]
┃⬡ ${prefix}transformer [text]
┃⬡ ${prefix}berry [text]
┃⬡ ${prefix}thunder [text]
┃⬡ ${prefix}magma [text]
┃⬡ ${prefix}3dstone [text]
┃⬡ ${prefix}neon [text]
┃⬡ ${prefix}glitch [text]
┃⬡ ${prefix}harry_potter [text]
┃⬡ ${prefix}embossed [text]
┃⬡ ${prefix}broken [text]
┃⬡ ${prefix}papercut [text]
┃⬡ ${prefix}gradient [text]
┃⬡ ${prefix}glossy [text]
┃⬡ ${prefix}watercolor [text]
┃⬡ ${prefix}multicolor [text]
┃⬡ ${prefix}neon_devil [text]
┃⬡ ${prefix}underwater [text]
┃⬡ ${prefix}bear [text]
┃⬡ ${prefix}wonderfulg [text]
┃⬡ ${prefix}christmas [text]
┃⬡ ${prefix}neon_light [text]
┃⬡ ${prefix}snow [text]
┃⬡ ${prefix}cloudsky [text]
┃⬡ ${prefix}luxury2 [text]
┃⬡ ${prefix}gradient2 [text]
┃⬡ ${prefix}summer [text]
┃⬡ ${prefix}writing [text]
┃⬡ ${prefix}engraved [text]
┃⬡ ${prefix}summery [text]
┃⬡ ${prefix}3dglue [text]
┃⬡ ${prefix}metaldark [text]
┃⬡ ${prefix}neonlight [text]
┃⬡ ${prefix}oscar [text]
┃⬡ ${prefix}minion [text]
┃⬡ ${prefix}holographic [text]
┃⬡ ${prefix}purple [text]
┃⬡ ${prefix}glossyb [text]
┃⬡ ${prefix}deluxe2 [text]
┃⬡ ${prefix}glossyc [text]
┃⬡ ${prefix}fabric [text]
┃⬡ ${prefix}neonc [text]
┃⬡ ${prefix}newyear [text]
┃⬡ ${prefix}newyear2 [text]
┃⬡ ${prefix}metals [text]
┃⬡ ${prefix}xmas [text]
┃⬡ ${prefix}blood [text]
┃⬡ ${prefix}darkg [text]
┃⬡ ${prefix}joker [text]
┃⬡ ${prefix}wicker [text]
┃⬡ ${prefix}natural [text]
┃⬡ ${prefix}firework [text]
┃⬡ ${prefix}skeleton [text]
┃⬡ ${prefix}balloon [text]
┃⬡ ${prefix}balloon2 [text]
┃⬡ ${prefix}balloon3 [text]
┃⬡ ${prefix}balloon4 [text]
┃⬡ ${prefix}balloon5 [text]
┃⬡ ${prefix}balloon6 [text]
┃⬡ ${prefix}balloon7 [text]
┃⬡ ${prefix}steel [text]
┃⬡ ${prefix}gloss [text]
┃⬡ ${prefix}denim [text]
┃⬡ ${prefix}decorate [text]
┃⬡ ${prefix}decorate2 [text]
┃⬡ ${prefix}peridot [text]
┃⬡ ${prefix}rock [text]
┃⬡ ${prefix}glass [text]
┃⬡ ${prefix}glass2 [text]
┃⬡ ${prefix}glass3 [text]
┃⬡ ${prefix}glass4 [text]
┃⬡ ${prefix}glass5 [text]
┃⬡ ${prefix}glass6 [text]
┃⬡ ${prefix}glass7 [text]
┃⬡ ${prefix}glass8 [text]
┃⬡ ${prefix}captain_as2 [text]
┃⬡ ${prefix}robot [text]
┃⬡ ${prefix}equalizer [text]
┃⬡ ${prefix}toxic [text]
┃⬡ ${prefix}sparkling [text]
┃⬡ ${prefix}sparkling2 [text]
┃⬡ ${prefix}sparkling3 [text]
┃⬡ ${prefix}sparkling4 [text]
┃⬡ ${prefix}sparkling5 [text]
┃⬡ ${prefix}sparkling6 [text]
┃⬡ ${prefix}sparkling7 [text]
┃⬡ ${prefix}decorative [text]
┃⬡ ${prefix}chocolate [text]
┃⬡ ${prefix}strawberry [text]
┃⬡ ${prefix}koifish [text]
┃⬡ ${prefix}bread [text]
┃⬡ ${prefix}matrix [text]
┃⬡ ${prefix}blood2 [text]
┃⬡ ${prefix}neonligth2 [text]
┃⬡ ${prefix}thunder2 [text]
┃⬡ ${prefix}3dbox [text]
┃⬡ ${prefix}neon2 [text]
┃⬡ ${prefix}roadw [text]
┃⬡ ${prefix}bokeh [text]
┃⬡ ${prefix}gneon [text]
┃⬡ ${prefix}advanced [text]
┃⬡ ${prefix}dropwater [text]
┃⬡ ${prefix}wall [text]
┃⬡ ${prefix}chrismast [text]
┃⬡ ${prefix}honey [text]
┃⬡ ${prefix}drug [text]
┃⬡ ${prefix}marble [text]
┃⬡ ${prefix}marble2 [text]
┃⬡ ${prefix}ice [text]
┃⬡ ${prefix}juice [text]
┃⬡ ${prefix}rusty [text]
┃⬡ ${prefix}abstra [text]
┃⬡ ${prefix}biscuit [text]
┃⬡ ${prefix}wood [text]
┃⬡ ${prefix}scifi [text]
┃⬡ ${prefix}metalr [text]
┃⬡ ${prefix}purpleg [text]
┃⬡ ${prefix}shiny [text] 
┃⬡ ${prefix}jewelry [text]
┃⬡ ${prefix}jewelry2 [text]
┃⬡ ${prefix}jewelry3 [text]
┃⬡ ${prefix}jewelry4 [text]
┃⬡ ${prefix}jewelry5 [text]
┃⬡ ${prefix}jewelry6 [text]
┃⬡ ${prefix}jewelry7 [text]
┃⬡ ${prefix}jewelry8 [text]
┃⬡ ${prefix}metalh [text]
┃⬡ ${prefix}golden [text]
┃⬡ ${prefix}glitter [text]
┃⬡ ${prefix}glitter2 [text]
┃⬡ ${prefix}glitter3 [text]
┃⬡ ${prefix}glitter4 [text]
┃⬡ ${prefix}glitter5 [text]
┃⬡ ${prefix}glitter6 [text]
┃⬡ ${prefix}glitter7 [text]
┃⬡ ${prefix}metale [text]
┃⬡ ${prefix}carbon [text]
┃⬡ ${prefix}candy [text]
┃⬡ ${prefix}metalb [text]
┃⬡ ${prefix}gemb [text]
┃⬡ ${prefix}3dchrome [text]
┃⬡ ${prefix}metalb2 [text]
┃⬡ ${prefix}metalg [text]
┃⬡ ${prefix}metalg [text]
┗⬣
`
}

exports.other = (prefix) =>{
return`┏━━⬣ 𝗢𝘁𝗵𝗲𝗿𝘀 𝗖𝗺𝗱 
┃⬡ ${prefix}afk [reason]
┃⬡ ${prefix}translate kode_bahasa [text]
┃⬡ ${prefix}kalkulator [query]
┗⬣
`
}
exports.game = (prefix) =>{
return`┏━━⬣ 𝗚𝗮𝗺𝗲 𝗖𝗺𝗱 
┃⬡ ${prefix}tebakgambar 
┃⬡ ${prefix}tebakbendera 
┃⬡ ${prefix}tebakkabupaten 
┃⬡ ${prefix}tebakkimia 
┃⬡ ${prefix}tebaklirik 
┃⬡ ${prefix}tebaklagu 
┃⬡ ${prefix}tebakkalimat 
┃⬡ ${prefix}tebaktebakan 
┃⬡ ${prefix}tebaksiapa 
┃⬡ ${prefix}tebakkata 
┃⬡ ${prefix}kuismath 
┃⬡ ${prefix}tekateki 
┃⬡ ${prefix}susunkata 
┃⬡ ${prefix}caklontong 
┃⬡ ${prefix}suit @tag 
┃⬡ ${prefix}tictactoe @tag hapus > ${prefix}delttt
┃⬡ ${prefix}slot 
┗⬣
`
}
exports.asupan = (prefix) =>{
return`┏━━⬣ 𝗔𝘀𝘂𝗽𝗮𝗻 𝗖𝗺𝗱 
┃⬡ ${prefix}chika
┃⬡ ${prefix}delvira
┃⬡ ${prefix}ayu
┃⬡ ${prefix}bunga
┃⬡ ${prefix}aura
┃⬡ ${prefix}nisa
┃⬡ ${prefix}ziva
┃⬡ ${prefix}yana
┃⬡ ${prefix}viona
┃⬡ ${prefix}syania
┃⬡ ${prefix}riri
┃⬡ ${prefix}syifa
┃⬡ ${prefix}mama_gina
┃⬡ ${prefix}alcakenya
┃⬡ ${prefix}mangayutri
┃⬡ ${prefix}rikagusriani
┃⬡ ${prefix}asupan
┃⬡ ${prefix}bocil
┃⬡ ${prefix}geayubi
┃⬡ ${prefix}santuy
┃⬡ ${prefix}ukhty
┃⬡ ${prefix}syifa
┗⬣
`
}
exports.cecan = (prefix) =>{
return`┏━━⬣ 𝗖𝗲𝗰𝗮𝗻 𝗖𝗺𝗱 
┃⬡ ${prefix}china 
┃⬡ ${prefix}indonesia 
┃⬡ ${prefix}malaysia 
┃⬡ ${prefix}thailand 
┃⬡ ${prefix}korea 
┃⬡ ${prefix}japan 
┃⬡ ${prefix}vietnam 
┃⬡ ${prefix}jenni 
┃⬡ ${prefix}jiso 
┃⬡ ${prefix}lisa  
┃⬡ ${prefix}rose
┗⬣
`
}

exports.tqto = () =>{
	return`┏━━⬣ 𝗧𝗵𝗮𝗻𝗸𝘀 𝗧𝗼 
┃⬡ My God
┃⬡ My Parents
┃⬡ Dika Ardnt
┃⬡ Zeeone Ofc
┃⬡ Fatih Arridho
┃⬡ Ferdi Z-Afk
┃⬡ Riych
┃⬡ Yoga
┃⬡ Faiz
┃⬡ Adhista
┗⬣
`
}

exports.primbonmenu = (prefix) =>{
	return`┏━━⬣ 𝗣𝗿𝗶𝗺𝗯𝗼𝗻 𝗖𝗺𝗱
┃⬡ ${prefix}nomorhoki
┃⬡ ${prefix}artimimpi [query]
┃⬡ ${prefix}artinama [query]
┃⬡ ${prefix}ramaljodoh
┃⬡ ${prefix}ramaljodohbali
┃⬡ ${prefix}suamiistri
┃⬡ ${prefix}ramalcinta
┃⬡ ${prefix}cocoknama
┃⬡ ${prefix}pasangan
┃⬡ ${prefix}jadiannikah
┃⬡ ${prefix}sifatusaha
┃⬡ ${prefix}rezeki
┃⬡ ${prefix}pekerjaan
┃⬡ ${prefix}nasib
┃⬡ ${prefix}penyakit
┃⬡ ${prefix}tarot
┃⬡ ${prefix}fengshui
┃⬡ ${prefix}haribaik
┃⬡ ${prefix}harisangar
┃⬡ ${prefix}harisial
┃⬡ ${prefix}nagahari
┃⬡ ${prefix}arahrezeki
┃⬡ ${prefix}peruntungan
┃⬡ ${prefix}weton
┃⬡ ${prefix}karakter
┃⬡ ${prefix}keberuntungan
┃⬡ ${prefix}memancing
┃⬡ ${prefix}masasubur
┃⬡ ${prefix}zodiak 
┃⬡ ${prefix}shio [query]
┗⬣
`
}

exports.ephotomenu = (prefix) =>{
	return`┏━━⬣ 𝗘𝗽𝗵𝗼𝘁𝗼𝟯𝟲𝟬 𝗖𝗺𝗱 
┃⬡ ${prefix}youtubegold [text]
┃⬡ ${prefix}youtubesilver [text]
┃⬡ ${prefix}facebookgold [text]
┃⬡ ${prefix}facebooksilver [text]
┃⬡ ${prefix}instagramgold [text]
┃⬡ ${prefix}instagramsilver [text]
┃⬡ ${prefix}twittergold [text]
┃⬡ ${prefix}twittersilver [text]
┃⬡ ${prefix}retrotext [text]
┃⬡ ${prefix}halloweenbats [text]
┃⬡ ${prefix}texthalloween [text]
┃⬡ ${prefix}cardhalloween [text]
┃⬡ ${prefix}birthdaycake [text]
┃⬡ ${prefix}thundertext [text]
┃⬡ ${prefix}icetext [text]
┃⬡ ${prefix}milkcake [text]
┃⬡ ${prefix}snowontext [text]
┃⬡ ${prefix}metalstar [text]
┃⬡ ${prefix}dragonfire [text]
┃⬡ ${prefix}zombie3d [text]
┃⬡ ${prefix}merrycard [text]
┃⬡ ${prefix}generalexam [text]
┃⬡ ${prefix}viettel [text]
┃⬡ ${prefix}embroider [text]
┃⬡ ${prefix}graffititext [text]
┃⬡ ${prefix}graffititext2 [text]
┃⬡ ${prefix}graffititext3 [text]
┃⬡ ${prefix}covergraffiti [text]
┃⬡ ${prefix}moderngold [text]
┃⬡ ${prefix}capercut [text]
┃⬡ ${prefix}lovecard [text]
┃⬡ ${prefix}heartflashlight [text]
┃⬡ ${prefix}heartcup [text]
┃⬡ ${prefix}sunglightshadow [text]
┃⬡ ${prefix}graffiti3d [text]
┃⬡ ${prefix}moderngoldsilver [text]
┃⬡ ${prefix}moderngold2 [text]
┃⬡ ${prefix}moderngold3 [text]
┃⬡ ${prefix}fabrictext [text]
┃⬡ ${prefix}masteryavatar [text]
┃⬡ ${prefix}messagecoffee [text]
┃⬡ ${prefix}announofwin [text]
┃⬡ ${prefix}writeblood [text]
┃⬡ ${prefix}horrorletter [text]
┃⬡ ${prefix}writehorror [text]
┃⬡ ${prefix}shirtclub [text]
┃⬡ ${prefix}angelwing [text]
┃⬡ ${prefix}christmasseason [text]
┃⬡ ${prefix}projectyasuo [text]
┃⬡ ${prefix}lovelycute [text]
┃⬡ ${prefix}womansday [text]
┃⬡ ${prefix}covergamepubg [text]
┃⬡ ${prefix}nameonheart [text]
┃⬡ ${prefix}funnyhalloween [text]
┃⬡ ${prefix}lightningpubg [text]
┃⬡ ${prefix}greetingcardvideo [text]
┃⬡ ${prefix}christmascard [text]
┃⬡ ${prefix}galaxybat [text]
┃⬡ ${prefix}writegalaxy [text]
┃⬡ ${prefix}starsnight [text]
┃⬡ ${prefix}noeltext [text]
┃⬡ ${prefix}textcakes [text]
┃⬡ ${prefix}pubgbirthday [text]
┃⬡ ${prefix}galaxywallpaper [text]
┃⬡ ${prefix}pubgglicthvideo [text]
┃⬡ ${prefix}pubgmascotlogo [text]
┃⬡ ${prefix}realembroidery [text]
┃⬡ ${prefix}vintagetelevision [text]
┃⬡ ${prefix}funnyanimations [text]
┃⬡ ${prefix}glowingtext [text]
┃⬡ ${prefix}textonglass [text]
┃⬡ ${prefix}cartoonstyle [text]
┃⬡ ${prefix}multicolor [text]
┃⬡ ${prefix}watercolor2 [text] 
┃⬡ ${prefix}textsky [text]
┃⬡ ${prefix}summerbeach [text]
┃⬡ ${prefix}1917text [text]
┃⬡ ${prefix}puppycute [text]
┃⬡ ${prefix}rosebirthday [text]
┗⬣
`
}

exports.stcmenu = (prefix) =>{
	return`┏━━⬣ 𝗧𝗲𝗹𝗲𝗴𝗿𝗮𝗺 𝗦𝘁𝗶𝗰𝗸𝗲𝗿 𝗖𝗺𝗱
┃⬡ ${prefix}awoawo
┃⬡ ${prefix}benedict
┃⬡ ${prefix}chat
┃⬡ ${prefix}dbfly
┃⬡ ${prefix}dino_kuning
┃⬡ ${prefix}doge
┃⬡ ${prefix}gojosatoru
┃⬡ ${prefix}hope_boy
┃⬡ ${prefix}jisoo
┃⬡ ${prefix}kr_robot
┃⬡ ${prefix}kucing
┃⬡ ${prefix}lonte
┃⬡ ${prefix}manusia_lidi
┃⬡ ${prefix}menjamet
┃⬡ ${prefix}meow
┃⬡ ${prefix}nicholas
┃⬡ ${prefix}patrick
┃⬡ ${prefix}popoci
┃⬡ ${prefix}sponsbob
┃⬡ ${prefix}kawan_sponsbob
┃⬡ ${prefix}tyni
┗⬣
`}

exports.fun = (prefix) =>{
	return`
┏━━⬣ 𝗙𝘂𝗻 𝗖𝗺𝗱
┃⬡ ${prefix}halah
┃⬡ ${prefix}hilih
┃⬡ ${prefix}huluh
┃⬡ ${prefix}heleh
┃⬡ ${prefix}holoh
┃⬡ ${prefix}bagaimanakah
┃⬡ ${prefix}kapankah
┃⬡ ${prefix}apakah
┃⬡ ${prefix}bisakah
┃⬡ ${prefix}rate
┃⬡ ${prefix}wangy
┃⬡ ${prefix}gantengcek
┃⬡ ${prefix}cekganteng
┃⬡ ${prefix}cantikcek
┃⬡ ${prefix}cekcantik
┃⬡ ${prefix}sangecek
┃⬡ ${prefix}ceksange
┃⬡ ${prefix}cekme
┃⬡ ${prefix}gaycek
┃⬡ ${prefix}cekgay
┃⬡ ${prefix}lesbicek
┗⬣
`
}

exports.voice = (prefix) =>{
	return`
┏━━⬣ 𝗩𝗼𝗶𝗰𝗲 𝗖𝗵𝗮𝗿𝗴𝗲𝗿 𝗖𝗺𝗱
┃⬡ ${prefix}bass
┃⬡ ${prefix}blown
┃⬡ ${prefix}deep
┃⬡ ${prefix}earrape
┃⬡ ${prefix}fast
┃⬡ ${prefix}fat
┃⬡ ${prefix}nightcore
┃⬡ ${prefix}reverse
┃⬡ ${prefix}robot
┃⬡ ${prefix}slow
┃⬡ ${prefix}tupai
┗⬣
`
}
exports.islamic = (prefix) =>{
	return`
┏━━⬣ 𝗜𝘀𝗹𝗮𝗺𝗶𝗰 𝗖𝗺𝗱 
┃⬡ ${prefix}iqra
┃⬡ ${prefix}hadist
┃⬡ ${prefix}alquran
┃⬡ ${prefix}juzamma
┃⬡ ${prefix}tafsirsurah
┗⬣
`
}

exports.sertifikat = (prefix) =>{
	return`┏━━⬣ 𝗦𝗲𝗿𝘁𝗶𝗳𝗶𝗸𝗮𝘁 𝗖𝗺𝗱 
┃⬡ ${prefix}pacarserti [text¹|text²]
┃⬡ ${prefix}fuckboy [text]
┃⬡ ${prefix}fuckgirl [text]
┃⬡ ${prefix}bucinserti [text]
┃⬡ ${prefix}goodboy [text]
┃⬡ ${prefix}goodgirl [text]
┃⬡ ${prefix}badboy [text]
┃⬡ ${prefix}badgirl [text]
┗⬣
`
}
//━━━━━━━━━━━━━━━[ BATAS AKHIR ]━━━━━━━━━━━━━━━━━//
