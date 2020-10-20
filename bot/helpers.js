require('dotenv').config();

function getRequestBotUrl() {
  const API_BASE = `https://api.telegram.org/bot${process.env.BOT_TOKEN}`;
  return `${API_BASE}/sendMessage?chat_id=${process.env.CHAT_ID}&text=`;
}

function getCallMeMessage(phone) {
  const text = `Contact a potential customer\nPhone: <code>${phone}</code>`;
  return `${text}&parse_mode=html&disable_web_page_preview=true`;
}

function getConfirmOrderMessage(car) {
  const details = Object.entries(car).map(([key, value]) => {
    if (key === 'photoUrl' || key === 'id') {
      return '';
    }

    const newKey = key[0].toUpperCase() + key.replace('-', ' ').slice(1);

    return `<code>${newKey}:</code>  ${value}\n`;
  });

  const text = `<b><u>A new order !</u></b>\n\n${details.join('')}`;
  return `${text}&parse_mode=html&disable_web_page_preview=true`;
}

module.exports = {
  getRequestBotUrl,
  getCallMeMessage,
  getConfirmOrderMessage,
};
