function sanitizeInt(req, res, name) {
	let v = req.params[name].replace(/\^[0-9]+$/);
	if (v.length) {
		return parseInt(v);
	} else {
		let e = `Invalid input for ${name}`;
		res.status(500);
		res.json({
			error: e
		})
		throw new Error(e)
	}
}

function sanitizeDate(req, res, name){

}

function sanitizeText(req, res, name) {
	let v = req.params[name].replace(/\^[a-zA-Z]+$/);
	if (v.length) {
		return v;
	} else {
		let e = `Invalid input for ${name.toUpperCase()}`;
		res.status(500);
		res.json({
			error: e
		})
		throw new Error(e)
	}
}

function sanitizeSnakeCase(req, res, name) {
	let v = req.params[name].replace(/\^[_a-zA-Z]+$/);
	if (v.length) {
		return v;
	} else {
		let e = `Invalid input for ${name}`;
		res.status(500);
		res.json({
			error: e
		})
		throw new Error(e)
	}
}

module.exports = {sanitizeInt, sanitizeText};