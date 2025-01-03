import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-yo-exp',
  templateUrl: './yo-exp.component.html',
  styleUrls: ['./yo-exp.component.scss']
})
export class YoExpComponent implements OnInit {
  @Input()
  symbol: string = '';
  @Input()
  icon: string = '';
  @Input()
  number: number = 0;

  @Input()
  text: string ='';

  constructor() { }

  ngOnInit(): void {
  }

}
