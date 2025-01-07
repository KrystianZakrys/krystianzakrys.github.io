import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  light: string = '🌒';
  dark: string = '☀️';

  map = new Map<string, string>();


  viewMode = '';

  constructor() {

    this.map.set("light", this.light);
    this.map.set("dark", this.dark);

    this.viewMode = 'light';
  }

  ngOnInit(): void {
  }

  public switchViewMode(): void {
    if(this.viewMode == 'light'){
      this.viewMode = 'dark';
    } else {
      this.viewMode = 'light';
    }
  }

}
