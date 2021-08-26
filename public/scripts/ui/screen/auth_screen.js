import {ElementBuilder} from "../element/element_builder.js";
import {GetWelcomeView} from "../view/auth/welcome_auth_view.js";
import {GetLoginAuthView} from "../view/auth/login_auth_view.js";
import {GetCreateAuthView} from "../view/auth/create_auth_view.js";

let o = null;

export function GetAuthScreen(onLogin) {
	let c = new ElementBuilder()
		.withId('AuthScreen')
		.build();
	
	o = onLogin;
	
	Back(c);
	
	return c;
}

function Back(c){
	c.innerHTML = '';
	c.appendChild(GetWelcomeView(() => {
		OnCreate(c)
	}, () => {
		OnLogin(c)
	}))
}

function OnLogin(c){
	c.innerHTML = '';
	c.appendChild(GetLoginAuthView(() => {
		Back(c)
	}, () => {
		LoggedIn()
	}))
}

function OnCreate(c){
	c.innerHTML = '';
	c.appendChild(GetCreateAuthView(() => {
		Back(c)
	}, () => {
		LoggedIn()
	}))
}

function LoggedIn(){
	o();
}