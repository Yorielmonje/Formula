import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  link: any;
  constructor(){
    this.link= "ui/ui.component.html";
  }
  getLink(){
    return this.link;
  }
}
