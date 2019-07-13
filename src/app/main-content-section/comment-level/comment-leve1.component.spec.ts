import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentLeve1Component } from './comment-leve1.component';

describe('CommentLeve1Component', () => {
  let component: CommentLeve1Component;
  let fixture: ComponentFixture<CommentLeve1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommentLeve1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentLeve1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
