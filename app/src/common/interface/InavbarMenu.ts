export interface navbar{
	logo:string; 
	title:string;
	targetPage:any; // if some one wants Popup or re-route or put template or url
	targetdisplay:any; //component name where you want to display content
	click:any; // click event if some one wants to perform inline operaitons like content display or not
	style:string; //inline styling 
}