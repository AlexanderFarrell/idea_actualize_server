import {ElementBuilder} from "../../element/element_builder.js";
import {GetButton} from "../../element/button.js";

export function GetWelcomeView(onCreatePress, onLoginPress){
	let c = new ElementBuilder()
		.withId('WelcomeAuthScreen')
		.withClass('AuthScreen')
		.build();
	
	let title = new ElementBuilder('h1')
		.withInnerHtml('Welcome')
		.build();
	c.appendChild(title);
	
	let createButton = GetButton('Create Account', onCreatePress);
	c.appendChild(createButton);
	
	let loginButton = GetButton('Login', onLoginPress);
	c.appendChild(loginButton);
	
	let footer = new ElementBuilder()
		.withClass('Small')
		.build();
	c.appendChild(footer);
	
	return c;
}