import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamGameResultsComponent } from './team-game-results.component';
import { HttpClientModule } from "@angular/common/http";
import { RoutingModule } from "../routing/routing.module";
import { NgOptimizedImage } from "@angular/common";

describe('TeamGameResultsComponent', () => {
  let component: TeamGameResultsComponent;
  let fixture: ComponentFixture<TeamGameResultsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, RoutingModule, NgOptimizedImage],
      declarations: [TeamGameResultsComponent]
    });
    fixture = TestBed.createComponent(TeamGameResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
