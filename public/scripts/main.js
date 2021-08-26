import {ClearScreen, Header, RenderScreen, ToFullScreen, ToNormal} from "./ui/screen/template.js";
import {GetAuthScreen} from "./ui/screen/auth_screen.js";
import {GetMenuScreen} from "./ui/screen/menu_screen.js";
import {Nav} from "./ui/view/Nav.js";
import {GetIdeaScreen} from "./ui/screen/idea_screen.js";

ToFullScreen()
RenderScreen(GetAuthScreen(OnLogin))

function OnLogin(){
	ToNormal()
	let nav = new Nav();
	nav.AddButton('💡', 'Ideas', GetIdeaScreen);
	nav.AddButton('🌲', 'Projects', null);
	nav.AddButton('📕', 'Journal', null);
	Header.appendChild(nav.View);
	
	ClearScreen()
}