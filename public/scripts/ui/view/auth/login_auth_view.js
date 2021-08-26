import {ElementBuilder} from "../../element/element_builder.js";
import {GetPasswordInput, GetTextInput} from "../../element/text_input.js";
import {ConsoleView} from "../console_view.js";
import {GenerateSimilarRows} from "../../element/css_helper.js";
import {GetButton} from "../../element/button.js";
import {login} from "../../../api/auth_client_api.js";

export function GetLoginAuthView(onBack, onSuccess){
	let c = new ElementBuilder()
		.withId('WelcomeAuthScreen')
		.withClass('AuthScreen')
		.build();
	
	let title = new ElementBuilder('h1')
		.withInnerHtml('Login')
		.build();
	c.appendChild(title);
	
	let username = GetTextInput('Username');
	let password = GetPasswordInput('Password')
	c.appendChild(username);
	c.appendChild(password);
	
	
	let buttonContainer = new ElementBuilder()
		.build();
	GenerateSimilarRows(buttonContainer, 2);
	c.appendChild(buttonContainer);
	
	let backButton = GetButton('Back', onBack)
	buttonContainer.appendChild(backButton);
	
	let loginButton = GetButton('Login', () => {
		consoleView.DisplayInfo("Logging in...")
		login(username.value, password.value)
			.then(() => {
				onSuccess()
			})
			.catch(err => {
				consoleView.DisplayError(err.message)
			})
	})
	buttonContainer.appendChild(loginButton);
	
	let consoleView = new ConsoleView();
	c.appendChild(consoleView.View);
	
	return c;
}