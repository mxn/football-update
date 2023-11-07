import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CountryNavigationComponent } from './country-navigation/country-navigation.component';
import { TeamStandingsComponent } from './team-standings/team-standings.component';

@NgModule({
  declarations: [
    AppComponent,
    CountryNavigationComponent,
    TeamStandingsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
