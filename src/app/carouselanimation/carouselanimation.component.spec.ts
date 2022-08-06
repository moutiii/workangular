import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselanimationComponent } from './carouselanimation.component';

describe('CarouselanimationComponent', () => {
  let component: CarouselanimationComponent;
  let fixture: ComponentFixture<CarouselanimationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarouselanimationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselanimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
