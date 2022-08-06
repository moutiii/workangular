import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselsliderComponent } from './carouselslider.component';

describe('CarouselsliderComponent', () => {
  let component: CarouselsliderComponent;
  let fixture: ComponentFixture<CarouselsliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarouselsliderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselsliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
