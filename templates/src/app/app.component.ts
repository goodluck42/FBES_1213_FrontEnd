import { Component } from '@angular/core';
import {Input} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title: string = 'templates';
  public isShown: boolean = true;
  public trafficLight: number = 0;
  public trafficLightColor: string = "red";
  public blockName: string = "blockX";

  constructor() {
  }

  public Login(login: string, password: string): void
  {
    console.log(login, password);
  }

  public ToggleShow(): void
  {
    this.isShown = !this.isShown;
  }

  public ChangeLight(): void
  {
    this.trafficLight = (this.trafficLight + 1) % 3;

    if (this.trafficLight == 0)
    {
      this.trafficLightColor = "red";
    }
    else if (this.trafficLight == 1)
    {
      this.trafficLightColor = "yellow";
    } else if (this.trafficLight == 2)
    {
      this.trafficLightColor = "green";
    }
  }
}
