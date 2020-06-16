require('dotenv').config({ path: __dirname + '/.env' })//load env variables
const twilio = require("./TwilioNotification")
const to_number = 'desinationNumber'
var otp = Math.floor(100000 + Math.random() * 900000)//random number b/w 100000 & 999999 (inclusive)
const smsmsg = 'your one time password for secure access is ' + otp
//we like to hear voice OTP's as one-two-three rather than one hundred and twenty three
var splittedotp = otp.toString().split('').join(' ');
const voicemsg = 'your one time password for secure access is ' + splittedotp


//send a voice notification
twilio.sendVoiceNotification(to_number, voicemsg).then((sid) => {
    console.log("sid", sid)
}).catch(error => {
    console.log("error", error)
})

//send a SMS notification
twilio.sendSMSNotification(to_number, smsmsg).then((sid) => {
    console.log("sid", sid)
}).catch(error => {
    console.log("error", error)
})