export async function login(username, password){
	const response = await fetch('/acc/login', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			'username': username,
			'password': password
		})
	});
	
	if (response.ok){
		return true;
	} else if (response.status === 401) {
		throw new Error("Incorrect username or password");
	} else {
		throw new Error("Unknown server error when logging in.")
	}
}

export async function logout(){
	const response = await fetch('/acc/logout', {
		method: 'POST'
	});
	
	if (response.ok){
		return true;
	} else {
		throw new Error("Error logging out");
	}
}

export async function createAccount(username, password, confirm){
	if (password !== confirm){
		throw new Error("Passwords must match")
	}
	
	const response = await fetch('/acc/create', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			'username': username,
			'password': password
		})
	});
	
	if (response.ok){
		return true;
	} else if (response.status === 401) {
		throw new Error("Incorrect username or password");
	} else {
		throw new Error("Unknown server error when logging in.")
	}
}

export async function delete_account(username, password) {
	const response = await fetch('/acc/delete_account', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			'username': username,
			'password': password
		})
	});
	
	if (response.ok){
		return true;
	} else if (response.status === 401) {
		throw new Error("Incorrect username or password");
	} else if (response.status === 403){
		throw new Error("Permission denied, the username or password may be incorrect, or you may no longer be logged in.")
	} else {
		throw new Error("Unknown server error when deleting account.")
	}
}
