import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MockDraftLobby } from './mock-draft-lobby';

describe('MockDraftLobby', () => {
  let component: MockDraftLobby;
  let fixture: ComponentFixture<MockDraftLobby>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MockDraftLobby],
    }).compileComponents();

    fixture = TestBed.createComponent(MockDraftLobby);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
