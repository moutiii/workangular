import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarleyComponent } from './marley.component';

describe('MarleyComponent', () => {
  let component: MarleyComponent;
  let fixture: ComponentFixture<MarleyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarleyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MarleyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
