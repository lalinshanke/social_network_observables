import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubComment2Component } from './sub-comment2.component';

describe('SubComment2Component', () => {
  let component: SubComment2Component;
  let fixture: ComponentFixture<SubComment2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubComment2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubComment2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
