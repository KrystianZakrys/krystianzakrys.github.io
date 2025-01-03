import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {
  constructor() {
  }
  startDate = new Date('2020-09-01');  // Example start date
  endDate = new Date();
  ngOnInit(): void {
  }

}
