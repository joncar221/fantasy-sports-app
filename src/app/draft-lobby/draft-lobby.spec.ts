import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DraftLobby } from './draft-lobby';

describe('DraftLobby', () => {
  let component: DraftLobby;
  let fixture: ComponentFixture<DraftLobby>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DraftLobby],
    }).compileComponents();

    fixture = TestBed.createComponent(DraftLobby);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
