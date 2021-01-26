const express = require('express');
const router = express.Router();
const pool = require('../config/db');

router.get('/', async (req, res) => {
	try {
		const products = await pool.query(`SELECT * FROM products`);

		if (!products) {
			return res.status(404).json({success: false, data: 'Products not found'});
		}

		if (products.rowCount === 0) {
			return res.status(200).json({success: true, products: 'No products in DB, add one to get started!'});
		}

		res.json({success: true, count: products.rowCount, products: products.rows});
	} catch (err) {
		console.error(err);
		res.status(500).json({success: false, data: 'Server Error'});
	}
});

module.exports = router;
