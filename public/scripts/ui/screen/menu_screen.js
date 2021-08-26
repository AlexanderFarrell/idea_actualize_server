import {ElementBuilder} from "../element/element_builder.js";
import {GetMenuView} from "../view/menu/menu_view.js";

export function GetMenuScreen() {
	let c = new ElementBuilder()
		.withId("MenuScreen")
		.build();
	
	let view = GetMenuView();
	
	c.appendChild(view);
	
	return c;
}