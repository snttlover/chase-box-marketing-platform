const express = require('express')
const bodyParser = require('body-parser')
const nodemailer = require('nodemailer')
const path = require('path')
const app = express()
const request = require('request');
const yandexCheckout = require('yandex-checkout')('722138', 'live_c1U1QBjEjTUNuR4fBiZ-VbjIAxyj2Go6Wfwbw7C_K-Y');
let paymentId = ''
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, 'client/build')));
    app.get('*', (req, res) => { res.sendfile(path.join(__dirname, 'client', 'build', 'index.html')); })
}

app.post('/payment', (req, res) => {
    // let newNum = Math.random().toString(36).substr(2, 9)
    // request('https://3dsec.sberbank.ru/payment/rest/register.do?userName=chase-box-api&password=chase-box&orderNumber=' + newNum + '&amount=' + (req.body.value * 100) + '&returnUrl=https://ru.chase-box.com/success', function (error, response, body) {
    //     if (!error && response.statusCode == 200) {
    //         console.log(body) // Print the google web page.
    //     }
    //     res.send({body: JSON.parse(body), checkId: newNum})

    // })
    yandexCheckout.createPayment({
        "amount": {
            "value": "" + req.body.value,
            "currency": "RUB"
        },
        "capture": true,
        "confirmation": {
            "type": "redirect",
            "return_url": "http://ru.chase-box.com/success"
        },
        "receipt": {
            "customer": {
                "full_name": "Иванов Иван Иванович",
                "phone": "79000000000"
            },
            "items": [
                {
                    "description": "Наименование товара 1",
                    "quantity": "1.00",
                    "amount": {
                        "value": "" + req.body.value,
                        "currency": "RUB"
                    },
                    "vat_code": "2",
                    "payment_mode": "full_prepayment",
                    "payment_subject": "commodity"
                }
            ]
        }
    })
        .then((result) => {
            paymentId = result.id;
            console.log(paymentId);

            res.send(result)
        })
})
app.post('/payment_of', (req, res) => {

    yandexCheckout.createPayment({
        "amount": {
            "value": "" + req.body.value,
            "currency": "RUB"
        },
        "payment_method_data": {
            "type": "b2b_sberbank",
            "payment_purpose": "Оплата заказа",
            "vat_data": {
                "type": "calculated",
                "rate": 18,
                "amount": {
                    "value": "" + req.body.value,
                    "currency": "RUB"
                }
            }
        },
        "confirmation": {
            "type": "redirect",
            "return_url": "https://ru.chase-box.com/success"
        },
        "capture": true,
        "description": "Оплата заказа"
    })
        .then((result) => {
            paymentId = result.id;
            console.log(paymentId);

            res.send(result)
        })
})
// app.get('/api/v3', (req, res) => res.send(info))
app.post('/check', (req, res) => {
    yandexCheckout.getPayment(req.body.id)
        .then((result) => {
            console.log(result);
            res.send(result)
        })
        .catch((err) => {
            console.error(err);
        })
})
// app.post('/sbercheck', (req, res) => {
//     request('https://3dsec.sberbank.ru/payment/rest/getOrderStatusExtended.do?userName=chase-box-api&password=chase-box&orderNumber=' + req.body.id + '&returnUrl=https://ru.chase-box.com/success', function (error, response, body) {
//         if (!error && response.statusCode == 200) {
//             console.log(body) // Print the google web page
//         }
//         res.send(body)

//     })
// })


app.post('/api/form', (req, res) => {
    if (req.body.format === "work") {
        nodemailer.createTestAccount((err, account) => {
            const transporter = nodemailer.createTransport({
                host: 'smtp.mail.ru',
                port: '465',
                auth: {
                    user: 'chaseboxsendme@mail.ru',
                    pass: 'rXt74Hx2HLvvHEEj'
                }
            });
            let mailOptions = {

                from: 'chaseboxsendme@mail.ru',
                to: 'chaseboxsendme@mail.ru',
                subject: 'Новый заказ',
                text: req.body.data

            }
            transporter.sendMail(mailOptions, (err, info) => {
                if (err) {
                    return console.log(err)
                }
                console.log('Message sent: %s', info.message)
            })
        })
    }
    if (req.body.format === "message") {
        nodemailer.createTestAccount((err, account) => {
            const transporter = nodemailer.createTransport({
                host: 'smtp.mail.ru',
                port: '465',
                auth: {
                    user: 'chaseboxsendme@mail.ru',
                    pass: 'rXt74Hx2HLvvHEEj'
                }
            });
            let mailOptions = {

                from: 'chaseboxsendme@mail.ru',
                to: 'chaseboxsendme@mail.ru',
                subject: 'Новое сообщение',
                text: req.body.data

            }
            transporter.sendMail(mailOptions, (err, info) => {
                if (err) {
                    return console.log(err)
                }
                console.log('Message sent: %s', info.message)
            })
        })
    }
    if (req.body.format === "messageBase") {
        nodemailer.createTestAccount((err, account) => {
            const transporter = nodemailer.createTransport({
                host: 'smtp.mail.ru',
                port: '465',
                auth: {
                    user: 'chaseboxsendme@mail.ru',
                    pass: 'rXt74Hx2HLvvHEEj'
                }
            });
            let mailOptions = {

                from: 'chaseboxsendme@mail.ru',
                to: req.body.email,
                subject: 'ChaseBox-новое сообщение',
                text: req.body.data

            }
            transporter.sendMail(mailOptions, (err, info) => {
                if (err) {
                    return console.log(err)
                }
                console.log('Message sent: %s', info.message)
            })
        })
    }
    if (req.body.format === "feedback") {
        nodemailer.createTestAccount((err, account) => {
            const transporter = nodemailer.createTransport({
                host: 'smtp.mail.ru',
                port: '465',
                auth: {
                    user: 'chaseboxsendme@mail.ru',
                    pass: 'rXt74Hx2HLvvHEEj'
                }
            });
            let mailOptions = {

                from: 'chaseboxsendme@mail.ru',
                to: "chaseboxsendme@mail.ru",
                subject: 'Фидбек',
                text: req.body.data

            }
            transporter.sendMail(mailOptions, (err, info) => {
                if (err) {
                    return console.log(err)
                }
                console.log('Message sent: %s', info.message)
            })
        })
    }
    if (req.body.format === "breef") {
        nodemailer.createTestAccount((err, account) => {
            const transporter = nodemailer.createTransport({
                host: 'smtp.mail.ru',
                port: '465',
                auth: {
                    user: 'chaseboxsendme@mail.ru',
                    pass: 'rXt74Hx2HLvvHEEj'
                }
            });
            let mailOptions = {

                from: 'chaseboxsendme@mail.ru',
                to: "chaseboxsendme@mail.ru",
                subject: 'Бриф',
                text: req.body.data

            }
            transporter.sendMail(mailOptions, (err, info) => {
                if (err) {
                    return console.log(err)
                }
                console.log('Message sent: %s', info.message)
            })
        })
    }
    // else {
    //     nodemailer.createTestAccount((err, account) => {
    //         const transporter = nodemailer.createTransport({
    //             host: 'smtp.mail.ru',
    //             port: '465',
    //             auth: {
    //                 user: 'chaseboxsender@mail.ru ',
    //                 pass: 'rXt74Hx2HLvvHEEj'
    //             }
    //         });
    //         let mailOptions = {

    //             from: 'chaseboxsender@mail.ru ',
    //             to: 'chaseboxdatabase@gmail.com',
    //             subject: req.body.object,
    //             text: req.body.data

    //         }
    //         transporter.sendMail(mailOptions, (err, info) => {
    //             if (err) {
    //                 return console.log(err)
    //             }
    //             console.log('Message sent: %s', info.message)
    //         })
    //     })
    // }
})
// let newNum = Math.random().toString(36).substr(2, 9)
// request('https://3dsec.sberbank.ru/payment/rest/register.do?userName=chase-box-api&password=chase-box&orderNumber=' + newNum + '&amount=15000&returnUrl=https://ru.chase-box.com/success', function (error, response, body) {
//     if (!error && response.statusCode == 200) {
//         console.log(body) // Print the google web page.
//     }
//     request('https://3dsec.sberbank.ru/payment/rest/getOrderStatusExtended.do?userName=chase-box-api&password=chase-box&orderNumber=' + newNum, function (err, res, bod) {
//         if (!err && res.statusCode == 200) {
//             console.log(bod) // Print the google web page
//         }

//     })
// })




// const PORT = process.env.PORT || 3002

// app.listen(PORT, () => {
//     console.log(`Server listening on port ${PORT}`)
// })






const httpServer = http.createServer(app);
https.createServer({
  key: fs.readFileSync('privatekey.pem'),
  cert: fs.readFileSync('certificate.pem'),
}, app)
.listen(443, () => {
    console.log(fs.readFileSync('certificate.pem'));
})
var servHttp = http;
servHttp.createServer(function (req, res) {
    res.writeHead(301, { "Location": "https://" + req.headers['host'] + req.url });
    res.end();
}).listen(80);