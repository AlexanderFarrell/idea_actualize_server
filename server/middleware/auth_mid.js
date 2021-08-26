function require_auth_tell_on_fail(req, res, next){
	if (req.session.username){
		next()
	} else {
		res.sendStatus(403)
	}
}

function require_auth_hide_on_fail(req, res, next){
	if (req.session.username){
		next()
	} else {
		res.sendStatus(404)
	}
}

module.exports = {require_auth_hide_on_fail, require_auth_tell_on_fail}