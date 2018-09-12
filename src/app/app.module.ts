import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MatToolbarModule } from '@angular/material/';
import { MatCardModule } from '@angular/material/card';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NavBarLogoComponent } from './nav-bar-logo/nav-bar-logo.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    NavBarLogoComponent
  ],
  imports: [
    BrowserModule,

    FlexLayoutModule,
    MatToolbarModule,
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
