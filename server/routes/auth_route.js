const {Router} = require("express");
const {get_body_var} = require("../helper/body_helper");
const {login, logout, create_account, delete_account, rename_account, change_password, username_exists} = require("../services/auth");
const {require_auth_tell_on_fail} = require("../middleware/auth_mid");
const {get_param} = require("../helper/param_helper");

function get_auth_router(app, config){
	let router = Router();
	
	app.set("create_acc_allowed", config.auth.create_allowed)
	
	router.post('/login', async (req, res) => {
		let username = get_body_var(req, "username");
		let password = get_body_var(req, "password");
		
		try {
			await login(app, username, password);
			req.session.username = username;
			res.sendStatus(200);
		} catch (e) {
			console.log(e);
			res.sendStatus(401);
		}
	})
	
	router.post('/logout', async (req, res) => {
		await logout(app, req);
		
		req.session.destroy(err => {
			console.log(err);
		})
		
		res.sendStatus(200);
	})
	
	router.post('/create', async (req, res) => {
		let username = get_body_var(req, "username");
		let password = get_body_var(req, "password");
		
		try {
			await create_account(app, username, password);
			req.session.username = username;
			res.sendStatus(200);
		} catch (e) {
			console.log(e.message);
			res.sendStatus(403);
		}
	})
	
	router.post('/delete', async (req, res) => {
		let username = get_body_var(req, "username");
		let password = get_body_var(req, "password");
		
		if (username !== req.session.username) {
			res.sendStatus(403);
		}
		
		try {
			await delete_account(app, username, password);
			req.session.username = username;
			res.sendStatus(200);
		} catch (e) {
			console.log(e);
			res.sendStatus(403);
		}
	})
	
	router.post('/rename', async (req, res) => {
		let username = get_body_var(req, "username");
		let future_username = get_body_var(req, "future_username");
		let password = get_body_var(req, "password");
		
		if (username !== req.session.username) {
			res.sendStatus(403);
		}
		
		try {
			await rename_account(app, username, password, future_username);
			req.session.username = future_username;
			res.sendStatus(200);
		} catch (e) {
			console.log(e);
			res.sendStatus(403);
		}
	})
	
	router.post('/change_password', async (req, res) => {
		let username = get_body_var(req, "username");
		let password = get_body_var(req, "password");
		let future_password = get_body_var(req, "future_password");
		
		if (username !== req.session.username) {
			res.sendStatus(403);
		}
		
		try {
			await change_password(app, username, password, future_password);
			res.sendStatus(200);
		} catch (e) {
			console.log(e);
			res.sendStatus(403);
		}
	})
	
	router.get('/username_exists/:username', async (req, res) => {
		let username = get_param(req, "username");
		
		res.json({
			exists: (await username_exists(app, username))
		})
	})
	
	return router;
}

module.exports = {get_auth_router}