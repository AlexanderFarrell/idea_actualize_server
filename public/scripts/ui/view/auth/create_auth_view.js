import {ElementBuilder} from "../../element/element_builder.js";
import {GetPasswordInput, GetTextInput} from "../../element/text_input.js";
import {GenerateSimilarRows} from "../../element/css_helper.js";
import {GetButton} from "../../element/button.js";
import {ConsoleView} from "../console_view.js";
import {createAccount} from "../../../api/auth_client_api.js";

export function GetCreateAuthView(onBack, onSuccess){
	let c = new ElementBuilder()
		.withId('WelcomeAuthScreen')
		.withClass('AuthScreen')
		.build();
	
	let title = new ElementBuilder('h1')
		.withInnerHtml('Create Account')
		.build();
	c.appendChild(title);
	
	let username = GetTextInput('Username');
	let password = GetPasswordInput('Password')
	let confirm = GetPasswordInput('Confirm')
	c.appendChild(username);
	c.appendChild(password);
	c.appendChild(confirm);
	
	
	let buttonContainer = new ElementBuilder()
		.build();
	GenerateSimilarRows(buttonContainer, 2);
	c.appendChild(buttonContainer);
	
	let backButton = GetButton('Back', onBack)
	buttonContainer.appendChild(backButton);
	
	let createButton = GetButton('Create', () => {
		consoleView.DisplayInfo('Creating Account...')
		createAccount(username.value, password.value, confirm.value)
			.then(() => {
				onSuccess()
			})
			.catch(err => {
				consoleView.DisplayError(err.message)
			})
	})
	buttonContainer.appendChild(createButton);
	
	let consoleView = new ConsoleView();
	c.appendChild(consoleView.View);
	
	return c;
}