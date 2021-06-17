import { Component } from '@angular/core';
import {navbarMenu} from '../common/classes/navbarMenu';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  navbar:any;
  menuDisplay='block';
  htmlString="<h1> DATA </h1>";
  constructor(private menu:navbarMenu){
    this.navbar=menu.sidenavbar;
    console.log(this.navbar)
  }
  hidemenu(){
    if(this.menuDisplay=='none') this.menuDisplay='block';
    else this.menuDisplay='none';
  }
}
