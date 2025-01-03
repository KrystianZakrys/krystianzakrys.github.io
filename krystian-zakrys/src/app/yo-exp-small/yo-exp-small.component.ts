import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-yo-exp-small',
  templateUrl: './yo-exp-small.component.html',
  styleUrls: ['./yo-exp-small.component.scss']
})
export class YoExpSmallComponent implements OnInit {

  constructor() { }
  @Input()
  symbol: string = '';
  @Input()
  icon: string = '';
  @Input()
  number: number = 0;

  @Input()
  text: string ='';

  ngOnInit(): void {
  }

}
