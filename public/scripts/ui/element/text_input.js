export function GetTextInput(placeholder = ""){
	let returnValue = document.createElement('input');
	returnValue.setAttribute("type", "text");
	returnValue.setAttribute("placeholder", placeholder);
	
	return returnValue;
}

export function GetTextAreaInput(placeholder = ""){
	let returnValue = document.createElement('textarea');
	returnValue.setAttribute("placeholder", placeholder);
	
	return returnValue;
}

export function GetPasswordInput(placeholder = ""){
	let returnValue = document.createElement('input');
	returnValue.setAttribute("type", "password");
	returnValue.setAttribute("placeholder", placeholder);
	
	return returnValue;
}

export function GetNumberInput(step = 1){
	let returnValue = document.createElement('input');
	returnValue.setAttribute("type", "number");
	returnValue.setAttribute("step", step.toString());
	returnValue.value = '0';
	
	return returnValue;
}