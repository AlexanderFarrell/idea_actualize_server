const express = require('express');
const helmet = require("helmet");
const compression = require("compression");
const rateLimit = require('express-rate-limit');
const morgan = require('morgan');
const bodyParser = require('body-parser')
const redis = require('redis')
const session = require('express-session')
const connectRedis = require('connect-redis')
 const {getDefaultDirectives} = require("helmet/dist/middlewares/content-security-policy");

/// Sets up generic server features
function setupGeneral(app, config) {
	app.use(express.json()); // Allows JSONs to be used easier in routes.
	app.use(compression());  // Decreases bandwidth
	app.use(morgan(':method :url :status :res[content-length] - :response-time ms'))
	app.use(bodyParser.urlencoded({extended: false}))
	app.use(bodyParser.json())
}

function setupSessions(app, config){
	//app.set('trust proxy', 1);
	
	const RedisStore = connectRedis(session)
	
	const redisClient = redis.createClient({
		host: config.session.host,
		port: config.session.port,
		username: config.session.username,
		password: config.session.password
	})
	
	redisClient.on('error', function (err){
		console.log("Failed to establish a connection to redis. " + err);
	})
	
	redisClient.on('connect', function (err) {
		console.log('Connected to redis successfully!');
	})
	
	app.use(session({
		store: new RedisStore({ client: redisClient }),
		secret: config.session.secret,
		resave: false,
		saveUninitialized: false,
		cookie: {
			secure: false,
			httpOnly: false,
			maxAge: 1000 * 60 * 15
		}
	}))
	app.use((req, res, next) => {
		res.setHeader('Content-Security-Policy', `default-src 'self'`);
		next();
	});
}

/*

 */

function setupSecurity(app) {
	let d = getDefaultDirectives();
	d['upgrade-insecure-requests'] = [false];
	
	app.use(helmet({
		contentSecurityPolicy: {
			directives: d
		}
	})); 		 // Packed with a number of security bells and whistles
	app.use(rateLimit({ // Limits responses.
		windowMs: 60 * 1000, //1 Minute
		max: 150
	}))
	// app.use((req, res, next) => {
	// 	res.setHeader('Content-Security-Policy', `default-src 'self'`);
	// 	next();
	// });
}


function setupMiddleware(app, config) {
	setupSecurity(app);
	setupGeneral(app, config);
	setupSessions(app, config)
}

module.exports = {setupMiddleware}