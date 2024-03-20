const express = require('express');
const bodyParser = require('body-parser')
const config = require('./config');
const app = express()
const cors = require('cors');
const loadRoutes = require('./utils/loadRoutes');
const path = require('path')

app.set('json spaces', 4)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors({ origin: config.api.cors.allowedDomains }));


(async () => await loadRoutes(app, config.api.rootName))()

app.listen(config.api.port, () => {
    console.log(`[Express API]: Application lancée sur le port ${config.api.port}.`)
})

const buildPath = path.join(__dirname, './../../client/build/');
app.use(express.static(buildPath));

app.get('*', (req, res) => {
    res.sendFile(path.join(buildPath, 'index.html'));
});

module.exports = { app }