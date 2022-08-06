import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridbootstrapComponent } from './gridbootstrap.component';

describe('GridbootstrapComponent', () => {
  let component: GridbootstrapComponent;
  let fixture: ComponentFixture<GridbootstrapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridbootstrapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GridbootstrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
