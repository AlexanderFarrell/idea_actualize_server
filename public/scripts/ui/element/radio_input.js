import {ElementBuilder} from "./element_builder.js";

export class RadioBuilder{
	constructor(name) {
		this._container = new ElementBuilder()
			.withClass('RadioContainer')
			.build();
		this.name = name;
		return this;
	}
	withOption(value, text) {
		let subContainer = new ElementBuilder()
			.withClass('RadioValueContainer')
			.build();
		
		subContainer.appendChild(
			new ElementBuilder('input')
				.withAttribute('type', 'radio')
				.withAttribute('name', this.name)
				.withAttribute('value', value)
				.withClass('RadioOption')
				.build()
		)
		subContainer.appendChild(
			new ElementBuilder('label')
				.withInnerHtml(text)
				.withClass('RadioLabel')
				.build()
		)
		this._container.appendChild(subContainer);
		return this;
	}
	build(){
		return this._container;
	}
}