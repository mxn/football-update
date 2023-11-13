import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { CountryNavigationComponent } from "./country-navigation/country-navigation.component";
import { HttpClientModule } from "@angular/common/http";
import { RoutingModule } from "./routing/routing.module";

describe('AppComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientModule, RoutingModule],
    declarations: [AppComponent, CountryNavigationComponent]
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'FootballCert'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Football Updates');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h2')?.textContent).toContain('FOOTBALL UPDATES');
  });
});
