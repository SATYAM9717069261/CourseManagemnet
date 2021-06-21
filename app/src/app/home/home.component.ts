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
    console.log(this.review);
   }

  ngOnInit(): void {
  }

}
