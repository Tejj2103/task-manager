const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)


const sendWelcomEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'tejkumar.2103@gmail.com',
        subject: 'Thanks for joining in!',
        text: `Welcome to the Task App, ${name}. Let me know how do you like our services.`
    })

}

const sendCancelEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'tejkumar.2103@gmail.com',
        subject: 'Happy to serve you, See you soo!',
        text: `Thank you so much for using Task App, ${name}. Let me know how do you like our services.`
    })

}

module.exports = {
    sendWelcomEmail, sendCancelEmail
}