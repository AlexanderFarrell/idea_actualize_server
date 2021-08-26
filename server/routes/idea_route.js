const {Router} = require("express");
const {get_purposes, get_games, get_worlds, get_updates, get_engines, add_purpose, add_game, add_world, add_engine,
	add_update
} = require("../services/idea_service");
const {get_body_var} = require("../helper/body_helper");
const {are_valid_inputs} = require("../helper/param_helper");
const {require_auth_hide_on_fail} = require("../middleware/auth_mid");

function get_idea_router(app){
	let router = Router()
	
	router.use(require_auth_hide_on_fail);
	
	router.get('/purpose', async (req, res) => {
		res.json(await get_purposes(app))
	})
	
	router.get('/game', async (req, res) => {
		res.json(await get_games(app))
		
	})
	
	router.get('/world', async (req, res) => {
		res.json(await get_worlds(app))
		
	})
	
	router.get('/update', async (req, res) => {
		res.json(await get_updates(app))
		
	})
	
	router.get('/engine', async (req, res) => {
		res.json(await get_engines(app))
		
	})
	
	router.post('/purpose', async (req, res) => {
		add_idea(add_purpose, app, req, res)
	})
	
	router.post('/game', async (req, res) => {
		add_idea(add_game, app, req, res)
	})
	
	router.post('/world', async (req, res) => {
		add_idea(add_world, app, req, res)
	})
	
	router.post('/engine', async (req, res) => {
		add_idea(add_engine, app, req, res)
	})
	
	router.post('/update', async (req, res) => {
		add_idea(add_update, app, req, res)
	})
	
	router.delete('/', async (req, res) => {
	
	})
	
	return router;
}

function add_idea(f, app, req, res){
	let short = get_body_var(req, "short");
	let long = get_body_var(req, "long");
	
	are_valid_inputs(req, res, async () => {
		try {
			await f(app, short, long);
			res.sendStatus(200);
		} catch (e) {
			res.sendStatus(500);
		}
		
	}, short, long)
}


module.exports = {get_idea_router}