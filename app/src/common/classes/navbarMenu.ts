import { Injectable } from "@angular/core";
import { navbar } from "../interface/InavbarMenu";

@Injectable({
	providedIn:'root'
})
export class navbarMenu{
	sidenavbar: Array<navbar> = []; //store all elements of navbar
	constructor(){
		this.insertmenu();
	}	
	insertmenu(){
		/**
		 * if Sidenave bar content is store in database
		 * then make service and call it
		 */
		var logodata=" <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='currentColor' class='bi bi-x-square' viewBox='0 0 16 16[]> <path d='M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z'/> <path d='M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z'/></svg>";		


		this.sidenavbar.push(
			{ logo:logodata,title:'Home',targetPage:'',targetdisplay:'',click:'',style:'cursor:pointer;'},
			{ logo:'',title:'Online Courses',targetPage:'',targetdisplay:'',click:'',style:'cursor:pointer'},
			{ logo:'',title:'Hiring',targetPage:'',targetdisplay:'',click:'',style:'cursor:pointer'},
			{ logo:'',title:'Blog',targetPage:'',targetdisplay:'',click:'',style:'cursor:pointer'},
			{ logo:'',title:'Forum',targetPage:'',targetdisplay:'',click:'',style:'cursor:pointer'},
			{ logo:'',title:'Certification',targetPage:'',targetdisplay:'',click:'',style:'cursor:pointer'},
			{ logo:'',title:'Alumni Team',targetPage:'',targetdisplay:'',click:'',style:'cursor:pointer'},
			{ logo:'',title:'Hackathon',targetPage:'',targetdisplay:'',click:'',style:'cursor:pointer'},
			{ logo:'',title:'Membership Registeration',targetPage:'',targetdisplay:'',click:'',style:'cursor:pointer'},
			{ logo:'',title:'Mentorship',targetPage:'',targetdisplay:'',click:'',style:'cursor:pointer'},
			{ logo:'',title:'Social Media',targetPage:'',targetdisplay:'',click:'',style:'cursor:pointer'},
			{ logo:'',title:'Testimonials',targetPage:'',targetdisplay:'',click:'',style:'cursor:pointer'},
			{ logo:'',title:'Contact us',targetPage:'',targetdisplay:'',click:'',style:'cursor:pointer'},
			{ logo:'',title:'Complaints',targetPage:'',targetdisplay:'',click:'',style:'cursor:pointer'}
		);
	}


}