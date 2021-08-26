import {ElementBuilder} from "../element/element_builder.js";

const infoState = 'ConsoleInfo';
const errorState = 'ConsoleError';
const warningState = 'ConsoleWarning'

export class ConsoleView{
	constructor() {
		this.View = new ElementBuilder()
			.withClass('ConsoleView')
			.build();
		
		this.SetState(infoState);
	}
	
	DisplayInfo(innerHtml){
		this.View.innerHTML = innerHtml;
		this.SetState(infoState);
	}
	
	DisplayError(innerHtml){
		this.View.innerHTML = innerHtml;
		this.SetState(errorState);
	}
	
	DisplayWarning(innerHtml){
		this.View.innerHTML = innerHtml;
		this.SetState(warningState);
	}
	
	ClearDisplay(){
		this.View.innerHTML = '';
	}
	
	SetState(state){
		this.View.classList.remove(this.State);
		this.View.classList.add(state);
		
		this.State = state;
	}
}