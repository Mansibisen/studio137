/* eslint-disable no-console */
require('dotenv').config({ path: './src/env/.env' });
const mongoose = require('mongoose');

// checking connection to db
mongoose.connect(process.env.API_URL, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', (error) => console.log('error', error.message));
db.once('open', () => console.log('info', 'connected to database'));
