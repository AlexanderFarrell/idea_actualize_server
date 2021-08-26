import {ElementBuilder} from "../element/element_builder.js";
import {GetButton} from "../element/button.js";
import {GetIconContainer} from "./icon_container.js";
import {RenderScreen} from "../screen/template.js";

export class Nav {
	constructor() {
		this.View = new ElementBuilder()
			.withId('NavigationBar')
			.build();
	}
	
	AddButton(emoji, text, screenFactory){
		let ele = GetIconButton(emoji, text, () => {
			RenderScreen(screenFactory())
		})
		this.View.appendChild(ele);
	}
}

export function GetIconButton(emoji, text, onPress){
	let c = GetButton('', onPress)
	let icon = GetIconContainer(emoji, text);
	c.appendChild(icon);
	
	return c;
}