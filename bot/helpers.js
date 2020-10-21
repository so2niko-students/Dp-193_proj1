require('dotenv').config();

function formatObjectToHTML(obj, exceptionsKeys = []) {
  const formatKey = (key) => (
    key[0].toUpperCase() + key.replace('-', ' ').slice(1)
  );

  const formatFieldToHTML = ([key, value]) => (
    `<code>${formatKey(key)}:</code>  ${value}\n`
  );

  const filterFields = () => {
    const isExceptionKey = ([key]) => (
      !exceptionsKeys.some((exceptionKey) => exceptionKey === key)
    );

    return Object.entries(obj).filter(isExceptionKey);
  };

  const entries = () => (
    exceptionsKeys.length === 0 ? Object.entries(obj) : filterFields()
  );

  return entries().map(formatFieldToHTML).join('');
}

function getRequestBotUrl() {
  const API_BASE = `https://api.telegram.org/bot${process.env.BOT_TOKEN}`;
  return `${API_BASE}/sendMessage?chat_id=${process.env.CHAT_ID}&text=`;
}

function getCallMeMessage(phone) {
  const text = `Contact a potential customer\nPhone: <code>${phone}</code>`;
  return `${text}&parse_mode=html&disable_web_page_preview=true`;
}

function getConfirmOrderMessage(car, customer) {
  const carDetails = formatObjectToHTML(car, ['id', 'photoUrl']);

  const customerDetails = formatObjectToHTML(customer);

  const text = `<b><u>A new order !</u></b>\n\n${customerDetails}\n${carDetails}`;
  return `${text}&parse_mode=html&disable_web_page_preview=true`;
}

module.exports = {
  getRequestBotUrl,
  getCallMeMessage,
  getConfirmOrderMessage,
};
