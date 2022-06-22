/*
Created By @ZeeoneOfc
Base Ori : @DikaArdnt
Recode¹ : @ZeeoneOfc
Recode² : @Riy | @Yoga
paiz paling ngontol yahahaha
*/

const fs = require('fs')
const chalk = require('chalk')

    //── 「 Website Apikey 」 ──//
    
global.APIs = {
	alfa: 'https://api-alphabot.herokuapp.com',
}

    //── 「 Free Apikey 」 ──//
    
global.APIKeys = {
	'https://api-alphabot.herokuapp.com': 'Alphabot',
}

    //── 「 Setting 」 ──//
    
global.autoread = false 
global.autorecording = true 
global.autoketik = false 
global.available = false 

    //── 「 Setting Owner 」 ──//
    
global.owner = ["6281249086533","12286002016","6285864948107"]
global.ownernomerr = "+6281249086533"
global.ownernomer = "6281249086533"
global.botname = "Paiz xnxx"
global.ownername= "Paiz xnxx"
global.email = "paizrajinngocok@gmail.com"
global.youtube = "https://youtube.com/channel/UCR2iLtp3jno9K9F9ObSiwbg"
global.github = "https://github.com/Paizx"
global.myig = "https://instagram.com/fz_frdnd"
global.aboutme = "https://bit.ly/3CcGtUJ"
global.mygc = "https://chat.whatsapp.com/CRY23lVKmXB7sCMhHmcwVw"
global.myweb ="https://bit.ly/3CcGtUJ"
global.region = "Mars"

    //── 「 Thumbnail 」 ──//
    
global.thumbnail = "./image/xxiz.jpg"

    //── 「 Image Simple Menu 」 ──//
    
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

    //── 「 Sticker Wm 」 ──//
    
global.packname = 'Paiz' 
global.author = 'xnxx' 

    //── 「 Image Welcomr 」 ──//
    
global.background_welcome="https://telegra.ph/file/90a931648de597820bc08.jpg" // maks size 30kb, agar welcome image nya tdk delay

    //── 「 Session Name 」 ──//
    
global.sessionName = 'session'

    //── 「 Prefix & Simbol 」 ──//
    
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'

    //── 「 Message 」 ──//
    
global.mess = {
    sukses: '🤗Done, Oke Desu~',
    admin: 'Perintah Ini Hanya Bisa Digunakan Oleh Admin !',
    botAdmin: 'Perintah Ini Hanya Bisa Digunakan Ketika Bot Menjadi Admin !',
    owner: 'Perintah Ini Hanya Bisa Digunakan Oleh Owner !',
    group: 'Perintah Ini Hanya Bisa Digunakan Di Group !',
    private: 'Perintah Ini Hanya Bisa Digunakan Di Private !',
	bot: 'Fitur Khusus Pengguna Nomor Bot',
    errtoimg: 'Maaf Saat Ini Belum Support Sticker Gif !',
    wait: '⏳ Sedang Di Proses',
	lockCmd: 'Fitur Tidak Diaktifkan Oleh Owner!',
	example1: 'Selamat Datang @user Di Group @subject Jangan Lupa Baca Rules @desc\n\nNote :\n1. @user (Mention User Join)\n2. @bio (Get Bio User Join)\n3. @tanggal (Date Now)\n4. @desc (Get Description Group)\n5. @subject (Group Name)'
}

    //── 「 Notifikasi Update File 」 ──//
    
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
