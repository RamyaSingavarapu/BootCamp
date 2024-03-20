const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send("ALL SHELTERS");
})

router.get('/:id', (req, res) => {
    res.send("VIEWING ONE SHELTER");
})

router.get('/:id/edit', (req, res) => {
    res.send("EDITING ONE SHELTER");
})

router.post('/', (req, res) => {
    res.send("POSTING SHELTER DATA");
})

module.exports = router;