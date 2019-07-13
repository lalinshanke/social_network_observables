import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PollTypeComponent } from './poll-type.component';

describe('PollTypeComponent', () => {
  let component: PollTypeComponent;
  let fixture: ComponentFixture<PollTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PollTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PollTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
