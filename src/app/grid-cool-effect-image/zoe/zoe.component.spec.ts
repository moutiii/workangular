import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZoeComponent } from './zoe.component';

describe('ZoeComponent', () => {
  let component: ZoeComponent;
  let fixture: ComponentFixture<ZoeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZoeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ZoeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
