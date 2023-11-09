import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamStandingsComponent } from './team-standings.component';
import { HttpClientModule } from "@angular/common/http";
import { RoutingModule } from "../routing/routing.module";
import { NgOptimizedImage } from "@angular/common";

describe('TeamStandingsComponent', () => {
  let component: TeamStandingsComponent;
  let fixture: ComponentFixture<TeamStandingsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, RoutingModule, NgOptimizedImage],
      declarations: [TeamStandingsComponent]
    });
    fixture = TestBed.createComponent(TeamStandingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
