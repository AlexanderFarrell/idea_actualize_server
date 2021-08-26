function get_param(req, name, sanitize_func = null) {
	return (sanitize_func != null) ? sanitize_func(req.params[name]) : req.params[name];
}

function are_valid_inputs(req, res, on_success, ...inputs){
	for (let i = 0; i < inputs.length; i++){
		if (inputs[i] == null){
			res.sendStatus(500)
			return;
		}
	}
	
	on_success()
}

module.exports = {get_param, are_valid_inputs}