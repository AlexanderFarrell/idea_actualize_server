import {ElementBuilder} from "../element/element_builder.js";

export function GetIconContainer(emoji, text){
	let c = new ElementBuilder()
		.withClass('IconContainer')
		.build();
	
	let icon = GetEmojiIcon(emoji);
	let label = GetLabel(text);
	
	c.appendChild(icon);
	c.appendChild(label);
	
	return c;
}

export function GetEmojiIcon(emoji){
	return new ElementBuilder()
		.withClass('EmojiIcon')
		.withInnerHtml(emoji)
		.build();
}

export function GetLabel(text){
	return new ElementBuilder()
		.withClass('Label')
		.withInnerHtml(text)
		.build();
}

export function GetGridContainerColumn(template){
	return new ElementBuilder()
		.withEntireStyle(`display: grid; grid-template-columns: ${template}`)
		.build();
}

export function GetGridContainerRow(template){
	return new ElementBuilder()
		.withEntireStyle(`display: grid; grid-template-rows: ${template}`)
		.build();
}