const {Pool} = require('pg');
const colors = require('colors');

const connectDB = () => {
	try {
		const pool = new Pool({
			user: process.env.PG_USER,
			password: process.env.PG_PASSWORD,
			host: process.env.PG_HOST,
			port: process.env.PG_PORT,
			database: process.env.PG_DATABASE
		});

		console.log('PG IS RUNNING :D'.yellow.bold);

		module.exports = pool;
	} catch (err) {
		console.error(err);
		process.exit(1);
	}
};

module.exports = connectDB;
