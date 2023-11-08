import { Component } from '@angular/core';

@Component({
  selector: 'app-country-navigation',
  templateUrl: './country-navigation.component.html',
  styleUrls: ['./country-navigation.component.css']
})
export class CountryNavigationComponent {
  countries: string[] = ['England', 'Spain', 'German', 'France', 'Italy'];
}
