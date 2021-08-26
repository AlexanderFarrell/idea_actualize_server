const {Pool} = require('pg')

function SetupDatabase(app, database){
	app.set('Database', database);
}

class Database {
	constructor(username, password, host, port, database) {
		this.uri = ConstructUriPostgres(username, password, host, port, database);
		this.Pool = new Pool({
			connectionString: this.uri
		})
	}
}

function ConstructUriPostgres(
	username,
	password,
	host,
	port,
	database
) {
	return `postgres://${username}:${password}@${host}:${port}/${database}`;
}

function DatabaseFromConfig(config) {
	return new Database(
		config.database.username,
		config.database.password,
		config.database.host,
		config.database.port,
		config.database.database)
}

module.exports = {SetupDatabase, Database, DatabaseFromConfig}