import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RubbaComponent } from './rubba.component';

describe('RubbaComponent', () => {
  let component: RubbaComponent;
  let fixture: ComponentFixture<RubbaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RubbaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RubbaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
