const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');

router.get('/', (req, res) => {
    res.send("Characters working!");
})

module.exports = router;