const express = require("express");
const {sanitizeText} = require("./sanitize");
const pg = require('pg')
const {get_idea_router} = require("./routes/idea_route");
const {get_auth_router} = require("./routes/auth_route");

function serveStatic(app){
	app.use(express.static('public'))
}

function setupRoutes(app, config) {
	serveStatic(app)
	app.use('/idea', get_idea_router(app))
	app.use('/acc', get_auth_router(app, config))
}


module.exports = {setupRoutes}