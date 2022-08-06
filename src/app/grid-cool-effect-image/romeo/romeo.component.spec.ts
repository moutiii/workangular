import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RomeoComponent } from './romeo.component';

describe('RomeoComponent', () => {
  let component: RomeoComponent;
  let fixture: ComponentFixture<RomeoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RomeoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RomeoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
