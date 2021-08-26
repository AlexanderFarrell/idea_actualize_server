async function get_purposes(app){
	return await execute_get(app, 'select * from purposes');
}

async function get_games(app){
	return await execute_get(app, 'select * from games');
}

async function get_engines(app){
	return await execute_get(app, 'select * from engines');
}

async function get_worlds(app){
	return await execute_get(app, 'select * from worlds');
}

async function get_updates(app){
	return await execute_get(app, 'select * from updates');
}

async function add_purpose(app, short, long){
	return await execute_get(app, "insert into idea (idea_type, short, long) VALUES ('Purpose', $1, $2)", [short, long])
}

async function add_game(app, short, long){
	return await execute_get(app, "insert into idea (idea_type, short, long) VALUES ('Game', $1, $2)", [short, long])
}

async function add_world(app, short, long){
	return await execute_get(app, "insert into idea (idea_type, short, long) VALUES ('World', $1, $2)", [short, long])
}

async function add_engine(app, short, long){
	return await execute_get(app, "insert into idea (idea_type, short, long) VALUES ('Engine', $1, $2)", [short, long])
}

async function add_update(app, short, long){
	return await execute_get(app, "insert into idea (idea_type, short, long) VALUES ('Update', $1, $2)", [short, long])
}

async function execute_get(app, sql, params = []){
	let database = app.get('Database');
	
	try {
		const { rows } = await database.Pool.query(sql, params);
		return rows;
	} catch (e) {
		console.log(e.message);
		throw new Error("Unable to get ")
	}
}

module.exports = {get_purposes, get_games, get_worlds, get_updates, get_engines, add_purpose, add_game, add_world, add_engine, add_update}