import {ElementBuilder} from "../element/element_builder.js";
import {GetIdeaView} from "../view/idea/idea_view.js";

export function GetIdeaScreen() {
	let c = new ElementBuilder()
		.withId("IdeaScreen")
		.build();
	
	let view = GetIdeaView();
	
	c.appendChild(view);
	
	return c;
}