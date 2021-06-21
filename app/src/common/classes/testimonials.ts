/**
 * all Tesimonals Operations Perform here
 */
import { Injectable } from "@angular/core";
import {review} from "../interface/Itestimonials";

@Injectable({providedIn:'root'})
export class Testimonials{
	testimonials:Array<review>=[];
	constructor(){this.insertdata()}
	insertdata(){
		/**
		 * call api for insert data in reviews 
		 * I use sample data
		*/
		this.testimonials.push(
			{profilePic:"../../assets/home/profile_img.jpg",message:"TEN was my first ever experience into internship. Even though I didn't have much of an idea about my responsibilities, my mentors at TEN and fellow colleagues helped me a lot in making me understand my roles and were very cooperative throughout."
			,name:"User1",redirect_btn:"Read more..",redirect_url:"#"},
			{profilePic:"../../assets/home/profile_img.jpg",message:"TEN was my first ever experience into internship. Even though I didn't have much of an idea about my responsibilities, my mentors at TEN and fellow colleagues helped me a lot in making me understand my roles and were very cooperative throughout.",
			name:"User1",redirect_btn:"Read more..",redirect_url:"#"},
			{profilePic:"../../assets/home/profile_img.jpg",message:"TEN was my first ever experience into internship. Even though I didn't have much of an idea about my responsibilities, my mentors at TEN and fellow colleagues helped me a lot in making me understand my roles and were very cooperative throughout.",
			name:"User1",redirect_btn:"Read more..",redirect_url:"#"},
			{profilePic:"../../assets/home/profile_img.jpg", message:"TEN was my first ever experience into internship. Even though I didn't have much of an idea about my responsibilities, my mentors at TEN and fellow colleagues helped me a lot in making me understand my roles and were very cooperative throughout."
			,name:"User1",redirect_btn:"Read more..",redirect_url:"#"}
		);
	}
	getdata(){
		/** add id's helps to control slider */
		return this.testimonials;
	}

}