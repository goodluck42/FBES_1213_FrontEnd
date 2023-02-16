import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {Page1Component} from "../page1/page1.component";
import {Page2Component} from "../page2/page2.component";
import {Page3Component} from "../page3/page3.component";
import {RouterModule, RouterOutlet, Route} from "@angular/router";

let routes: Route[] = [
  {
    path: "app/page1",
    component: Page1Component,
    title: "Page1"
  },
  {
    path: "app/page2",
    component: Page2Component,
    title: "Page2"
  },
  {
    path: "app/page3",
    component: Page3Component,
    title: "page3"
  }
];

@NgModule({
  declarations: [
    AppComponent,
    Page1Component,
    Page2Component,
    Page3Component,
  ],
  imports: [
    BrowserModule,
    RouterOutlet,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
