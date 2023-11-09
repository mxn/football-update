import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryNavigationComponent } from './country-navigation.component';
import { HttpClientModule } from "@angular/common/http";
import { NgOptimizedImage } from "@angular/common";
import { RoutingModule } from "../routing/routing.module";

describe('CountryNavigationComponent', () => {
  let component: CountryNavigationComponent;
  let fixture: ComponentFixture<CountryNavigationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, NgOptimizedImage, RoutingModule],
      declarations: [CountryNavigationComponent]
    });
    fixture = TestBed.createComponent(CountryNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
