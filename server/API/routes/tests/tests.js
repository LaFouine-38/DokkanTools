const express = require('express');
const router = express.Router();

router.post(`/`, async (req, res) => {
    let data = req.body;
    console.log(data)
    res.status(200)
})

module.exports = router;