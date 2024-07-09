const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://thavee:Priyanka@123,@cluster0.m5lbmlv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "94773913394";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "unavailable" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_04_37_07_09_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAxMDgsXG4gICAgICAgIDc4LFxuICAgICAgICAyNTEsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjUwLFxuICAgICAgICA1MyxcbiAgICAgICAgMzIsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTkyLFxuICAgICAgICAyMDUsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNTksXG4gICAgICAgIDkxLFxuICAgICAgICAyNDQsXG4gICAgICAgIDkwLFxuICAgICAgICAxMDcsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTgzLFxuICAgICAgICA1LFxuICAgICAgICAxNzAsXG4gICAgICAgIDgwLFxuICAgICAgICA2OSxcbiAgICAgICAgNTksXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjcsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMjksXG4gICAgICAgIDYxLFxuICAgICAgICAxODAsXG4gICAgICAgIDExMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjgsXG4gICAgICAgIDk0LFxuICAgICAgICA4NSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMTAsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTA4LFxuICAgICAgICAyMTgsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjgsXG4gICAgICAgIDMwLFxuICAgICAgICAxNCxcbiAgICAgICAgMjEsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTE1LFxuICAgICAgICA1OCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMDUsXG4gICAgICAgIDY0LFxuICAgICAgICAxMCxcbiAgICAgICAgODUsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTQsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjI5LFxuICAgICAgICA4MCxcbiAgICAgICAgNixcbiAgICAgICAgMjMwLFxuICAgICAgICAyMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAxMTIsXG4gICAgICAgIDgwLFxuICAgICAgICAyMixcbiAgICAgICAgMTg4LFxuICAgICAgICAxNDgsXG4gICAgICAgIDI1MSxcbiAgICAgICAgNjQsXG4gICAgICAgIDE1LFxuICAgICAgICAxNjAsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTU4LFxuICAgICAgICA0NyxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMzQsXG4gICAgICAgIDQyLFxuICAgICAgICA0NixcbiAgICAgICAgMCxcbiAgICAgICAgMzAsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjQsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTcxLFxuICAgICAgICA3NixcbiAgICAgICAgMzgsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjMsXG4gICAgICAgIDk0LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjMsXG4gICAgICAgIDc0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk0LFxuICAgICAgICA5MixcbiAgICAgICAgODgsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMzQsXG4gICAgICAgIDE1LFxuICAgICAgICAyMDgsXG4gICAgICAgIDExNCxcbiAgICAgICAgNjksXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNjQsXG4gICAgICAgIDMzLFxuICAgICAgICAxNDIsXG4gICAgICAgIDQ1LFxuICAgICAgICAyNDcsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTI4LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE0LFxuICAgICAgICAyMzAsXG4gICAgICAgIDY1LFxuICAgICAgICA5MCxcbiAgICAgICAgMTQyLFxuICAgICAgICA1MCxcbiAgICAgICAgMjksXG4gICAgICAgIDE4OSxcbiAgICAgICAgNzQsXG4gICAgICAgIDM1LFxuICAgICAgICAxMjcsXG4gICAgICAgIDI5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTYsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjA0LFxuICAgICAgICA5NyxcbiAgICAgICAgODAsXG4gICAgICAgIDc2LFxuICAgICAgICAyNixcbiAgICAgICAgMjA0LFxuICAgICAgICAxNjIsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNjMsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTU4LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMjIsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTU3LFxuICAgICAgICAyMzEsXG4gICAgICAgIDk0LFxuICAgICAgICA4MCxcbiAgICAgICAgMTIyLFxuICAgICAgICAyNDQsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNDcsXG4gICAgICAgIDQxLFxuICAgICAgICAxNDAsXG4gICAgICAgIDkyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNixcbiAgICAgICAgMTE4LFxuICAgICAgICAyMTIsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMTksXG4gICAgICAgIDExNCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMixcbiAgICAgICAgMjA1LFxuICAgICAgICAyNCxcbiAgICAgICAgMTIxLFxuICAgICAgICAzMixcbiAgICAgICAgMTI3LFxuICAgICAgICA1MyxcbiAgICAgICAgMjE4LFxuICAgICAgICA3MSxcbiAgICAgICAgMTM5LFxuICAgICAgICAyNDMsXG4gICAgICAgIDExNSxcbiAgICAgICAgODUsXG4gICAgICAgIDIxLFxuICAgICAgICAyMzUsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTQwLFxuICAgICAgICAxMTcsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTY1LFxuICAgICAgICAzOCxcbiAgICAgICAgNzgsXG4gICAgICAgIDE1NyxcbiAgICAgICAgOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4MCxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDEyNixcbiAgICAgICAgICAxNixcbiAgICAgICAgICA3M1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMTk5LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxMjBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNTMsXG4gICAgICAgIDI2LFxuICAgICAgICA5NCxcbiAgICAgICAgMixcbiAgICAgICAgMjIsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMjQsXG4gICAgICAgIDg0LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMTE5LFxuICAgICAgICA3NSxcbiAgICAgICAgMTYwLFxuICAgICAgICA3MSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMjIsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTksXG4gICAgICAgIDE2LFxuICAgICAgICAyMzgsXG4gICAgICAgIDExNSxcbiAgICAgICAgNixcbiAgICAgICAgNzEsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTYwLFxuICAgICAgICA0LFxuICAgICAgICAyMzksXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTU2LFxuICAgICAgICAxODAsXG4gICAgICAgIDg0LFxuICAgICAgICA4OSxcbiAgICAgICAgNjAsXG4gICAgICAgIDE1NCxcbiAgICAgICAgOTYsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTU0LFxuICAgICAgICAxNzksXG4gICAgICAgIDIxNixcbiAgICAgICAgMTQsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTYsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMixcbiAgICAgICAgMjE3LFxuICAgICAgICA3OCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNTYsXG4gICAgICAgIDI4LFxuICAgICAgICAyMTYsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjUwLFxuICAgICAgICAyNDgsXG4gICAgICAgIDE2LFxuICAgICAgICAyNDYsXG4gICAgICAgIDI2LFxuICAgICAgICA2OSxcbiAgICAgICAgMjMxLFxuICAgICAgICAzMCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNTMsXG4gICAgICAgIDIzLFxuICAgICAgICAxXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxODgsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiUjR5SW5oNGsyTWFETFFTMkZkT00rc3d6MkN5dmV2Y0FqdkxSS25Tc1lSMD1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiTFFZbW1XUU5TZXVJX292Y0FfWGN1QVwiLFxuICBcInBob25lSWRcIjogXCJjYmFjNDUyYS1hY2JlLTRkNmUtOGNlMi0wZDkxN2RkMmQyODdcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjM1LFxuICAgICAgMjQwLFxuICAgICAgNCxcbiAgICAgIDE3OCxcbiAgICAgIDgxLFxuICAgICAgMjM2LFxuICAgICAgMTA4LFxuICAgICAgMzMsXG4gICAgICAxNDEsXG4gICAgICA5OCxcbiAgICAgIDI1NSxcbiAgICAgIDU5LFxuICAgICAgMTQ0LFxuICAgICAgMTEwLFxuICAgICAgOTAsXG4gICAgICAyMjksXG4gICAgICAyMzEsXG4gICAgICAxMzQsXG4gICAgICA5MixcbiAgICAgIDEwM1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IGZhbHNlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTQ3LFxuICAgICAgMCxcbiAgICAgIDg5LFxuICAgICAgMjcsXG4gICAgICAxMSxcbiAgICAgIDEyNSxcbiAgICAgIDk3LFxuICAgICAgMjEwLFxuICAgICAgMTU4LFxuICAgICAgMjM4LFxuICAgICAgNzEsXG4gICAgICA4MixcbiAgICAgIDI5LFxuICAgICAgOCxcbiAgICAgIDIwLFxuICAgICAgMjA4LFxuICAgICAgMjYsXG4gICAgICAxMyxcbiAgICAgIDQ0LFxuICAgICAgNzRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNOaUNuczRERUlmOXNyUUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImsrK1ZUOXZ6bVV6dkI4cXhlWUk2Y2RxQStnQlR5ejltQVNnUlI1QVF6VXM9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiMCsvYm5FZXlValo0T0dtcGJHQU1zWDl1bEUzNldabGxkNkJBWk94T3FKV0ZDTTlKcHBZNjViMzNTb0RiSFVob3czaDJpWnhteHpkeElVMlF3bzliakE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiRkxIM1RLUlFZMnk3K0VMMkFZMkVJVEF3V3dsb3BxVE5uK29GR1BTMEVsMCtkTFdDN3huN01LcEtuRlVkNkxzU0ZVYlloNXhEcHRJdzZEcGhSdW4rQkE9PVwiXG4gIH0sXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5NDc3MzkxMzM5NDoxMUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiNTg3Mjk0NDk5NzU4OTI6MTFAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiVGhhdml5YVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTQ3NzM5MTMzOTQ6MTFAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgNyxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgNzVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImlwaG9uZVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIwNDk5ODQ5LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBUFBjXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFQUGMuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCI1cWszZFVkYlI2K3QxSU1pR2ZodEY3aW1GWnllb00rZ05VVy80a0hseHlrPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjk2OTM3NjA4OCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIwNDk5ODUyNTAyXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Thaviya",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
