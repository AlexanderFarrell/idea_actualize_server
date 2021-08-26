export class ElementBuilder {
	constructor(tag = 'div') {
		this._element = document.createElement(tag);
		return this;
	}
	withClass(i){
		this._element.classList.add(i);
		return this;
	}
	withClasses(classes){
		if (classes.forEach !== undefined){
			classes.forEach(i => {
				this._element.classList.add(i);
				return this;
			})
		}
	}
	withId(id){
		this._element.id = id;
		return this;
	}
	withInnerHtml(innerHtml){
		this._element.innerHTML = innerHtml;
		return this;
	}
	withAttribute(qualifiedName, value){
		this._element.setAttribute(qualifiedName, value);
		return this;
	}
	withEvent(eventName, onEvent) {
		this._element.addEventListener(eventName, onEvent);
		return this;
	}
	withEntireStyle(styleInfo) {
		this._element.setAttribute('style', styleInfo);
		return this;
	}
	build(){
		return this._element;
	}
}