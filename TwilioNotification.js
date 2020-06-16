const accountSid = process.env['accountSid']
const authToken = process.env['authToken']
const client = require('twilio')(accountSid, authToken);
const twilio_number = process.env['twilio_number']
module.exports.sendVoiceNotification = (to, message) => {
    return new Promise((resolve, reject) => {
        client.calls
            .create({
                twiml: `<Response><Pause length="2"/><Say>${message}</Say><Pause length="2"/><Say loop="2">${message}</Say></Response>`,
                to: to,
                from: twilio_number
            })
            .then(call => {
                // console.log(call.sid)
                resolve(call.sid)
            }).catch(exception => {
                // console.log(exception)
                reject(exception)
            })
    })
}

module.exports.sendSMSNotification = (to, message) => {
    return new Promise((resolve, reject) => {
        client.messages
            .create({
                body: message,
                from: twilio_number,
                to: to
            })
            .then(message => {
                //   console.log(message.sid)
                resolve(message.sid)
            })
            .catch(exception => {
                // console.log(exception)
                reject(exception)
            })
    })
}