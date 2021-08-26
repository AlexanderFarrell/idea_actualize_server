import {ElementBuilder} from "../element/element_builder.js";

let template = new ElementBuilder()
	.withId('template')
	.build();
document.body.appendChild(template);
export let Header = new ElementBuilder('header')
	.build();
export let Content  = new ElementBuilder('content')
	.withId("Content")
	.build();
export let Footer = new ElementBuilder('footer')
	.build();
export let FixedMeta = new ElementBuilder()
	.withId('FixedMeta')
	.build();
template.appendChild(Header);
template.appendChild(Content);
template.appendChild(Footer);
template.appendChild(FixedMeta);

let ele = null;

let isFullScreen = false;

export function RenderScreen(screen){
	ClearScreen();
	
	if (isFullScreen){
		document.body.appendChild(screen);
	} else {
		Content.appendChild(screen);
	}
	
	ele = screen;
}

export function ClearScreen(){
	ele?.remove();
	
}

export function ToFullScreen(){
	template.display = 'none';
	isFullScreen = true;
}

export function ToNormal(){
	template.display = 'inherit';
	isFullScreen = false
}