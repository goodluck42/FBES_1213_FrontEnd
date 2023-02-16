import {Component, OnInit} from '@angular/core';
import {Page1Component} from "../page1/page1.component";
import {Page2Component} from "../page2/page2.component";
import {Page3Component} from "../page3/page3.component";

function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'routing';
  public leftComponent?: any;
  public rightComponent?: any;
  private static Components: any = [Page1Component, Page2Component, Page3Component];

  constructor() {

  }

  public ngOnInit(): void {
    this.leftComponent = Page1Component;
    this.rightComponent = Page2Component;
  }

  public ChangeRightComponent(): void
  {
    this.rightComponent = AppComponent.Components[getRandomInt(0, AppComponent.Components.length - 1)];
  }

  public ChangeLeftComponent(): void
  {
    this.leftComponent = AppComponent.Components[getRandomInt(0, AppComponent.Components.length - 1)];
  }
}
