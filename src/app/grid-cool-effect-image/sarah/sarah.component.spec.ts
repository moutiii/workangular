import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SarahComponent } from './sarah.component';

describe('SarahComponent', () => {
  let component: SarahComponent;
  let fixture: ComponentFixture<SarahComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SarahComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SarahComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
