import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavBarComponent } from './navbar/navbar.component';
import { JumbotranComponent } from './jumbotran/jumbotran.component';
import { HomeComponent } from './pages/home.component';
import { AboutComponent } from './pages/about.component';
import {routing} from './app.routing';

@NgModule({
  declarations: [AppComponent, NavBarComponent,JumbotranComponent, HomeComponent,AboutComponent ],
  imports: [BrowserModule, routing],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
