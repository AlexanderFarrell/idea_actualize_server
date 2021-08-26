const {DatabaseFromConfig, SetupDatabase} = require("./modules/database");

function setupModules(app, config){
	SetupDatabase(app, DatabaseFromConfig(config))
}

module.exports = {setupModules}