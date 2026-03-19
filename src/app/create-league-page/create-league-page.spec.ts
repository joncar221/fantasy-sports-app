import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateLeaguePage } from './create-league-page';

describe('CreateLeaguePage', () => {
  let component: CreateLeaguePage;
  let fixture: ComponentFixture<CreateLeaguePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateLeaguePage],
    }).compileComponents();

    fixture = TestBed.createComponent(CreateLeaguePage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
