import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubComment1Component } from './sub-comment1.component';

describe('SubComment1Component', () => {
  let component: SubComment1Component;
  let fixture: ComponentFixture<SubComment1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubComment1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubComment1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
