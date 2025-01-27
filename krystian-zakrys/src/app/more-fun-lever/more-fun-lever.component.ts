import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-more-fun-lever',
  templateUrl: './more-fun-lever.component.html',
  styleUrls: ['./more-fun-lever.component.scss']
})
export class MoreFunLeverComponent implements OnInit {
  public _isFun: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  public switchFun(){
    this._isFun = !this._isFun;
  }

  public get IsFun(){
    return this._isFun;
  }
}
