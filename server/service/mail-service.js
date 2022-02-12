const nodemailer = require("nodemailer");
const mailConfig = require("../config");
class MailService {
  constructor() {
    this.transporter = nodemailer.createTransport({
      host: mailConfig.SMTP_HOST,
      port: mailConfig.SMTP_PORT,
      secure: false,
      auth: {
        user: mailConfig.SMTP_USER,
        pass: mailConfig.SMTP_PASSWORD,
      },
    });
  }
  async sendActivationMail(to, link) {
    await this.transporter.sendMail({
      from: mailConfig.SMTP_USER,
      to,
      subject: ` Активация аккаунта на ${process.env.API_URL}`,
      html: `
      <div>
      <h1>Для активации перейдите по ссылке</h1>
      <a href="${link}">${link}</a>
      </div>
      `,
    });
  }
}
module.exports = new MailService();
