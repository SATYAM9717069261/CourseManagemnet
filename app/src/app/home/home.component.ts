import { Component, OnInit } from '@angular/core';
import {Testimonials} from "../../common/classes/testimonials";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  review:any;
  constructor(review:Testimonials) {
    this.review=review.getdata();
   // this.reviewSliderControler();
   }

  ngOnInit(): void {
  }
  reviewSliderControler( data: string){
    console.log('data => ', data);
    let slider=[];
    slider.push(this.review[0]);
    slider.push(this.review[1]);
    slider.push(this.review[2]);
   // console.log(slider);
    return slider;
  }

}
