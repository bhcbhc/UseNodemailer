/**
 * Created by Ninghai on 2018/2/22.
 */
const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
    service: 'qq',
    auth: {
        user: '995265694@qq.com',
        pass: '' // 授权码
    }
})

const mailOptions = {
    from: '995265694@qq.com',
    to: 'ninghai@ssymmetry.com',
    subject: 'nodemailer test', // 主题
    html: '<h2>地址链接</h2><a href="https://github.com/bhcbhc/UseNodemailer">仓库地址</a>',
    attachments: [{
        filename: 'package.json',
        path: './package.json'
    }]
}

transporter.sendMail(mailOptions, function (error,info) {
    if (error) {
        console.log(error)
    }
    console.log('发送成功')
})