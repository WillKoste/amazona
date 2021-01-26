const express = require('express');
const dotenv = require('dotenv');
dotenv.config({path: './config/config.env'});
const morgan = require('morgan');
const cors = require('cors');
const colors = require('colors');
const connectDB = require('./config/db');

const app = express();

connectDB();

if (process.env.NODE_ENV === 'development') {
	app.use(morgan('dev'));
}

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/', require('./routes/index.js'));
app.use('/api/v1/products', require('./routes/products'));

const port = process.env.PORT || 5001;
const mode = process.env.NODE_ENV || 'DEFAULT';

app.listen(port, () => {
	console.log(`Express server running on port ${port}, in ${mode} mode`.cyan.underline.bold);
});
