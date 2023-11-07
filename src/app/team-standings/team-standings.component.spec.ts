import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamStandingsComponent } from './team-standings.component';

describe('TeamStandingsComponent', () => {
  let component: TeamStandingsComponent;
  let fixture: ComponentFixture<TeamStandingsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
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
