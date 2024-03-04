const express = require('express');
const router = express.Router();

// app.use(`/${config.api.rootName}/register`, validateApiKeys)
router.get(`/missions`, async (req, res) => {
    let data = req.body;
    res.status(200).send('pute')
})

module.exports = router;