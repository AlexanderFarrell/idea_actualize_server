import {ElementBuilder} from "../../element/element_builder.js";
import {GetButton} from "../../element/button.js";
import {GetIconContainer} from "../icon_container.js";
import {RenderScreen} from "../../screen/template.js";
import {GetIdeaScreen} from "../../screen/idea_screen.js";
import {GetIconButton} from "../../element/icon_button.js";

export function GetMenuView(){
	let c = new ElementBuilder()
		.withClass('MenuScreen')
		.build();
	
	let title = new ElementBuilder('h1')
		.withInnerHtml('Menu')
		.build();
	c.appendChild(title);
	
	let ideas = GetIconButton('💡', 'Ideas', () => {
		RenderScreen(GetIdeaScreen(() => {
			RenderScreen(GetMenuView())
		}))
	})
	c.appendChild(ideas);
	
	return c;
}

