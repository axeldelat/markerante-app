// eslint-disable-next-line import/no-anonymous-default-export
export default function (req, res) {
    console.log(req)

    const eeClient = require('elasticemail-webapiclient').client;

    const options = {
        apiKey: process.env.ELASTICEMAIL_API,
        apiUri: 'https://api.elasticemail.com/',
        apiVersion: 'v2'
    }

    const EE = new eeClient(options);

    // Load account data
    //EE.Account.Load().then(function(resp) {
    //    console.log(resp);
    //});

    const emailParams = {
        "subject": 'Nuevo Mensaje de Markerante-App',
        "to": 'axel@markerante.com',
        "from": process.env.ELASTICEMAIL_SENDER_EMAIL,
        "replyTo": req.body.email,
        "body": `
            <p>Hola Axel,</p>
            <p>Alguien ha escrito un mensaje desde Markerante.com</p>
            <ul>
            <li><strong>Nombre:</strong> ${req.body.fname}</li>
            <li><strong>Apellido:</strong> ${req.body.lname}</li>
            <li><strong>Restaurante:</strong> ${req.body.restaurant}</li>
            <li><strong>Email:</strong> ${req.body.email}</li>
            <li><strong>Teléfono:</strong> ${req.body.phone}</li>
            <li><strong>Referido:</strong> ${req.body.referral}</li>
            <li><strong>Aceptó Terminos y Condiciones:</strong> ${req.body.privacyAcceptance}</li>
            </ul>
            <p><strong>Mensaje</strong></p>
            <p>${req.body.message}</p>
            `,
        "fromName": 'Markerante 🍔🌮🛵',
        "bodyType": 'Plain'
    };

    // Send email
    EE.Email.Send(emailParams)

    .catch((err) => {
        throw new Error(err);
    });

    res.status(200)
}
