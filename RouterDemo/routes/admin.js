const express = require('express');
const router = express.Router();

router.use((req, res, next) => {
    if (req.query.isAdmin) {
        next();
    }
    res.send('SORRY NO ACCESS');
})

router.get('/topSecret', (req, res) => {
    res.send('THIS IS A TOP SECRET');
})

router.get('/deleteEverything', (req, res) => {
    res.send('OK!! DELETED EVERYTHING');
})

module.exports = router;