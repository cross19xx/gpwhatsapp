import { Client } from 'whatsapp-web.js';
import qrCode from 'qrcode-terminal';

import { sendMessage } from './chat';

const client = new Client({});

client.on('qr', (qr) => {
  qrCode.generate(qr, { small: true });
});

client.on('ready', () => {
  console.log('Client is ready!');
});

client.on('message', (message) => {
  const body = message.body;

  if (!body.toLowerCase().startsWith('hi arya')) return;

  let prompt = body.slice(7).trim();
  console.log('Captured prompt: ', prompt);

  sendMessage(prompt).then((response) => {
    message.reply(response);
  });
});

client.initialize();
