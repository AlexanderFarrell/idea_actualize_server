const express = require('express');
const http = require('http')
const {setupApplication} = require('./setup');

//Build Server
const app = express();
setupApplication(app);

let port = normalizePort(process.env.PORT || '4793')

//Start Server
let server = http.createServer(app);
server.listen(port);
server.on('listening', OnListening);
//app.on('error', OnListening);

function OnListening(){
	let address = server.address();
	let bind    = typeof address === 'string'
		? 'Pipe ' + address
		: 'port ' + address.port;
	console.log('* Server application started *');
	console.log(`    Listening on ${bind}`);
	console.log(`    Open http://localhost:${address.port} if local.\n`)
}

/// From Express JS boiler plate
function normalizePort(val) {
	let port = parseInt(val, 10);
	
	if (isNaN(port)) {
		// named pipe
		return val;
	}
	
	if (port >= 0) {
		// port number
		return port;
	}
	
	return false;
}
