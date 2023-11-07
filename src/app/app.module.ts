import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CountryNavigationComponent } from './country-navigation/country-navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    CountryNavigationComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
