import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CountryNavigationComponent } from './country-navigation/country-navigation.component';
import { TeamStandingsComponent } from './team-standings/team-standings.component';
import { RouterOutlet } from "@angular/router";
import { RoutingModule } from "./routing/routing.module";
import { TeamGameResultsComponent } from './team-game-results/team-game-results.component';
import { NgOptimizedImage } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    CountryNavigationComponent,
    TeamStandingsComponent,
    TeamGameResultsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RoutingModule,
    RouterOutlet,
    NgOptimizedImage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
