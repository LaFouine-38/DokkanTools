const fs = require('fs');
const config = require('../config');
const path = require('path')

function loadRoutes(app, appRootName) {
    return new Promise((resolve, reject) => {
        console.log('[EXPRESS API]: chargement des routes.\r')
        let routesDirRelativePath = '../routes'
        let routesDirLink = path.resolve(__dirname, routesDirRelativePath)
        routesDirs = fs.readdirSync(routesDirLink)
        routesDirs.forEach(routeName => {
            fs.readdirSync(`${routesDirLink}/${routeName}`).filter(e => e.includes(".js")).forEach(routeFileName => {
                app.use(`/${appRootName}/${routeFileName.replace('.js', '')}`, require(`../routes/${routeName}/${routeFileName}`))
                console.log(`[ROUTE] - ${routeFileName}\r`)
            })
        })
        console.log('[EXPRESS API]: Routes chargées.')
    })
}

module.exports = loadRoutes;