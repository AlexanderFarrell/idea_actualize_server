export async function GetIdeas(type){
	return await (await fetch(`/idea/${type}`)).json();
}

export async function AddIdea(short, long, type){
	return await ((await fetch(`/idea/${type}`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			'short': short,
			'long': long
		})
	})).json())
}