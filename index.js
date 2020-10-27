const express = require('express');
const fetch = require('node-fetch');
const path = require('path');
const fs = require('fs');

const {
  getRequestBotUrl,
  getCallMeMessage,
  getConfirmOrderMessage,
} = require('./bot/helpers');

const app = express();
const PORT = process.env.PORT || 80;

app.use(express.static(path.join(__dirname, 'dist')));
app.use(express.json());

app.get('/', (req, res) => {
  if (req.method === 'GET') {
    res.writeHead(200, {
      'Content-Type': 'text/html; charset=utf-8',
    });

    if (req.url === '/') {
      fs.readFile(
        path.join(__dirname, 'dist', 'index.html'),
        'utf-8',
        (err, content) => {
          if (err) {
            throw err;
          }

          res.end(content);
        },
      );
    }
  }
});

/**
 * POST request handler expects body with two fields:
 * @field {payloadType} === 'call_me' | 'confirm_order',
 * which defines message type that bot should send, and
 * @field 'car' | 'phone', where 'car' is @object
 * getting from ConfirmOrder MVC component and 'phone'
 * is a string which contains numbers, getting from CallMe MVC component
 */
app.post('/', (req, res) => {
  if (req.body.payloadType === 'call_me') {
    const { phone } = req.body;
    fetch(getRequestBotUrl() + getCallMeMessage(phone));
  } else if (req.body.payloadType === 'confirm_order') {
    const { car, customer } = req.body;
    fetch(getRequestBotUrl() + getConfirmOrderMessage(car, customer));
  }

  res.json(req.body);
});

app.listen(PORT);
