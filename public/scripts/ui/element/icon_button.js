import {GetButton} from "./button.js";
import {GetIconContainer} from "../view/icon_container.js";

export function GetIconButton(emoji, text, onPress){
	let c = GetButton('', onPress)
	let icon = GetIconContainer(emoji, text);
	c.appendChild(icon);
	
	return c;
}