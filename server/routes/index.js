const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
	try {
		res.send('Index');
	} catch (err) {
		console.error(err);
		res.status(500).json({success: false, data: 'Server Error'});
	}
});

module.exports = router;
