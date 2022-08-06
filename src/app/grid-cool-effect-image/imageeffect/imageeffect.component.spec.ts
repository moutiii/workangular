import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageeffectComponent } from './imageeffect.component';

describe('ImageeffectComponent', () => {
  let component: ImageeffectComponent;
  let fixture: ComponentFixture<ImageeffectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageeffectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageeffectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
