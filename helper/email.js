const nodemailer = require('nodemailer');
const OverallConsumption = require('../models/OverallConsumption');
const credentials = (process.env.NODE_ENV === 'production')
  ? require('../config/email_cred_prod')
  : require('../config/email_cred_dev');

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
];

const daysCounter = (priorDate, latterDate = new Date()) => {
  if (priorDate === undefined) {return 0};
  const priorDateLocal = new Date(priorDate.getFullYear(), priorDate.getMonth(), priorDate.getDate())
  const latterDateLocal = new Date(latterDate.getFullYear(), latterDate.getMonth(), latterDate.getDate())
  const msElapsed = latterDateLocal - priorDateLocal;
  const daysElapsed = msElapsed / (1000 * 60 * 60 * 24);

  return daysElapsed;
}


function alertIfBalanceLow(fundsBalance, lastAlertedAt, overallId) {
  const daysElapsed = daysCounter(lastAlertedAt, new Date());
  if (fundsBalance < alertThreshold && daysElapsed > 0) {
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