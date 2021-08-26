const bcrypt = require('bcrypt')
const saltRounds = 10;

async function login(app, username, password){
	if (await verify_password(app, username, password)){
		return true;
	} else {
		throw new Error("Incorrect username or password.")
	}
}

async function logout(app, req){
	return true; //Destroy session on route.
}

async function create_account(app, username, password){
	let database = app.get("Database");
	
	if (app.get('create_allowed') === false){
		throw new Error("Not allowed to create");
	}
	
	if (!await username_exists(app, username)){
		let hash = await create_hash(app, password);
		await database.Pool.query('insert into account (username, password) VALUES ($1, $2)', [username, hash])
	} else {
		throw new Error("Username already exists!");
	}
}

async function delete_account(app, username, password){
	let database = app.get("Database");
	
	if (await verify_password(app, username, password)) {
		await database.Pool.query('delete from account where username=$1', [username])
	} else {
		throw new Error("Permission denied.");
	}
}

async function rename_account(app, username, password, future_username){
	let database = app.get("Database");
	
	if (await verify_password(app, username, password)){
		await database.Pool.query('update account set username=$1 where username=$2', [future_username, username])
	} else {
		throw new Error("Permission denied.")
	}
}

async function change_password(app, username, current_password, future_password){
	let database = app.get("Database");

	if (await verify_password(app, username, current_password)) {
		let new_hash = create_hash(app, future_password);
		await database.Pool.query('update account set password=$1 where username=$2', [new_hash, username])
	} else {
		throw new Error("Permission denied.")
	}
}

async function verify_password(app, username, password) {
	let database = app.get("Database");
	let {rows} = await database.Pool.query('select password from account where username=$1', [username]);
	
	if (rows.length > 0){
		let hash = rows[0]['password']
		console.log("Hash: " + hash);
		return await bcrypt.compare(password, hash);
	} else {
		await bcrypt.compare(password, password) //Just to waste the persons time if we don't find a user.
		return false;
	}
}

async function create_hash(app, password) {
	return await new Promise((resolve) => {
		bcrypt.hash(password, saltRounds, (err, hash) => {
			if (err) {
				throw new Error("Unable to create hash.")
			} else {
				resolve(hash);
			}
		});
	})
}

async function username_exists(app, username) {
	let database = app.get("Database");
	const { rows } = await database.Pool.query('select * from account where username=$1', [username]);
	return rows.length > 0;
}

module.exports = {login, logout, create_account, delete_account, rename_account, change_password, username_exists}