import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-project';
  customEvents = [];
  constructor() {

  }
  ngOnInit() {
    setTimeout(() => {
      this.customEvents = [`editableClick`];
      setTimeout(() => {
        console.log(`又变了`);
        this.customEvents = ['editableInput'];
      }, 2000);
    }, 2000);
  }
  handleCustomEvents($event) {
    console.log($event);
  }
}
