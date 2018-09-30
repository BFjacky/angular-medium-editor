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
    // 监听输入框点击事件和输入事件
    this.customEvents = [`editableClick`, `editableInput`];
  }
  handleCustomEvents($event) {
    // handleEvent
  }
}
