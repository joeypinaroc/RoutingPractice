const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.send('<h1>home page</h1>');
})

router.get('/login', (req, res, next) => {
    res.send('<h1>login page</h1>');
})

router.get('/register', (req, res, next) => {
    res.send('<h1>register page</h1>');
})

module.exports = router;