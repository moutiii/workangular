import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridCoolEffectImageComponent } from './grid-cool-effect-image.component';

describe('GridCoolEffectImageComponent', () => {
  let component: GridCoolEffectImageComponent;
  let fixture: ComponentFixture<GridCoolEffectImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridCoolEffectImageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GridCoolEffectImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
