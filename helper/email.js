const nodemailer = require('nodemailer');
const credentials = require('../config/email_cred')
const OverallConsumption = require('../models/OverallConsumption');


const {daysCounter} = require('../frontend/src/util/time_utils');

const alertThreshold = 2;

let transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true, //upgrade later with STARTTLS
  auth: credentials
});

const overseers = [
  "andy.k.huang@gmail.com",
  "satomiampuku2@gmail.com",
  "li.jasontse@gmail.com",
  "michaeldeanmdmph@gmail.com"
]



function alertIfBalanceLow(fundsBalance, lastAlertedAt, overallId) {
  const daysElapsed = daysCounter(lastAlertedAt, new Date());
  if (fundsBalance < alertThreshold && daysElapsed >= 2) {
    const balance = fundsBalance.toString().slice(0,5); //convert to string, truncate to two decimal places

    const message = {
      from: credentials.user,
      to: overseers,
      subject: "URGENT - Donation Funds Running Low.",
      text: `Donation funds are below the alert threshold of $${alertThreshold}. There is $${balance} left. Please donate to waterwellsforafrica.org and update amount on MongoDB.`,
      html: `<p>Donation funds are below the alert threshold of $${alertThreshold}. There is $${balance} left. Please donate to <a href="waterwellsforafrica.org">Water Wells For Africa</a> and update amount on <a href="https://cloud.mongodb.com/v2/607d0c796207aa6192c18afa#metrics/replicaSet/607d106b9d1f1c0fd009db4d/explorer/Arium/overallconsumptions/find">MongoDB</a>.</p>`
    };
    transporter.sendMail(message, (error, response) => {
      if (error) {
        console.log(error)
      } else {
        const update = {lastAlertedAt: new Date()}
        OverallConsumption.findByIdAndUpdate(overallId, update, {new: true}, (err) => {
          if (err) {
            console.log(err)
          } else {
            console.log('email success')
          }
        });
      }
    });
  }
}

module.exports = alertIfBalanceLow;