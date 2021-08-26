const {setupRoutes} = require("./routes");
const {setupMiddleware} = require("./middleware");
const fs = require("fs");
const {setupModules} = require("./modules");
const path = require("path");

function setupApplication(app) {
	let config = JSON.parse(fs.readFileSync('./server/dev.server.config.json').toString());
	
	app.set('views', path.join(__dirname, '../public'))
	app.set('view engine', 'ejs')
	
	setupMiddleware(app, config);
	setupModules(app, config);
	setupRoutes(app, config);
}

module.exports = {setupApplication};