function get_body_var(req, name, sanitize_func = null) {
	return (sanitize_func != null) ? sanitize_func(req.body[name]) : req.body[name];
}

module.exports = {get_body_var}