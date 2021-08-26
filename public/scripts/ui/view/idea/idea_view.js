import {ElementBuilder} from "../../element/element_builder.js";
import {GetButton} from "../../element/button.js";
import {AddIdea, GetIdeas} from "../../../api/idea_client_api.js";
import {GenerateSimilarColumns} from "../../element/css_helper.js";
import {GetTextAreaInput, GetTextInput} from "../../element/text_input.js";

function GetItemView(i) {
	let itemView = new ElementBuilder()
		.withClass("Idea")
		.withInnerHtml(`<h4>${i["Short Description"]}</h4><div class="DescItem">${i["Long Description"]}</div>`)
		.build();
	return itemView;
}

function RefreshIdeas(ideaType, items, container) {
	GetIdeas(ideaType)
		.then((retrieved) => {
			items = retrieved;
			container.innerHTML = '';
			
			items.forEach(i => {
				let itemView = GetItemView(i);
				container.appendChild(itemView);
			})
		})
}

export function GetIdeaView(back){
	let c = new ElementBuilder()
		.withClass('IdeaScreen')
		.build();
	
	let title = new ElementBuilder('h1')
		.withInnerHtml('Ideas')
		.build();
	c.appendChild(title);
	
	let buttonTypes = ['Purpose', 'Game', 'World', 'Engine', 'Update'];
	
	let container = new ElementBuilder()
		.withClass('scroll')
		.build();
	let items = [];
	let ideaType = 'Purpose';
	
	let buttons = buttonTypes.map((v) => {
		let b = GetButton(v, () => {
			ideaType = v;
			RefreshIdeas(v, items, container);
		})
		return b;
	})
	let buttonContainer = new ElementBuilder()
		.withEntireStyle('display: grid')
		.build();
	buttonContainer.style.display = 'grid';
	GenerateSimilarColumns(buttonContainer, buttons.length);
	buttons.forEach(b => {
		buttonContainer.appendChild(b);
	})
	
	let inputContainer = new ElementBuilder()
		.withClass("InputContainerIdea")
		.build();
	let inputShort = GetTextInput('New Idea');
	let inputLong = GetTextAreaInput('Description');
	let submit = GetButton('Submit', () => {
		container.appendChild(GetItemView({
			"Short Description": inputShort.value,
			"Long Description": inputLong.value,
		}))
		AddIdea(inputShort.value, inputLong.value, ideaType)
			.then(() => {
			})
			.catch((err) => {
				//TODO: Handle this
			})
		
		inputShort.value = '';
		inputLong.value = '';
		inputShort.focus();
	})
	inputShort.tabIndex = 1;
	inputLong.tabIndex = 2;
	submit.tabIndex = 3;
	
	inputContainer.appendChild(inputShort);
	inputContainer.appendChild(inputLong);
	inputContainer.appendChild(submit);
	
	c.appendChild(buttonContainer);
	c.appendChild(inputContainer);
	c.appendChild(container);
	
	return c;
}