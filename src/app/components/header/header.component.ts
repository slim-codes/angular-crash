import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  title = 'Task-Tracker';
  /*
   *REVIEW: should you define these properties in the class or in the `header` html
   */
  // text = 'Add';
  // color="green";

  constructor() {}

  ngOnInit(): void {}
}
