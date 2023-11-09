import { Component, OnInit } from '@angular/core';
import { FootballService } from "../football.service";

@Component({
  selector: 'app-country-navigation',
  templateUrl: './country-navigation.component.html',
  styleUrls: ['./country-navigation.component.css']
})
export class CountryNavigationComponent implements OnInit {
  countries: string[] = []

  constructor(private footballService: FootballService) {
  }

  ngOnInit(): void {
    this.countries = this.footballService.getCountries();
  }
}
