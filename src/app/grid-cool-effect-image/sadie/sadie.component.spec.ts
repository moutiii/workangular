import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SadieComponent } from './sadie.component';

describe('SadieComponent', () => {
  let component: SadieComponent;
  let fixture: ComponentFixture<SadieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SadieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SadieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
