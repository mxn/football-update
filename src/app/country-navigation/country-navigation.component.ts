import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-country-navigation',
  templateUrl: './country-navigation.component.html',
  styleUrls: ['./country-navigation.component.css']
})
export class CountryNavigationComponent {
  countries: string[] = ['England', 'Spain', 'German', 'France', 'Italy'];
  @Output()
  countrySelect: EventEmitter<string> = new EventEmitter<string>();

  sendCountryEvent(event: MouseEvent) {
    let btnId = (event.target as HTMLButtonElement).id;
    console.log(btnId); // TODO
    let country = btnId.slice(0, btnId.length - 'Select'.length);
    this.countrySelect.emit(country);
  }
}
