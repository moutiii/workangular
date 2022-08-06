import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransitionimgComponent } from './transitionimg.component';

describe('TransitionimgComponent', () => {
  let component: TransitionimgComponent;
  let fixture: ComponentFixture<TransitionimgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransitionimgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransitionimgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
